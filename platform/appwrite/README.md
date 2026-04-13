# OrenBase (Appwrite) — self-hosted

Backend-as-a-Service for the OrenGen ecosystem, exposed at <https://appwrite.orengen.io>. Public-facing marketing page lives at [/orenbase](https://orengen.io/orenbase).

## What this directory contains

- `docker-compose.yml` — official Appwrite 1.8.1 compose, with the internal Traefik service stripped (Coolify's edge proxy routes traffic instead).
- `.env.example` — full list of env vars Appwrite consumes. Real values are set in Coolify → Environment Variables, never committed.

## How Coolify deploys this

A **Docker Compose application** in Coolify points at `andre-mandel/orengenio` branch `main`, path `platform/appwrite`. Coolify:

1. Reads `docker-compose.yml`
2. Surfaces every `${VAR}` it finds as a Coolify env var
3. Injects its own Traefik labels on the `appwrite` service for the configured FQDN
4. Creates persistent volumes (`appwrite-uploads`, `appwrite-cache`, `appwrite-config`, `appwrite-certificates`, `appwrite-functions`, `appwrite-sites`, `appwrite-builds`, `appwrite-imports`, `appwrite-mariadb`, `appwrite-redis`)

## Initial deploy runbook

1. **Clean slate** — delete any prior `appwrite` Coolify service and its volumes (done via API on 2026-04-12).
2. In Coolify, create a new **Application** → **Docker Compose** source → **Git repo** `andre-mandel/orengenio`, branch `main`, base directory `platform/appwrite`.
3. Set **Domain** on the `appwrite` service to `https://appwrite.orengen.io` (Coolify REST API cannot set this — UI only).
4. Fill in env vars from `.env.example`. Minimum to boot:
   - `_APP_OPENSSL_KEY_V1` (64-char; reuse prior value)
   - `_APP_DB_USER`, `_APP_DB_PASS`, `_APP_DB_ROOT_PASS` (MariaDB)
   - `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_ROOT_PASSWORD` (same values as above — the MariaDB container reads these)
5. **Deploy**.
6. Wait ~2 min for MariaDB migrations to finish (appwrite-worker-migrations runs once, exits healthy).
7. Smoke check: `curl -I https://appwrite.orengen.io/v1/health` → `200`.
8. Open `https://appwrite.orengen.io` — first-run page asks you to create the root admin.

## Upgrades

Appwrite pins to a specific image tag in the compose (`appwrite/appwrite:1.8.1`). To upgrade:

1. Bump the tag in `docker-compose.yml` on a new branch.
2. Back up the MariaDB volume.
3. Merge + deploy. `appwrite-worker-migrations` runs automatically on boot.
4. Check the [Appwrite breaking-changes changelog](https://github.com/appwrite/appwrite/blob/main/CHANGES.md) for any manual config required.

## Known gotchas

- Coolify one-click template for Appwrite is **stale (1.6)**. Do not use it — this Git-based deploy supersedes it.
- The `_APP_OPENSSL_KEY_V1` is the encryption key for all data at rest. **Never rotate it casually** — old data becomes unrecoverable.
- Internal Traefik removed from compose; Appwrite's *custom domains* feature (per-project DNS) won't work without additional setup. Not used today.
