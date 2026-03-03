import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow any external image URL (for Supabase featured images)
      },
    ],
  },
};

export default nextConfig;
