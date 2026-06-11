import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
    images: {
      domains: ['drive.google.com'],
    },
    eslint: {
      ignoreDuringBuilds: true,
    }
};

export default nextConfig;
