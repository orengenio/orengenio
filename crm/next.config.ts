import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  turbopack: { root: path.resolve(import.meta.dirname) },
  images: { remotePatterns: [{ protocol: "https", hostname: "**.orengen.io" }] },
};

export default nextConfig;
