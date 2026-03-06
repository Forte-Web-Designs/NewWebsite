import { Metadata } from 'next';
import InfrastructureReviewClient from './InfrastructureReviewClient';

export const metadata: Metadata = {
  title: "Infrastructure Review | Forte Web Designs",
  description: "Not sure where to start? The Infrastructure Review examines your setup, identifies opportunities, and gives you a prioritized roadmap with ROI estimates.",
};

export default function InfrastructureReviewPage() {
  return <InfrastructureReviewClient />;
}
