# OrenGen Operations Runbook

Day-2 operations for everything in [ARCHITECTURE.md](./ARCHITECTURE.md).

> Pair this file with the `OrenGen CRM` Coolify project at
> `https://backoffice.orengen.io/project/fmr82bdgx1r82n8wh84jurck`.

---

## 1. Coolify resources at a glance

| Resource UUID                       | Name                          | FQDN                                | Build pack | Branch |
| ----------------------------------- | ----------------------------- | ----------------------------------- | ---------- | ------ |
| `nskuj6qgqpmj8006g18cl7md`          | `orengen-crm`                 | `https://app.orengen.io`            | dockerfile | main   |
| `ukylwi6ezj6w0er9ziwwcgvc`          | `orengen-master-frontend`     | `https://orengen.io`                | nixpacks   | main   |
| `p51oqzi7qhzezi4ihddzqzcf`          | `orengen-sitebuild`           | `https://sitebuild.orengen.io`      | dockerfile | main   |
| `cru6k6ym5ybz17l13c4hjvc4` (svc)    | `ERPNext`                     | `https://admin.orengen.io`          | compose    | (image) |
| `xjtk4188owl6fczcxdhhajxp` (svc)    | `supacrm.orengen.io`          | `https://supacrm.orengen.io`        | compose    | (image) |

The full list lives in Coolify under the various OrenGen projects.

---

## 2. Trigger a deploy via API

```bash
COOLIFY_TOKEN=...                # rotate every 90 days
COOLIFY_BASE=https://backoffice.orengen.io

curl -sS -H "Authorization: Bearer $COOLIFY_TOKEN" \
  "$COOLIFY_BASE/api/v1/deploy?uuid=<RESOURCE_UUID>&force=true"
```

GitHub webhooks redeploy on every push to `main` automatically; this is only
needed for force redeploys, env-only changes, or rollbacks.

---

## 3. Rotate `INTERNAL_API_TOKEN`

The shared secret between master ↔ CRM ↔ CrewAI ↔ n8n.

1. `openssl rand -hex 32` → new token
2. In Coolify, update the env var on **all** of:
   - `orengen-master-frontend`
   - `orengen-crm`
   - (CrewAI when deployed)
3. Update any n8n credential nodes that reference it
4. Redeploy `orengen-master-frontend` and `orengen-crm` (env-only redeploy)
5. Smoke-test: `POST /api/sms/send` with the new token returns 200; with the
   old token returns 401

The compare uses `crypto.timingSafeEqual`, so deploy ordering doesn't open a
timing window.

---

## 4. Apply a new Supabase / CRM migration

Migrations live in `crm/supabase/migrations/000N_*.sql` (numbered, ascending).

```bash
# preferred: Supabase MCP via Cursor (apply_migration tool)
# alternative:
psql "postgres://postgres:$DB_PASS@<supacrm-db-host>:5432/postgres" \
  -f crm/supabase/migrations/0003_<name>.sql
```

Rules:
- **Never** edit a previously applied migration file. Add a new one.
- Migrations must be idempotent at the column/index level
  (`ADD COLUMN IF NOT EXISTS`, `CREATE INDEX IF NOT EXISTS`).
- After applying, run `crm/scripts/regen-types.ts` (TODO) or manually update
  `crm/src/lib/db/types.ts` to mirror the new schema.

---

## 5. Add a new client (tenant)

Two paths:

**A. Self-serve onboarding** (preferred):
1. Send the prospect to `https://app.orengen.io/onboarding`
2. They sign in (magic link or Google), pick a workspace name, get their slug
3. Their workspace is reachable at `https://<slug>.app.orengen.io` once you add
   the wildcard DNS record below

**B. Concierge onboarding** (when you do it for them):
1. Sign in to `https://app.orengen.io` as an OrenGen owner
2. Settings → Branding to apply per-tenant logo/colors
3. Settings → Members → Invite to send them an invite token
4. Invite link looks like `https://app.orengen.io/invites/<token>`

