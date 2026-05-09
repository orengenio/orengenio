import type { NextConfig } from "next";
import path from "node:path";

// Same hardening posture as the master Next app. CSP omitted here too — the
// CRM is auth-gated, so the immediate clickjacking / sniffing risks are
// covered by X-Frame / nosniff. CSP rollout is tracked in
// docs/ENTERPRISE_AUDIT.md (S-3).
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
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "interest-cohort=()",
    ].join(", "),
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: { root: path.resolve(import.meta.dirname) },
  images: { remotePatterns: [{ protocol: "https", hostname: "**.orengen.io" }] },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: SECURITY_HEADERS,
      },
    ];
  },
};

export default nextConfig;
