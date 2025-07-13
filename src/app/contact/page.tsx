import { Metadata } from 'next';
import ContactForm from "@/components/ContactForm";
import { Icon } from '@/components/images/Icon';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Need any kind of services contact us.',
};

export default function Pricing() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <section className="py-12 sm:py-16 md:py-20 relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-1 sm:gap-2 text-primary-1000 mb-4 sm:mb-6">
            <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
            Ready to Get Started?
          </span>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
