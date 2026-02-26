import { Metadata } from 'next';
import FoundationClient from './FoundationClient';

export const metadata: Metadata = {
  title: "Foundation | Forte Web Designs",
  description: "Get your system built and your first leads flowing. CRM, payment processing, booking, tracking, and your first lead source — in 1-2 weeks.",
};

export default function FoundationPage() {
  return <FoundationClient />;
}
