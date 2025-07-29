import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import { PricingPage } from '@/components/pricing';

export const metadata: Metadata = {
  title: 'Simple, Transparent Pricing - Built to Grow With You | Forte Web Designs',
  description: 'No setup fees. No surprises. Just clean websites and powerful marketing tools designed to grow your business.',
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
