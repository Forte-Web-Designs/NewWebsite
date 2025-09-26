import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import { PricingPage } from '@/components/pricing-new';

export const metadata: Metadata = {
  title: 'Simple, Transparent Pricing | Growth System Layers | Forte Web Designs',
  description: 'Transparent Growth System pricing for Dallas Fort Worth businesses. Start with Foundation, add Growth and Scaling layers. Custom websites, automation & AI, business systems integration.',
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
