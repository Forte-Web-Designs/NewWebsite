"use client";

import { useState, useEffect } from 'react';
import { Icon } from '@/components/images/Icon';
import GenericContactModal from '@/components/GenericContactModal';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px for better mobile UX
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Mobile Sticky CTA - Only visible on mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[90] bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl border-t border-white/20">
        <div className="px-3 py-2">
          {!isExpanded ? (
            // Collapsed state - More compact
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-2">
                <p className="text-sm font-semibold leading-tight">Ready to grow your business?</p>
                <p className="text-xs text-blue-100 leading-tight">Start your website today</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-blue-600 px-3 py-1.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Get Started
                </button>
                <button
                  onClick={() => setIsExpanded(true)}
                  className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Expand options"
                >
                  <Icon name="expand" className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            // Expanded state - Optimized layout
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">Get Started Today</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Collapse options"
                >
                  <Icon name="close" className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-blue-600 px-6 py-2 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
                >
                  Get Started
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-3 text-xs text-blue-100 pt-1">
                <a href="tel:8178736655" className="flex items-center gap-1 hover:text-white transition-colors">
                  <span>📞</span>
                  <span>(817) 873-6655</span>
                </a>
                <div className="flex items-center gap-1">
                  <span>⚡</span>
                  <span>Same Day</span>
                </div>
              </div>
            </div>
          )}
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
