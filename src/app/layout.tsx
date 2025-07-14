import type { Metadata, Viewport } from "next";
import { Roboto, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import AIChat from "@/components/AIChat";
import { ThemeProvider } from "./providers/ThemeProvider";

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
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
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
        </ThemeProvider>
      </body>
    </html>
  );
}
