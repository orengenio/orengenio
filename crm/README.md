# OrenGen CRM

Multi-tenant CRM at `app.orengen.io`. Built on Next.js 16 + self-hosted Supabase.

## Stack

- **App**: Next.js 16 (App Router, React 19, TypeScript, Tailwind v4)
- **Backend**: self-hosted Supabase at `https://supacrm.orengen.io` (Auth, Postgres, Realtime, Storage)
- **Tenancy**: single Postgres database, `tenant_id`-scoped tables with RLS, subdomain routing per tenant (e.g. `acme.app.orengen.io`)
- **Deploy**: Docker on Coolify

## Local development

```bash
cd crm
cp .env.example .env.local
# fill in NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY / SUPABASE_SERVICE_ROLE_KEY
npm install
npm run dev
```

Open `http://localhost:3000`. Sign up with a magic link — first login auto-creates a tenant.

## Multi-tenancy model

- `public.tenants` — workspace per client.
- `public.tenant_members` — `(tenant_id, user_id, role)` where role is `owner | admin | member`.
- `public.invites` — token-based invite flow.
- RLS policies enforce that only members of a tenant can read/write its data.
- Subdomain `acme.app.orengen.io` resolves `acme` to a tenant via `slug` lookup in `middleware.ts`. The apex `app.orengen.io` shows the chooser / login.

## Production env vars (set in Coolify)

See [`.env.example`](./.env.example).

## Migrations

Database schema is applied via the Supabase MCP server (or `supabase db push` if you set up the CLI). Initial migration: `0001_init_tenants` (tenants, tenant_members, invites, RLS policies, helper functions).
