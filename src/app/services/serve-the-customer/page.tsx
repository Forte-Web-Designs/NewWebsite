import type { Metadata } from "next";
import ServeTheCustomerClient from './ServeTheCustomerClient';

export const metadata: Metadata = {
  title: "Serve the Customer | Forte Web Designs",
  description: "They said yes. Now make the experience match the promise. Invoicing, onboarding, project management, and internal notifications all wired together.",
  openGraph: {
    title: "Serve the Customer | Forte Web Designs",
    description: "They said yes. Now make the experience match the promise. Invoicing, onboarding, project management, and internal notifications all wired together.",
    url: "https://fortewebdesigns.com/services/serve-the-customer/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/services/serve-the-customer/"
  }
};

export default function ServeTheCustomerPage() {
  return <ServeTheCustomerClient />;
}
