# Supabase Auth SMTP + OAuth Setup

Without SMTP, **magic links and invite emails are generated but never
delivered**. This guide wires the self-hosted Supabase at `supacrm.orengen.io`
to a real SMTP relay.

**Coolify service:** `supacrm.orengen.io` — UUID `xjtk4188owl6fczcxdhhajxp`

> Time to complete: ~10 minutes once you have SMTP credentials.

---

## 1. Choose your SMTP provider

### A. Mailcow (recommended for OrenGen)

Use your own Mailcow at `mail.orengen.io` (submission on **587 STARTTLS** or
**465 implicit TLS**). Typical mailbox values:

```
SMTP_HOST            = mail.orengen.io
SMTP_PORT            = 587
SMTP_USER            = welcometeam@orengen.io   (or another mailbox)
SMTP_PASS            = (mailbox password)
SMTP_ADMIN_EMAIL     = same as SMTP_USER (or a no-reply alias you control)
SMTP_SENDER_NAME     = OrenGen
```

### B. MailWizz / ESP relay (legacy)

If you relay through MailWizz or another ESP, use the **underlying SMTP host**
that ESP gives you (hostname, port, user, pass, from address).

---

## 2. Add env vars in Coolify

Coolify → `supacrm.orengen.io` → **Environment Variables** → set/replace:

```
SMTP_HOST            = mail.orengen.io
SMTP_PORT            = 587
SMTP_USER            = (mailbox)
SMTP_PASS            = (password)
SMTP_ADMIN_EMAIL     = (from address)
SMTP_SENDER_NAME     = OrenGen Backend
GOTRUE_SITE_URL      = https://app.orengen.io
ADDITIONAL_REDIRECT_URLS = https://app.orengen.io/auth/callback,https://app.orengen.io/**
GOTRUE_MAILER_AUTOCONFIRM = false
```

The rendered compose maps `GOTRUE_URI_ALLOW_LIST` from `ADDITIONAL_REDIRECT_URLS`
in the stock Supabase template. Keep redirect URLs aligned with the CRM
(`app.orengen.io`).

(Optional duplicate keys some operators set for clarity — GoTrue reads the
`SMTP_*` values injected as `GOTRUE_SMTP_*` in compose anyway:)

```
GOTRUE_SMTP_HOST     = (same as SMTP_HOST)
GOTRUE_SMTP_PORT     = (same as SMTP_PORT)
GOTRUE_SMTP_USER     = (same as SMTP_USER)
GOTRUE_SMTP_PASS     = (same as SMTP_PASS)
GOTRUE_SMTP_ADMIN_EMAIL = (same as SMTP_ADMIN_EMAIL)
GOTRUE_SMTP_SENDER_NAME = (same as SMTP_SENDER_NAME)
```

Restart the Supabase service in Coolify after saving.

---

## 3. DNS / `/etc/hosts` pitfall (very common on self-hosted mail)

If GoTrue logs show:

```
dial tcp 127.0.1.1:587: connect: connection refused
```

then the **Coolify worker or Docker host** has `mail.orengen.io` pinned to
`127.0.1.1` in `/etc/hosts` (often done on the same machine that runs Mailcow).
The GoTrue container inherits that resolution and tries to open SMTP on
localhost — nothing is listening there.

**Fix (preferred):** remove the bad `/etc/hosts` line so `mail.orengen.io`
resolves to your public MX (e.g. `15.204.224.198` via public DNS).

**Fix (alternative):** under the `supabase-auth` service in Docker Compose, add:

```yaml
    extra_hosts:
      - "mail.orengen.io:15.204.224.198"
```

Edit this **only in the Coolify UI** compose editor so the full file stays
valid. Do not paste the **rendered** `docker_compose` (expanded literals) into
`docker_compose_raw` via API — Coolify expects the **template** `docker_compose_raw`
as **base64** on PATCH; using the wrong payload can truncate the stack and leave
the service in `exited`.

---

## 4. Optional: customize the email templates

Coolify → Supabase service → look for these env vars:

```
GOTRUE_MAILER_TEMPLATES_MAGIC_LINK   = https://orengen.io/email-templates/magic-link.html
GOTRUE_MAILER_TEMPLATES_INVITE       = https://orengen.io/email-templates/invite.html
GOTRUE_MAILER_TEMPLATES_RECOVERY     = https://orengen.io/email-templates/recovery.html
GOTRUE_MAILER_SUBJECTS_MAGIC_LINK    = Your OrenGen sign-in link
GOTRUE_MAILER_SUBJECTS_INVITE        = You're invited to {{ .SiteURL }}
```

Templates can use `{{ .ConfirmationURL }}`, `{{ .Email }}`, `{{ .SiteURL }}`,
`{{ .Token }}`, `{{ .TokenHash }}`, `{{ .Data.<custom> }}`. Host them on
`orengen.io` so they're readable by the GoTrue container.

---

## 5. Smoke test

1. Open `https://app.orengen.io/login` in an incognito window
2. Enter a real email address
3. Click "Send magic link"
4. Within ~30 seconds you should receive an email with a link that signs you in
   and redirects to `/dashboard` (or `/onboarding` if you have no workspaces yet)

If no email arrives:

- Check the **supabase-auth** container logs in Coolify for SMTP / TLS errors
- Confirm Mailcow accepts auth from the Supabase server's egress IP
- Check spam — Gmail is aggressive on new senders

---

## 6. Google OAuth (optional, parallel path)

To enable **Continue with Google** on `/login`, set:

```
GOTRUE_EXTERNAL_GOOGLE_ENABLED        = true
GOTRUE_EXTERNAL_GOOGLE_CLIENT_ID      = (Web client ID from Google Cloud Console)
GOTRUE_EXTERNAL_GOOGLE_SECRET         = (Web client secret)
GOTRUE_EXTERNAL_GOOGLE_REDIRECT_URI   = https://supacrm.orengen.io/auth/v1/callback
```

In Google Cloud Console → APIs & Services → Credentials → OAuth 2.0 Client →
**Authorized redirect URIs**, add **exactly**:

`https://supacrm.orengen.io/auth/v1/callback`

If this URI is missing, Google will reject the OAuth handshake even when
Supabase is configured correctly.

Verify Supabase exposes Google after restart:

```bash
curl -sS "https://supacrm.orengen.io/auth/v1/settings" \
  -H "apikey: $NEXT_PUBLIC_SUPABASE_ANON_KEY" | jq .external.google
# expect: true
```

The CRM's `/auth/callback` route exchanges the Supabase `code` and sends users
to `app.orengen.io`.

---

## 7. Recovering a broken Supabase compose in Coolify

If the service shows `exited` after a bad compose edit:

1. Open the service in Coolify → **Deployments / Activity** (or **Rollback** if
   available) and restore the last known-good **Docker Compose** revision.
2. If no rollback exists, redeploy from the official Supabase template for
   Coolify, then **re-paste** the env vars from sections 2 and 6 (they are stored
   separately from compose in Coolify and often survive compose mistakes — but
   confirm each key after a fresh install).
3. **Restart** the service and re-run the smoke test in section 5.
