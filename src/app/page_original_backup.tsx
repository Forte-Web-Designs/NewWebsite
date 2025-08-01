"use client";

import { useState, useEffect, useRef, lazy, Suspense } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { Icon } from "@/components/images/Icon";
import Slider from "react-slick";
import LightButton from "@/components/LightButton";

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
const InstantMiniAudit = lazy(() => import("@/components/InstantMiniAudit"));

export default function Home() {
  // Helper function for client examples
  const getClientExample = (index: number) => {
    const examples = [
      "Mike's HVAC discovered 3 competitor advantages that shaped their messaging strategy",
      "Bella's Boutique refined their homepage 4 times before finding the perfect customer flow", 
      "TechCorp's hand-coded site loads in 1.2 seconds vs their old WordPress at 8+ seconds",
      "Sunrise Veterinary went live with perfect mobile optimization and booking integration",
      "Local law firm added 2 new practice areas after seeing monthly SEO keyword opportunities"
    ];
    return examples[index] || "Client saw immediate improvements in user engagement";
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const [isDark, setIsDark] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayTimeout, setOverlayTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  // Check for URL parameters on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Any initialization logic can go here
    }
  }, []);

  // Minimum distance for swipe detection
  const minSwipeDistance = 50;

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

      {/* Quick Social Proof Section - Enhanced as "Trusted By" */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={50}>
            <div className="text-center space-y-8">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full mb-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <span className="text-primary-600 dark:text-primary-400">🌟</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trusted by Growing Businesses</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Join 20+ Businesses Growing with Forte™
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  From local contractors to healthcare professionals, businesses choose Forte for results they can measure.
                </p>
              </div>
              
              {/* Industry Icons */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-2xl">🔧</span>
                  <span className="text-sm font-medium">HVAC Services</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-2xl">👗</span>
                  <span className="text-sm font-medium">Retail Stores</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-2xl">⚖️</span>
                  <span className="text-sm font-medium">Legal Firms</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-2xl">🏥</span>
                  <span className="text-sm font-medium">Healthcare</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-2xl">🏠</span>
                  <span className="text-sm font-medium">Real Estate</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-2xl">🍕</span>
                  <span className="text-sm font-medium">Restaurants</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
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
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
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

      {/* Why Forte Section - New */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-6">
                <span className="text-2xl">💪</span>
                <span className="font-semibold text-blue-700 dark:text-blue-300">Why Choose Forte</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                What Makes Forte™ Different
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                While others use templates and shortcuts, we build websites the right way. Hand-coded, lightning-fast, and designed to grow your business.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Lightning-Fast Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Hand-coded websites that load in under 2 seconds. No bloated plugins or themes slowing you down.
                </p>
                <div className="text-sm text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full inline-block">
                  Average: 1.2s load time
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={300}>
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Rock-Solid Security
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  No plugins means no security vulnerabilities. Your site stays secure and stable, year after year.
                </p>
                <div className="text-sm text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/40 px-3 py-1 rounded-full inline-block">
                  Zero breaches to date
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Built for Conversions
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Every element is strategically designed to turn visitors into customers, not just look pretty.
                </p>
                <div className="text-sm text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/40 px-3 py-1 rounded-full inline-block">
                  2x more leads average
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={500}>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Personal Support
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Work directly with the developer, not account managers. Same-day response guaranteed.
                </p>
                <div className="text-sm text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-900/40 px-3 py-1 rounded-full inline-block">
                  24hr response time
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={600}>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-xl p-6 border border-teal-200 dark:border-teal-800">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🔄</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Ongoing Optimization
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We don't just build and disappear. Continuous improvements keep your site performing at its peak.
                </p>
                <div className="text-sm text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/40 px-3 py-1 rounded-full inline-block">
                  Forte Care™ included
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={700}>
              <div className="bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20 rounded-xl p-6 border border-rose-200 dark:border-rose-800">
                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  100% Satisfaction
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Our guarantee is simple: if you're not thrilled with your website, we'll make it right. No questions asked.
                </p>
                <div className="text-sm text-rose-700 dark:text-rose-300 bg-rose-100 dark:bg-rose-900/40 px-3 py-1 rounded-full inline-block">
                  Risk-free process
                </div>
              </div>
            </SimpleScrollReveal>
          </div>

          <SimpleScrollReveal direction="up" delay={800}>
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-6 max-w-5xl mx-auto text-white">
                {/* Compact Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 bg-blue-600 px-3 py-1 rounded-full mb-3">
                    <span className="text-sm font-medium">🚀 Free Analysis</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Curious How Your Website <span className="text-blue-300">Really</span> Performs?
                  </h3>
                  <p className="text-blue-100 mb-4">
                    Free 30-second analysis. Instant results. No email required.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 items-start">
                  {/* Left Side - Quick Benefits & Checks */}
                  <div className="text-left space-y-4">
                    {/* Benefits in compact format */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2 text-green-300">
                        <span>✓</span><span>100% Free</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-300">
                        <span>✓</span><span>Instant Results</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-300">
                        <span>✓</span><span>No Email Required</span>
                      </div>
                    </div>

                    {/* What We Check - Detailed */}
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-sm font-semibold mb-3 text-blue-300">🔍 What We Check:</div>
                      <div className="space-y-2 text-xs text-blue-100">
                        <div><span className="text-orange-400">🔥</span> <strong>Speed & Performance</strong> – How fast does your site really load?</div>
                        <div><span className="text-blue-400">📱</span> <strong>Mobile Optimization</strong> – Is your site optimized for phones?</div>
                        <div><span className="text-green-400">🟢</span> <strong>SEO Foundation</strong> – How visible are you on Google?</div>
                        <div><span className="text-pink-400">🎨</span> <strong>Design & UX</strong> – Is your homepage clear and conversion-ready?</div>
                        <div><span className="text-yellow-400">🔒</span> <strong>Security & Trust</strong> – Do visitors feel safe on your site?</div>
                      </div>
                    </div>

                    {/* Compact Why It Matters */}
                    <div className="bg-red-500/15 rounded-lg p-3 border border-red-400/20">
                      <div className="text-xs text-red-200">
                        <span className="font-semibold">⚠️ Why It Matters:</span> You get one chance for a great first impression. See where you stand instantly.
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Audit Tool */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-center mb-4">
                      <div className="text-lg font-bold mb-2">✨ Free 5-Point Website Audit</div>
                      <p className="text-blue-200 text-sm">See what's helping or hurting your site — instantly.</p>
                      <p className="text-blue-300 text-xs mt-1">No email. No sales pitch. Just real, helpful insights.</p>
                    </div>

                    {/* Audit Component */}
                    <div>
                      <Suspense fallback={<div className="animate-pulse bg-white/10 h-24 rounded-lg"></div>}>
                        <InstantMiniAudit 
                          onFullAuditClick={(url, seoScore) => {
                            // Navigate to full audit with pre-filled URL
                            window.location.href = `/solutions/seotool?url=${encodeURIComponent(url)}&score=${seoScore || 0}`;
                          }}
                        />
                      </Suspense>
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
                <div className="text-2xl font-bold text-green-600 mb-2">2.5x More Leads</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">From 8 to 20+ patient inquiries per month</p>
              </div>
            </SimpleScrollReveal>
            
            <SimpleScrollReveal direction="up" delay={300}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PH</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">ProHome Services</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">85% More Traffic</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ranking #1 for "HVAC repair near me"</p>
              </div>
            </SimpleScrollReveal>
            
            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">EB</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Elite Boutique</h3>
                <div className="text-2xl font-bold text-green-600 mb-2">$18k+ Revenue</div>
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

      {/* Process Preview - Forte Method Timeline */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              The Forte Method™
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A proven web design system built for results. From discovery to growth, here's exactly how we transform your online presence.
            </p>
          </div>
          
          {/* Visual Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-700 hidden md:block"></div>
            
            {sliderItems.map((item, index) => (
              <div key={index} className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-center">
                  {index % 2 === 0 ? (
                    <>
                      {/* Content on Left */}
                      <div className="pr-8">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                            {item.description}
                          </p>
                          
                          {/* Real Client Example */}
                          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                            <div className="text-sm text-green-700 dark:text-green-400">
                              <strong>Real Example:</strong> {getClientExample(index)}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Timeline Node */}
                      <div className="relative flex justify-start">
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                          {index + 1}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Timeline Node */}
                      <div className="relative flex justify-end">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Content on Right */}
                      <div className="pl-8">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                            {item.description}
                          </p>
                          
                          {/* Real Client Example */}
                          <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                            <div className="text-sm text-green-700 dark:text-green-400">
                              <strong>Real Example:</strong> {getClientExample(index)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed whitespace-pre-line mb-3">
                          {item.description}
                        </p>
                        
                        {/* Real Client Example */}
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                          <div className="text-xs text-green-700 dark:text-green-400">
                            <strong>Real Example:</strong> {getClientExample(index)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Forte Ecosystem Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full mb-6">
                  <span className="text-2xl">🌐</span>
                  <span className="font-semibold text-primary-700 dark:text-primary-300">The Complete System</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  The Forte Ecosystem™: Your Entire Digital Presence, Handled
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                  You're not just getting a website. You're stepping into a powerful, done-for-you system that's built to grow with you.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-8 text-center">
                  "At Forte, we don't stop at launch. We become your behind-the-scenes digital team."
                </blockquote>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 dark:text-primary-400 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        We start with <strong>Forte Foundation™</strong>
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Your fast, secure, hand-coded website designed to convert visitors into customers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 dark:text-primary-400 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Then we evolve into <strong>Forte Pro™</strong>
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Full-service support, analytics, and unlimited updates to keep things sharp.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 dark:text-primary-400 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        We drive traffic through <strong>SEO</strong> and <strong>PPC</strong> strategies
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Built into your plan, aligned with your goals. No searching around. No tech headaches. Just one unified system.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl border border-primary-200 dark:border-primary-800">
                  <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Whether you're a startup or a scaling business, Forte adapts with you.</strong>
                  </p>
                  <p className="text-center text-gray-600 dark:text-gray-400">
                    We build, optimize, and manage it all — so you can stay focused on your business.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>

            {/* Visual Flow */}
            <SimpleScrollReveal direction="up" delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Foundation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fast, secure website that converts</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pro</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Premium support & analytics</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">SEO / PPC</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Targeted traffic & lead generation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ongoing Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Continuous optimization & growth</p>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={600}>
              <div className="text-center">
                <Link href="/pricing">
                  <LightButton>See How It Works</LightButton>
                </Link>
              </div>
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

      {/* Mini ROI Statement */}
      <section className="py-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg border border-gray-200 dark:border-gray-700">
              <span className="text-green-600 dark:text-green-400 font-semibold text-sm">💰 ROI FACT:</span>
              <span className="text-gray-700 dark:text-gray-300 text-sm">
                Our average client sees <strong>2x more leads</strong> within 90 days
              </span>
            </div>
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
          <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-gray-300 text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
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
                Book a free 15-minute strategy session to discuss your project and see if we're a good fit.
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
