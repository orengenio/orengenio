# OrenGen Backend — Entity Reference

User-facing reference for every entity in the CRM at `app.orengen.io`. Use
this when writing client-facing docs, training new staff, or onboarding a
client.

---

## Tenant (workspace)

A **tenant** is one client account, perfectly isolated from every other
tenant via Postgres Row-Level Security.

- Created via `/onboarding` (self-serve) or by an OrenGen owner via Settings
- Has a `slug` (used in `<slug>.app.orengen.io`) and a `name` (display)
- Has `branding` (JSON: `{ logo_url, primary_color, accent_color, dark_mode_default }`)
  edited via **Settings → Branding** (owner/admin only)

## Tenant member + role

Every authenticated user has a row in `tenant_members` per workspace they
belong to. Roles:

| Role     | Can do                                                          |
| -------- | --------------------------------------------------------------- |
| `owner`  | Everything, including delete the tenant + manage billing        |
| `admin`  | Manage members, edit pipelines/stages, edit branding            |
| `member` | Read everything in the workspace + write transactional records  |

The tenant creator becomes `owner` automatically (`_tenants_after_insert`
trigger).

## Invite

Token-based invite to a tenant. Created via Settings → Members. Looks like
`https://app.orengen.io/invites/<token>`. Public route — recipient can sign in
(magic link or Google) before or after clicking the link.

## Company

A B2B account. Has `name`, `domain`, `industry`, `size`, `website`, `phone`,
`address_line1/2/city/state/postal_code/country`, `notes`, `tags[]`.

CRUD at `/companies`. Detail page lists associated contacts.

## Contact

A person. Has `first_name`, `last_name`, `email`, `phone`, `title`, `source`,
`notes`, `tags[]`. Can be associated with one company.

CRUD at `/contacts`. Email/phone are searchable.

## Lead

A *prospective* engagement, before it has a value or pipeline stage. Has:

- `source` (e.g. "phone-vapi", "form-orengen-io", "linkedin")
- `status`: `new` → `qualifying` → `qualified` / `lost` / `spam`
- `qualifier_*` fields populated by CrewAI:
  - `qualifier_score` (0–100)
  - `qualifier_tier` (`hot` | `warm` | `cold` | `unqualified`)
  - `qualifier_action` (suggested next step)
  - `qualifier_outreach_email` / `qualifier_sms` (drafts)
  - `qualifier_research` (markdown summary)
- `converted_to_deal_id` — set when a lead becomes a deal

Intake API: `POST /api/intake/lead` (auth: `X-OrenGen-Token`)

## Pipeline + stage

A **pipeline** is a named sequence of **stages** that a deal moves through.
Every tenant gets a default pipeline (6 stages) at creation. Owner/admin can
add more pipelines and edit/reorder/rename stages.

Pipeline admin: `/pipelines` (owner/admin only)

## Deal

A real opportunity with a value. Has:

- `title`, `value_cents` (integer; never use floats), `currency` (default USD)
- `pipeline_id`, `stage_id`, `expected_close`, `owner_user_id`
- Associated `contact_id` and `company_id`
- `status`: `open` | `won` | `lost`

Kanban view at `/deals`. Flat list at `/deals/list`. Drag-and-drop or
click-to-move between stages. Mark won/lost from the detail page.

## Task

A todo item. Has `title`, `description`, `priority`, `due_at`,
`assigned_to_user_id`, `completed_at`, optional links to a contact/company/
deal/lead.

Tasks board at `/tasks` with tabs **My open**, **Team open**, **Completed
(last 30d)**.

## Activity

A timeline event attached to a contact, company, deal, or lead. Has:

- `type`: `note` | `call` | `email` | `sms` | `meeting` | `system`
- `subject`, `body`, `occurred_at`
- `parent_type` + `parent_id` (which entity it's attached to)

Logged via the `<ActivityLogger />` component (embedded on entity detail
pages) or programmatically via `logActivity()`.

---

## API endpoints (cross-service)

| Method + Path                                    | Auth                | Purpose                                           |
| ------------------------------------------------ | ------------------- | ------------------------------------------------- |
| `POST app.orengen.io/api/intake/lead`            | X-OrenGen-Token     | External lead intake (forms, Vapi, n8n, etc.)     |
| `POST orengen.io/api/sms/send`                   | X-OrenGen-Token     | Send outbound SMS via Twilio                      |
| `POST orengen.io/api/sms/inbound`                | X-Twilio-Signature  | Inbound SMS webhook (Twilio)                      |
| `POST orengen.io/api/voice/inbound`              | X-Twilio-Signature  | Inbound voice webhook (Twilio)                    |
| `POST orengen.io/api/voice/vapi-webhook`         | X-Vapi-Signature    | Vapi events (transcripts, status, function calls) |
| `POST orengen.io/api/leads`                      | (public + n8n)      | Marketing form lead capture                       |
| `POST automate.orengen.io/webhook/lead-qualified`| (n8n internal)      | CrewAI verdict callback                           |

All `X-OrenGen-Token` checks use `crypto.timingSafeEqual` (constant-time).
