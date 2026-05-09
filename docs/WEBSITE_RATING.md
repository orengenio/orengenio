# OrenGen Website Rating — Standards Scorecard

**Subject:** `https://orengen.io` (master Next.js 16 marketing site)
**Audit date:** 2026-05-09
**Method:** Live HEAD/GET against production + static analysis of `src/`. Items that require a runtime profiler (Lighthouse field data, WebPageTest, Similarweb) are scored "Needs runtime probe" with the exact command to run.
**Companion doc:** `docs/ENTERPRISE_AUDIT.md` — infrastructure findings (S/O/P/A/L/I/B). This doc rates the **public web surface** against industry rating standards. Severity / fix tracking lives in the audit; ratings live here.

---

## Headline grades

| Dimension | Grade | One-line verdict |
|---|---|---|
| Performance & technical | **B−** | Headers and edge cache are right; image pipeline is the visible drag (0 `<Image/>`, 20+ raw `<img>`, /platform ships 59 of them). |
| Accessibility (WCAG 2.2) | **C+** | Lang set, single H1, alts present, ARIA on the orb. No skip-link, reduced-motion partial, no axe-in-CI. AA likely; AAA no. |
| SEO & discoverability | **A−** | Strong metadata, canonicals, OG/Twitter, JSON-LD Organization, 45-URL sitemap, robots clean. Missing: hreflang (single locale), BreadcrumbList, Article schema on blog. |
| UX & design (Nielsen + HEART) | **B** | Clear IA, two-path entry, consistent dark theme. Missing: visible breadcrumbs, error recovery copy, undo on the KanBuilder, search. |
| Content quality (E-E-A-T) | **B+** | Strong Trust signals (CAGE/UEI, security-overview, full legal kit). Experience + Expertise need named authors / case-study proof. |
| Trust & security | **B+** | 6 of 7 baseline headers present, HSTS preload-eligible, rate limits live, no `X-Powered-By`. CSP still off (Report-Only pending), no Turnstile, no consent banner. |
| Business & traffic | **N/A** | Needs runtime probe (Similarweb, GA4 export, Search Console). |

**Composite (weighted):** **B / B+** — the site reads as enterprise-credible and is correctly wired for SEO and security baselines, but the image pipeline, consent posture, and missing CSP keep it out of A territory.

---

## 1) Performance & technical

### What we measured

| Signal | Evidence | Status |
|---|---|---|
| Edge cache | `cache-control: s-maxage=31536000` on `/` and `/platform` (live curl) | OK — but documented risk in `ENTERPRISE_AUDIT.md` P-3 (manual cache busts hard) |
| HTTP/3 | `alt-svc: h3=":443"; ma=2592000` advertised | OK |
| Powered-by leak | header absent (live curl) | OK |
| Vary | `vary: rsc, next-router-state-tree, …, Accept-Encoding` | OK |
| Image optimization | `grep -rn "from \"next/image\"" src/` → **0 hits**; `grep -rn "<img " src/` → **20 hits** | **GAP** (P-1 in audit) |
| `loading="lazy"` coverage | 4 of 20 raw `<img>` use it | **GAP** |
| Landing payload | `/` HTML = 61,350 bytes; `/platform` HTML = 181,837 bytes with **59 `<img>`** in markup | **/platform is the LCP risk page** |
| Bundle budget | none in CI | **GAP** (P-5) |
| CDN single-point-of-failure | `cdn.content360.io` still serves Footer payment strip, Testimonials, TechBar | **GAP** (P-2) |

### Core Web Vitals (Google) — predicted, not measured

| Metric | Threshold | Predicted on `/platform` | Why |
|---|---|---|---|
| LCP | ≤ 2.5s "Good" | **at risk** | Hero asset is fetched as raw `<img>` from `cdn.content360.io`; no `priority`, no AVIF/WebP negotiation, no responsive `srcset`. |
| INP | ≤ 200ms "Good" | likely Good | Mostly static App Router pages; heavy interactivity isolated to `/orenkanbuilder`. |
| CLS | ≤ 0.1 "Good" | at risk | Raw `<img>` without explicit `width`/`height` attributes in several components — every one is a layout-shift trap. |

