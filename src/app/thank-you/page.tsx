"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DarkButton from '@/components/DarkButton';

export default function ThankYou() {
  const router = useRouter();

  useEffect(() => {
    // Auto-redirect after 10 seconds
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm sm:max-w-md w-full text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
          {/* Success Icon */}
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Thank You Message */}
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Thank You!</h1>
          <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
            Your message has been sent successfully. We&apos;ll get back to you within 24 hours to discuss your project.
          </p>

          {/* Action Buttons */}
          <div className="space-y-3 sm:space-y-4">
            <DarkButton 
              onClick={() => router.push('/')}
              className="w-full text-sm sm:text-base"
            >
              Back to Home
            </DarkButton>
            
            <button
              onClick={() => router.push('/services')}
              className="w-full px-4 py-2 sm:px-6 sm:py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
            >
              Explore Our Services
            </button>
          </div>

          {/* Auto-redirect notice */}
          <p className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6">
            You&apos;ll be automatically redirected to our homepage in 10 seconds.
          </p>
        </div>
      </div>
    </div>
  );
}
