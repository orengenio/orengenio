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

Because this directory sits inside a private GitHub repo, Coolify needs a way
to clone it. Pick **one** of the three paths below.

### Option A — GitHub Deploy Key (recommended, one-time setup)

1. In **Coolify → Projects → OrenGen → Resources → New → Private Repository
   (with deploy key)**, create the resource and let Coolify generate a new
   ed25519 key pair. Copy the shown public key.
2. In **GitHub → `andre-mandel/orengenio` → Settings → Deploy keys → Add
   deploy key**, paste the public key. Check **Allow write access** is OFF
   (read-only is fine). Save.
3. Back in Coolify, finish the "new resource" flow:
   - Repository: `git@github.com:andre-mandel/orengenio.git`
   - Branch: `main`
   - Build Pack: **Docker Compose**
   - Base Directory: `/platform/crewai`
   - Docker Compose Location: `/docker-compose.yml`
   - Ports Exposes: `8000`
4. On the resource's **Environment Variables** tab set:
   - `ANTHROPIC_API_KEY` (required)
   - `INTERNAL_API_TOKEN` (shared with the Next.js app)
   - `N8N_QUALIFIER_RESULT_WEBHOOK`
   - `OPENAI_API_KEY` (optional)
   - `LOG_LEVEL=INFO`
   Coolify auto-provides `SERVICE_FQDN_CREWAI_8000`; set its Domain to
   `https://crewai.orengen.io` in the UI's "Domains" section.
5. **Deploy**. First build takes ~5 min (pip install is heavy).
6. Set `CREWAI_URL=https://crewai.orengen.io` in the Next.js app's env vars
   and redeploy the marketing site.

### Option B — GitHub App

If OrenGen already has a GitHub App installed on `andre-mandel/orengenio`,
register it under **Coolify → Sources → New → GitHub App**, then create the
resource via **Private Repository (with GitHub App)** and follow the same
steps as Option A from step 3.

### Option C — Pre-built image

Build and push the image somewhere Coolify can pull it from:

```bash
cd platform/crewai
docker build -t ghcr.io/orengen/crewai:latest .
docker push ghcr.io/orengen/crewai:latest
```

Then create a Coolify Docker Compose resource with an inline compose that
just pulls the pre-built image (no `build:` stanza).

### API-only creation note

The Coolify REST API (`/api/v1/applications/*`) currently cannot create a
resource that clones a private repo via PAT-in-URL — `/applications/public`
forces `source_id=0` which causes Coolify to double-prefix `https://github.com/`
at clone time. Deploy-key-based API creation requires a pre-registered private
key in Coolify *and* a matching public key installed as a GitHub deploy key,
which needs the GitHub UI (our fine-grained PAT lacks `administration:write`
scope for `POST /repos/{owner}/{repo}/keys`). Hence the UI-led flow above.

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
