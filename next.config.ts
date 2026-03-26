import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
