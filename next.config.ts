import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.PAGES_BASE_PATH,
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
