/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["countryflagsapi.com"],
  },
}

module.exports = nextConfig
