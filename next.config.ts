import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ijsg1cjqgt.ufs.sh",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
