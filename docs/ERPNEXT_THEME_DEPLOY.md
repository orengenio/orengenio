# ERPNext Custom Theme Deploy (`orengen_theme`)

The Frappe app at `frappe-backend/apps/orengen_theme/` contains the OrenGen
brand assets, login page override, and DB-level branding patches. This guide
ships those assets to the live ERPNext at `https://admin.orengen.io`.

> The running ERPNext currently uses the **stock** `frappe/erpnext:v15` image,
> which doesn't include `orengen_theme`. So the brand assets you see at
> `admin.orengen.io/apps` are ERPNext defaults plus whatever was last set via
> Navbar Settings / Website Settings in the ERPNext UI. **Bench-level patches
> in `orengen_theme` only run if the app is installed.**

---

## Why this isn't a 60-second hot-fix

The `orengen_theme` app is **Frappe Python code + static assets**, not a
runtime config. It's installed by:

1. Building a custom Docker image FROM `frappe/erpnext:v15`, COPYing
   `frappe-backend/apps/orengen_theme/` into the image, and running
   `bench get-app /opt/orengen_theme && bench --site admin.orengen.io install-app orengen_theme`
2. Pushing that image to a registry (Docker Hub, ghcr.io, or Coolify's built-in
   image storage)
3. Pointing the ERPNext compose stack at the new image instead of stock
   `frappe/erpnext:v15`
4. Recreating the containers (~5 min downtime depending on volume size)
5. After containers are up: `bench --site admin.orengen.io migrate` runs the
   `v1_set_brand` patch that writes the local asset URLs into Navbar / Website
   Settings

There's no shortcut. Frappe doesn't read uninstalled apps off the host
filesystem at runtime.

---

## The deploy path

### Step 1. Build the custom image

There's already a Dockerfile at `frappe-backend/Dockerfile`. Verify it does:

```dockerfile
FROM frappe/erpnext:v15

USER root
COPY apps/orengen_theme /home/frappe/frappe-bench/apps/orengen_theme
RUN chown -R frappe:frappe /home/frappe/frappe-bench/apps/orengen_theme
USER frappe

WORKDIR /home/frappe/frappe-bench
RUN bench --site admin.orengen.io install-app orengen_theme || true
```

(Adjust if the Dockerfile differs from the above — the key step is bringing
the app folder in and registering it with bench.)

### Step 2. Stand up the build app in Coolify

The previous `orengen-erpnext-image` build app (uuid
`vmpafvd0xdj1339vven71inm`) is broken because of stale source-type metadata.
Recreate it cleanly:

1. Coolify → `OrenGen Worldwide` project → **+ New** → **Public Repository**
2. Git URL: `https://github.com/orengenio/orengenio`
3. Branch: `main`
4. Build pack: **Dockerfile**
5. Base directory: `/frappe-backend`
6. Dockerfile location: `/Dockerfile`
7. **Image only** (no FQDN; this builds the image, not a service)
8. Trigger a build → wait for it to push the image to Coolify's registry

### Step 3. Swap the compose to use the custom image

Coolify → `ERPNext` service (`cru6k6ym5ybz17l13c4hjvc4`) → **Configuration**:

Change every occurrence of:

```yaml
image: 'frappe/erpnext:${ERPNEXT_VERSION:-v15}'
```

to:

```yaml
image: '<your-coolify-registry>/orengen-erpnext:latest'
```

Save → **Restart** the service.

### Step 4. Run the brand-setting patch

```bash
docker exec <backend_container_name> \
  bench --site admin.orengen.io migrate
```

The `v1_set_brand` patch will write `/assets/orengen_theme/images/oren_logo.png`
into Navbar Settings and Website Settings, replacing the external CDN URL
(`https://cdn.content360.io/...`) that's currently rendered.

### Step 5. Verify

```bash
curl -I https://admin.orengen.io/assets/orengen_theme/images/oren_logo.png
# expected: 200 OK, content-type: image/png

curl -s https://admin.orengen.io/apps | grep -o '<img[^>]*oren_logo[^>]*>' | head -1
# expected: <img ... src="/assets/orengen_theme/images/oren_logo.png" ...>
```

If the favicon still points at `cdn.content360.io`, run the patch again:

```bash
docker exec <backend_container_name> \
  bench --site admin.orengen.io execute orengen_theme.patches.v1_set_brand.execute
```

---

## Rollback

If the custom image breaks anything:

1. Coolify → `ERPNext` service → revert `image:` lines back to
   `frappe/erpnext:${ERPNEXT_VERSION:-v15}`
2. Restart the service
3. ERPNext data lives in the `sites:` Docker volume, which is unaffected by the
   image change — no data loss

---

## Why `app.orengen.io` doesn't work as a Frappe site name

The user previously renamed the Frappe site from `app.orengen.io` to
`admin.orengen.io` (see prior chat context). The compose still has
`FRAPPE_SITE_NAME_HEADER=${SITE_NAME:-app.orengen.io}` as a default. Make sure
the actual env var `SITE_NAME=admin.orengen.io` is set in Coolify on the
ERPNext service. The default is misleading and should not be relied on.
