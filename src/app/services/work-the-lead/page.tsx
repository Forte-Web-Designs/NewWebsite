import type { Metadata } from "next";
import WorkTheLeadClient from './WorkTheLeadClient';

export const metadata: Metadata = {
  title: "Work the Lead | Forte Web Designs",
  description: "The first business to follow up usually wins. CRM setup, automated follow-up, pipeline management, and smart segmentation.",
  openGraph: {
    title: "Work the Lead | Forte Web Designs",
    description: "The first business to follow up usually wins. CRM setup, automated follow-up, pipeline management, and smart segmentation.",
    url: "https://fortewebdesigns.com/services/work-the-lead/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/services/work-the-lead/"
  }
};

export default function WorkTheLeadPage() {
  return <WorkTheLeadClient />;
}
