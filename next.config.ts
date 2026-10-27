import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Multiple root layouts ((sl), (en)) and no app/layout.tsx:
    // unmatched URLs are served by app/global-not-found.tsx.
    globalNotFound: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.nakupsrebra.com",
      },
    ],
  },
};

export default nextConfig;
