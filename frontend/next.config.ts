import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: '/robocus2025',
  assetPrefix: '/robocus2025/',
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
