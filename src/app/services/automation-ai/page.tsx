import type { Metadata } from "next";
import AutomationAIClient from './AutomationAIClient';

export const metadata: Metadata = {
  title: "AI Automation Services & Systems Integration | Forte",
  description: "Stop manual work, start measurable growth. We build AI agents, automation pipelines, and owner dashboards—scoped to outcomes in 30–90 days.",
  keywords: [
    "AI automation services", "business process automation", "AI implementation partner", 
    "AI agents", "automation pipelines", "owner dashboards", "AI systems integration",
    "business automation Dallas", "AI consulting DFW", "automation consulting",
    "AI technology stack", "custom AI assistants", "RAG pipelines", "n8n automations"
  ],
  openGraph: {
    title: "AI Automation Services & Systems Integration | Forte",
    description: "Stop manual work, start measurable growth. We build AI agents, automation pipelines, and owner dashboards—scoped to outcomes in 30–90 days.",
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