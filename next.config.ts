import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sms-consent",
        destination: "/ai-sms-opt-in",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
