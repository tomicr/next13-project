/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images2.imgbox.com']
  }
}

module.exports = nextConfig
