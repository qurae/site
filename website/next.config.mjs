/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  distDir: "out",
  output: "export",
  basePath: "/site",
  assetPrefix: "",
};

export default nextConfig;
