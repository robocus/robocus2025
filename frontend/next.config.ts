import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/robocus2025/',
  basePath: '/robocus2025',
};

export default nextConfig;
