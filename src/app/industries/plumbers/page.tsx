import { Metadata } from 'next';
import PlumberPageClient from '@/components/PlumberPageClient';

export const metadata: Metadata = {
  title: 'Plumbing Growth Systems | More Booked Jobs, Fewer Missed Calls | Nationwide from DFW | Forte Web Designs',
  description: 'Complete plumbing growth systems with smart reception, automated follow-ups, online booking, and lead dashboards. Cut response times by 40% and book 2-3x more jobs in 90 days. DFW-based team serving plumbers nationwide.',
  keywords: 'plumbing growth systems, plumber lead generation, automated plumbing follow-up, plumber booking system, plumbing CRM dashboard, emergency plumber systems nationwide',
  openGraph: {
    title: 'Plumbing Growth Systems | More Booked Jobs, Fewer Missed Calls | Nationwide from DFW',
    description: 'Complete plumbing growth systems with smart reception, automated follow-ups, online booking, and lead dashboards. Cut response times by 40% and book 2-3x more jobs.',
    type: 'website',
  },
};

export default function PlumbersPage() {
  return <PlumberPageClient />;
}
