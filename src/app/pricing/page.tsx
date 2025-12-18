import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import { PricingPage } from '@/components/pricing-solutions';

export const metadata: Metadata = {
  title: 'Pricing | Automation Systems & Custom Software | Forte Web Designs',
  description: 'Automation systems and custom software that pay for themselves in weeks. Starter projects from $1,500, automation systems $3,500-$7,500, complete business systems $7,500-$15,000+. Most clients see ROI in 4-8 weeks.',
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
