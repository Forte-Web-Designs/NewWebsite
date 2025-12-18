import type { Metadata } from "next";
import AutomationAIClient from './AutomationAIClient';

export const metadata: Metadata = {
  title: "Automation | Forte Web Designs",
  description: "Stop wasting time on work that should run itself. We build automation systems that handle lead response, sales follow-up, customer communication, and reporting.",
  keywords: [
    "AI automation", "business automation", "lead response automation",
    "sales automation", "workflow automation", "n8n automation",
    "business process automation", "CRM automation"
  ],
  openGraph: {
    title: "Automation | Forte Web Designs",
    description: "Stop wasting time on work that should run itself. We build automation systems that handle lead response, sales follow-up, customer communication, and reporting.",
    url: "https://fortewebdesigns.com/services/automation-ai/",
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/services/automation-ai/"
  }
};

export default function AutomationAIPage() {
  return <AutomationAIClient />;
}
