/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for Netlify
  trailingSlash: true, // Ensures proper routing on static hosts
  images: {
    unoptimized: true, // Required for static export
    domains: ['images.unsplash.com', 'source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compiler: {
    // Eliminates more dead code
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
