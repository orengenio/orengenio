# OrenGen Enterprise Infrastructure Audit

**Audit date:** 2026-05-08
**Scope:** `orengen.io` (master Next.js), `app.orengen.io` (CRM Next.js), `admin.orengen.io` (ERPNext), `sitebuild.orengen.io` (Astro), `automate.orengen.io` (n8n), `crewai.orengen.io` (FastAPI/CrewAI), `supacrm.orengen.io` (self-hosted Supabase).

---

## Severity legend

| Severity | Definition |
|---|---|
| **CRIT** | Active production risk — secret leak, RCE, payment loss, data exfil. Fix today. |
| **HIGH** | Significant abuse / cost / availability risk. Fix this week. |
| **MED**  | Best-practice gap that bites at scale. Fix this sprint. |
| **LOW**  | Polish / future-proofing. Fix when convenient. |

---

## Findings

### S — Security

| ID | Sev | Title | Status |
|---|---|---|---|
| **S-1** | HIGH | No security headers on `orengen.io` or `app.orengen.io` | **FIXED** in this commit |
| **S-2** | HIGH | `X-Powered-By: Next.js` header leaked on every response | **FIXED** in this commit |
| **S-3** | MED  | No Content-Security-Policy | **OPEN** — see plan below |
| **S-4** | HIGH | Public POST endpoints had no rate limit (`/api/leads`, `/api/chat`, `/api/signal`) — direct cost / abuse vector against Twilio, Anthropic, ERPNext, n8n | **FIXED** in this commit (`/api/sms/consent` was already limited) |
| **S-5** | MED  | No bot challenge (CAPTCHA / Turnstile) on `/api/leads` and `/api/signal` | **OPEN** |
| **S-6** | LOW  | API routes `console.log` request internals — leaks to container stdout | **OPEN** — replace with structured logger that scrubs PII |
| **S-7** | LOW  | No `eslint-plugin-security` / secret-scan in CI | **OPEN** |

#### S-1 fix detail

`next.config.ts` now sends on every response:

