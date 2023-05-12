/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.publicitarioscriativos.com'
      },
    ],
  }
}

module.exports = nextConfig