### Lighthouse predicted scores — needs runtime probe

| Category | Predicted | Run to confirm |
|---|---|---|
| Performance | 70–85 mobile, 85–95 desktop | `npx lighthouse https://orengen.io/platform --preset=desktop` |
| Accessibility | 88–95 | same, `--only-categories=accessibility` |
| Best Practices | 92–100 | (HSTS + nosniff + no-mixed-content lifts this) |
| SEO | 95–100 | (canonicals, sitemap, robots, meta descriptions all present) |
| PWA | N/A | no manifest, no service worker — fine for a marketing site |

### Action items (in priority order)

1. **P-1**: Migrate top-5 `<img>` to `next/image`: `Hero` partner logos, `Footer` payment strip, `Testimonials` avatars, `TechBar`, `orenweb`+`orensocial` heroes. `images.remotePatterns` is already configured.
2. **P-2**: Self-host the partner / payment / tech logos that currently come from `cdn.content360.io` and `cdn.simpleicons.org` — or proxy them through `next/image` so failures degrade to placeholders.
3. **P-5**: Add a bundle-size budget (e.g. `next-bundle-analyzer` + a CI check that fails when `app/platform` JS payload grows > 10%).
4. **CWV RUM**: ship `web-vitals` reporter to GA4 / Sentry to replace prediction with field data (audit O-5).

---

## 2) Accessibility — WCAG 2.2 / Section 508 / EN 301 549

WCAG 2.2 has 86 success criteria across **Perceivable, Operable, Understandable, Robust** at A/AA/AAA. We cannot certify conformance without an automated + manual sweep, but here is what static analysis sees:

| SC bucket | Evidence | Status |
|---|---|---|
| 1.1.1 Non-text content (A) | `grep alt= src/` → 26 hits across 20 `<img>`; spot-check shows alts present (audit A-1) | Likely OK |
| 1.3.1 Info & relationships (A) | One `<h1>` on `/`, semantic `<header>/<main>/<section>` in `app/page.tsx` | OK |
| 1.4.3 Contrast (AA) | Audit A-2: burnt-orange CTAs on navy hero ≥ 4.5:1 | OK on hero; **untested elsewhere** |
| 2.1.1 Keyboard (A) | Floating orb is `role="button" tabIndex={0}` with keyboard handler | OK on the one component checked |
| 2.4.1 Bypass blocks (A) | `grep -rn "skip" src/components src/app/layout.tsx` → **no skip-link** | **GAP** |
| 2.4.7 Focus visible (AA) | Tailwind `focus-visible:` classes used inconsistently across CTAs | **MIXED** |
| 2.3.3 Animation from interactions (AAA) | `grep useReducedMotion` → **1 hit** in the codebase; orb pulse rings ignore the preference | **GAP** (audit A-4) |
| 3.1.1 Language of page (A) | `<html lang="en">` (live curl) | OK |
| 4.1.2 Name, role, value (A) | 7 `aria-*` attributes across Hero/Navbar/Footer/Orb | Partial |
| 1.4.10 Reflow (AA) / 1.4.12 Spacing (AA) | Tailwind responsive utilities on layout | Likely OK |
| Automated CI gate | none — no axe / pa11y / Playwright-axe (audit A-3) | **GAP** |

**Section 508 (US federal):** 508 incorporates WCAG 2.0 AA. With `<html lang>`, alts, and headers in place, and no SCORM / video / PDF traps, baseline compliance is plausible but uncertified. **EN 301 549 (EU):** same WCAG baseline plus IT-procurement clauses irrelevant to a marketing site.

### Action items

1. Add a skip-link in `src/app/layout.tsx` (`<a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>`) and put `id="main"` on the `<main>` wrapper inside each route.
2. Wrap every framer-motion infinite animation in `useReducedMotion()`; the orb is the loudest offender.
3. Add `pa11y-ci` or `@axe-core/playwright` as a GitHub Action against `npm run start` (audit A-3).
4. Ship a contrast sweep on the gray-on-gray sub-text in `Footer` and `Pricing` — Tailwind `text-neutral-500` on dark grounds frequently fails 4.5:1.

