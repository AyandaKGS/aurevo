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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: true
  }
};

export default nextConfig;
