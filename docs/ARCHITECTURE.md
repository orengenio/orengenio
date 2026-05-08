# OrenGen Architecture

This document is the **single source of truth** for what runs where, how the
pieces talk to each other, and what to touch when something needs to change.

If you add a service, change a domain, or rotate a credential — update this file
in the same PR.

---

## 1. Domains and what they serve

| URL                                  | Product                          | Stack                                | Coolify resource                |
| ------------------------------------ | -------------------------------- | ------------------------------------ | ------------------------------- |
| `https://orengen.io`                 | Master marketing site + dual-door landing | Next.js 16 (App Router)     | `orengen-master-frontend`       |
| `https://app.orengen.io`             | **OrenGen Backend** (multi-tenant) | Next.js 16 + self-hosted Supabase   | `orengen-crm`                   |
| `https://*.app.orengen.io`           | Tenant subdomain routing         | Same backend, slug-resolved per host | (handled by `orengen-crm` proxy) |
| `https://admin.orengen.io`           | ERPNext (Frappe v15) suite       | `frappe/erpnext:v15` Docker compose  | `ERPNext` (service)             |
| `https://sitebuild.orengen.io`       | Astro mockup tool (frontend only) | Astro SSR                           | `orengen-sitebuild`             |
| `https://sitebuild-admin.orengen.io` | Payload CMS for sitebuild        | Payload 3 on Next.js 15              | `OrenBuild — Client Mockup Tool`|
| `https://supacrm.orengen.io`         | Self-hosted Supabase (Postgres + Auth + Realtime) | Supabase Coolify service | `supacrm.orengen.io`            |
| `https://crewai.orengen.io`          | CrewAI lead-qualifier (FastAPI)  | Python `platform/crewai`             | (deferred — not yet deployed)   |
| `https://automate.orengen.io`        | n8n workflow automation          | n8n Coolify service                  | `Automation with N8N`           |
| `https://appwrite.orengen.io`        | Appwrite BaaS                    | Appwrite Coolify service             | `OrenBase (Appwrite)`           |
| `https://formbricks.orengen.io`      | Formbricks surveys               | formbricks Coolify service           | `formbricks`                    |
| `https://book.orengen.io`            | Easy Appointments                | easyappointments Coolify service     | `easyappointments`              |

**Reserved (not yet wired):**
- `https://orengen.pro` — MailWizz (transactional sender)
- `https://signal.orengen.io` — internal status

---

## 2. Repo layout

```
orengenio/
├── src/                         ← master Next.js (orengen.io)
│   ├── app/api/sms/             ← Twilio SMS webhooks + outbound /send
│   ├── app/api/voice/           ← Twilio voice webhooks
│   ├── app/api/leads/           ← lead capture forwarder
│   └── lib/internalAuth.ts      ← X-OrenGen-Token verifier (cross-service)
├── crm/                         ← OrenGen Backend (app.orengen.io)
│   ├── src/app/(app)/           ← authenticated routes (dashboard, leads, deals, …)
│   ├── src/app/api/intake/lead  ← inbound lead intake (cross-service auth)
│   ├── src/lib/integrations/    ← clients for crewai, master, etc.
│   ├── src/lib/db/types.ts      ← canonical TS types mirroring Supabase schema
│   ├── src/lib/tenant.ts        ← getActiveTenant + subdomain routing
│   └── supabase/migrations/     ← SQL migrations (apply via MCP or psql)
├── sitebuild/                   ← Astro frontend for sitebuild.orengen.io
├── payload-cms/                 ← Payload 3 for sitebuild-admin.orengen.io
├── frappe-backend/              ← custom Frappe app (orengen_theme) — NOT YET DEPLOYED
├── platform/                    ← infra docs + non-Next.js services
│   ├── crewai/                  ← FastAPI lead qualifier
│   ├── erpnext/                 ← ERPNext compose stack
│   ├── appwrite/                ← Appwrite compose stack
│   └── sitebuild-stack/         ← Astro + Payload compose
└── docs/                        ← every README in this folder
```

---

## 3. Cross-service authentication

Every internal service-to-service call uses the same shared secret:

```
X-OrenGen-Token: ${INTERNAL_API_TOKEN}
```

- **Set on**: `orengen-master-frontend`, `orengen-crm`, and (when deployed) `crewai`
- **Verifier**: `src/lib/internalAuth.ts` (master) and `crm/src/app/api/intake/lead/route.ts` (CRM)
- **Comparison**: `crypto.timingSafeEqual` — never `===`
- **Rotation**: rotate the value in all three Coolify resources at once. The token is also referenced in `n8n` flows that hit `/api/sms/send`.

