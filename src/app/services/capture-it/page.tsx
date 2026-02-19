import type { Metadata } from "next";
import CaptureItClient from './CaptureItClient';

export const metadata: Metadata = {
  title: "Capture It | Forte Web Designs",
  description: "Traffic is expensive. Don't waste it on a page that does nothing. We build landing pages, funnels, and booking systems that turn visitors into leads.",
  openGraph: {
    title: "Capture It | Forte Web Designs",
    description: "Traffic is expensive. Don't waste it on a page that does nothing. We build landing pages, funnels, and booking systems that turn visitors into leads.",
    url: "https://fortewebdesigns.com/services/capture-it/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/services/capture-it/"
  }
};

export default function CaptureItPage() {
  return <CaptureItClient />;
}
