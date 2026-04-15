"""Lead-qualifier crew: researcher -> qualifier -> personalizer.

This module is intentionally defensive: CrewAI's API surface changes between
minor versions and we may run inside environments without LLM credentials.
We try to import and use crewai's `Agent`/`Task`/`Crew` primitives; if that
fails for any reason at runtime we fall back to a deterministic pipeline
built on direct Anthropic calls so the FastAPI service never 5xx's purely
because the orchestrator had a bad day.
"""
from __future__ import annotations

import json
import logging
import re
from dataclasses import dataclass
from typing import Any

from app.crews.tools import AnthropicError, call_claude, web_search_stub

log = logging.getLogger("crewai.lead_qualifier")


@dataclass
class LeadInput:
    lead_id: str
    name: str
    email: str
    phone: str
    company: str
    use_case: str
    source: str


RESEARCHER_BACKSTORY = (
    "Senior B2B sales researcher who finds company info from limited input."
)
QUALIFIER_BACKSTORY = (
    "ICP scorer for OrenGen (we sell AI agents, voice AI, automation to SMBs and mid-market)."
)
PERSONALIZER_BACKSTORY = (
    "Outreach copywriter. Writes a 3-sentence custom outreach paragraph and a "
    "compliant SMS template (under 160 chars, A2P 10DLC compliant)."
)


def _tier_from_score(score: int) -> str:
    if score >= 80:
        return "hot"
    if score >= 60:
        return "warm"
    if score >= 40:
        return "nurture"
    return "cold"


def _truncate(text: str, limit: int) -> str:
    text = (text or "").strip()
    if len(text) <= limit:
        return text
    return text[: limit - 1].rstrip() + "\u2026"


def _extract_json(text: str) -> dict[str, Any] | None:
    """Best-effort JSON extraction from an LLM response."""
    if not text:
        return None
    # Strip ```json fences if present.
    fence = re.search(r"```(?:json)?\s*(\{.*?\})\s*```", text, re.DOTALL)
    candidate = fence.group(1) if fence else None
    if candidate is None:
        # Fall back to the first {...} block.
        brace = re.search(r"\{.*\}", text, re.DOTALL)
        candidate = brace.group(0) if brace else None
    if not candidate:
        return None
    try:
        return json.loads(candidate)
    except json.JSONDecodeError:
        return None


def _heuristic_qualify(lead: LeadInput, research: str) -> dict[str, Any]:
    """Deterministic fallback when no LLM is available."""
    score = 40
    if lead.company:
        score += 15
    if lead.use_case:
        score += 15
    if lead.source and lead.source.lower() in {"referral", "demo-request", "pricing"}:
        score += 15
    if lead.phone:
        score += 5
    score = max(0, min(100, score))
    tier = _tier_from_score(score)
    sms = _truncate(
        f"Hi {lead.name.split()[0] if lead.name else 'there'}, OrenGen here re: your AI inquiry. "
        "Reply STOP to opt out. OK to send a 10-min walkthrough?",
        160,
    )
    outreach = (
        f"Hi {lead.name or 'there'}, thanks for reaching out about {lead.use_case or 'AI automation'}. "
        f"At OrenGen we help {lead.company or 'teams like yours'} deploy multilingual voice and chat "
        "agents that handle qualification, booking, and follow-up end to end. Happy to share a short "
        "Loom tailored to your stack if useful."
    )
    return {
        "score": score,
        "tier": tier,
        "recommended_action": "Book a 20-min discovery call." if tier in {"hot", "warm"} else "Add to nurture sequence.",
        "outreach_email": outreach,
        "sms_template": sms,
        "research_summary": research,
    }


def _llm_qualify(lead: LeadInput, research: str) -> dict[str, Any]:
    """Single Claude call that performs qualification + personalization."""
    system = (
        "You are part of OrenGen's lead-qualification crew. OrenGen sells AI agents, "
        "voice AI (Buy-Lingual), and end-to-end automation to SMBs and mid-market. "
        "Always respond with strict JSON only \u2014 no prose, no code fences."
    )
    prompt = f"""Score the following lead against OrenGen's ICP and produce outreach.

Lead:
  name: {lead.name}
  email: {lead.email}
  phone: {lead.phone}
  company: {lead.company}
  use_case: {lead.use_case}
  source: {lead.source}

Researcher briefing:
\"\"\"{research}\"\"\"

Return JSON with EXACTLY these keys:
  score (integer 0-100, ICP fit),
  tier (one of: hot, warm, nurture, cold),
  recommended_action (string, <= 200 chars),
  outreach_email (string, exactly 3 sentences, personalized to the lead),
  sms_template (string, <= 160 chars, A2P 10DLC compliant: include a clear opt-out
                like 'Reply STOP to opt out' and identify the sender as OrenGen).
"""

    raw = call_claude(prompt, system=system, max_tokens=900, temperature=0.5)
    parsed = _extract_json(raw)
    if not parsed:
        log.warning("LLM did not return JSON; falling back. raw=%s", raw[:300])
        return _heuristic_qualify(lead, research)

    try:
        score = int(parsed.get("score", 0))
    except (TypeError, ValueError):
        score = 0
    score = max(0, min(100, score))
    tier = str(parsed.get("tier") or _tier_from_score(score)).lower()
    if tier not in {"hot", "warm", "nurture", "cold"}:
        tier = _tier_from_score(score)

    return {
        "score": score,
        "tier": tier,
        "recommended_action": _truncate(str(parsed.get("recommended_action", "")), 250),
        "outreach_email": str(parsed.get("outreach_email", "")).strip(),
        "sms_template": _truncate(str(parsed.get("sms_template", "")), 160),
        "research_summary": research,
    }


