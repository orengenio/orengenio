# Supabase Auth SMTP Setup

Without SMTP, **magic links and invite emails are generated but never
delivered**. This guide wires the self-hosted Supabase at `supacrm.orengen.io`
into your existing MailWizz transactional sender at `orengen.pro`.

> Time to complete: ~10 minutes once you have MailWizz delivery server creds in
> hand.

---

## 1. Get the relay credentials from MailWizz

1. Sign in to MailWizz at `https://orengen.pro/backend`
2. **Servers → Delivery servers → New SMTP delivery server** (or open an
   existing one)
3. Copy these five values:

```
Hostname            (e.g. mail.orengen.pro)
Port                (587 for STARTTLS or 465 for SSL)
Username            (relay user — usually a long random string)
Password            (relay password)
From email          (e.g. no-reply@orengen.pro)
```

If you don't have a delivery server yet, MailWizz can use Postmark / Mailgun /
SES / SendGrid as the underlying transport. Whatever creds your underlying
provider gives you also work directly — it's just SMTP.

---

## 2. Add the SMTP env vars to the Supabase Coolify service

Coolify → `supacrm.orengen.io` (service uuid `xjtk4188owl6fczcxdhhajxp`) →
**Environment Variables** → set/replace:

```
SMTP_HOST            = (hostname from step 1)
SMTP_PORT            = 587
SMTP_USER            = (username from step 1)
SMTP_PASS            = (password from step 1)
SMTP_ADMIN_EMAIL     = no-reply@orengen.pro
SMTP_SENDER_NAME     = OrenGen Backend
GOTRUE_SITE_URL      = https://app.orengen.io
GOTRUE_URI_ALLOW_LIST = https://app.orengen.io/auth/callback,https://*.app.orengen.io/auth/callback
GOTRUE_MAILER_AUTOCONFIRM = false
```

(GoTrue reads the `SMTP_*` vars; the `GOTRUE_SMTP_*` aliases are also valid.
Set both for safety.)

Restart the Supabase service in Coolify after saving.

---

## 3. Optional: customize the email templates

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

## 4. Smoke test

1. Open `https://app.orengen.io/login` in an incognito window
2. Enter a real email address
3. Click "Send magic link"
4. Within ~30 seconds you should receive an email titled "Your OrenGen sign-in
   link" with a link that, when clicked, signs you in and redirects you to
   `/dashboard` (or `/onboarding` if you have no workspaces yet)

If no email arrives:
- Check the GoTrue container logs in Coolify for `smtp` errors
- Check MailWizz delivery server's "Tested" timestamp — try Test Connection
- Check spam — Gmail in particular is aggressive on freshly-warmed senders

---

## 5. Google OAuth (optional, parallel path)

To enable "Continue with Google" on `/login`, also set:

```
GOTRUE_EXTERNAL_GOOGLE_ENABLED       = true
GOTRUE_EXTERNAL_GOOGLE_CLIENT_ID     = (from Google Cloud Console)
GOTRUE_EXTERNAL_GOOGLE_SECRET        = (from Google Cloud Console)
GOTRUE_EXTERNAL_GOOGLE_REDIRECT_URI  = https://supacrm.orengen.io/auth/v1/callback
```

In Google Cloud Console → APIs & Services → Credentials → OAuth 2.0 Client →
**Authorized redirect URIs** add the same `https://supacrm.orengen.io/auth/v1/callback`.

The CRM's `/auth/callback` handles the post-Google redirect to bring users
back to `app.orengen.io/dashboard`.
