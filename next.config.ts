import { NextConfig } from "next"

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  experimental: {}
}

module.exports = config