---

## 3) SEO & discoverability

| Signal | Evidence | Status |
|---|---|---|
| Title | `OrenGen Worldwide — Choose Your Infrastructure` (live curl) | OK |
| Meta description | 178 chars, well-targeted (live curl) | OK |
| Canonical | `<link rel="canonical" href="https://orengen.io"/>` (live curl) | OK |
| `metadataBase` | set in `src/app/layout.tsx` | OK |
| OG tags | `og:title`, `og:description`, `og:url`, image (live curl) | OK |
| Twitter Card | `summary_large_image`, `@orengenio` creator | OK |
| JSON-LD Organization | inline `<script type="application/ld+json">` in layout (`Organization`, `sameAs` × 7 socials) | OK |
| JSON-LD coverage | `Organization` only — **no `BreadcrumbList`, no `Article` on blog, no `Product` on `/oren*`, no `FAQPage` on `/faqs`, no `WebSite` with SearchAction** | **GAP** |
| Sitemap | `https://orengen.io/sitemap.xml` → 200, application/xml, **45 `<loc>`** | OK |
| Sitemap completeness | audit L-4: missing `/ai-sms-opt-in`, `/affiliate-program`, `/sales-partner-program`, `/legal-disclaimers` | **GAP** |
| robots.txt | `Allow /`, `Disallow /api/`, sitemap pointed | OK |
| `<html lang>` | `en` | OK |
| hreflang | none | N/A (single locale today; revisit if Buy-Lingual ships landing variants) |
| Per-page metadata | 34 files in `src/app` export `Metadata`; 21 set `alternates`/canonicals | Strong |
| Image alt SEO | 26 `alt=` instances; quality of alt text not auto-graded | Spot-check passed |
| Internal linking | Two-path entry (`/platform`, `/oren*` products), Navbar + Footer dual nav | OK |

**Predicted Lighthouse SEO score:** 95–100.

### Action items

1. Add `BreadcrumbList` JSON-LD on every non-root page (script can derive from pathname).
2. Add `Article` JSON-LD on `/blog/[slug]` — author, datePublished, image, headline. Drives Google News and Discover eligibility.
3. Add `FAQPage` JSON-LD on `/faqs`, `Product`/`SoftwareApplication` on each `/oren*`.
4. Patch sitemap.ts to include the 4 missing routes (audit L-4).
5. Add a `WebSite` + `SearchAction` block once `/blog` has a search.

---

## 4) UX & design — Nielsen heuristics + HEART

### Nielsen's 10

| # | Heuristic | Status | Note |
|---|---|---|---|
| 1 | Visibility of system status | **Mixed** | `LeadForm`/`ChatPanel` show submit state. `KanBuilder` lacks progress on long actions. |
| 2 | Match real-world | OK | Plain-English copy; "Choose Your Infrastructure" is clearer than typical SaaS hero. |
| 3 | User control & freedom | **Gap** | KanBuilder has no Undo/Redo. Multi-step lead form has no Back. |
| 4 | Consistency & standards | OK | Single dark theme, Tailwind tokens, two-button hierarchy. |
| 5 | Error prevention | **Gap** | `LeadForm` validates on submit only; no inline guard for email format. |
| 6 | Recognition over recall | OK | Top-level Navbar + footer matrix expose all products. |
| 7 | Flexibility & efficiency | Partial | No keyboard shortcuts, no command palette. Acceptable for marketing. |
| 8 | Aesthetic & minimalist | OK | Hero is uncluttered; `/` chooser is two cards, not a wall. |
| 9 | Help users recover from errors | **Gap** | No global 404/500 copy reviewed for tone or recovery actions. |
| 10 | Help & documentation | OK | `/faqs`, `/case-studies`, `/security-overview`, `/blog`, `/about` all present. |

### Google HEART

| Pillar | Instrumented? | How to know |
|---|---|---|
| Happiness | No | No NPS / CSAT widget on site. GA4 events insufficient. |
| Engagement | Partial | GA4 + Meta Pixel + LinkedIn Insight load when env IDs present (`Analytics.tsx`). |
| Adoption | Partial | `LeadForm` posts to `/api/leads`; checkout via `/api/checkout`. No funnel events fired. |
| Retention | N/A | Site is acquisition surface; product retention lives in `app.orengen.io`. |
| Task success | No | No event for "got to /pricing → clicked Start" success. |

