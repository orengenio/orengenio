"""Lightweight Anthropic Messages API client used by the crew tools.

Avoids the official `anthropic` SDK; talks to the REST API via httpx so
the container stays small and we control timeouts/retries explicitly.
"""
from __future__ import annotations

import os
from typing import Any

import httpx

ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages"
ANTHROPIC_VERSION = "2023-06-01"
DEFAULT_MODEL = os.getenv("ANTHROPIC_MODEL", "claude-haiku-4-5")


class AnthropicError(RuntimeError):
    """Raised when the Anthropic API returns a non-2xx response."""


def call_claude(
    prompt: str,
    *,
    system: str | None = None,
    model: str | None = None,
    max_tokens: int = 1024,
    temperature: float = 0.4,
    timeout: float = 30.0,
) -> str:
    """Synchronous one-shot call to Claude. Returns the text of the first content block.

    Raises `AnthropicError` if the API key is missing or the request fails.
    """
    api_key = os.getenv("ANTHROPIC_API_KEY")
    if not api_key:
        raise AnthropicError("ANTHROPIC_API_KEY is not set.")

    payload: dict[str, Any] = {
        "model": model or DEFAULT_MODEL,
        "max_tokens": max_tokens,
        "temperature": temperature,
        "messages": [{"role": "user", "content": prompt}],
    }
    if system:
        payload["system"] = system

    headers = {
        "x-api-key": api_key,
        "anthropic-version": ANTHROPIC_VERSION,
        "content-type": "application/json",
    }

    with httpx.Client(timeout=timeout) as client:
        resp = client.post(ANTHROPIC_API_URL, headers=headers, json=payload)

    if resp.status_code >= 400:
        raise AnthropicError(f"Anthropic returned {resp.status_code}: {resp.text[:500]}")

    data = resp.json()
    blocks = data.get("content") or []
    for block in blocks:
        if block.get("type") == "text":
            return block.get("text", "").strip()
    return ""


def web_search_stub(company: str, use_case: str) -> str:
    """Placeholder research tool.

    When `ANTHROPIC_API_KEY` is set, asks Claude for a brief synthetic
    company profile based on the limited input. When the key is missing
    (or the call fails), returns the use_case verbatim so the agent can
    still proceed end-to-end without external dependencies.
    """
    if not company:
        return use_case or "(no company information provided)"

    if not os.getenv("ANTHROPIC_API_KEY"):
        return f"Company: {company}\nReported use case: {use_case or 'n/a'}"

    prompt = (
        "You are a B2B sales researcher. From the limited input below, write a 4-6 sentence "
        "factual-sounding briefing covering likely industry, company size band, probable buyer "
        "persona, and any obvious automation/AI pain points.\n\n"
        f"Company: {company}\nReported use case: {use_case or 'unknown'}\n"
    )
    try:
        return call_claude(prompt, max_tokens=400, temperature=0.3)
    except AnthropicError:
        return f"Company: {company}\nReported use case: {use_case or 'n/a'}"
