# OrenGen CrewAI Lead Qualifier

A small FastAPI service that runs a 3-agent CrewAI pipeline against every
inbound lead and returns an ICP score plus ready-to-send outreach copy.

## What it does

`POST /qualify-lead` accepts a captured lead and runs three agents in sequence:

1. **Researcher** — builds a brief on the prospect's company from limited input.
2. **Qualifier** — scores the lead 0-100 against OrenGen's ICP (AI agents,
   voice AI, automation for SMBs and mid-market) and recommends a next action.
3. **Personalizer** — drafts a 3-sentence outreach paragraph plus an A2P 10DLC
   compliant SMS template (<160 chars, includes opt-out language).

The verdict is returned synchronously **and** mirrored to
`N8N_QUALIFIER_RESULT_WEBHOOK` for downstream automation.

If `crewai` itself can't initialize (missing model creds, etc.) the service
falls back to a single Claude call, then a deterministic heuristic — so it
always returns a usable response.

## Required env vars

| Var | Purpose |
|---|---|
| `INTERNAL_API_TOKEN` | Shared secret required as the `X-OrenGen-Token` header on every request |
| `ANTHROPIC_API_KEY` | Used by the Claude-backed research/qualify path |
| `OPENAI_API_KEY` | Optional — read by `crewai` if you wire OpenAI agents |
| `N8N_QUALIFIER_RESULT_WEBHOOK` | Where verdicts are mirrored (best effort) |
| `SERVICE_FQDN_CREWAI_8000` | Coolify-managed public FQDN |

## Deploy to Coolify

1. In Coolify, create a new resource of type **Docker Compose**.
2. Point it at this directory's `docker-compose.yml` (or paste the file
   contents).
3. Coolify will populate `SERVICE_FQDN_CREWAI_8000` automatically. Set the
   remaining env vars in the Coolify UI.
4. Deploy. The container exposes port `8000` internally; Coolify proxies the
   FQDN onto it.
5. Set the resulting URL as `CREWAI_URL` in the Next.js app's environment.

## Local testing

```bash
cd platform/crewai
docker compose up --build
# In another terminal:
curl -sS http://localhost:8000/health
# => {"ok":true}

curl -sS -X POST http://localhost:8000/qualify-lead \
  -H "Content-Type: application/json" \
  -H "X-OrenGen-Token: $INTERNAL_API_TOKEN" \
  -d '{
    "lead_id": "test-1",
    "name": "Jane Smith",
    "email": "jane@acme.com",
    "phone": "+15555550123",
    "company": "Acme Roofing",
    "use_case": "We get 200+ inbound calls per week and miss half of them after hours.",
    "source": "pricing-page"
  }'
```

You should get back a JSON body with `score`, `tier`, `recommended_action`,
`outreach_email`, `sms_template`, and `research_summary`.
