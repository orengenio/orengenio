# OrenGen Backend (`app.orengen.io`)

Multi-tenant client backend, formerly internally called "CRM". Built on
Next.js 16 + self-hosted Supabase.

> Want the high-level architecture? See [`/docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md).
>
> Want the per-entity reference? See [`/docs/CRM_ENTITIES.md`](../docs/CRM_ENTITIES.md).

---

## Stack

- **App**: Next.js 16 (App Router, React 19, TypeScript, Tailwind v4)
- **Backend**: self-hosted Supabase at `https://supacrm.orengen.io`
  (Auth, Postgres, Realtime, Storage)
- **Tenancy**: single Postgres database, `tenant_id`-scoped tables with RLS,
  subdomain routing per tenant (e.g. `acme.app.orengen.io`)
- **Cross-service auth**: `X-OrenGen-Token` to/from the master site at `orengen.io`
- **Deploy**: Docker (Dockerfile) on Coolify, branch `main`

## Phase 1 — multi-tenant foundation (PR #23)

- `tenants`, `tenant_members`, `invites` tables with RLS
- `is_tenant_member()` + `tenant_role()` SQL helpers
- `_tenants_after_insert` trigger: tenant creator becomes owner automatically
- Magic-link + Google OAuth sign-in flow
- Onboarding: first sign-in lands on `/onboarding` if no memberships
- `BrandMark` + dark theme

## Phase 2 — full functional CRM (PR #27)

| Lane | Scope |
| ---- | ----- |
| 1    | Contacts + Companies CRUD with search, pagination, empty/loading states |
| 2    | Pipelines + Stages admin (owner/admin only) + Deals kanban with native HTML5 drag/drop, list view, won/lost markers |
| 3    | Leads list + detail, manual create, intake API at `/api/intake/lead`, CrewAI qualifier wiring (`runQualifierAndPersist`), convert-to-deal action |
| 4    | Activities + Tasks + reusable `<Timeline />` server component + `<ActivityLogger />` client form |
| 5    | Subdomain routing in `proxy.ts`, `getActiveTenant()` helper, public invite-accept flow at `/invites/[token]`, per-tenant branding settings (logo + colors stored in `tenants.branding`, injected as CSS custom properties via `<TenantBranding />`) |
| 6    | (Master-side) `/api/sms/send` with `requireInternalToken()` helper + `crm/src/lib/integrations/master.ts` SDK |

Each lane was committed as a separate branch (`feat/crm-phase-2-lane-*`) and
integrated into `release/crm-phase-2` for one squashed PR. The build contract
that prevented merge conflicts is documented in
[`./docs/PHASE_2_LANES.md`](./docs/PHASE_2_LANES.md).

## Routes

```
/                          public landing (signs out → marketing)
/login                     magic-link + Google OAuth
/auth/callback             OAuth code exchange
/invites/[token]           accept-invite (public; redirects to /login if not signed in)
/onboarding                first-sign-in workspace creation

/(app)/                    auth-gated routes (everything below):
  /dashboard               summary tiles
  /companies               list + search + paginated
  /companies/new           create
  /companies/[id]          detail + edit + delete + associated contacts
  /contacts                list + search
  /contacts/new            create
  /contacts/[id]           detail + edit + delete
  /leads                   list filtered by status
  /leads/new               manual create
  /leads/[id]              detail + qualifier output + assign + convert + requalify + lost/spam
  /deals                   kanban board grouped by stage
  /deals/list              flat list with filters
  /deals/new               create
  /deals/[id]              detail + edit + mark won/lost
  /pipelines               (owner/admin) list + create
  /pipelines/[id]          (owner/admin) rename + add/edit/reorder/remove stages
  /tasks                   board with My open / Team open / Completed (last 30d)
  /tasks/new               create
  /tasks/[id]              detail + edit + complete/reopen + delete
  /settings                workspace info + members + invites
  /settings/branding       (owner/admin) logo + colors
```

## Local development

```bash
cd crm
cp .env.example .env.local
# fill in NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY
# at minimum
npm install
npm run dev
```

Open `http://localhost:3000`. Sign in with a magic link — first login lands
on `/onboarding` to create your first workspace.

> If magic links don't arrive, your local Supabase doesn't have SMTP wired.
> See [`/docs/SUPABASE_SMTP_SETUP.md`](../docs/SUPABASE_SMTP_SETUP.md).

## Production env vars

See [`.env.example`](./.env.example). At minimum:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_APP_URL
NEXT_PUBLIC_APP_HOST
INTERNAL_API_TOKEN
CREWAI_URL
OREN_MASTER_URL
```

## Migrations

Database schema lives in `supabase/migrations/`. Apply with the Supabase MCP
in Cursor (`apply_migration`) or directly via `psql`:

```bash
psql "postgres://postgres:$DB_PASS@<host>:5432/postgres" -f supabase/migrations/000N_*.sql
```

Existing migrations:

- `0001_init_tenants.sql` — tenants, tenant_members, invites, RLS, helpers, owner-on-create trigger
- `0002_phase_2_entities.sql` — companies, contacts, pipelines, stages, leads, deals, activities, tasks, RLS, indexes, default-pipeline-on-tenant trigger

Never edit a previously-applied migration. Always add a new numbered file.

## Adding a feature without breaking other lanes

If the feature touches more than two files in `crm/src/app/(app)/` or
introduces a new entity, write a lane spec like
[`./docs/PHASE_2_LANES.md`](./docs/PHASE_2_LANES.md) before splitting work.
