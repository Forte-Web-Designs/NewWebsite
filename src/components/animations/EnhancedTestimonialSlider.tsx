"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCard from "@/components/animations/AnimatedCard";

const testimonials = [
  {
    text: `Seth built our site from scratch! We've already seen a noticeable increase in leads and conversions. Hands down the best investment we've made for our business.`,
    author: "Seth",
    role: "Owner of Carter HVAC",
    rating: 5,
  },
  {
    text: `We saw a 2x increase in online leads after working with Forte Web Designs. Their team is incredibly professional and results-driven.`,
    author: "Forte Web Designs",
    role: "Founder of Lee & Co. Legal",
    rating: 5,
  },
  {
    text: `Working with Seth was a game changer for our startup. He not only built a stunning website but helped us understand how to convert traffic into sales.`,
    author: "Seth",
    role: "CEO of SparkCommerce",
    rating: 5,
  },
];

export const EnhancedTestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleDotClick = (newIndex: number) => {
    setIndex(newIndex);
    setIsAutoPlay(false);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-amber-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <ScrollReveal direction="up" delay={200}>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {/* Main testimonial display */}
        <div className="relative h-80 md:h-96">
          {testimonials.map((testimonial, i) => {
            const isActive = i === index;
            const isPrev = i === (index - 1 + testimonials.length) % testimonials.length;
            const isNext = i === (index + 1) % testimonials.length;
            
            return (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  isActive 
                    ? "opacity-100 transform translate-x-0 scale-100" 
                    : isPrev
                    ? "opacity-30 transform -translate-x-full scale-95"
                    : isNext
                    ? "opacity-30 transform translate-x-full scale-95"
                    : "opacity-0 transform translate-x-full scale-90"
                }`}
              >
                <AnimatedCard 
                  hoverEffect="glow" 
                  className="h-full flex items-center justify-center p-4"
                  glowColor="#3B82F6"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 p-8 md:p-12 rounded-3xl shadow-2xl max-w-3xl mx-auto text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full" />
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full" />
                    
                    {/* Quote icon */}
                    <div className="relative z-10">
                      <div className="flex justify-center mb-6">
                        <svg className="w-12 h-12 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      
                      {/* Rating stars */}
                      <div className="flex justify-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      {/* Testimonial text */}
                      <blockquote className="text-white text-lg md:text-xl leading-relaxed mb-8 italic">
                        "{testimonial.text}"
                      </blockquote>
                      
                      {/* Author info */}
                      <div className="border-t border-white/20 pt-6">
                        <cite className="not-italic">
                          <div className="text-white font-semibold text-lg mb-1">
                            {testimonial.author}
                          </div>
                          <div className="text-blue-100 text-sm">
                            {testimonial.role}
                          </div>
                        </cite>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              </div>
            );
          })}
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
        
        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
          >
            {isAutoPlay ? '⏸️ Pause' : '▶️ Play'} Auto-advance
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
};
