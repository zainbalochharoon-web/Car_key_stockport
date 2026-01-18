import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

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
  },
  turbopack: {
    root: __dirname, // now works in ES module
  },
  async redirects() {
    return [
      // 301 Redirects for relocated area pages
      {
        source: '/areas/manchester',
        destination: '/areas/stockport/manchester',
        permanent: true,
      },
      {
        source: '/areas/bury',
        destination: '/areas/stockport/bury',
        permanent: true,
      },
      {
        source: '/areas/oldham',
        destination: '/areas/stockport/oldham',
        permanent: true,
      },
      {
        source: '/areas/rochdale',
        destination: '/areas/stockport/rochdale',
        permanent: true,
      },
      {
        source: '/areas/tameside',
        destination: '/areas/stockport/tameside',
        permanent: true,
      },
      {
        source: '/areas/trafford',
        destination: '/areas/stockport/trafford',
        permanent: true,
      },
      {
        source: '/areas/salford',
        destination: '/areas/stockport/salford',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