def _try_crewai_pipeline(lead: LeadInput) -> dict[str, Any] | None:
    """Attempt the canonical CrewAI orchestration. Returns None on failure
    so callers can fall back to the lighter direct-LLM path."""
    try:
        from crewai import Agent, Crew, Process, Task  # type: ignore
    except Exception as exc:  # noqa: BLE001
        log.info("crewai not importable, using direct path: %s", exc)
        return None

    try:
        researcher = Agent(
            role="Lead Researcher",
            goal="Build a concise company briefing from limited input.",
            backstory=RESEARCHER_BACKSTORY,
            allow_delegation=False,
            verbose=False,
        )
        qualifier = Agent(
            role="ICP Qualifier",
            goal="Score the lead 0-100 against OrenGen's ICP and recommend a next action.",
            backstory=QUALIFIER_BACKSTORY,
            allow_delegation=False,
            verbose=False,
        )
        personalizer = Agent(
            role="Outreach Personalizer",
            goal="Write a 3-sentence outreach paragraph and a compliant SMS template.",
            backstory=PERSONALIZER_BACKSTORY,
            allow_delegation=False,
            verbose=False,
        )

        research_brief = web_search_stub(lead.company, lead.use_case)

        research_task = Task(
            description=(
                f"Use this seed briefing to write a 4-sentence research summary of "
                f"{lead.company or 'the prospect'}.\n\nSeed:\n{research_brief}"
            ),
            expected_output="A 4-sentence research summary as plain text.",
            agent=researcher,
        )
        qualify_task = Task(
            description=(
                "Score this lead 0-100 against OrenGen's ICP. Output JSON with keys: "
                "score, tier (hot/warm/nurture/cold), recommended_action.\n\n"
                f"Lead use case: {lead.use_case}\nSource: {lead.source}\n"
                f"Company: {lead.company}\n"
            ),
            expected_output="Strict JSON object as described.",
            agent=qualifier,
            context=[research_task],
        )
        personalize_task = Task(
            description=(
                "Write a 3-sentence outreach_email tailored to this lead, plus a "
                "sms_template under 160 chars that is A2P 10DLC compliant (identify "
                "OrenGen, include 'Reply STOP to opt out'). Output JSON with keys "
                "outreach_email and sms_template."
            ),
            expected_output="Strict JSON object as described.",
            agent=personalizer,
            context=[research_task, qualify_task],
        )

        crew = Crew(
            agents=[researcher, qualifier, personalizer],
            tasks=[research_task, qualify_task, personalize_task],
            process=Process.sequential,
            verbose=False,
        )
        result = crew.kickoff(inputs={"lead": lead.__dict__})
        text = str(result)
        parsed = _extract_json(text) or {}

        return {
            "score": int(parsed.get("score", 60)) if isinstance(parsed.get("score"), (int, float, str)) else 60,
            "tier": str(parsed.get("tier", "warm")).lower(),
            "recommended_action": _truncate(
                str(parsed.get("recommended_action", "Book a 20-min discovery call.")), 250
            ),
            "outreach_email": str(parsed.get("outreach_email", text)).strip(),
            "sms_template": _truncate(
                str(parsed.get("sms_template", "Hi from OrenGen. Reply STOP to opt out.")), 160
            ),
            "research_summary": research_brief,
        }
    except Exception as exc:  # noqa: BLE001
        log.warning("crewai pipeline failed, falling back: %s", exc)
        return None


def run_lead_qualifier(lead: LeadInput) -> dict[str, Any]:
    """Public entry point. Returns a dict matching QualifyLeadResponse (minus lead_id)."""
    # 1. Always start with the research brief — works with or without LLM creds.
    research = web_search_stub(lead.company, lead.use_case)

    # 2. Try the canonical CrewAI orchestration.
    crewai_result = _try_crewai_pipeline(lead)
    if crewai_result is not None:
        # Make sure the research_summary is populated from our deterministic path
        # if the crew didn't echo one back.
        if not crewai_result.get("research_summary"):
            crewai_result["research_summary"] = research
        return crewai_result

    # 3. Fall back to a single Claude call doing qualify + personalize.
    try:
        return _llm_qualify(lead, research)
    except AnthropicError as exc:
        log.warning("anthropic call failed, using heuristic: %s", exc)
        return _heuristic_qualify(lead, research)
