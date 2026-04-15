# OrenGen Platform Infrastructure

Self-hosted platform configs for Coolify deployment.

## Services

### ERPNext (`platform/erpnext/`)
CRM, billing, client portal at `app.orengen.io`.

- **ERPNext v15** — Frappe framework with ERPNext module
- **MariaDB 10.6** — Primary database
- **Redis** — Cache + queue/socketio

### Appwrite (`platform/appwrite/`)
Backend-as-a-Service at `appwrite.orengen.io`.

- **Appwrite 1.6** — Auth, Database, Storage, Functions, Realtime, Messaging
- **MariaDB 10.11** — Primary database
- **Redis 7** — Cache + pub/sub

### n8n (managed in Coolify)
Workflow automation at `automate.orengen.io`. Already deployed.

All services deploy as Docker Compose services in Coolify.

## Architecture

```
orengen.io           → Next.js frontend (Coolify, Nixpacks)
app.orengen.io       → ERPNext (Coolify, Docker Compose)
appwrite.orengen.io  → Appwrite (Coolify, Docker Compose)
automate.orengen.io  → n8n (Coolify, Docker Compose)
```
