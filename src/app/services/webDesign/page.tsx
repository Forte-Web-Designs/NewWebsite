import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import WebDesignPageClient from './WebDesignPageClient';

export const metadata: Metadata = {
  title: "Professional Custom Website Design & Development Services | Nationwide from DFW | Forte Web Designs",
  description:
    "Hand-coded professional custom websites that outperform WordPress templates. DFW-based team serving businesses nationwide with lightning-fast, secure, SEO-optimized websites built from scratch for real business growth and lead generation.",
};

export default function WebDesignPage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        <WebDesignPageClient />
      </div>
    </div>
  );
}
