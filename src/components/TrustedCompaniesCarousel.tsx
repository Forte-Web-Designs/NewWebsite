"use client";

import { useEffect, useState } from 'react';
import { OptimizedImage } from '@/components/images/OptimizedImage';

const trustedCompanies = [
  {
    id: 1,
    name: 'UTSW',
    logo: '/images/trusted-companies/utsw-logo.svg',
    alt: 'University of Texas Southwestern Medical Center'
  },
  {
    id: 2,
    name: 'Vista Bank',
    logo: '/images/trusted-companies/vista-bank-logo.svg',
    alt: 'Vista Bank'
  },
  {
    id: 3,
    name: 'Scottish Rite Hospital',
    logo: '/images/trusted-companies/scottish-rite-logo.svg',
    alt: 'Scottish Rite Hospital for Children'
  },
  {
    id: 4,
    name: 'Scottish Rite Children\'s Medical Center',
    logo: '/images/trusted-companies/scottish-rite-medical-logo.svg',
    alt: 'Scottish Rite Children\'s Medical Center'
  },
  {
    id: 5,
    name: 'Texas Health Presbyterian Hospital',
    logo: '/images/trusted-companies/texas-health-logo.svg',
    alt: 'Texas Health Presbyterian Hospital'
  },
  {
    id: 6,
    name: 'Texas Alliance of Energy Producers',
    logo: '/images/trusted-companies/texas-alliance-energy-logo.svg',
    alt: 'Texas Alliance of Energy Producers'
  }
];

export default function TrustedCompaniesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (trustedCompanies.length - 2) // Show 3 at a time, so scroll through pairs
      );
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Trusted by Leading Organizations
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Proud to serve businesses and organizations across Texas and beyond
          </p>
        </div>

        {/* Desktop: Show 3 logos at a time */}
        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-8 lg:gap-12">
            {trustedCompanies.slice(currentIndex, currentIndex + 3).map((company, index) => (
              <div
                key={`${company.id}-${currentIndex}`}
                className="flex items-center justify-center h-20 w-32 lg:w-40 transition-all duration-500 opacity-80 hover:opacity-100 grayscale hover:grayscale-0"
                style={{
                  transform: `translateY(${Math.sin((currentIndex + index) * 0.5) * 10}px)`,
                }}
              >
                <OptimizedImage
                  src={company.logo}
                  alt={company.alt}
                  width={160}
                  height={80}
                  className="max-w-full max-h-full object-contain filter dark:brightness-0 dark:invert"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Show 2 logos at a time */}
        <div className="md:hidden">
          <div className="flex items-center justify-center gap-6">
            {trustedCompanies.slice(currentIndex, currentIndex + 2).map((company, index) => (
              <div
                key={`mobile-${company.id}-${currentIndex}`}
                className="flex items-center justify-center h-16 w-24 transition-all duration-500 opacity-80 grayscale"
              >
                <OptimizedImage
                  src={company.logo}
                  alt={company.alt}
                  width={120}
                  height={64}
                  className="max-w-full max-h-full object-contain filter dark:brightness-0 dark:invert"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex items-center justify-center mt-6 gap-2">
          {Array.from({ length: Math.ceil(trustedCompanies.length / 3) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === index
                  ? 'bg-primary-600 dark:bg-primary-400'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              onClick={() => setCurrentIndex(index * 3)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
