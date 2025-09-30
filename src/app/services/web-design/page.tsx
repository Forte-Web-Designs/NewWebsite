import type { Metadata } from "next";
import WebDesignClient from './WebDesignClient';

export const metadata: Metadata = {
  title: "Custom Website Design & Hand-Coded Websites | Forte (DFW)",
  description: "Custom-coded websites built for speed, clarity, and lead capture. No WordPressjust clean, fast sites that convert visitors into customers.",
  keywords: [
    "custom website design", "DFW web design", "hand-coded websites", "custom web development",
    "Dallas web designer", "Fort Worth web design", "responsive web design", "business website design",
    "professional website design", "SEO-optimized websites", "conversion-focused design"
  ],
  openGraph: {
    title: "Custom Website Design & Hand-Coded Websites | Forte (DFW)",
    description: "Custom-coded websites built for speed, clarity, and lead capture. No WordPressjust clean, fast sites that convert visitors into customers.",
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
