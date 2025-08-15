import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import { PricingPage } from '@/components/pricing';

export const metadata: Metadata = {
  title: 'Professional Website Design Pricing Dallas Fort Worth | Transparent Web Development Costs Texas | Forte Web Designs',
  description: 'Transparent professional website design pricing for Dallas Fort Worth businesses. No setup fees, no surprises. Professional custom websites, SEO optimization, and digital marketing packages designed to grow your business.',
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
