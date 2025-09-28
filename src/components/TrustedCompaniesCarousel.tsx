"use client";

import { useEffect, useState } from 'react';
import { OptimizedImage } from '@/components/images/OptimizedImage';

const trustedCompanies = [
  {
    id: 1,
    name: 'AliExpress',
    logo: '/images/trusted-companies/aliexpress-logo.svg',
    alt: 'AliExpress'
  },
  {
    id: 2,
    name: 'Amerus Life Holdings',
    logo: '/images/trusted-companies/amerus-life-holdings-41617.svg',
    alt: 'Amerus Life Holdings'
  },
  {
    id: 3,
    name: 'Arai',
    logo: '/images/trusted-companies/arai-1.svg',
    alt: 'Arai'
  },
  {
    id: 4,
    name: 'Bristol Myers Squibb',
    logo: '/images/trusted-companies/bristol-myers-squibb-logo-2020--1.svg',
    alt: 'Bristol Myers Squibb'
  },
  {
    id: 5,
    name: 'DHL',
    logo: '/images/trusted-companies/dhl-logo-1.svg',
    alt: 'DHL'
  },
  {
    id: 6,
    name: 'Diners Club',
    logo: '/images/trusted-companies/diners-club-logo3.svg',
    alt: 'Diners Club'
  },
  {
    id: 7,
    name: 'Moncler',
    logo: '/images/trusted-companies/moncler.svg',
    alt: 'Moncler'
  },
  {
    id: 8,
    name: 'MRW',
    logo: '/images/trusted-companies/mrw-1.svg',
    alt: 'MRW'
  },
  {
    id: 9,
    name: 'Philip Treacy London',
    logo: '/images/trusted-companies/philip-treacy-london.svg',
    alt: 'Philip Treacy London'
  },
  {
    id: 10,
    name: 'Pirelli',
    logo: '/images/trusted-companies/pirelli-2.svg',
    alt: 'Pirelli'
  }
];

export default function TrustedCompaniesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemWidth = 240; // Width of each logo container including gap

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to 0 when we reach the end of the first set (seamless loop)
        return nextIndex >= trustedCompanies.length ? 0 : nextIndex;
      });
    }, 2500); // Continuous scroll every 2.5 seconds

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

        {/* Continuous scrolling carousel */}
        <div className="overflow-hidden relative">
          <div 
            className="flex items-center gap-8 lg:gap-12 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * itemWidth}px)`,
              width: `${trustedCompanies.length * 2 * itemWidth}px`,
            }}
          >
            {/* Duplicate logos for seamless infinite scroll */}
            {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
              <div
                key={`${company.id}-${index}`}
                className="flex items-center justify-center h-28 w-52 lg:w-56 flex-shrink-0 opacity-90 hover:opacity-100 transition-all duration-300 p-4"
                style={{ minWidth: `${itemWidth - 24}px` }}
              >
                <OptimizedImage
                  src={company.logo}
                  alt={company.alt}
                  width={224}
                  height={112}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
