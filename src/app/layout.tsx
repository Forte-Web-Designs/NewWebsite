import type { Metadata, Viewport } from "next";
import { Roboto, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ConditionalHeader from "@/components/layout/ConditionalHeader";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import AIChat from "@/components/AIChat";
import MobileStickyCTA from "@/components/MobileStickyCA";
import { ThemeProvider } from "./providers/ThemeProvider";
import CriticalCSS from "@/components/performance/CriticalCSS";
import PerformanceMonitor from "@/components/performance/PerformanceMonitor";
import JavaScriptOptimizer from "@/components/performance/JavaScriptOptimizer";
import ResourceHints from "@/components/performance/ResourceHints";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import GoogleBusinessSchema from "@/components/seo/GoogleBusinessSchema";
import WebsiteSchema from "@/components/seo/WebsiteSchema";
import NavigationSchema from "@/components/seo/NavigationSchema";

// Original fonts restored
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
    default: 'Systems Architecture & Automation Consulting | Forte Web Designs',
  },
  description: "Automation, CRM pipelines, reporting dashboards, and the infrastructure that holds it all together. Based in Grapevine, Texas. Serving clients nationwide.",
  keywords: [
    'business automation', 'workflow automation', 'custom software development', 'automation consulting',
    'process automation', 'custom website design', 'DFW web design', 'hand-coded websites',
    'automation services', 'business process automation', 'CRM integrations', 'Zapier alternatives',
    'n8n automations', 'Make.com', 'automation workflows', 'custom software Grapevine',
    'software development', 'web development', 'business software', 'automation systems',
    'workflow optimization', 'business efficiency', 'Grapevine software company', 'Fort Worth web design',
    'Texas automation', 'DFW software', 'forte web designs'
  ],
  creator: 'Forte Web Designs',
  publisher: 'Forte Web Designs',
  icons: {
    icon: '/images/home/LaunchForteLogo.png',
    shortcut: '/images/home/LaunchForteLogo.png',
    apple: '/images/home/LaunchForteLogo.png',
  },
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
    title: 'Systems Architecture & Automation Consulting | Forte Web Designs',
    description: "Automation, CRM pipelines, reporting dashboards, and the infrastructure that holds it all together. Based in Grapevine, Texas. Serving clients nationwide.",
    siteName: 'Forte Web Designs',
    images: [{
      url: 'https://fortewebdesigns.com/images/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Forte Web Designs - Systems Architecture & Automation Consulting'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Systems Architecture & Automation Consulting | Forte Web Designs',
    description: "Automation, CRM pipelines, reporting dashboards, and the infrastructure that holds it all together. Based in Grapevine, Texas. Serving clients nationwide.",
    images: ['https://fortewebdesigns.com/images/og-image.jpg']
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
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://fortewebdesigns.com/" />
        
        {/* Enhanced Local SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Local Business Verification */}
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Grapevine, Texas" />
        <meta name="geo.position" content="32.9343;-97.0781" />
        <meta name="ICBM" content="32.9343, -97.0781" />
        
        {/* Local SEO Enhanced Tags */}
        <meta name="coverage" content="Texas, Grapevine, Dallas, Fort Worth, DFW" />
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
                  // Default to dark mode
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
      <body className={`${roboto.variable} ${inter.variable} ${interDisplay.variable} antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        <CriticalCSS />
        <ResourceHints />
        <JavaScriptOptimizer />
        
        {/* Google Analytics 4 */}
        <GoogleAnalytics />
        
        {/* Enhanced Structured Data for Sitelinks */}
        <GoogleBusinessSchema />
        <WebsiteSchema />
        <NavigationSchema />
        
        <ThemeProvider>
          <div className="dark:bg-[url(/images/navbar/navbar-bg.png)] bg-[url(/images/navbar/navbar-bg-light.png)] bg-no-repeat">
            <ConditionalHeader />
            <main className="flex-grow">
              {children}
            </main>
          </div>
          <Footer />
          <ScrollToTopButton />
          <AIChat />
          <MobileStickyCTA />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}
