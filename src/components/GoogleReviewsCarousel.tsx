"use client";

import { useState, useEffect } from "react";
import { Icon } from "@/components/images/Icon";
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';

interface GoogleReview {
  name: string;
  rating: number;
  date: string;
  review: string;
  reviewCount: string;
}

interface GoogleReviewsCarouselProps {
  reviews: GoogleReview[];
  autoSlide?: boolean;
  slideInterval?: number;
  showGoogleBadge?: boolean;
}

export default function GoogleReviewsCarousel({ 
  reviews, 
  autoSlide = true, 
  slideInterval = 4000,
  showGoogleBadge = true 
}: GoogleReviewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    if (!autoSlide || reviews.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [autoSlide, slideInterval, reviews.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Calculate visible reviews (show 3 on desktop, 1 on mobile)
  const getVisibleReviews = () => {
    const visibleCount = 3;
    const visibleReviews = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % reviews.length;
      visibleReviews.push({ ...reviews[index], displayIndex: i });
    }
    
    return visibleReviews;
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Icon 
        key={i} 
        name="star" 
        className={`w-4 h-4 ${
          i < rating 
            ? 'text-amber-500' 
            : 'text-gray-300 dark:text-gray-600'
        }`} 
      />
    ));
  };

  return (
    <div className="relative">
      {/* Google Badge */}
      {showGoogleBadge && (
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-3 bg-white dark:bg-gray-700 rounded-full px-6 py-3 shadow-md">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="text-sm">
                <div className="font-semibold text-gray-900 dark:text-white">Google Reviews</div>
                <div className="flex items-center space-x-1">
                  {renderStars(5)}
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">5.0 • 50+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reviews Container */}
      <div className="relative overflow-hidden">
        {/* Desktop View - 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {getVisibleReviews().map((review, index) => (
            <SimpleAnimatedCard key={`${currentIndex}-${index}`}>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {review.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {review.date}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed flex-grow mb-4">
                  "{review.review}"
                </p>

                {/* Footer */}
                <div className="text-xs text-gray-500 dark:text-gray-400 border-t pt-3">
                  {review.reviewCount}
                </div>
              </div>
            </SimpleAnimatedCard>
          ))}
        </div>

        {/* Mobile View - 1 card */}
        <div className="md:hidden">
          <SimpleAnimatedCard key={currentIndex}>
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {reviews[currentIndex].name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {reviews[currentIndex].name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {reviews[currentIndex].date}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {renderStars(reviews[currentIndex].rating)}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                "{reviews[currentIndex].review}"
              </p>

              {/* Footer */}
              <div className="text-sm text-gray-500 dark:text-gray-400 border-t pt-3">
                {reviews[currentIndex].reviewCount}
              </div>
            </div>
          </SimpleAnimatedCard>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          aria-label="Previous review"
        >
          <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-700 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          aria-label="Next review"
        >
          <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-primary-600 w-6'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
