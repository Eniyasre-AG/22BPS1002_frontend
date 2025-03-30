import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Ensures best practices
  swcMinify: true, // Optimizes performance
  trailingSlash: false, // Ensures clean URLs
  images: {
    domains: ["example.com"], // Replace with API image domains if needed
  },
};

export default nextConfig;
