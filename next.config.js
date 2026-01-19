/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Development configuration
  ...(process.env.NODE_ENV === 'development' ? {
    allowedDevOrigins: ['127.0.0.1', 'localhost'],
  } : {}),
  
  // SEO and Performance Optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization for Vercel
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year for Vercel edge cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Vercel image optimization
    unoptimized: false,
  },
  
  // Headers for SEO and security
  // Note: Vercel uses vercel.json for headers, which takes precedence
  // These headers are kept for local development only
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
          }
        ]
      },
      {
        source: '/favicons/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/og-image.jpg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          }
        ]
      },
      {
        source: '/blog/:path*/:image.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate'
          },
          {
            key: 'Content-Type',
            value: 'image/svg+xml'
          }
        ]
      },
      {
        source: '/blog/:path*/:image.(png|jpg|jpeg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/tutorials/:path*/:image.(svg|png|jpg|jpeg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/public/:path*.(svg|png|jpg|jpeg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/n-:image.(png|jpg|jpeg|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            // Vercel optimization: Edge cache for 1 hour, stale-while-revalidate for 24h
            // This ensures fast delivery while allowing background updates
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
          },
          {
            key: 'Content-Type',
            value: 'application/xml; charset=utf-8'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          }
        ]
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          },
          {
            key: 'Content-Type',
            value: 'text/plain'
          }
        ]
      }
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ]
  },
  
  // Vercel optimizations
  // Note: Vercel handles output automatically, no need for 'standalone'
  
  // Ensure proper build output for Vercel
  swcMinify: true,
  
  // Production optimizations
  productionBrowserSourceMaps: false,
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Experimental features for optimization
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'react-syntax-highlighter',
      'react-markdown',
      'prism-react-renderer',
    ],
    // Vercel optimizations - CSS optimization handled automatically
    // Enable server components optimization
    serverComponentsExternalPackages: [],
    // Optimize server actions
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  
  // Disable CSS inlining optimization to avoid critters dependency issues
  // Vercel handles CSS optimization automatically
  // optimizeCss is not available in Next.js 14.2.5 - handled internally
  
  // Webpack optimizations - Only apply in production and client-side
  webpack: (config, { dev, isServer }) => {
    // Production client-side optimizations only
    // Note: Vercel optimizes bundling automatically, so we only apply safe optimizations
    if (!dev && !isServer && config.optimization && config.optimization.splitChunks) {
      // Preserve existing splitChunks configuration and add custom cacheGroups
      const existingCacheGroups = config.optimization.splitChunks.cacheGroups || {}
      config.optimization.splitChunks.cacheGroups = {
        ...existingCacheGroups,
        // Vendor chunk - group node_modules for better caching
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /node_modules/,
          priority: 20,
          reuseExistingChunk: true,
        },
        // Separate large libraries
        reactSyntaxHighlighter: {
          name: 'syntax-highlighter',
          test: /[\\/]node_modules[\\/](react-syntax-highlighter|prism-react-renderer)[\\/]/,
          chunks: 'all',
          priority: 15,
          reuseExistingChunk: true,
        },
        reactMarkdown: {
          name: 'markdown',
          test: /[\\/]node_modules[\\/](react-markdown|remark|rehype)[\\/]/,
          chunks: 'all',
          priority: 15,
          reuseExistingChunk: true,
        },
      }
    }
    return config
  },
  
  // Note: Vercel handles output automatically, no need for 'standalone'
}

module.exports = nextConfig
