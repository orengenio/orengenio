# Auth production setup — `app.orengen.io` + self-hosted Supabase

This is the runbook for getting magic-link and Google sign-in working on
production. The Next.js app code is already correct; the broken pieces
are in the **self-hosted Supabase stack** and the **Google OAuth client**.

If you've just reset the Supabase stack or rotated keys, work through this
top-to-bottom. Each section ends with a verification step you can do from
your phone.

---

## Symptoms this fixes

| Symptom | Where it comes from |
|---|---|
| Magic-link email points to `http://supabase-kong:8000/...` and shows `DNS_PROBE_FINISHED_NXDOMAIN` on click | GoTrue `SITE_URL` is set to the Docker internal hostname instead of `https://app.orengen.io`. |
| Google sign-in shows `Error 400: redirect_uri_mismatch` | Production callback URI is not registered on the Google OAuth client. |
| Sign-in works on localhost but not production | `API_EXTERNAL_URL` on GoTrue is wrong, OR Google OAuth provider in Supabase Studio has stale keys. |

---

## 1. Fix Supabase GoTrue env (fixes the magic-link link)

Open **Coolify → your Supabase stack → the `supabase-auth` (GoTrue)
container → Environment**. Set / replace:

```env
# Public URL of the CRM. This is the base used in magic-link emails.
GOTRUE_SITE_URL=https://app.orengen.io

# Allowed redirect targets (covers the apex + every tenant subdomain).
GOTRUE_URI_ALLOW_LIST=https://app.orengen.io,https://app.orengen.io/**,https://*.app.orengen.io,https://*.app.orengen.io/**

# Public URL of Supabase Auth itself. Used as the OAuth callback base.
API_EXTERNAL_URL=https://supacrm.orengen.io

# Email confirmation must stay on. (Default in self-hosted is on; verify.)
GOTRUE_MAILER_AUTOCONFIRM=false
```

Save and restart the `supabase-auth` container (Coolify → Restart).

> **Note on the variable names.** Some self-hosted Supabase setups use the
> short forms (`SITE_URL`, `URI_ALLOW_LIST`) and let the `supabase-auth`
> entrypoint map them onto `GOTRUE_*`. The long `GOTRUE_*` names always
> work — use them if you're not sure which variant your image expects.

### Verify

From your phone, go to `https://app.orengen.io/login`, type any email,
hit **Send magic link**, and open the email. The big "Confirm your
email" link should now start with `https://app.orengen.io/auth/callback`
— not `http://supabase-kong:8000/...`.

---

## 2. Fix Google OAuth client (fixes `redirect_uri_mismatch`)

1. **Google Cloud Console → APIs & Services → Credentials → your OAuth
   2.0 Client ID** (the one you use for OrenGen).
2. Under **Authorized JavaScript origins**, add:
   - `https://app.orengen.io`
   - `https://supacrm.orengen.io`
3. Under **Authorized redirect URIs**, add:
   - `https://supacrm.orengen.io/auth/v1/callback`

   This is the URL Supabase's Auth service uses, not the Next.js app.
   With self-hosted Supabase, Google calls back into Supabase first;
   Supabase then issues a session and redirects to your Next.js app.

4. Save. Changes take effect within a minute, sometimes a few.

### Re-paste the keys into Supabase Studio

Go to **Supabase Studio (`https://supacrm.orengen.io`) → Authentication
→ Providers → Google**:

- **Client ID** = the same Client ID from Google Console
- **Client Secret** = the same Client Secret from Google Console
- **Enabled** = on
- Save.

### Verify

From your phone, go to `https://app.orengen.io/login` → **Continue with
Google** → pick `sales@orengen.io` → you should land on `/dashboard`. If
you see `redirect_uri_mismatch`, double-check the redirect URI in
Google Console matches `https://supacrm.orengen.io/auth/v1/callback`
exactly (no trailing slash, https not http).

---

## 3. Sanity checklist

After both fixes, confirm:

- [ ] `https://app.orengen.io` no longer mentions Supabase, Postgres, RLS,
      Twilio, Vapi, CrewAI, or subdomain routing on any public surface.
- [ ] Magic-link email link starts with `https://app.orengen.io/...`.
- [ ] Google sign-in completes and lands on `/dashboard`.
- [ ] `/auth/callback` errors render as friendly copy ("Your sign-in
      link expired or was already used"), not as raw Supabase errors.
- [ ] `https://app.orengen.io/robots.txt` returns `Disallow: /`.

---

## 4. Common follow-ups

### Magic link works but lands on a 404

Check that the `next` parameter on `/auth/callback?code=...&next=...` is
a relative path. The Next.js `auth/callback/route.ts` defaults to
`/dashboard` when `next` is missing. If you intentionally pass `next`
from a deep-link, make sure it starts with `/`.

### "Email rate limit exceeded"

GoTrue's per-email throttle is 60 seconds by default. Wait, then retry.
Tunable via `GOTRUE_RATE_LIMIT_EMAIL_SENT` if you need to lift it for
testing — leave the default in production.

### Google sign-in works but creates a new tenant every time

That's a Phase-2 tenant-routing issue, not an auth issue. The Auth
container is doing its job. Check `crm/src/lib/tenant.ts` and the
subdomain routing in `crm/src/proxy.ts`.
