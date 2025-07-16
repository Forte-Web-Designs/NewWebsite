"use client";

import { useState, useEffect, useRef, lazy, Suspense } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { Icon } from "@/components/images/Icon";
import InstantMiniAudit from "@/components/InstantMiniAudit";
import Slider from "react-slick";
import LightButton from "@/components/LightButton";
import ForteMethodSteps from "@/components/ForteMethodSteps";

// Import simple animations (no context required)
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import SimpleAnimatedCounter from '@/components/animations/SimpleAnimatedCounter';
import { HeroBackgroundAnimation, SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

// Lazy load non-critical components for better performance
const ContactForm = lazy(() => import("@/components/ContactForm"));
const CalendlyWidget = lazy(() => import("@/components/CalendlyWidget"));
const PricingPage = lazy(() => import("@/components/pricing").then(mod => ({ default: mod.PricingPage })));
const MobileServicesSlider = lazy(() => import("@/components/slider/MobileServicesSlider"));
const MeetSethSection = lazy(() => import("@/components/MeetConnorSection"));
const LazySliderCSS = lazy(() => import("@/components/performance/LazySliderCSS"));

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const [isDark, setIsDark] = useState(false);
  const [isNavigatingToAudit, setIsNavigatingToAudit] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayTimeout, setOverlayTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);
  const [autoRunUrl, setAutoRunUrl] = useState<string>("");

  // Check for URL parameters on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const url = urlParams.get('url');
      const shouldAutoRun = urlParams.get('autorun') === 'true';
      
      if (url && shouldAutoRun) {
        setAutoRunUrl(url);
      }
    }
  }, []);

  // Minimum distance for swipe detection
  const minSwipeDistance = 50;

  const handleFullAuditClick = (url: string, seoScore?: number) => {
    setIsNavigatingToAudit(true);

    // Check if user is on mobile
    const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

    // Add a slight delay for visual feedback
    setTimeout(() => {
      const params = new URLSearchParams({
        url: url,
        autorun: "true",
      });

      // Add mobile-specific parameter for enhanced UX
      if (isMobile) {
        params.append("mobile-redirect", "true");
      }

      // Route high-performing sites to competitive analysis page
      if (seoScore && seoScore >= 8) {
        params.append("type", "high-performer");
        window.location.href = `/solutions/competitive-analysis?${params.toString()}`;
      } else {
        // Regular audit for sites that need improvement
        window.location.href = `/solutions/seotool?${params.toString()}`;
      }
    }, 200);
  };

  // Touch event handlers for mobile swipe with better gesture detection
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsSwiping(false);
    // Clear any existing overlay timeout when starting a touch
    if (overlayTimeout) {
      clearTimeout(overlayTimeout);
      setOverlayTimeout(null);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const currentX = e.targetTouches[0].clientX;
    setTouchEnd(currentX);
    
    // If user is swiping significantly, mark as swiping and prevent default
    if (touchStart !== null) {
      const distance = Math.abs(touchStart - currentX);
      if (distance > 10) {
        setIsSwiping(true);
        e.preventDefault();
      }
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsSwiping(false);
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        // Swipe left - next slide
        setCurrentSlide((prevSlide) => 
          prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
        );
      } else if (isRightSwipe) {
        // Swipe right - previous slide
        setCurrentSlide((prevSlide) => 
          prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
        );
      }
      // Hide overlay during swipe
      setShowOverlay(false);
    }
    
    // Reset touch values after a brief delay to allow click detection
    setTimeout(() => {
      setIsSwiping(false);
      setTouchStart(null);
      setTouchEnd(null);
    }, 100);
  };

  // Handle image click to show overlay with delay - only if not swiping
  const handleImageClick = (e: React.MouseEvent) => {
    // Only show overlay if this was a tap/click, not the end of a swipe
    if (!isSwiping && touchStart === null && touchEnd === null) {
      e.stopPropagation();
      setShowOverlay(true);
      
      // Auto-hide overlay after 3 seconds if not clicked
      const timeout = setTimeout(() => {
        setShowOverlay(false);
      }, 3000);
      
      setOverlayTimeout(timeout);
    }
  };

  // Handle overlay button click
  const handleOverlayClick = () => {
    if (overlayTimeout) {
      clearTimeout(overlayTimeout);
    }
    window.location.href = '/about/work';
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (overlayTimeout) {
        clearTimeout(overlayTimeout);
      }
    };
  }, [overlayTimeout]);

  const sliderItems = [
    {
      title: "🔍 1. Foundations",
      description:
        "Clarity → Faster Results\nWe start with a deep discovery session to align your brand, audience, and goals. No fluff—just clarity that drives focused execution.",
      icon: "/images/home/foundation.svg",
      tagline: "Clarity → Faster Results"
    },
    {
      title: "🧠 2. Refine", 
      description:
        "Feedback → On-Brand Accuracy\nWe turn insights into direction with collaborative design mockups and wireframes. Your feedback shapes the final product before we ever write a line of code.",
      icon: "/images/home/refine.svg",
      tagline: "Feedback → On-Brand Accuracy"
    },
    {
      title: "💻 3. Build",
      description:
        "Clean Code → Speed & Security\nEvery site is hand-coded line by line. No bloated builders, no plugins. Just fast, secure, search-optimized performance from the start.",
      icon: "/images/home/tailor.svg",
      tagline: "Clean Code → Speed & Security"
    },
    {
      title: "🚀 4. Launch",
      description:
        "Optimized Setup → Ready for Traffic\nWe deploy your site with all the essentials: SEO-ready structure, mobile optimization, and analytics tools set to track what matters most.",
      icon: "/images/home/elevate.svg",
      tagline: "Optimized Setup → Ready for Traffic"
    },
    {
      title: "🔧 5. Grow",
      description:
        "Ongoing Support → Compounding ROI\nWith Forte Care™, your site stays updated, secure, and optimized. And when you're ready to scale with SEO, ads, or social—we've already laid the groundwork for it to work.",
      icon: "/images/home/elevate.svg",
      tagline: "Ongoing Support → Compounding ROI"
    },
  ];

  const sliderImages = [
    { id: 1, src: "/images/home/slider1.webp" },
    { id: 2, src: "/images/home/slider2.webp" },
    { id: 3, src: "/images/home/slider3.webp" },
    { id: 4, src: "/images/home/slider4.webp" },
  ];

  // Update slider settings to be more responsive
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300, // Faster transition for manual navigation
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true,
    cssEase: "ease-in-out", // Smoother easing
    pauseOnHover: false,
    pauseOnFocus: false,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
    },
    afterChange: (current: number) => {
      // Ensure state is synced after transition
      setCurrentSlide(current);
    },
  };

  // Function to handle thumbnail clicks with immediate response
  const handleThumbnailClick = (index: number) => {
    if (sliderRef.current && index !== currentSlide) {
      // Immediately update the current slide state
      setCurrentSlide(index);

      // Navigate to the slide with faster speed
      sliderRef.current.slickGoTo(index);

      // Restart autoplay by pausing and then resuming
      sliderRef.current.slickPause();

      // Resume autoplay after a brief moment to reset the timer
      setTimeout(() => {
        if (sliderRef.current) {
          sliderRef.current.slickPlay();
        }
      }, 50);
    }
  };

  useEffect(() => {
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    setIsDark(darkModeEnabled);

    const observer = new MutationObserver(() => {
      const updatedDarkMode =
        document.documentElement.classList.contains("dark");
      setIsDark(updatedDarkMode);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Auto-slide functionality for mobile portfolio showcase
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoSlideInterval);
  }, [sliderImages.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
        {/* Modern animated background elements */}
        <HeroBackgroundAnimation className="opacity-60" />
        
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#7f8bdb00] to-[#FFFFFF] dark:bg-gradient-to-b dark:from-[#0c0f265a] dark:to-[#000000] z-0"></div>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          
          {/* Mobile Hero Content - Streamlined Layout */}
          <div className="lg:hidden">
            {/* Mobile Hero Text Section */}
            <div className="mb-8">
              <SimpleScrollReveal direction="up" delay={50}>
                <div className="text-center space-y-6">
                  <div className="inline-block rounded-[5px] border pt-2 pb-2 pl-3 pr-3 bg-gradient-to-r from-[rgba(90,115,255,0.18)] to-transparent border-transparent [border-image:linear-gradient(90deg,rgba(124,142,255,0.4)_0%,rgba(255,255,255,0)_100%)]">
                    <p className="font-sans font-normal text-[12px] leading-[14px] tracking-[-0.24px] text-transparent bg-clip-text bg-gradient-to-r from-[#1C3AF6] to-[#8495FF] dark:from-[#F59E0B] dark:to-[#FBBF24]">
                      20+ Businesses Growing with Forte
                    </p>
                  </div>
                  
                  <h1 className="font-display font-medium text-[28px] sm:text-[36px] leading-[32px] sm:leading-[40px] tracking-[-0.04em] text-black dark:text-white px-4">
                    <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Hand-Coded Websites</span> That Drive Results
                  </h1>
                  
                  <div className="px-4 max-w-2xl mx-auto">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">⚡</span>
                        </div>
                        <span className="font-display font-medium text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-[#626262] dark:text-white">
                          Meticulously built for performance
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">🛡️</span>
                        </div>
                        <span className="font-display font-medium text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-[#626262] dark:text-white">
                          Hardened for security
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">📈</span>
                        </div>
                        <span className="font-display font-medium text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-[#626262] dark:text-white">
                          Tuned for serious growth
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
            
            {/* Mobile Portfolio Showcase - Interactive Slider */}
            <div className="px-4">
              <SimpleScrollReveal direction="up" delay={100}>
                <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl">
                  {/* Portfolio Header */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Portfolio Showcase</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Portfolio Slider */}
                  <div className="relative p-3">
                    <div 
                      className="relative rounded-lg overflow-hidden cursor-pointer" 
                      onClick={handleImageClick}
                    >
                      {/* Slider Container */}
                      <div 
                        className="relative w-full h-[200px] sm:h-[250px] overflow-hidden rounded-lg"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        style={{ touchAction: 'pan-y' }} // Allow vertical scrolling but handle horizontal gestures
                      >
                        <div 
                          className="flex transition-transform duration-500 ease-in-out h-full"
                          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                          {sliderImages.map((item, index) => (
                            <div key={item.id} className="w-full h-full flex-shrink-0">
                              <OptimizedImage
                                src={item.src}
                                width={400}
                                height={250}
                                alt={`Portfolio Example ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                priority={index === 0}
                                loading={index === 0 ? 'eager' : 'lazy'}
                                sizes="(max-width: 768px) 100vw, 400px"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Overlay with View Work Button */}
                      <div className={`absolute inset-0 bg-black/40 transition-all duration-300 rounded-lg flex items-center justify-center ${
                        showOverlay ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOverlayClick();
                          }}
                          className="bg-white/95 dark:bg-gray-900/95 px-6 py-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
                        >
                          <span className="text-lg font-semibold text-gray-900 dark:text-white">View Our Work →</span>
                        </button>
                      </div>

                      {/* Navigation Arrows */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          const prevSlide = currentSlide === 0 ? sliderImages.length - 1 : currentSlide - 1;
                          setCurrentSlide(prevSlide);
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 z-20"
                        aria-label="Previous image"
                      >
                        <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          const nextSlide = currentSlide === sliderImages.length - 1 ? 0 : currentSlide + 1;
                          setCurrentSlide(nextSlide);
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 dark:bg-gray-800/80 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 z-20"
                        aria-label="Next image"
                      >
                        <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Interactive Navigation Dots */}
                  <div className="flex justify-center gap-2 pb-4">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                          index === currentSlide 
                            ? 'bg-primary-500 w-6' 
                            : 'bg-gray-300 dark:bg-gray-600 w-2 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>

          {/* Desktop Hero Content - Side by Side */}
          <div className="hidden lg:block">
            <div className="rounded-[22px] border border-[#DCDCDC] bg-white shadow-[0px_44px_44px_-30px_#00000026] dark:bg-[#0C0C0C] dark:border-[#323232] dark:shadow-[0px_44px_44px_30px_#00000026] pt-5 pr-3 pb-5 pl-5">
              <div className="grid lg:grid-cols-2 items-center gap-8 rounded-[10px] border border-[#DCDCDC] bg-[#F8F8F8] bg-[url('/images/home/banner-bg.png')] bg-cover bg-center bg-no-repeat p-6 dark:border-[#323232] dark:bg-[#141414] dark:bg-[url('/images/home/dark-banner-bg.png')]">
                
                {/* Left Column - Content */}
                <SimpleScrollReveal direction="left" delay={50}>
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <div className="inline-block rounded-[5px] border pt-2 pb-2 pl-3 pr-3 bg-gradient-to-r from-[rgba(90,115,255,0.18)] to-transparent border-transparent [border-image:linear-gradient(90deg,rgba(124,142,255,0.4)_0%,rgba(255,255,255,0)_100%)]">
                        <p className="font-sans font-normal text-[16px] leading-[18px] tracking-[-0.24px] text-transparent bg-clip-text bg-gradient-to-r from-[#1C3AF6] to-[#8495FF] dark:from-[#F59E0B] dark:to-[#FBBF24]">
                          20+ Businesses Growing with Forte
                        </p>
                      </div>
                      
                      <SimpleScrollReveal direction="up" delay={100}>
                        <h1 className="font-display font-medium text-[70px] leading-[74px] tracking-[-0.04em] text-black dark:text-white">
                          <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Hand-Coded Websites</span> That <br />Drive Results
                        </h1>
                      </SimpleScrollReveal>
                      
                      <SimpleScrollReveal direction="up" delay={150}>
                        <div className="space-y-4 max-w-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-lg">⚡</span>
                            </div>
                            <span className="font-display font-medium text-[18px] leading-[24px] text-[#626262] dark:text-white">
                              Meticulously built for performance
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-lg">🛡️</span>
                            </div>
                            <span className="font-display font-medium text-[18px] leading-[24px] text-[#626262] dark:text-white">
                              Hardened for security
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-lg">📈</span>
                            </div>
                            <span className="font-display font-medium text-[18px] leading-[24px] text-[#626262] dark:text-white">
                              Tuned for serious growth
                            </span>
                          </div>
                        </div>
                      </SimpleScrollReveal>
                    </div>
                  </div>
                </SimpleScrollReveal>

                {/* Right Column - Interactive Slider */}
                <SimpleScrollReveal direction="right" delay={100}>
                  <div className="relative">
                    <Link href="/about/work" className="block group">
                      <div className="relative rounded-xl shadow-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 cursor-pointer">
                        <Suspense fallback={<div className="w-[626px] h-[619px] bg-gray-200 animate-pulse rounded-xl" />}>
                          <LazySliderCSS priority={true}>
                            <Slider ref={sliderRef} {...sliderSettings}>
                              {sliderImages.map((item, index) => (
                                <div key={item.id}>
                                  <OptimizedImage
                                    src={item.src}
                                    width={626}
                                    height={619}
                                    alt={`Portfolio Showcase ${item.id}`}
                                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                                    priority={index === 0}
                                    loading={index === 0 ? 'eager' : 'lazy'}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 626px"
                                  />
                                </div>
                              ))}
                            </Slider>
                          </LazySliderCSS>
                        </Suspense>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-900/90 px-6 py-3 rounded-full">
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">View Our Work →</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                    
                    {/* Thumbnail Navigation */}
                    <div className="flex justify-center gap-3 mt-6">
                      {sliderImages.map((item, index) => (
                        <button
                          key={item.id}
                          className={`relative rounded-lg overflow-hidden transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                            currentSlide === index
                              ? "ring-2 ring-black dark:ring-white shadow-lg scale-105"
                              : "opacity-70 hover:opacity-100 shadow-md"
                          }`}
                          onClick={() => handleThumbnailClick(index)}
                          aria-label={`View portfolio example ${index + 1}`}
                        >
                          <OptimizedImage
                            src={item.src}
                            width={60}
                            height={60}
                            alt={`Thumbnail ${item.id}`}
                            className="w-15 h-15 object-cover"
                            loading="lazy"
                            sizes="60px"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </SimpleScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Social Proof Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={50}>
            <div className="text-center space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Trusted by Growing Businesses
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                    "Honestly, I was skeptical about another web developer, but Seth proved me wrong. My site is faster than ever and I'm getting calls from customers who found me on Google. Best decision I made for my business this year."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">MR</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        Mike Rodriguez
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Mike's HVAC Repair</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                    "We went from barely being found online to ranking #2 for our main keywords in just a few months. The ROI has been incredible - we're booking twice as many appointments through our website now."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">BC</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        Bella Chen
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Bella's Boutique</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Trust Section with Client Results */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Real Clients, Real Results
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                See what our clients achieved with professional websites that actually work
              </p>
            </div>
          </SimpleScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RC</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">RiverSide Clinic</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">3x More Leads</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">From 8 to 25+ patient inquiries per month</p>
              </div>
            </SimpleScrollReveal>
            
            <SimpleScrollReveal direction="up" delay={300}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PH</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">ProHome Services</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">127% More Traffic</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ranking #1 for "HVAC repair near me"</p>
              </div>
            </SimpleScrollReveal>
            
            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">EB</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Elite Boutique</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$50k+ Revenue</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">First 6 months with new website</p>
              </div>
            </SimpleScrollReveal>
          </div>
          
          <SimpleScrollReveal direction="up" delay={500}>
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Results vary by industry and effort. Your success depends on many factors.
              </p>
              <div className="flex justify-center">
                <LightButton href="/contact" className="bg-primary-600 text-white hover:bg-primary-700">
                  Schedule Call
                </LightButton>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Website Audit CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('/images/home/bg-dark.svg')] opacity-30"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-600/20 to-transparent"></div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left side - Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-blue-400/30 mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">🚀</span>
                  <span className="text-blue-200 font-semibold text-sm sm:text-base">Free Analysis</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Curious How Your Website
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Really Performs</span>?
                </h2>

                <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Want to see how your website really performs? Our free analysis takes 30 seconds and might surprise you.
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 justify-center lg:justify-start text-gray-400 text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>100% Free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>Instant Results</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>No Email Required</span>
                  </div>
                </div>
              </div>

              {/* Right side - Audit Tool */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-white/20 shadow-2xl">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-3">🚀 Free 5-Point Website Audit</h3>
                    <p className="text-white/90 text-sm sm:text-base mb-3">See what's helping or hurting your site — instantly.</p>
                    <p className="text-white/80 text-xs sm:text-sm mb-4">No email. No sales pitch. Just real, helpful insights.</p>
                    
                    {/* What We Check Section */}
                    <div className="bg-white/5 rounded-xl p-3 sm:p-4 mb-4 border border-white/20">
                      <h4 className="text-white/90 font-semibold text-sm mb-3">🔍 What We Check:</h4>
                      <div className="grid grid-cols-1 gap-2 text-xs text-white/80">
                        <div className="flex items-start gap-2">
                          <span className="text-blue-300">⚡</span>
                          <span><strong>PageSpeed & Load Time</strong> – How fast does your site really load?</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-green-300">📱</span>
                          <span><strong>Mobile Friendliness</strong> – Is your site optimized for phones?</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-yellow-300">🔍</span>
                          <span><strong>SEO Basics</strong> – Can Google actually find and rank you?</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-purple-300">🎨</span>
                          <span><strong>Design & Clarity</strong> – Is your homepage clear and conversion-ready?</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-orange-300">🔒</span>
                          <span><strong>Security & Trust Signals</strong> – Do visitors feel safe on your site?</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Why It Matters */}
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-3 border border-blue-400/30 mb-4">
                      <h4 className="text-white font-semibold text-sm mb-2">🎯 Why It Matters:</h4>
                      <p className="text-white/90 text-xs leading-relaxed">
                        You only get one chance to make a digital first impression. 
                        This quick audit shows where you stand — and how to improve.
                      </p>
                    </div>
                    
                    <div className="text-white/90 font-medium text-sm">
                      ✨ Try It Now (Takes 30 Seconds)
                    </div>
                  </div>
                  <InstantMiniAudit
                    onFullAuditClick={handleFullAuditClick}
                    isNavigating={isNavigatingToAudit}
                    autoRunUrl={autoRunUrl}
                  />
                </div>

                {/* Floating elements for visual appeal */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forte Method Steps */}
      <ForteMethodSteps
        items={sliderItems}
        title="The|Forte Method™"
        subtitle="A proven web design system built for results."
      />

      {/* Services Section - Simplified for now */}
      <section className="py-16 md:py-24 dark:bg-[#000000]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              <Icon name="star-icon" alt="star-icon" className="w-[18px] h-[18px] mt-1" />
              <p className="font-sans font-normal text-[12px] sm:text-2xl leading-6 tracking-[-0.24px] text-[#8D9DFF]">
                100% Satisfaction Guaranteed
              </p>
            </div>
            <h4 className="text-[32px] sm:text-[62px] leading-[36px] sm:leading-[62px] font-medium text-center tracking-[-0.078em] font-Roboto dark:text-[#F1F1EF]">
              What We Do Best
            </h4>
          </div>

          {/* Mobile Services Slider */}
          <MobileServicesSlider isDark={isDark} />

          {/* Feature Tags */}
          <div className="mt-10 flex flex-wrap gap-3 lg:gap-4 justify-center items-center max-w-5xl mx-auto">
            {[
              "Lightning Fast Loading", "Fort Knox Security", "Visitors Stay & Convert", "Unlimited Updates", "Premium Hosting",
              "Growth Analytics", "24/7 Support", "Google-Ready", 
              "Conversion Tracking", "Mobile-Optimized"
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 bg-[#F3F3F3] rounded-[16px] px-4 py-2 dark:bg-[#101010] dark:text-[#F1F1EF]"
              >
                <Icon name="newstar" className="w-[18px] h-[19px]" />
                <p className="text-[12px] sm:text-[16px] font-normal font-['Roboto'] text-center">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#FFFFFF] dark:bg-[#000000] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-[#F4F4F4] dark:bg-[#101010] px-4 py-2 rounded-full mb-6">
              <Icon name="star-icon" alt="star-icon" className="w-[18px] h-[18px]" />
              <p className="font-sans font-normal text-[14px] sm:text-lg text-[#8D9DFF]">
                Why Businesses Choose Forte Web Designs
              </p>
            </div>
            <h2 className="text-[32px] sm:text-[56px] lg:text-[62px] leading-[36px] sm:leading-[56px] lg:leading-[62px] font-medium font-Roboto text-[#000000] dark:text-[#F1F1EF] mb-6">
              Real Results for Real Businesses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Stats Cards */}
            <SimpleScrollReveal direction="up" delay={50}>
              <SimpleAnimatedCard hoverEffect="glow" className="bg-white dark:bg-[#101010] rounded-xl p-6 sm:p-8 text-center border border-[#E5E5E5] dark:border-[#262626] shadow-sm">
                <div className="bg-[radial-gradient(87%_57%_at_48%_18%,#203FFC_-13%,rgba(244,244,244,0.8)_138%)] dark:bg-[radial-gradient(87%_57%_at_48%_18%,#203FFC_-13%,#101010_138%)] rounded-xl p-8 mb-4 min-h-[160px] flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-roboto font-bold text-[42px] sm:text-[52px] leading-[1] text-white mb-3">
                      <SimpleAnimatedCounter end={100} suffix="%" />
                    </h3>
                    <p className="font-roboto text-[14px] sm:text-[16px] text-white font-medium leading-tight">
                      Client Satisfaction<br />Guarantee
                    </p>
                  </div>
                </div>
              </SimpleAnimatedCard>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <SimpleAnimatedCard hoverEffect="glow" className="bg-white dark:bg-[#101010] rounded-xl p-6 sm:p-8 text-center border border-[#E5E5E5] dark:border-[#262626] shadow-sm">
                <div className="bg-[radial-gradient(87%_57%_at_48%_18%,#203FFC_-13%,rgba(244,244,244,0.8)_138%)] dark:bg-[radial-gradient(87%_57%_at_48%_18%,#203FFC_-13%,#101010_138%)] rounded-xl p-8 mb-4 min-h-[160px] flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-roboto font-bold text-[42px] sm:text-[52px] leading-[1] text-white mb-3">
                      <SimpleAnimatedCounter end={25} suffix="+" />
                    </h3>
                    <p className="font-roboto text-[14px] sm:text-[16px] text-white font-medium leading-tight">
                      Businesses Growing<br />with Forte
                    </p>
                  </div>
                </div>
              </SimpleAnimatedCard>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={600}>
              <SimpleAnimatedCard hoverEffect="glow" className="bg-white dark:bg-[#101010] rounded-xl p-6 sm:p-8 text-center border border-[#E5E5E5] dark:border-[#262626] shadow-sm">
                <div className="bg-[radial-gradient(87%_57%_at_48%_18%,#203FFC_-13%,rgba(244,244,244,0.8)_138%)] dark:bg-[radial-gradient(87%_57%_at_48%_18%,#203FFC_-13%,#101010_138%)] rounded-xl p-8 mb-4 min-h-[160px] flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="font-roboto font-bold text-[42px] sm:text-[52px] leading-[1] text-white mb-3">
                      <SimpleAnimatedCounter end={1000} suffix="s" />
                    </h3>
                    <p className="font-roboto text-[14px] sm:text-[16px] text-white font-medium leading-tight">
                      Of Leads Generated
                    </p>
                  </div>
                </div>
              </SimpleAnimatedCard>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FFFFFF] dark:bg-[#000000] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center gap-1 mb-4">
              <Icon name="star-icon" alt="star-icon" className="w-[18px] h-[18px] mt-1" />
              <p className="font-sans font-normal text-[12px] sm:text-2xl leading-6 tracking-[-0.24px] text-[#8D9DFF]">
                Proudly a USA Based Company
              </p>
            </div>
            <h4 className="font-roboto font-medium text-[32px] sm:text-[62px] leading-[36px] sm:leading-[62px] tracking-[-1.24px] text-center text-[#000000] dark:text-[#F1F1EF] mb-6">
              Ready to See What's Possible?
            </h4>
            <p className="text-[#626262] font-inter font-normal text-[14px] sm:text-[18px] leading-[14px] sm:leading-[22px] text-center dark:text-[#B4B4B4] mb-8 max-w-2xl mx-auto">
              Choosing the right web partner can feel overwhelming. Let's start with a friendly chat about your goals. No pressure, just possibilities.
            </p>
            <div className="flex justify-center">
              <LightButton href="/contact">Schedule Call</LightButton>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3 max-w-md mx-auto">
              Choosing the right web partner can feel overwhelming. Let's start with a friendly chat about your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <PricingPage />
      
      {/* Forte Ecosystem Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                The Forte™ Ecosystem: Your Complete Growth Solution
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Every service works together seamlessly for maximum results. One experienced developer handling your complete online presence - no juggling multiple vendors.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <SimpleScrollReveal direction="up" delay={300}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Forte Foundation™
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Your website + Forte Care™ included
                </p>
                <div className="text-primary-600 dark:text-primary-400 font-semibold">
                  $200/month
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  + Forte SEO™
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Get found on Google
                </p>
                <div className="text-primary-600 dark:text-primary-400 font-semibold">
                  +$300-500/month
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={500}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  + Forte PPC™
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Drive immediate traffic
                </p>
                <div className="text-primary-600 dark:text-primary-400 font-semibold">
                  +$400-650/month
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={600}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  + Forte Social™
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Build your community
                </p>
                <div className="text-primary-600 dark:text-primary-400 font-semibold">
                  +$200-350/month
                </div>
              </div>
            </SimpleScrollReveal>
          </div>

          <SimpleScrollReveal direction="up" delay={700}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Why the Forte Ecosystem™ Approach Works
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>One experienced developer</strong> - no vendor juggling or communication gaps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Consistent branding</strong> and messaging across all channels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Forte Care™ foundation</strong> ensures all services perform optimally</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Scale as you grow</strong> - start small, add services when ready</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500">✓</span>
                      <span><strong>Personal attention</strong> - you work directly with the developer, not account managers</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-6 text-white text-center">
                    <div className="text-2xl font-bold mb-2">Popular Example:</div>
                    <div className="text-sm opacity-90 mb-3">Foundation + SEO + Social</div>
                    <div className="text-3xl font-bold">$700/month</div>
                    <div className="text-sm opacity-90 mt-2">Complete digital presence</div>
                  </div>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Meet Seth Section */}
      <Suspense fallback={<div className="min-h-[300px] flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
        <MeetSethSection />
      </Suspense>

      {/* Contact Section - Enhanced with Calendly and Map */}
      <section className="py-12 sm:py-16 md:py-20 relative z-10 px-4 sm:px-6 lg:px-8">
        <SectionBackgroundAnimation />
        
        {/* Trust Bar */}
        <div className="mb-12 text-center">
          <div className="py-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm font-medium text-blue-800 dark:text-blue-200">
              <div className="flex items-center gap-2">
                <span className="text-blue-600">🇺🇸</span>
                USA-based Team
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">⚡</span>
                24-hr Response
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-600">✅</span>
                100% Satisfaction Guarantee
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-1 sm:gap-2 text-primary-1000 mb-4 sm:mb-6">
            <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
            Ready to Get Started?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6 max-w-4xl mx-auto">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-primary-1050 text-primary-1400 leading-relaxed max-w-3xl mx-auto mb-8">
            Ready to transform your online presence? Get started with a free 5-point website audit or schedule a strategy call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Suspense fallback={<div className="min-h-[400px] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div></div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Booking Widget & Engaging Map */}
          <div className="space-y-8">
            {/* Calendly Booking Widget */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Prefer to Schedule a Call?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Book a free 30-minute strategy session to discuss your project and see if we're a good fit.
              </p>
              <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>}>
                <CalendlyWidget url="https://calendly.com/seth-fortewebdesigns/30min" />
              </Suspense>
            </div>

            {/* Interactive Location Map */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Dallas-Fort Worth Based
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Proudly serving businesses throughout Texas and nationwide with cutting-edge web solutions.
                  </p>
                  
                  {/* Interactive Google Map */}
                  <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600" style={{height: '300px'}}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429516.5330124774!2d-97.0945249!3d32.8206721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19f77b45974b%3A0xb9ec9ba4f647678f!2sDallas%2C%20TX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{border: 0}}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Dallas, Texas Location"
                    ></iframe>
                    
                    {/* Tech overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
                    
                    {/* Floating tech elements */}
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-lg">
                      🚀 Serving DFW & Beyond
                    </div>
                  </div>
                  
                  {/* Tech stats */}
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">20+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Businesses</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-green-600 dark:text-green-400">24hr</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Response Time</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">5★</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Client Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