**SUS (System Usability Scale):** not applicable — SUS needs ≥ 5 real users on tasks. Worth running on `/orenkanbuilder` once it stabilizes.

### Action items

1. Add Undo/Redo to `KanBuilder.tsx` (undo stack of state snapshots).
2. Add inline validation to `LeadForm` (email regex, required-field hint).
3. Stand up a styled `not-found.tsx` and `error.tsx` at the root of `src/app`.
4. Wire GA4 events for `lead_submit`, `checkout_start`, `chat_open`, `orb_message` so HEART has data.

---

## 5) Content quality — E-E-A-T

| Pillar | Evidence | Status |
|---|---|---|
| **Experience** | `/case-studies` exists; depth uncertain without manual review | **Verify** |
| **Expertise** | `/blog` posts authored, but no per-post author bio component spotted | **Gap** |
| **Authoritativeness** | Government identifiers in plain sight on `/` (`CAGE: 12XC1 • UEI: RX16QFYT6YM5`) — strong B2G/enterprise signal | **Strong** |
| **Trustworthiness** | Full legal kit (privacy, cookie, terms, AUP, refund, copyright, security, trademark, legal-disclaimers, AI/SMS opt-in) per audit L-1; HSTS + headers; rate limits | **Strong** |
| Readability | Hero copy short; product pages denser. Not measured. | Run Hemingway / Flesch–Kincaid on `/orenagents`, `/orennexus`. |

### Action items

1. Add `author` + bio to each `/blog/[slug]`. Wire to `Article` JSON-LD.
2. Add a "Verified by" / "Reviewed by" line on cornerstone product pages.
3. Add named, photo'd testimonials (currently `Testimonials.tsx` pulls avatars from CDN — confirm names + companies are real and consented).

---

## 6) Trust & security

### Headers — measured live (`curl -sSI https://orengen.io/`)

| Header | Value | Mozilla Observatory weight |
|---|---|---|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | +20 |
| `X-Frame-Options` | `DENY` | +5 (CSP frame-ancestors would supersede) |
| `X-Content-Type-Options` | `nosniff` | +5 |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | +5 |
| `Permissions-Policy` | `camera=(), microphone=(self), geolocation=(), payment=(self), interest-cohort=()` | +5 |
| `X-DNS-Prefetch-Control` | `on` | informational |
| `X-Powered-By` | absent | +5 |
| **`Content-Security-Policy`** | **absent** | **−25** (the single biggest grade hit) |
| `Cross-Origin-Opener-Policy` | absent | −0 to −5 (low risk for marketing) |
| `Cross-Origin-Resource-Policy` | absent | −0 to −5 |

**Predicted Mozilla Observatory grade:** **B / B+** today (no CSP). With CSP enforce, a clean **A / A+** is reachable.

### App-layer

| Control | Status |
|---|---|
| HTTPS-only, valid cert, HSTS preload-eligible | OK |
| Public POST rate limits (`/api/leads`, `/api/chat`, `/api/signal`) | OK (audit S-4) |
| Bot challenge (Turnstile / hCaptcha) | absent (audit S-5) |
| Secret hygiene (`.env` not tracked, no live keys in history) | OK (audit I-4, I-5) |
| `console.log` of request internals | 3 hits in `src/` (audit S-6) |
| Error monitoring | none (audit O-1) |
| `/api/health` | OK (audit O-2) |
| Privacy compliance — GDPR/CCPA cookie consent | **GAP** — GA4 + Meta Pixel + LinkedIn fire on first paint with no banner (audit L-2) |

### Privacy posture

GDPR Art. 7 (consent) and ePrivacy require a banner before non-essential cookies / pixels. Today, three trackers fire on first paint when their env IDs are set. If EU/CA traffic is non-trivial, this is the biggest legal exposure on the public surface. Pair with `Permissions-Policy: interest-cohort=()` (already set) and a documented retention/DSR flow on `/privacy-policy`.

