import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import WebDesignPageClient from './WebDesignPageClient';

export const metadata: Metadata = {
  title: "Custom Website Design – Built for Speed, Security & Growth | Forte Web Designs",
  description:
    "Hand-coded websites that outperform templates every time. No WordPress, no page builders – just clean, fast, secure websites built from scratch for real business growth.",
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
