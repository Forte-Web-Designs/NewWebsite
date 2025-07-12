/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // swcMinify is deprecated and enabled by default in Next.js 13+
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // optimizeFonts is deprecated in Next.js 15 - removed
  compiler: {
    // Eliminates more dead code
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Removed experimental optimizeCss to fix critters module error
};

module.exports = nextConfig;
