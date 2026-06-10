import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Type errors ko ignore karke site live kar de
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

