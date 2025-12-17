"use client";

import { useEffect, useState, useRef } from "react";

const testimonials = [
  {
    text: `We started getting more calls within weeks. The website feels professional and finally makes us competitive.`,
    author: "Seth",
    role: "Owner of Carter HVAC",
  },
  {
    text: `Our new site instantly gave us credibility. We're showing up higher on Google, and new clients mention finding us online.`,
    author: "Lee & Co. Legal",
    role: "Professional Services",
  },
  {
    text: `Forte didn't just build a site — they built us a system. We now understand where our leads come from and how to grow.`,
    author: "SparkCommerce",
    role: "Startup",
  },
];

export const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isUserInteracting) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isUserInteracting]);

  // Resume auto-sliding after user interaction ends
  useEffect(() => {
    if (isUserInteracting) {
      const timer = setTimeout(() => {
        setIsUserInteracting(false);
      }, 5000); // Resume after 5 seconds of no interaction
      return () => clearTimeout(timer);
    }
  }, [isUserInteracting]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
    setIsUserInteracting(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        // Swipe left - next slide
        setIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        // Swipe right - previous slide
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }
    
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
    setIsDragging(true);
    setIsUserInteracting(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const endX = e.clientX;
    const diff = startX - endX;
    
    if (Math.abs(diff) > 50) { // Minimum drag distance
      if (diff > 0) {
        // Drag left - next slide
        setIndex((prev) => (prev + 1) % testimonials.length);
      } else {
        // Drag right - previous slide
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }
    
    setIsDragging(false);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-3xl mx-auto h-80 overflow-hidden cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => setIsDragging(false)}
    >
      {testimonials.map((t, i) => {
        const isActive = i === index;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center h-full md:px-8 pr-2 sm:-mt-12 -mt-8 transform sm:translate-x-8 translate-x-5 opacity-100 sm:w-[87%] w-[90%]">
              <div className="relative bg-gradient-to-r from-blue-400 to-blue-600 sm:p-8 p-3 sm:rounded-3xl rounded-xl shadow-2xl max-w-2xl">
                <div className="text-white sm:text-lg text-[14px] font-medium md:leading-relaxed leading-4">
                  {t.text}
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col justify-center h-full md:px-8 px-2">
              <div className="relative bg-gradient-to-r from-blue-400 to-blue-600 sm:p-8 p-4 sm:rounded-3xl rounded-xl shadow-2xl max-w-2xl">
                <div className="text-white sm:text-lg text-[14px] font-medium md:leading-relaxed leading-4">
                  {t.text}
                </div>

                <div className="absolute bottom-0 translate-y-full">
                  <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-primary-1450"></div>
                </div>
              </div>

              <div className="md:mt-8 mt-5 sm:ml-8 ml-5">
                <div className="text-gray-700 dark:text-gray-300 sm:text-sm text-[12px]">
                  {t.author} • {t.role}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
