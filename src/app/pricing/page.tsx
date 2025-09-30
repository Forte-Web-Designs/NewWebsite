import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import { PricingPage } from '@/components/pricing-solutions';

export const metadata: Metadata = {
  title: 'Simple, Transparent Pricing Built for Growth | Forte Web Designs',
  description: 'Solutions-based pricing that scales with your business. Website Foundation from $2,000. Growth Systems $3.5K-$7.5K. End-to-End Systems $7.5K-$15K+. Pricing reflects project scope and outcomes.',
};

export default function Pricing() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        <PricingPage />
      </div>
    </div>
  );
}
