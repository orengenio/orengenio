# OrenGen Sitebuild — Astro + Payload 3.0

Replaces the defunct GrapesJS `sitebuild/` with a proper two-service stack:

| Service | Role | URL |
|---|---|---|
| **Payload CMS** (Next.js 15, Payload 3.0) | Content admin | admin.orengen.io |
| **Astro** | Public frontend | sitebuild.orengen.io |
| Postgres 16 | Shared DB (Payload) | internal |

## Directory layout

```
orengenio/
├── payload-cms/             <- Payload 3.0 app (Next.js + Payload)
│   ├── src/collections/     <- Pages, Media, Users
│   ├── src/payload.config.ts
│   └── Dockerfile
├── sitebuild/               <- Astro frontend
│   ├── src/pages/           <- index.astro + [...slug].astro
│   ├── src/components/Blocks.astro
│   └── Dockerfile
└── platform/sitebuild-stack/
    ├── docker-compose.yml   <- this file — Coolify deploys from here
    ├── env.example
    └── README.md
```

## How Coolify deploys it

Single **Docker Compose** application pointing at `andre-mandel/orengenio` branch `main`, base directory `platform/sitebuild-stack`. Coolify:

1. Reads `docker-compose.yml`
2. Builds images from `../../payload-cms` and `../../sitebuild` (both in the same repo)
3. Uses Traefik labels in the compose to route `admin.orengen.io` → payload:3000 and `sitebuild.orengen.io` → sitebuild:4321
4. Creates persistent volumes `postgres-data` (DB), `payload-media` (uploads)

## Initial deploy runbook

1. Create DNS records in Cloudflare:
   - `admin.orengen.io`  → Coolify host IP
   - `sitebuild.orengen.io` → Coolify host IP (already exists from GrapesJS days)
2. In Coolify, create a new **Application** → **Docker Compose** → **Git** → `andre-mandel/orengenio`, branch `main`, base directory `platform/sitebuild-stack`.
3. Set env vars (see `env.example`):
   - `POSTGRES_PASSWORD` — random 32+ chars
   - `PAYLOAD_SECRET` — random 64 chars (once set, don't rotate)
4. **Deploy**.
5. First deploy runs Payload migrations automatically.
6. Open `https://admin.orengen.io/admin` — first-run asks you to create the root user.
7. Create your first `Page` in the admin. Mark it `published`.
8. Visit `https://sitebuild.orengen.io` — page listed.
9. Click the page → rendered with the configured blocks.

## Content model

- **Page**: `title`, `slug`, `status` (draft/published), `meta` (title/description/ogImage), `blocks[]`.
- **Block types**: `hero`, `richtext`, `features`, `cta`.
- **Media**: images with auto-generated thumbnails.

Extend in `payload-cms/src/collections/Pages.ts`. Add new block types and render them in `sitebuild/src/components/Blocks.astro`.

## Local development

```bash
# Terminal 1 - Payload
cd payload-cms
pnpm install
DATABASE_URI=postgres://... PAYLOAD_SECRET=... pnpm dev
# → http://localhost:3000/admin

# Terminal 2 - Astro
cd sitebuild
npm install
PAYLOAD_URL=http://localhost:3000 npm run dev
# → http://localhost:4321
```

## Upgrades

- **Payload**: bump versions in `payload-cms/package.json`. Payload 3.0 auto-runs DB migrations on boot.
- **Astro**: bump in `sitebuild/package.json`. No DB migrations.

## Why this over GrapesJS

GrapesJS was client-only with localStorage — no backend, no persistence, no versioning, no publish pipeline. This stack gives non-technical editors a proper CMS (Payload), a fast public site (Astro), and Git-versioned infra (this repo).
