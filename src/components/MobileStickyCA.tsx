"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import GenericContactModal from '@/components/GenericContactModal';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px for better mobile UX
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide on all industry and service pages
  if (pathname?.includes('/industries/') || pathname?.includes('/services/')) return null;

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky CTA - Only visible on mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[90] bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl border-t border-white/20">
        <div className="px-3 py-2">
          <div className="flex items-center justify-between">
            <div className="flex-1 mr-2">
              <p className="text-sm font-semibold leading-tight">Ready to grow your business?</p>
              <p className="text-xs text-blue-100 leading-tight">Start your website today</p>
            </div>
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-blue-600 px-3 py-1.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind sticky CTA - Reduced height */}
      <div className="lg:hidden h-12" />

      {/* Generic Contact Modal */}
      <GenericContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        trigger="mobile-sticky-cta"
        title="Get Started Today"
        subtitle="Tell us about your project and we'll get back to you within 24 hours"
      />
    </>
  );
}
