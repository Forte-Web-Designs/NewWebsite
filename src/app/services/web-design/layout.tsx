import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Website Design Services - Hand-Coded, Fast & Secure | Forte Web Designs",
  description: "Professional custom website design services. Hand-coded websites that outperform WordPress templates. No page builders - just clean, fast, secure websites built for business growth. DFW-based, serving nationwide.",
  keywords: "custom website design, hand-coded websites, web development, business websites, WordPress alternative, fast websites, secure web design, SEO websites",
  openGraph: {
    title: "Custom Website Design - Built for Speed, Security & Growth",
    description: "Hand-coded websites that outperform templates every time. No WordPress, no page builders — just clean, fast, secure websites built from scratch for real business growth.",
    type: "website",
    url: "https://fortewebdesigns.com/services/web-design",
    images: [
      {
        url: "/images/og-web-design.png",
        width: 1200,
        height: 630,
        alt: "Forte Web Designs - Custom Website Design Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Website Design Services | Forte Web Designs", 
    description: "Hand-coded websites that outperform templates. Built for speed, security & growth.",
    images: ["/images/og-web-design.png"]
  }
};

export default function WebDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
