"""FastAPI entry point for the OrenGen CrewAI lead-qualifier service."""
from __future__ import annotations

import logging
import os
from typing import Any

import httpx
from fastapi import FastAPI, Header, HTTPException, status
from pydantic import BaseModel, EmailStr, Field

from app.crews.lead_qualifier import LeadInput, run_lead_qualifier

logging.basicConfig(level=os.getenv("LOG_LEVEL", "INFO"))
log = logging.getLogger("crewai")

app = FastAPI(
    title="OrenGen CrewAI",
    description="Lead-qualification crew (researcher -> qualifier -> personalizer).",
    version="0.1.0",
)


class QualifyLeadRequest(BaseModel):
    lead_id: str = Field(..., min_length=1, max_length=128)
    name: str = Field(..., min_length=1, max_length=200)
    email: EmailStr
    phone: str = Field("", max_length=40)
    company: str = Field("", max_length=200)
    use_case: str = Field("", max_length=4000)
    source: str = Field("website", max_length=80)


class QualifyLeadResponse(BaseModel):
    lead_id: str
    score: int
    tier: str
    recommended_action: str
    outreach_email: str
    sms_template: str
    research_summary: str


@app.get("/health")
async def health() -> dict[str, bool]:
    return {"ok": True}


def _check_token(provided: str | None) -> None:
    expected = os.getenv("INTERNAL_API_TOKEN")
    if not expected:
        # Fail closed when the service is misconfigured so we never accept anonymous traffic.
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="INTERNAL_API_TOKEN not configured on server.",
        )
    if not provided or provided != expected:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token.")


async def _post_result_to_n8n(payload: dict[str, Any]) -> None:
    url = os.getenv("N8N_QUALIFIER_RESULT_WEBHOOK")
    if not url:
        return
    try:
        async with httpx.AsyncClient(timeout=10) as client:
            await client.post(url, json=payload)
    except Exception as exc:  # noqa: BLE001 — best effort, never fail the request
        log.warning("n8n forward failed: %s", exc)


@app.post("/qualify-lead", response_model=QualifyLeadResponse)
async def qualify_lead(
    body: QualifyLeadRequest,
    x_orengen_token: str | None = Header(default=None, alias="X-OrenGen-Token"),
) -> QualifyLeadResponse:
    _check_token(x_orengen_token)

    lead = LeadInput(
        lead_id=body.lead_id,
        name=body.name,
        email=str(body.email),
        phone=body.phone,
        company=body.company,
        use_case=body.use_case,
        source=body.source,
    )

    try:
        verdict = run_lead_qualifier(lead)
    except Exception as exc:  # noqa: BLE001
        log.exception("crew failed for lead %s", body.lead_id)
        raise HTTPException(status_code=500, detail=f"crew failed: {exc}") from exc

    response = QualifyLeadResponse(lead_id=body.lead_id, **verdict)

    # Fire-and-forget mirror to n8n. We await briefly with a short timeout so
    # the response still feels synchronous while not blocking on slow n8n.
    await _post_result_to_n8n(response.model_dump())

    return response
