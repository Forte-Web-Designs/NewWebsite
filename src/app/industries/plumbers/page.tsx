import { Metadata } from 'next';
import PlumberPageClient from '@/components/PlumberPageClient';

export const metadata: Metadata = {
  title: 'Professional Plumber Website Design That Converts Emergency Calls Into Customers | Nationwide from DFW | Forte Web Designs',
  description: 'We don\'t build just "pretty" websites. We build professional high-converting, mobile-first plumber websites that capture emergency leads, build trust instantly, and dominate local search rankings. DFW-based team serving plumbers nationwide.',
  keywords: 'professional plumber website design, plumbing websites, emergency plumber websites, local plumber SEO, plumbing lead generation, mobile plumber websites, professional plumbing web design nationwide',
  openGraph: {
    title: 'Professional Plumber Website Design That Converts Emergency Calls Into Customers | Nationwide from DFW',
    description: 'We don\'t build just "pretty" websites. We build professional high-converting, mobile-first plumber websites that capture emergency leads, build trust instantly, and dominate local search rankings.',
    type: 'website',
  },
};

export default function PlumbersPage() {
  return <PlumberPageClient />;
}
