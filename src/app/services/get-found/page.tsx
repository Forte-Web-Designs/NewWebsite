import type { Metadata } from "next";
import GetFoundClient from './GetFoundClient';

export const metadata: Metadata = {
  title: "Get Found | Forte Web Designs",
  description: "Your business can't grow if nobody knows it exists. We build the system that brings people to your business and tracks where they came from.",
  openGraph: {
    title: "Get Found | Forte Web Designs",
    description: "Your business can't grow if nobody knows it exists. We build the system that brings people to your business and tracks where they came from.",
    url: "https://fortewebdesigns.com/services/get-found/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/services/get-found/"
  }
};

export default function GetFoundPage() {
  return <GetFoundClient />;
}
