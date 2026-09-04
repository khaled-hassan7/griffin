/** @type {import('next').NextConfig} */
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

  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
