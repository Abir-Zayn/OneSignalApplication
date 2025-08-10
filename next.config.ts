import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  //Enabling experimental features
  experimental: {
    // ppr: true, // Partial Prerendering
  },
};

export default nextConfig;
