import type { Metadata, Viewport } from "next";
import { Roboto, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import AIChat from "@/components/AIChat";
import { ThemeProvider } from "./providers/ThemeProvider";
import CriticalCSS from "@/components/performance/CriticalCSS";
import PerformanceMonitor from "@/components/performance/PerformanceMonitor";
import JavaScriptOptimizer from "@/components/performance/JavaScriptOptimizer";
import ResourceHints from "@/components/performance/ResourceHints";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import GoogleBusinessSchema from "@/components/seo/GoogleBusinessSchema";

// Apple-style system font stack (mimics SF Pro Display/Text)
// Note: We'll define this directly in CSS variables since it's a system font stack

// Backup: Original fonts (commented out for easy revert)
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interDisplay = localFont({
  variable: "--font-inter-display",
  src: [
    {
      path: "../fonts/InterDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/InterDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/InterDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/InterDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    }
  ],
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#ffffff' }, { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }],
};

export const metadata: Metadata = {
  title: {
    template: '%s | Forte Web Designs',
    default: 'Forte Web Designs - Custom Websites That Grow With You',
  },
  description: "Whether you're launching a new business or ready to level up, Forte Web Designs offers fully custom-coded websites built for speed, security, and long-term growth.",
  keywords: ['web design', 'custom websites', 'SEO services', 'google ads', 'social media management', 'forte web designs', 'small business websites'],
  creator: 'Forte Web Designs',
  publisher: 'Forte Web Designs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fortewebdesigns.com',
    title: 'Forte Web Designs - Custom Websites That Grow With You',
    description: "Whether you're launching a new business or ready to level up, Forte Web Designs offers fully custom-coded websites built for speed, security, and long-term growth.",
    siteName: 'Forte Web Designs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forte Web Designs - Custom Websites That Grow With You',
    description: "Whether you're launching a new business or ready to level up, Forte Web Designs offers fully custom-coded websites built for speed, security, and long-term growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googleapis.com" />
        
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/InterDisplay-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/InterDisplay-Medium.woff2" as="font" type="font/woff2" crossOrigin="" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE || ''} />
        
        {/* Enhanced Local SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Local Business Verification */}
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Dallas-Fort Worth" />
        <meta name="geo.position" content="32.7767;-96.7970" />
        <meta name="ICBM" content="32.7767, -96.7970" />
        
        {/* Local SEO Enhanced Tags */}
        <meta name="coverage" content="Texas, Dallas, Fort Worth, DFW" />
        <meta name="distribution" content="local" />
        <meta name="audience" content="local businesses" />
        <meta name="target" content="small business owners" />
        
        {/* Enhanced Crawling Instructions */}
        <meta name="revisit-after" content="1 days" />
        <meta name="rating" content="general" />
        <meta name="language" content="en-us" />
        <meta name="doc-type" content="web page" />
        <meta name="doc-rights" content="copywritten work" />
        <meta name="doc-class" content="living document" />
        
        {/* Local Business Categories */}
        <meta name="classification" content="web design, SEO services, digital marketing" />
        <meta name="category" content="professional services" />
        <meta name="coverage" content="Dallas-Fort Worth Metroplex" />
        <meta name="distribution" content="local" />
        <meta name="rating" content="general" />
        
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MTP7GMJ3');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getTheme() {
                  if (typeof localStorage !== 'undefined') {
                    const stored = localStorage.getItem('theme');
                    if (stored) return stored;
                  }
                  // Always default to dark mode
                  return 'dark';
                }
                
                const theme = getTheme();
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`font-apple-system antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <CriticalCSS />
        <ResourceHints />
        <JavaScriptOptimizer />
        
        {/* Google Analytics 4 */}
        <GoogleAnalytics />
        
        {/* Google Business Profile Schema */}
        <GoogleBusinessSchema />
        
        <ThemeProvider>
          <div className="dark:bg-[url(/images/navbar/navbar-bg.png)] bg-[url(/images/navbar/navbar-bg-light.png)] bg-no-repeat">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
          </div>
          <Footer />
          <BackToTopButton />
          <AIChat />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}