**DNS wildcard** (one-time):
```
*.app.orengen.io      CNAME    app.orengen.io
```
Required for `<slug>.app.orengen.io` subdomain routing.

---

## 6. Build is failing — first thing to check

| Symptom                                          | Likely cause                              | Fix |
| ------------------------------------------------ | ----------------------------------------- | --- |
| `Cannot find module '@tailwindcss/postcss'`      | NODE_ENV=production stripped devDeps      | `crm/Dockerfile` deps stage already sets `NODE_ENV=development` and `--include=dev`. Rebuild. |
| `failed to compute cache key: "/app/public": not found` | `crm/public/` was empty            | `crm/public/.gitkeep` is committed; check it's in the build context |
| `fatal: protocol '<REDACTED>:https' is not supported` | Coolify trying SSH on a malformed Git URL | Set `git_repository` to `https://github.com/orengenio/orengenio` (HTTPS, no PAT) and the source to public |
| Healthcheck fails: `wget: not found`             | Dockerfile HEALTHCHECK uses wget on a slim image | Remove HEALTHCHECK from Dockerfile; let Traefik probe |
| 200 OK but empty body                            | Container listens on different port than `ports_exposes` | Edit `ports_exposes` AND `traefik.http.services.*.loadbalancer.server.port` in `custom_labels` |
| `Build error: Cannot find module '@/components/ui/card'` from `crm/...` in master build | Master tsconfig isn't excluding `crm/` | `tsconfig.json` excludes `crm/`. Verify the change is on `main`. |

---

## 7. PAT / secret hygiene

- The repo is **public**. Any Coolify Git URL must be plain HTTPS (no PAT).
- We document Coolify apps with leaked PATs in their Git URLs in the [PAT_LEAK
  audit table](#pat-leak-audit-table) below. Rotate them at the next maintenance
  window.

### PAT-leak audit table (as of last audit)

These resources still have PATs embedded in their Git URLs. Cleaning them up
just means: in Coolify → app → Source → set Git URL to `https://github.com/<owner>/<repo>` and choose "Public" as the source type.

| Resource UUID                       | Name                          | Action                          |
| ----------------------------------- | ----------------------------- | ------------------------------- |
| `v1400ps399lzlz8btvpex5un`          | Bimi Forge                    | repoint to `bimiforge` org repo |
| `ptnvce20e34olr48u2do541t`          | Oren Estates                  | repoint, drop PAT               |
| `sjpcnd39wcjtsk4mmdqk8chn`          | OrenDrama                     | repoint, drop PAT               |
| `hgjp4mj9687f9amavxs7lab5`          | OrenGov HQ                    | repoint, drop PAT               |
| `ze8fhivmw2ug39pcz7sg3c9d`          | WeShare                       | repoint, drop PAT               |
| `m7nde02fk11r2nlyza8q3fbq`          | orenre-astro                  | repoint, drop PAT               |
| `o9h7xnwa7h2rhezs7b5pm6hq`          | smartlead-pro                 | repoint, drop PAT               |
| `e68chm3v2cc78y37zkra9myn`          | orenre-api                    | points at deleted personal repo |
| `f2pum2t35agyypamuspkh6xb`          | orenre-payload                | points at deleted personal repo |
| `xs35ykp19lgvejnr037r2die`          | orensymphony                  | points at deleted personal repo |
| `vmpafvd0xdj1339vven71inm`          | orengen-erpnext-image         | broken; recreate as public-repo |

`orengen-master-frontend`, `orengen-sitebuild`, `orengen-crm` were already cleaned in PR #27.

---

## 8. Emergency rollback

If a deploy breaks production:

1. In Coolify → app → Deployments → find the last green deploy → "Redeploy this version"
2. Or: `git revert -m 1 <merge-sha>` on `main` and let Coolify auto-redeploy

The CRM keeps its previous container running until the new one is healthy
(rolling update), so a failed deploy doesn't take down the live site.
