/**
 * Industry Lead CTA Component
 * 
 * This component provides industry-specific CTA functionality including:
 * - Desktop scroll-triggered modal at 60% scroll depth
 * - Mobile sticky CTA replacement
 * - Industry-specific lead capture forms
 * - Netlify form integration
 * 
 * Usage: Add to any industry or service page by including at the bottom
 */

'use client';

import { useState, useEffect } from 'react';
import GenericIndustryLeadModal from '@/components/GenericIndustryLeadModal';
import { useGenericIndustryLeadModal } from '@/hooks/useGenericIndustryLeadModal';

interface IndustryLeadCTAProps {
  industry: string;
  formName?: string;
  title?: string;
  subtitle?: string;
  mobileCtaText?: string;
  mobileCtaSubtext?: string;
  mobileBgGradient?: string;
}

export default function IndustryLeadCTA({ 
  industry,
  formName,
  title,
  subtitle,
  mobileCtaText = "Ready to grow your business?",
  mobileCtaSubtext = "Get started today",
  mobileBgGradient = "bg-gradient-to-r from-blue-600 to-purple-600"
}: IndustryLeadCTAProps) {
  const { isModalOpen, trigger, openModal, closeModal } = useGenericIndustryLeadModal();
  const [isMobileVisible, setIsMobileVisible] = useState(false);

  // Mobile sticky CTA visibility logic
  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px for better mobile UX
      setIsMobileVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Sticky CTA - Industry specific */}
      {isMobileVisible && (
        <div className={`lg:hidden fixed bottom-0 left-0 right-0 z-[90] ${mobileBgGradient} text-white shadow-2xl border-t border-white/20`}>
          <div className="px-3 py-2">
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-2">
                <p className="text-sm font-semibold leading-tight">{mobileCtaText}</p>
                <p className="text-xs text-blue-100 leading-tight">{mobileCtaSubtext}</p>
              </div>
              <div>
                <button
                  onClick={() => openModal('mobile-sticky-cta')}
                  className="bg-white text-blue-600 px-3 py-1.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from being hidden behind mobile CTA */}
      {isMobileVisible && <div className="lg:hidden h-12" />}

      {/* Industry-specific Lead Modal */}
      <GenericIndustryLeadModal
        isOpen={isModalOpen}
        onClose={closeModal}
        trigger={trigger}
        industry={industry}
        formName={formName || `${industry.charAt(0).toUpperCase() + industry.slice(1)} Inquiry`}
        title={title}
        subtitle={subtitle}
      />
    </>
  );
}
