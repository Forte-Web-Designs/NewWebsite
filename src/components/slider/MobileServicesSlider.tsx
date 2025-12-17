"use client";

import { useState, useEffect, useRef } from "react";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { Icon } from "@/components/images/Icon";
import Link from "next/link";

interface MobileServicesSliderProps {
  isDark: boolean;
}

const MobileServicesSlider: React.FC<MobileServicesSliderProps> = ({ isDark }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 1,
      title: "Websites That Actually Make You Money",
      problem: "Your template website is slow, breaks when updated, and doesn't convert visitors",
      solution: "Hand-coded custom websites built for speed, security, and conversions",
      benefit: "Turn visitors into customers with lightning-fast loading and zero downtime",
      description: "Fully custom-coded websites built for speed, security, and long-term growth. No templates, no page builders.",
      lightImage: "/images/home/Frame2.png",
      darkImage: "/images/home/Frame8.png",
    },
    {
      id: 2,
      title: "Get Found by Customers Who Want to Buy",
      problem: "Customers can't find you on Google when they search for your services",
      solution: "Strategic SEO that gets you ranked for keywords that actually matter",
      benefit: "Show up when customers are ready to buy, not just browsing",
      description: "Improve your search rankings and drive organic traffic with our comprehensive SEO optimization services.",
      lightImage: "/images/home/Frame3.png",
      darkImage: "/images/home/Frame7.png",
    },
    {
      id: 3,
      title: "Google Ads That Actually Work",
      problem: "You're burning money on ads that bring tire-kickers, not real customers",
      solution: "Targeted Google Ads campaigns designed to bring qualified leads only",
      benefit: "Stop wasting ad budget and start getting leads who are ready to buy",
      description: "Get immediate visibility with targeted Google Ads campaigns designed to drive qualified leads to your business.",
      lightImage: "/images/home/Frame1.png",
      darkImage: "/images/home/Frame5.png",
    },
    {
      id: 4,
      title: "Social Media That Actually Sells",
      problem: "Your social media gets likes but doesn't bring in actual customers",
      solution: "Strategic social media content that turns followers into paying customers",
      benefit: "Build a community that actually buys from you, not just follows you",
      description: "Build your brand presence and engage your audience with strategic social media content and management.",
      lightImage: "/images/home/Frame4.png",
      darkImage: "/images/home/Frame6.png",
    }
  ];

  // Auto-play functionality (pause when dragging)
  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length, isDragging]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Enhanced touch/drag handlers with smart preventDefault to allow link clicks
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    const target = e.target as HTMLElement;

    // Check if the touch target is a link or inside a link
    const isLinkElement = target.closest('a');

    // Only prevent default if NOT touching a link
    if (!isLinkElement) {
      e.preventDefault();
    }

    setDragStart(touch.clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const currentX = touch.clientX;
    const diff = currentX - dragStart;

    // Only prevent default if we've moved significantly (indicating actual drag)
    if (Math.abs(diff) > 10) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Limit drag offset to prevent excessive sliding
    const maxOffset = 100;
    const limitedOffset = Math.max(-maxOffset, Math.min(maxOffset, diff));
    setDragOffset(limitedOffset);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;

    const threshold = 50; // Minimum drag distance to trigger slide change

    // Only prevent default and handle slide change if we've actually dragged
    if (Math.abs(dragOffset) > threshold) {
      e.preventDefault();

      if (dragOffset > 0) {
        prevSlide(); // Drag right - previous slide
      } else {
        nextSlide(); // Drag left - next slide
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setDragStart(0);
  };

  // Mouse events for desktop testing
  const handleMouseDown = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isLinkElement = target.closest('a');

    // Only prevent default if NOT clicking a link
    if (!isLinkElement) {
      e.preventDefault();
    }

    setDragStart(e.clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const diff = e.clientX - dragStart;

    // Only prevent default if we've moved significantly (indicating actual drag)
    if (Math.abs(diff) > 10) {
      e.preventDefault();
    }

    const maxOffset = 100;
    const limitedOffset = Math.max(-maxOffset, Math.min(maxOffset, diff));
    setDragOffset(limitedOffset);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const threshold = 50;

    // Only prevent default and handle slide change if we've actually dragged
    if (Math.abs(dragOffset) > threshold) {
      e.preventDefault();

      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setDragStart(0);
  };

  return (
    <div className="block sm:hidden">
      <div className="relative w-full">
        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="relative overflow-hidden rounded-lg h-[420px] cursor-grab active:cursor-grabbing"
          style={{
            touchAction: 'pan-y pinch-zoom', // Allow vertical scroll and zoom, prevent horizontal gestures
            WebkitTouchCallout: 'none', // Disable iOS callout
            WebkitUserSelect: 'none', // Disable text selection
            userSelect: 'none'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd} // Handle touch cancel events
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-transform duration-300 ease-out ${isDragging ? 'transition-none' : ''
                }`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100 + (isDragging ? (dragOffset / (sliderRef.current?.offsetWidth || 1)) * 100 : 0)
                  }%)`
              }}
            >
              <div className="px-4 h-full">
                <div className="grid gap-[16px] rounded-[16px] px-[16px] py-[16px] bg-gradient-to-b from-[#F4F4F4] to-[rgba(232,232,232,0.5)] dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] h-full">
                  <div className="flex justify-center">
                    <OptimizedImage
                      src={isDark ? slide.darkImage : slide.lightImage}
                      alt={`${slide.title} icon`}
                      width={100}
                      height={100}
                      className="flex"
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      sizes="100px"
                    />
                  </div>
                  <h3 className="font-Inter font-medium text-[16px] leading-[20px] tracking-normal text-center text-gray-900 dark:text-white px-2">
                    {slide.title}
                  </h3>
                  
                  {/* Problem/Solution/Benefit Structure */}
                  <div className="space-y-2 flex-1">
                    {/* Problem */}
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-2.5 border border-red-200 dark:border-red-800">
                      <div className="flex items-start gap-2">
                        <span className="text-red-500 mt-0.5 text-xs flex-shrink-0">✕</span>
                        <p className="text-red-700 dark:text-red-300 text-[11px] leading-[14px] font-medium">
                          {slide.problem}
                        </p>
                      </div>
                    </div>
                    
                    {/* Solution */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2.5 border border-blue-200 dark:border-blue-800">
                      <div className="flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5 text-xs flex-shrink-0">→</span>
                        <p className="text-blue-700 dark:text-blue-300 text-[11px] leading-[14px] font-medium">
                          {slide.solution}
                        </p>
                      </div>
                    </div>
                    
                    {/* Benefit */}
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-2.5 border border-green-200 dark:border-green-800">
                      <div className="flex items-start gap-2">
                        <span className="text-green-500 mt-0.5 text-xs flex-shrink-0">✓</span>
                        <p className="text-green-700 dark:text-green-300 text-[11px] leading-[14px] font-medium">
                          {slide.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Link href="/pricing" className="font-inter text-[14px] text-[#0024FF] flex gap-[8px] items-center justify-center dark:text-[#B2BDFF] hover:underline transition-colors">
                    See Pricing{" "}
                    <span>
                      {isDark ? (
                        <Icon
                          name="light-blue-arrow"
                          alt="arrow icon"
                          className="w-[7px] h-[12px]"
                        />
                      ) : (
                        <Icon
                          name="icon-blue"
                          alt="arrow icon"
                          className="w-[7px] h-[12px]"
                        />
                      )}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Drag indicator overlay */}
          {isDragging && (
            <div className="absolute inset-0 bg-black bg-opacity-5 pointer-events-none z-10" />
          )}
        </div>

        {/* Dots Indicator */}
        <div className="absolute z-30 flex -translate-x-1/2 -bottom-5 left-1/2 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide
                  ? 'bg-[#f4f4f4] dark:bg-white'
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              data-clickable
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileServicesSlider; 