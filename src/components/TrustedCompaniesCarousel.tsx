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
  },
  {
    id: 11,
    name: 'Easy Exit Homes',
    logo: '/images/trusted-companies/easy-exit-homes-logo.svg',
    alt: 'Easy Exit Homes - Sell Your Home in a Flash'
  },
  {
    id: 12,
    name: 'MusicGym',
    logo: '/images/trusted-companies/music-gym-logo.svg',
    alt: 'MusicGym - Let\'s Be Funfit'
  }
];

export default function TrustedCompaniesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(220); // Width of each logo container including gap

  useEffect(() => {
    const updateItemWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setItemWidth(140); // Mobile - reduced from 160 to give more spacing
      } else if (screenWidth < 1024) {
        setItemWidth(180); // Tablet
      } else {
        setItemWidth(220); // Desktop
      }
    };

    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    
    return () => window.removeEventListener('resize', updateItemWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to 0 when we reach the end of the first set (seamless loop)
        return nextIndex >= trustedCompanies.length ? 0 : nextIndex;
      });
    }, 1500); // Continuous scroll every 1.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 py-12 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text mb-2 max-w-full px-2">
            Trusted by 25+ Growing Businesses Nationwide
          </h3>
        </div>

        {/* Continuous scrolling carousel */}
        <div className="overflow-hidden relative max-w-full">
          <div 
            className="flex items-center gap-6 sm:gap-8 lg:gap-10 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * itemWidth}px)`,
              width: `${trustedCompanies.length * 2 * itemWidth}px`,
              maxWidth: 'none'
            }}
          >
            {/* Duplicate logos for seamless infinite scroll */}
            {[...trustedCompanies, ...trustedCompanies].map((company, index) => {
              const isSecondSet = index >= trustedCompanies.length;
              return (
                <div
                  key={`logo-${company.id}-${isSecondSet ? 'duplicate' : 'original'}`}
                  className="flex items-center justify-center flex-shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    width: `${itemWidth - 20}px`,
                    height: '96px',
                    padding: '16px',
                    minWidth: `${itemWidth - 20}px`,
                    maxWidth: `${itemWidth - 20}px`
                  }}
                >
                  <img
                    src={company.logo}
                    alt={company.alt}
                    className="max-w-full max-h-full object-contain"
                    style={{
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
