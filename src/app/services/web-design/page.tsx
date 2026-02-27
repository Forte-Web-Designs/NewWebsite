import type { Metadata } from "next";
import WebDesignClient from './WebDesignClient';

export const metadata: Metadata = {
  title: "Web Design & Digital Presence | Forte Web Designs",
  description: "Hand-coded websites built to convert. Fast, SEO-optimized, and designed to showcase your brand. Not templates. Not page builders. Real code that performs.",
  keywords: [
    "web design", "custom website", "hand-coded website",
    "SEO optimized", "responsive design", "website development",
    "business website", "professional web design"
  ],
  openGraph: {
    title: "Web Design & Digital Presence | Forte Web Designs",
    description: "Hand-coded websites built to convert. Fast, SEO-optimized, and designed to showcase your brand. Not templates. Not page builders. Real code that performs.",
    url: "https://fortewebdesigns.com/services/web-design/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/services/web-design/"
  }
};

export default function WebDesignPage() {
  return <WebDesignClient />;
}
