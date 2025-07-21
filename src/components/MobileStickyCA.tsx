"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/images/Icon';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px for better mobile UX
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide the mobile sticky CTA on the plumbers page  
  if (pathname?.includes('/industries/plumbers')) return null;
  
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
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-3 py-1.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Get Started
                </Link>
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
              
              <div className="grid grid-cols-2 gap-1.5">
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-2 py-1.5 rounded-lg font-medium text-sm text-center hover:bg-gray-50 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/pricing"
                  className="bg-white/20 backdrop-blur-sm text-white px-2 py-1.5 rounded-lg font-medium text-sm text-center hover:bg-white/30 transition-colors border border-white/30"
                >
                  View Pricing
                </Link>
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
    </>
  );
}
