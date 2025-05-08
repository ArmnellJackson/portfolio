/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'armnelljackson.github.io',
      },
    ],
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
}

export default nextConfig
