import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import { PricingPage } from '@/components/pricing-solutions';

export const metadata: Metadata = {
  title: 'Pricing & Investment | Premium AI Automation & Web Design | Forte Web Designs',
  description: 'Custom AI automation and web design solutions designed for ROI. Starting at $2,000 for websites, $3,500 for automation, $5,000+ for complete systems. Every project tailored to deliver measurable business growth.',
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
