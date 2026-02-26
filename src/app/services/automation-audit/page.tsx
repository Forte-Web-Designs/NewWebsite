import { Metadata } from 'next';
import AutomationAuditClient from './AutomationAuditClient';

export const metadata: Metadata = {
  title: "Automation Audit | Forte Web Designs",
  description: "Not sure where to start? The Automation Audit reviews your setup, identifies opportunities, and gives you a prioritized roadmap with ROI estimates.",
};

export default function AutomationAuditPage() {
  return <AutomationAuditClient />;
}
