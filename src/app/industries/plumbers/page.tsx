import { Metadata } from 'next';
import PlumberPageClient from '@/components/PlumberPageClient';

export const metadata: Metadata = {
  title: 'Plumber Websites That Convert Emergency Calls Into Customers | Forte Web Designs',
  description: 'We don\'t build just "pretty" websites. We build high-converting, mobile-first plumber websites that capture emergency leads, build trust instantly, and dominate local search.',
  keywords: 'plumber website design, plumbing websites, emergency plumber websites, local plumber SEO, plumbing lead generation, mobile plumber websites',
  openGraph: {
    title: 'Plumber Websites That Convert Emergency Calls Into Customers | Forte Web Designs',
    description: 'We don\'t build just "pretty" websites. We build high-converting, mobile-first plumber websites that capture emergency leads, build trust instantly, and dominate local search.',
    type: 'website',
  },
};

export default function PlumbersPage() {
  return <PlumberPageClient />;
}
