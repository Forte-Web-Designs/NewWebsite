import { Metadata } from 'next';
import AgencyPartnershipClient from './AgencyPartnershipClient';

export const metadata: Metadata = {
  title: 'Agency Partnership — Your Quiet Growth Systems Team',
  description: 'Win bigger projects, deliver faster, and keep clients longer. We handle the heavy lifting (web, automation, AI, integrations, dashboards) under your brand—or alongside your team.',
};

export default function AgencyPartnershipPage() {
  return <AgencyPartnershipClient />;
}