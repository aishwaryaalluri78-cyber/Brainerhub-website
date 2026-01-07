/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.brainerhub.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  // Static export can be enabled later for production
  // output: 'export',
  // trailingSlash: true,
  // skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
