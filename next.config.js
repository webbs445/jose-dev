/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Cloudflare compatible
  output: "standalone"
};

module.exports = nextConfig;
