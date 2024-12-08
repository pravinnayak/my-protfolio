/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  domains: [
    "pravinnayak.me",
  ],
  images: {
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
