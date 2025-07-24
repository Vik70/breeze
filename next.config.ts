import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This skips ESLint checks during the build process
  },
  /* Add any other configurations here */
};

export default nextConfig;
