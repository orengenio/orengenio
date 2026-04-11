# OrenGen Platform Infrastructure

Self-hosted platform configs for Coolify deployment.

## Services

### ERPNext (`platform/erpnext/`)
CRM, billing, client portal at `app.orengen.io`.

- **ERPNext v15** — Frappe framework with ERPNext module
- **MariaDB 10.6** — Primary database
- **Redis** — Cache + queue/socketio

Deploy as a Docker Compose service in Coolify.

### n8n (managed in Coolify)
Workflow automation at `automate.orengen.io`. Already deployed.

## Architecture

```
orengen.io          → Next.js frontend (Coolify, Nixpacks)
app.orengen.io      → ERPNext (Coolify, Docker Compose)
automate.orengen.io → n8n (Coolify, Docker Compose)
```
