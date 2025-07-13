
import { Metadata } from 'next';
import { PricingPage } from "@/components/pricing";
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Explore our transparent pricing options and packages designed to fit businesses of all sizes.',
};

export default function Pricing() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section - Mobile Optimized */}
        <div className="text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <h2 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-center">
            Choose Your Growth Plan
          </h2>
        </div>
        <PricingPage />
      </div>
    </div>
  );
}
