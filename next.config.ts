import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The Sites worker serves the already-compressed hotel photography directly.
    unoptimized: true,
  },
};

export default nextConfig;
