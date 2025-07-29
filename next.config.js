/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for Netlify
  trailingSlash: true, // Ensures proper routing on static hosts
  
  // Allow warnings during build - don't fail on TypeScript warnings
  typescript: {
    ignoreBuildErrors: false, // Keep TypeScript checking
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint warnings during build
  },
  
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Optimize for better CLS
    minimumCacheTTL: 31536000, // 1 year cache
    loader: 'default',
  },
  
  compiler: {
    // Eliminates more dead code in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn']
    } : false,
  },
  
  // Bundle optimization
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'react-icons', 'react-slick'],
  },
  
  // Performance optimizations
  poweredByHeader: false,
  generateEtags: false,
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Advanced code splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 200000, // Reduce max size for better chunking
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            chunks: 'all',
            enforce: true,
          },
          // Separate slick carousel into its own chunk since it's used lazily
          slick: {
            test: /[\\/]node_modules[\\/]react-slick[\\/]/,
            name: 'slick',
            chunks: 'all',
            priority: 15,
          },
          // Separate large libraries
          icons: {
            test: /[\\/]node_modules[\\/]react-icons[\\/]/,
            name: 'icons',
            chunks: 'all',
            priority: 12,
          },
        },
      };
      
      // Tree shaking optimization
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Minimize CSS and JS more aggressively
      config.optimization.minimize = true;
      
      // Additional optimizations for bundle size
      config.resolve.alias = {
        ...config.resolve.alias,
        // Replace moment with smaller alternatives if used
        'moment': 'dayjs',
      };
    }
    
    // Development optimizations
    if (dev) {
      config.optimization.removeAvailableModules = false;
      config.optimization.removeEmptyChunks = false;
      config.optimization.splitChunks = false;
    }
    
    return config;
  },
};

module.exports = nextConfig;
