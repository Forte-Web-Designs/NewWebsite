import { Metadata } from 'next';
import GrowthClient from './GrowthClient';

export const metadata: Metadata = {
  title: "Growth | Forte Web Designs",
  description: "Turn leads into revenue. Automated follow-up, sales funnels, booking systems, SMS, and attribution that shows you what's working — in 2-3 weeks.",
};

export default function GrowthPage() {
  return <GrowthClient />;
}
