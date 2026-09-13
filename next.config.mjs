/** @type {import('next').NextConfig} */

import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  allowedDevOrigins: ["192.168.1.6"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mufkhccdrbqgvppxvenr.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  reactCompiler: true,
};

export default withBundleAnalyzer(nextConfig);