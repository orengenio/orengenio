# OrenGen Worldwide — monorepo

Everything OrenGen runs on lives here, behind a small handful of domains.

| URL                                  | What                                            | Folder                  |
| ------------------------------------ | ----------------------------------------------- | ----------------------- |
| `https://orengen.io`                 | Master marketing site + dual-door landing       | `src/`                  |
| `https://app.orengen.io`             | **OrenGen Backend** (multi-tenant client app)   | `crm/`                  |
| `https://admin.orengen.io`           | ERPNext (Frappe v15) full suite                 | `frappe-backend/`, `platform/erpnext/` |
| `https://sitebuild.orengen.io`       | Astro mockup-tool frontend                      | `sitebuild/`            |
| `https://sitebuild-admin.orengen.io` | Payload CMS for sitebuild                       | `payload-cms/`, `platform/sitebuild-stack/` |
| `https://crewai.orengen.io`          | CrewAI lead qualifier (FastAPI) — *not yet deployed* | `platform/crewai/` |

**Start here**: [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) → the system map.

---

## Documentation index

| Doc                                                       | When to read                                              |
| --------------------------------------------------------- | --------------------------------------------------------- |
| [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md)          | Onboarding, system overview, who-talks-to-who             |
| [`docs/OPERATIONS.md`](./docs/OPERATIONS.md)              | Day-2 ops: deploys, rotations, rollbacks                  |
| [`docs/CRM_ENTITIES.md`](./docs/CRM_ENTITIES.md)          | Working with CRM data: tenants, leads, deals, contacts    |
| [`docs/A2P_10DLC_CHECKLIST.md`](./docs/A2P_10DLC_CHECKLIST.md) | Submitting Twilio brand + campaign so SMS delivers     |
| [`docs/SUPABASE_SMTP_SETUP.md`](./docs/SUPABASE_SMTP_SETUP.md) | Wiring MailWizz into Supabase so magic links send      |
| [`docs/VAPI_VOICE_AGENT.md`](./docs/VAPI_VOICE_AGENT.md)  | Provisioning the Vapi inbound voice agent                 |
| [`docs/ERPNEXT_THEME_DEPLOY.md`](./docs/ERPNEXT_THEME_DEPLOY.md) | Shipping the OrenGen Frappe theme to admin.orengen.io |
| [`docs/twilio-setup.md`](./docs/twilio-setup.md)          | Twilio account + number purchase basics                   |
| [`crm/README.md`](./crm/README.md)                        | OrenGen Backend feature reference                         |
| [`crm/docs/PHASE_2_LANES.md`](./crm/docs/PHASE_2_LANES.md) | The parallel-build contract used to ship CRM Phase 2     |
| [`platform/README.md`](./platform/README.md)              | Canonical host map + per-stack pointers                   |

---

## Quick reference

**Master site (orengen.io)**:
```bash
cp .env.example .env.local
npm install
npm run dev          # http://localhost:3000
```

**OrenGen Backend (app.orengen.io)**:
```bash
cd crm
cp .env.example .env.local
npm install
npm run dev          # http://localhost:3000 with the CRM
```

**Sitebuild (sitebuild.orengen.io)**:
```bash
cd sitebuild
npm install
npm run dev
```

---

## What's live as of latest deploy

- ✅ `orengen.io` — dual-door landing (Enterprise / SaaS), `/platform` for the original homepage
- ✅ `app.orengen.io` — OrenGen Backend, all 6 Phase 2 lanes integrated, branded **OrenGen Backend**
- ✅ `sitebuild.orengen.io` — Astro mockup tool (port routing fixed in PR #27)
- ✅ `admin.orengen.io` — ERPNext v15 (stock theme; custom `orengen_theme` deploy is documented in `docs/ERPNEXT_THEME_DEPLOY.md` but not yet shipped)

## What's blocked on user input

- ⏳ Supabase auth email delivery — wire MailWizz SMTP creds (see `docs/SUPABASE_SMTP_SETUP.md`)
- ⏳ Twilio outbound SMS — set `TWILIO_MESSAGING_SERVICE_SID` and `TWILIO_PHONE_NUMBER` in Coolify env on `orengen-master-frontend`
- ⏳ A2P 10DLC submission — manual Twilio Console workflow (see `docs/A2P_10DLC_CHECKLIST.md`)
- ⏳ Vapi voice agent — provision Vapi assistant + Twilio link (see `docs/VAPI_VOICE_AGENT.md`)
- ⏳ CrewAI deployment to `crewai.orengen.io` — Dockerfile exists at `platform/crewai/`; deploy as new Coolify resource

---

## Repository

- **Primary**: [github.com/orengenio/orengenio](https://github.com/orengenio/orengenio) (public)
- **License**: proprietary (OrenGen Worldwide LLC)
- **Issues**: GitHub Issues on the repo above
