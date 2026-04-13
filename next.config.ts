import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/mailwizz", destination: "/orenmail", permanent: true },
      { source: "/appwrite", destination: "/orenbase", permanent: true },
      { source: "/formbricks", destination: "/orenforms", permanent: true },
      { source: "/langflow", destination: "/orenflow", permanent: true },
      { source: "/langfuse", destination: "/orenobserve", permanent: true },
    ];
  },
};

export default nextConfig;
