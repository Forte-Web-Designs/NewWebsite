import type { Metadata } from "next";
import CustomSoftwareClient from './CustomSoftwareClient';

export const metadata: Metadata = {
  title: "Custom Software Development | Forte Web Designs",
  description: "When off-the-shelf tools don't cut it, I build software that fits how your business actually works. Dashboards, internal tools, integrations, and applications designed for your operations.",
  keywords: [
    "custom software development", "business software", "custom dashboards",
    "internal tools", "API integrations", "data processing",
    "business applications", "custom development"
  ],
  openGraph: {
    title: "Custom Software Development | Forte Web Designs",
    description: "When off-the-shelf tools don't cut it, I build software that fits how your business actually works. Dashboards, internal tools, integrations, and applications designed for your operations.",
    url: "https://fortewebdesigns.com/services/custom-software/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/services/custom-software/"
  }
};

export default function CustomSoftwarePage() {
  return <CustomSoftwareClient />;
}
