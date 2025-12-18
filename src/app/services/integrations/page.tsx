import type { Metadata } from "next";
import IntegrationsClient from './IntegrationsClient';

export const metadata: Metadata = {
  title: "CRM & Integrations | Forte Web Designs",
  description: "Make your tools actually talk to each other. We connect your CRM, email, forms, and business systems so data flows automatically and your team stops copy-pasting between platforms.",
  keywords: [
    "CRM integration", "system integration", "HubSpot integration",
    "Salesforce integration", "API integration", "workflow automation",
    "data sync", "business systems"
  ],
  openGraph: {
    title: "CRM & Integrations | Forte Web Designs",
    description: "Make your tools actually talk to each other. We connect your CRM, email, forms, and business systems so data flows automatically and your team stops copy-pasting between platforms.",
    url: "https://fortewebdesigns.com/services/integrations/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/services/integrations/"
  }
};

export default function IntegrationsPage() {
  return <IntegrationsClient />;
}
