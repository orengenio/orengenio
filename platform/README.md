# OrenGen Platform Infrastructure

Self-hosted platform configs for Coolify deployment.

## Services

### ERPNext (`platform/erpnext/`)
Internal ERP / billing / ops at `admin.orengen.io`.

- **ERPNext v15** — Frappe framework with ERPNext module
- **MariaDB 10.6** — Primary database
- **Redis** — Cache + queue/socketio
- Canonical Frappe `default_site` is `admin.orengen.io` (renamed from
  `app.orengen.io` — see `.cursor/plans/rename_frappe_site_to_admin_*.plan.md`).

### Sitebuild stack (`platform/sitebuild-stack/`)
Astro front + Payload CMS + Postgres for the Sitebuild SaaS.

- `sitebuild.orengen.io` — Astro 5 marketing/preview site (port 4321)
- `sitebuild-admin.orengen.io` — Payload 3 CMS admin (port 3000)
- Postgres 16 — Payload database

### Appwrite (`platform/appwrite/`)
Backend-as-a-Service at `appwrite.orengen.io`.

- **Appwrite 1.8.1** — Auth, Database, Storage, Functions, Realtime, Messaging
- **MariaDB 10.11** — Primary database
- **Redis 7** — Cache + pub/sub

### CrewAI (`platform/crewai/`)
FastAPI lead-qualifier service. Public FQDN provided by Coolify
(`SERVICE_FQDN_CREWAI_8000`); set `CREWAI_URL` in the master Next.js app to
the resulting URL.

### n8n (managed in Coolify)
Workflow automation at `automate.orengen.io`. Already deployed.

All services deploy as Docker Compose services in Coolify.

## Architecture

```
orengen.io                  → Next.js master site (Coolify, Docker)
admin.orengen.io            → ERPNext (Coolify, Docker Compose)
sitebuild.orengen.io        → Astro sitebuild front (Coolify, Docker Compose)
sitebuild-admin.orengen.io  → Payload CMS admin (Coolify, Docker Compose)
appwrite.orengen.io         → Appwrite (Coolify, Docker Compose)
automate.orengen.io         → n8n (Coolify, Docker Compose)
formbricks.orengen.io       → Formbricks (Coolify)
book.orengen.io             → Easy Appointments (Coolify)
app.orengen.io              → Reserved for future client-login CRM
                              (linked from Navbar / OAuth / checkout —
                              do not route any other service here)
```
