# OrenGen CRM — Phase 2 Lanes (parallel build contract)

This is the canonical contract every parallel subagent reads before
writing code. It exists so 6 lanes can build in isolated worktrees
without conflicting and merge cleanly into `release/crm-phase-2`.

## Stack you must use (no substitutions)

- Next.js 16 App Router + React 19 (already in `crm/package.json`)
- Tailwind v4 + DM Sans (already in `crm/src/app/globals.css`)
- `@supabase/ssr` for server, browser, admin clients
  - server: `crm/src/lib/supabase/server.ts` -> `createSupabaseServerClient()`
  - browser: `crm/src/lib/supabase/client.ts` -> `createSupabaseBrowserClient()`
  - admin: `crm/src/lib/supabase/admin.ts` -> `createSupabaseAdminClient()` (server-only, bypasses RLS — use sparingly)
- Server Actions for all mutations (no API routes for CRUD)
- Types from `crm/src/lib/db/types.ts` — DO NOT redefine entity types in lanes
- UI primitives from `crm/src/components/ui/{button,card,input}.tsx` — extend, don't fork
- Auth: every page under `crm/src/app/(app)/` is already auth-gated by `(app)/layout.tsx`

## Database

Phase 2 schema is already live on `https://supacrm.orengen.io` per
`crm/supabase/migrations/0002_phase_2_entities.sql`. RLS enforces
tenant isolation — you do NOT need to add `tenant_id` filters in
queries (they pass automatically), but you DO need to set `tenant_id`
on inserts (RLS rejects rows without it).

Helper for resolving the active tenant in server components:

```ts
const supabase = await createSupabaseServerClient();
const { data: { user } } = await supabase.auth.getUser();
const { data: memberships } = await supabase
  .from("tenant_members")
  .select("tenant_id, role")
  .eq("user_id", user!.id)
  .limit(1);
const tenantId = memberships![0].tenant_id;
```

(A shared `getActiveTenant()` helper lives in
`crm/src/lib/tenant.ts` after Lane 5 lands; until then, each lane
inlines the snippet above.)

## Conventions

- File layout: `crm/src/app/(app)/<resource>/{page.tsx,actions.ts,[id]/page.tsx}`
- Mutations: `"use server"` actions, then `revalidatePath` + `redirect`
- Forms: server actions (no client form libs in Phase 2)
- Errors: `redirect(\`/path?error=\${encodeURIComponent(msg)}\`)` pattern (matches Phase 1)
- Money: ALWAYS store cents (`bigint`), display with a shared `formatMoney(value_cents, currency)` helper (add to `crm/src/lib/format.ts` — Lane 2 owns it)
- Dates: store UTC, display via `toLocaleDateString()` / `toLocaleString()`
- No new packages without justification. Tailwind utility classes only.

## The 6 lanes

| Lane | Owns | Files (exclusive) | Files (shared, additive only) |
|---|---|---|---|
| 1 — Contacts/Companies | Contacts + Companies CRUD UI, search, CSV import | `(app)/contacts/**`, `(app)/companies/**` | `lib/db/types.ts` (read), `lib/format.ts` |
| 2 — Pipeline/Deals | Pipelines, stages, deals, kanban (drag-drop), won/lost | `(app)/deals/**`, `(app)/pipelines/**`, `lib/format.ts` | nav in `(app)/layout.tsx` |
| 3 — Leads | Leads list/detail, intake API route, CrewAI qualifier wiring on insert | `(app)/leads/**`, `app/api/intake/lead/route.ts`, `lib/integrations/crewai.ts` | nav |
| 4 — Activities/Tasks | Unified timeline component, activity logger, tasks board | `(app)/tasks/**`, `components/timeline/**`, `components/activity/**` | usage from lanes 1/2/3 |
| 5 — Tenant infra | Subdomain routing in `proxy.ts`, invite-accept flow, per-tenant branding application, `lib/tenant.ts` `getActiveTenant()` helper | `proxy.ts`, `(app)/invites/[token]/**`, `lib/tenant.ts` | layout reads tenant branding |
| 6 — Master site bridge | `/api/sms/send` on master Next.js + `INTERNAL_API_TOKEN` middleware, CRM-side `lib/integrations/master.ts` SDK | `src/app/api/sms/send/**` (master repo), `crm/src/lib/integrations/master.ts` | none in CRM UI |

## Hard rules to avoid merge conflicts

1. **Never edit `crm/src/lib/db/types.ts`.** It is frozen for Phase 2. New columns require a follow-up migration PR.
2. **Never edit another lane's exclusive files.** If you need a function from another lane, leave a `// TODO(lane-N): wire X here` comment.
3. **Nav additions in `(app)/layout.tsx` are additive only.** Append a `NavLink` in alphabetical order. Don't reorder existing entries.
4. **Shared helpers (`lib/format.ts`, `lib/tenant.ts`) are owned by exactly one lane.** Other lanes import, never modify.
5. **Run `npm run lint && npx tsc --noEmit && npm run build` from `crm/` before pushing.** A lane that doesn't build gets reverted, not merged.

## Branch + PR

- Each lane works on `feat/crm-phase-2-lane-<N>-<slug>`, branched off `feat/crm-phase-2-schema`.
- One PR per lane targeting `release/crm-phase-2` (the integration branch).
- Captain (orchestrator) opens `release/crm-phase-2` -> `main` once all 6 lanes are merged.

## Definition of done per lane

- Build, lint, typecheck all pass
- Every new page has loading + empty states
- Every form has error display
- RLS isolation manually verified (insert under tenant A, read under tenant B = nothing)
- Lane README at `crm/docs/lane-<N>.md` explaining what shipped
