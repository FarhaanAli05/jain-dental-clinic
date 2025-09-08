import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
};

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