Public auth (end users) goes through Supabase Auth (magic link or Google OAuth).
Internal token auth gates only service-to-service calls.

---

## 4. Data model (CRM / OrenGen Backend)

Postgres on `supacrm.orengen.io`, all tables RLS-enabled, multi-tenant via `tenant_id`.

```
tenants ─┬─ tenant_members ─── auth.users
         ├─ invites
         ├─ companies ─── contacts
         ├─ pipelines ─── stages
         ├─ leads (qualifier_*, → deals on convert)
         ├─ deals
         ├─ activities (parent_type, parent_id)
         └─ tasks
```

- Tenant creator becomes `owner` automatically (`_tenants_after_insert` trigger)
- Default 6-stage sales pipeline auto-seeds for new tenants
- All inserts must set `tenant_id` from the active tenant; RLS policies use
  `is_tenant_member(tenant_id)` and `tenant_role(tenant_id)` SQL helpers
- Migrations live in `crm/supabase/migrations/`. Apply with the Supabase MCP or
  `psql`. Never edit existing migration files — add new ones.

---

## 5. Branching + deploy flow

- `main` is the canonical branch. Coolify auto-deploys every app from `main`.
- Feature work goes on `feat/*` branches → PR → squash-merge into `main`.
- Multi-lane work uses a `release/*` branch as a staging point and a single
  squash-merge PR (see `crm/docs/PHASE_2_LANES.md`).

Coolify wiring (one-time per app):
- Git URL: `https://github.com/orengenio/orengenio` (public; **no PAT in URL**)
- Branch: `main`
- Build pack: `dockerfile`
- Base directory: `/`, `/crm`, `/sitebuild`, `/frappe-backend` per app
- Webhook from GitHub triggers re-deploy automatically

---

## 6. Common operations

| Task                                         | Where                         |
| -------------------------------------------- | ----------------------------- |
| Add a new tenant manually                    | `app.orengen.io/onboarding`   |
| Invite a user to a tenant                    | `app.orengen.io/settings`     |
| Customize a tenant's logo/colors             | `app.orengen.io/settings/branding` |
| Apply a new SQL migration                    | Supabase MCP or `psql` direct |
| Send an SMS from server-side code            | `POST /api/sms/send` on master |
| Capture a lead from a marketing form         | `POST /api/leads` on master OR `POST /api/intake/lead` on CRM |
| Re-qualify a lead with CrewAI                | CRM lead detail → "Re-qualify" |
| Convert a lead into a deal                   | CRM lead detail → "Convert to deal" |
| Rotate `INTERNAL_API_TOKEN`                  | See OPERATIONS.md             |
| Recover from "build is failing"              | See OPERATIONS.md             |

---

## 7. What's NOT live yet

Be honest about gaps so nobody trips on them:

- **CrewAI** is not deployed to `crewai.orengen.io` yet. Lead intake gracefully
  skips qualification when `CREWAI_URL` is unreachable.
- **Twilio SMS** outbound (`/api/sms/send`) is wired but blocked on
  `TWILIO_MESSAGING_SERVICE_SID` (or `TWILIO_PHONE_NUMBER`) being set in Coolify
  env on the master site, AND on A2P 10DLC brand+campaign approval. See
  [docs/A2P_10DLC_CHECKLIST.md](./A2P_10DLC_CHECKLIST.md).
- **Vapi voice agents** are scaffolded in `.env.example` but not yet provisioned
  with an assistant. See `docs/VAPI_VOICE_AGENT.md` once written.
- **ERPNext brand assets** (`oren_logo.png`, `oren_favicon.png`) are committed
  in `frappe-backend/apps/orengen_theme/` but the running ERPNext at
  `admin.orengen.io` uses the stock `frappe/erpnext:v15` image, which does NOT
  load `orengen_theme`. Applying the theme requires building a custom Frappe
  image and swapping it into the compose stack — see
  [docs/ERPNEXT_THEME_DEPLOY.md](./ERPNEXT_THEME_DEPLOY.md).
- **Supabase auth email** (magic links + invite emails) is wired but the
  GoTrue SMTP transport is unconfigured — see
  [docs/SUPABASE_SMTP_SETUP.md](./SUPABASE_SMTP_SETUP.md).