### Action items

1. Ship `Content-Security-Policy-Report-Only` per audit S-3, with `/api/csp-report` collector.
2. Cookie consent banner gated by region (Cloudflare `CF-IPCountry` → opt-in for EU/CA, opt-out for US).
3. Cloudflare Turnstile in front of `/api/leads` and `/api/signal`.
4. Replace `console.log` with a request-id-correlated logger that scrubs PII.

---

## 7) Business & traffic — needs runtime probe

These cannot be answered from the repo. Run the following and paste outputs into a follow-up doc:

| Metric | Source | Command / link |
|---|---|---|
| Similarweb / SEMrush rank | login | check `orengen.io` global + category rank |
| Domain Rating (Ahrefs) / DA (Moz) | login | one-shot lookup |
| Backlink profile | Ahrefs / Search Console | top referring domains, anchor distribution |
| Organic keywords + CTR | Google Search Console | last 28d Performance report |
| Bounce rate / time on page | GA4 | Pages and screens > engagement_rate |
| Conversion rate | GA4 | `lead_submit` / `checkout_start` events vs. sessions (after wiring action 4 in §4) |

---

## Composite scorecard (one screen)

| # | Standard family | Specific standard | Grade | Top fix |
|---|---|---|---|---|
| 1 | Performance | Core Web Vitals (LCP/INP/CLS) | B− predicted | Migrate top-5 `<img>` to `next/image` |
| 2 | Performance | Lighthouse Performance | B+ predicted | Bundle budget + RUM web-vitals |
| 3 | Accessibility | WCAG 2.2 AA | C+ likely | Skip-link + `useReducedMotion` + axe-in-CI |
| 4 | Accessibility | Section 508 / EN 301 549 | Likely AA | Same as above |
| 5 | SEO | Indexability + structured data | A− | Add Article + BreadcrumbList + FAQPage |
| 6 | UX | Nielsen heuristics | B | Undo in KanBuilder, inline form validation, error pages |
| 7 | UX | HEART | Not instrumented | Wire 4 GA4 events |
| 8 | Content | Google E-E-A-T | B+ | Author bios + Article schema |
| 9 | Trust | Mozilla Observatory | B / B+ | CSP Report-Only → enforce |
| 10 | Trust | Privacy (GDPR/CCPA) | C+ | Cookie consent banner |
| 11 | Trust | Bot/abuse | B | Turnstile on `/api/leads`, `/api/signal` |
| 12 | Business | Similarweb / GSC / GA4 | N/A | Pull data into next audit revision |

---

## Top 10 fixes, ranked by ROI

1. Cookie-consent banner gated by region — closes the only red legal exposure (audit L-2).
2. CSP `Report-Only` → enforce — moves Observatory from B to A and is already planned (audit S-3).
3. `<img>` → `next/image` for the top 5 components — single biggest CWV lever (audit P-1).
4. Skip-link + reduced-motion + axe in CI — gets WCAG 2.2 AA defensible (audit A-3, A-4).
5. Article + BreadcrumbList + FAQPage JSON-LD — unlocks SERP rich results.
6. Cloudflare Turnstile on `/api/leads` and `/api/signal` — closes audit S-5.
7. Sentry on master + CRM — turns audit O-1 from "blind" to "monitored".
8. Sitemap completeness — add the 4 missing routes (audit L-4).
9. Wire `web-vitals` to GA4 — replaces prediction with field data.
10. Self-host or proxy `cdn.content360.io` assets — kills the recurring single-point-of-failure (audit P-2).

---

## Method & limits

- **Live evidence** was gathered with `curl` against production HTML and headers and with `WebFetch` against `/`. Headers reproduced verbatim above.
- **Static evidence** was gathered with `grep`/`wc` against `src/`. Counts are quoted with the command that produced them.
- **What this audit does NOT do:** run Lighthouse / WebPageTest / axe / Mozilla Observatory in this session; pull GA4 / Search Console / Similarweb. Each row that depends on those is labeled "Needs runtime probe" with the exact tool to run.
- **Re-run cadence:** after each major release, alongside `docs/ENTERPRISE_AUDIT.md`.
