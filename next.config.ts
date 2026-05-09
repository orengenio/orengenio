import type { NextConfig } from "next";

// Enterprise hardening:
//   - Strip the X-Powered-By header (info disclosure).
//   - Send strict transport / clickjacking / sniffing / referrer / permissions
//     headers on every response.
//
// Content-Security-Policy is intentionally NOT set here yet. The landing page
// uses inline <style> blocks, inline JSON-LD <script>, and several third-party
// asset hosts (Content360 CDN for brand images, simpleicons + svgl for partner
// logos, Anthropic streaming for /api/chat, Vapi for the floating orb voice
// agent, GA4 / Meta Pixel / LinkedIn Insight tags for analytics). Shipping a
// strict CSP without an audited Report-Only window would break those surfaces.
// Tracked in docs/ENTERPRISE_AUDIT.md (S-3).
const SECURITY_HEADERS = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=(self)", // Vapi voice orb needs mic on orengen.io
      "geolocation=()",
      "payment=(self)", // Stripe Checkout redirect
      "interest-cohort=()", // FLoC opt-out
    ].join(", "),
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },

  async redirects() {
    return [
      { source: "/mailwizz", destination: "/orenmail", permanent: true },
      { source: "/appwrite", destination: "/orenbase", permanent: true },
      { source: "/formbricks", destination: "/orenforms", permanent: true },
      { source: "/langflow", destination: "/orenflow", permanent: true },
      { source: "/langfuse", destination: "/orenobserve", permanent: true },
    ];
  },

  // Allow next/image to optimize first-party assets and the brand CDN. Add new
  // hosts here as we migrate <img> -> <Image /> per the audit.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.content360.io" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "svgl.app" },
      { protocol: "https", hostname: "**.orengen.io" },
    ],
  },
};

export default nextConfig;
