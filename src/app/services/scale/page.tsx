import { Metadata } from 'next';
import ScaleClient from './ScaleClient';

export const metadata: Metadata = {
  title: "Scale | Forte Web Designs",
  description: "Reporting dashboards, outbound systems, AI agents, content engines, and monthly management. Grow without adding headcount — in 3-4 weeks.",
};

export default function ScalePage() {
  return <ScaleClient />;
}
