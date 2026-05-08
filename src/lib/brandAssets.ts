/**
 * Official OrenGen brand assets (Content360 CDN).
 *
 * Variant rules (set by brand):
 *   - FAVICON              → every favicon slot (browser tab, apple-touch, OG icon).
 *   - LOGO_BLUE  (TPBG)    → use ONLY where the surrounding surface is majority WHITE / light.
 *   - LOGO_WHITE (TPBG)    → use ONLY where the surrounding surface is majority DARK.
 *
 * Favicon: linear gradient 90°, #000000 → #003366
 * Blue logo: blue lettering on transparent bg, linear gradient 180°, #000000 → #003366 (no slogan)
 * White logo: white lettering on transparent bg (no slogan)
 */
export const OFFICIAL_FAVICON_URL =
  "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/05-2026/nv2Fwa24QWyXjnM5GHxYJYOmfGh0rrWJiJu2DRQ0.png";

export const OFFICIAL_LOGO_BLUE_URL =
  "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/05-2026/0AVNQ9WDsFdbcEFJX0AQfTmktPcPu8V8GqAqNQS4.png";

export const OFFICIAL_LOGO_WHITE_URL =
  "https://cdn.content360.io/ea2381f4-12e0-4efd-b95b-6012c981eae0/uploads/04-2026/GDFiuJWunF3ONupIrOtSqWBlqpIx79Cxvvut9s7p.png";

/** Default logo (alias of the blue/light-bg variant). Prefer the explicit
 *  BLUE / WHITE constants above so the variant choice is visible at the call site. */
export const OFFICIAL_LOGO_URL = OFFICIAL_LOGO_BLUE_URL;