| Header | Value |
|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(self), geolocation=(), payment=(self), interest-cohort=()` (CRM has both `microphone=()` and `payment=()` set to deny) |
| `X-DNS-Prefetch-Control` | `on` (master only) |
| `X-Powered-By` | _stripped_ via `poweredByHeader: false` |

Verify after deploy:

```bash
curl -sSI https://orengen.io/ | grep -iE "^(strict|x-frame|x-content|referrer|permissions|x-powered)"
```

#### S-3 plan (CSP)

Hold on a strict CSP until we run `Content-Security-Policy-Report-Only` for ≥ 7 days on production traffic. The landing page currently mixes:
- inline `<style>` blocks in product pages (orenautomations, orenweb, orensocial, etc.)
- inline JSON-LD `<script>` in `src/app/layout.tsx`
- third-party hosts: `cdn.content360.io`, `cdn.simpleicons.org`, `svgl.app`, `*.googletagmanager.com`, `*.google-analytics.com`, `connect.facebook.net`, `snap.licdn.com`, `api.anthropic.com`, `vapi.ai`

Shipping a strict CSP without that telemetry would break the orb voice agent or an inline page style and we wouldn't know which one. Concrete plan:

1. Add a `Content-Security-Policy-Report-Only` header with a permissive-but-real policy and `report-uri /api/csp-report`.
2. Stand up `/api/csp-report` to log violations.
3. After 7 days clean, promote to `Content-Security-Policy` (enforcing).

#### S-4 fix detail

Three previously-unprotected public POSTs are now rate-limited via the in-process bucket in `src/lib/rate-limit.ts` (already used by `/api/sms/consent`):

| Endpoint | New limit |
|---|---|
| `POST /api/leads` | 5 / IP / minute |
| `POST /api/chat` | 20 / IP / minute (Anthropic burner) |
| `POST /api/signal` | 5 / IP / minute |

All three return `429 Too Many Requests` + `Retry-After: 60` past the cap. The in-process bucket is per-replica; if we ever scale `orengen-master-frontend` past 1 replica, replace with a Redis-backed limiter. Tracked as **S-4a**.

---

### O — Observability

| ID | Sev | Title | Status |
|---|---|---|---|
| **O-1** | HIGH | No error monitoring (Sentry / Datadog / Honeybadger) anywhere — production exceptions are invisible | **OPEN** |
| **O-2** | HIGH | No `/api/health` endpoint — Coolify could not do real liveness/readiness checks | **FIXED** in this commit (`/api/health` on master + CRM) |
| **O-3** | MED  | No structured request logging with request-id correlation | **OPEN** |
| **O-4** | MED  | No uptime monitoring on subdomains (CRM, ERPNext, n8n, CrewAI, Supabase, sitebuild) | **OPEN** — recommend BetterStack or UptimeRobot, 1-min checks |
| **O-5** | LOW  | No RUM (Real User Monitoring) — no Core Web Vitals visibility | **OPEN** — GA4 covers basics; add web-vitals reporter for full LCP/FID/CLS |

#### O-1 recommendation

Pick one: Sentry (most coverage), Datadog APM (best if we go multi-service), or BetterStack Logs (simplest). Sentry SaaS free tier handles our volume. Wire via `@sentry/nextjs` in master + CRM, instrument `instrumentation.ts`, propagate trace headers to `/api/sms/send` cross-service calls.

---

### P — Performance

| ID | Sev | Title | Status |
|---|---|---|---|
| **P-1** | MED  | Zero `<Image>` usage — 20+ raw `<img>` tags in `src/`. No automatic optimization, no responsive `srcset`, no AVIF/WebP, no lazy loading by default. | **OPEN** |
| **P-2** | MED  | External CDN (Content360) is a single point of failure for hero/orb/footer assets. Already burned us once: the orb image referenced a 404'd CDN URL until this commit moved it to `/favicon.png`. | **PARTIALLY FIXED** — orb is now local. Footer payment-icons strip + Testimonials + TechBar still pull from Content360. |
| **P-3** | LOW  | HTML edge cache `s-maxage=31536000` on landing routes — manual cache busts hard, but Next.js build-id cache key means deploys still surface new HTML. Fine for now, document it. | **DOC ONLY** |
| **P-4** | LOW  | `images.remotePatterns` was missing on master `next.config.ts`, which would have blocked any `<img>` → `<Image>` migration | **FIXED** in this commit (`cdn.content360.io`, `cdn.simpleicons.org`, `svgl.app`, `**.orengen.io`) |
| **P-5** | LOW  | No bundle-size budget in CI | **OPEN** |

#### P-1 priority list

When migrating `<img>` → `<Image>` (in order of payoff):
1. `Hero.tsx` — partner logos strip (15 logos × 20×20 each, currently `loading="lazy"` only)
2. `Footer.tsx` — payment-methods strip
3. `Testimonials.tsx` — avatar headshots
4. `TechBar.tsx` — partner row
5. `orenweb/page.tsx` & `orensocial/page.tsx` — hero sections (largest pages)

---

### A — Accessibility

| ID | Sev | Title | Status |
|---|---|---|---|
| **A-1** | LOW | All `<img>` tags have `alt` attributes set (spot-check passed) | OK |
| **A-2** | MED | Floating orb is `role="button" tabIndex={0}` with keyboard handler — passes basic WCAG. Color contrast on burnt-orange CTAs against navy hero passes 4.5:1. | OK |
| **A-3** | MED | No automated a11y check in CI (axe / pa11y / Playwright + axe) | **OPEN** |
| **A-4** | LOW | `prefers-reduced-motion` not respected by all framer-motion animations on `Hero` orb pulse rings | **OPEN** — wrap with `useReducedMotion` |

---

### L — Legal / Compliance

| ID | Sev | Title | Status |
|---|---|---|---|
| **L-1** | OK | All required pages exist: `/privacy-policy`, `/cookie-policy`, `/terms`, `/acceptable-use`, `/refund-policy`, `/copyright-notice`, `/security-overview`, `/trademark-policy`, `/legal-disclaimers`, `/ai-communications-opt-in`, `/ai-sms-opt-in` | OK |
| **L-2** | LOW | No active cookie-consent banner (CCPA / GDPR) — analytics fire on first paint | **OPEN** if EU/CA traffic is non-trivial |
| **L-3** | OK | Twilio A2P 10DLC opt-in routes exist (`/api/sms/consent` with rate limit) | OK |
| **L-4** | LOW | Sitemap missing some routes: `/ai-sms-opt-in`, `/affiliate-program`, `/sales-partner-program`, `/legal-disclaimers`. Minor SEO loss. | **OPEN** |

---

### I — Infrastructure / Deploy

| ID | Sev | Title | Status |
|---|---|---|---|
| **I-1** | HIGH | `orengen.io` was serving an old build with a broken CDN URL (`GLBjK33z…png` 404) inside the AI orb because Coolify did not auto-deploy `963247e` (branding centralization) — manual redeploy required. Root cause: Coolify webhook may not be wired, or autodeploy paused. | **NEEDS USER ACTION** — trigger Coolify redeploy of `orengen-master-frontend`. After this commit lands, the orb won't depend on the CDN URL anyway. |
| **I-2** | LOW | No `images: { remotePatterns }` on master meant `<Image />` migration would have failed silently | **FIXED** |
| **I-3** | OK | Single Coolify project per service, secrets in Coolify env (not in repo). `.env.example` files committed without real values. | OK |
| **I-4** | OK | No `.env`, `.env.local`, etc. tracked by git. Verified with `git ls-files`. | OK |
| **I-5** | OK | No real GitHub PATs / Anthropic / Stripe live keys in git history. Verified with `git log -p` regex sweep. | OK |
| **I-6** | MED | ERPNext orengen_theme deploy still requires manual image rebuild (per `docs/ERPNEXT_THEME_DEPLOY.md`) — the new favicon won't reach `admin.orengen.io` until that runs | **OPEN** — script the rebuild into a Coolify pre-deploy step |
| **I-7** | LOW | CRM `Cache-Control: private, no-cache` is correct for an auth-gated app. Master `s-maxage=31536000` is defensible but should be lowered to `~ 1 hour` once Sentry is wired so we can iterate without surprise. | **OPEN** |

---

### B — Branding

| ID | Sev | Title | Status |
|---|---|---|---|
| **B-1** | HIGH | Hero AI engine orb + floating orb were rendering a 404'd Content360 URL → broken image. | **FIXED** — both orbs now use the local `/favicon.png` (no CDN dep). |
| **B-2** | MED  | Master had `src/app/favicon.ico` left over from `create-next-app` scaffold; it overrode `metadata.icons.icon` (Next.js App Router file-convention). Browser tabs were showing the generic Vercel icon. | **FIXED** in previous commit `d8eeb37` — replaced with multi-size ICO from official 540×540 PNG; same for CRM |
| **B-3** | OK | Logo variants (blue for light bg, white for dark bg) wired correctly across Navbar, Footer, login, Frappe email footer | OK |
| **B-4** | LOW | Frappe `oren_logo.png` bundled asset still references the BLUE logo because the white-logo URL on Content360 returns 404. Re-upload pending. | **NEEDS USER** |

---

## Quick wins shipped this commit

1. Security headers on master + CRM (HSTS, X-Frame, nosniff, Referrer, Permissions, X-DNS-Prefetch).
2. `X-Powered-By` removed.
3. `images.remotePatterns` on master.
4. `/api/health` endpoints on master + CRM.
5. Rate limits on `/api/leads`, `/api/chat`, `/api/signal`.
6. Orb image moved off CDN to local `/favicon.png` (kills B-1 root cause permanently).
7. This audit document.

## Top remaining items, ranked

1. **O-1** — wire Sentry on master + CRM (≈ 30 min once project IDs exist).
2. **I-1** — confirm Coolify webhook is firing on every push to `main`. Without it we ship code that never goes live.
3. **S-3** — start CSP in `Report-Only` mode this week.
4. **S-5** — Cloudflare Turnstile in front of `/api/leads` and `/api/signal`.
5. **P-1** — `<img>` → `<Image />` migration (top-5 pages).
6. **L-2** — cookie consent banner if EU/CA traffic > 5%.
7. **I-6** — automate ERPNext theme image rebuild.
8. **A-3** — add axe to CI on the master Next app.

---

_Re-run this audit after each major release. Last check: 2026-05-08._
