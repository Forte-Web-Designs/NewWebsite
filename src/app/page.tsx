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
const LazySliderCSS = lazy(() => import("@/components/performance/LazySliderCSS"));
const InstantMiniAudit = lazy(() => import("@/components/InstantMiniAudit"));

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayTimeout, setOverlayTimeout] = useState<NodeJS.Timeout | null>(null);

  // Check for URL parameters on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Any initialization logic can go here
    }
  }, []);

  // Handle image click to show overlay with delay
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowOverlay(true);
    
    // Auto-hide overlay after 3 seconds if not clicked
    const timeout = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);
    
    setOverlayTimeout(timeout);
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
                      25+ Businesses Growing with Forte
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
                        <span className="font-display font-medium text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-gray-700 dark:text-gray-200">
                          Meticulously built for performance
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">🛡️</span>
                        </div>
                        <span className="font-display font-medium text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-gray-700 dark:text-gray-200">
                          Hardened for security
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">📈</span>
                        </div>
                        <span className="font-display font-medium text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-gray-700 dark:text-gray-200">
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
                          25+ Businesses Growing with Forte
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
                            <span className="font-display font-medium text-[18px] leading-[24px] text-gray-700 dark:text-gray-200">
                              Meticulously built for performance
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-lg">🛡️</span>
                            </div>
                            <span className="font-display font-medium text-[18px] leading-[24px] text-gray-700 dark:text-gray-200">
                              Hardened for security
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-lg">📈</span>
                            </div>
                            <span className="font-display font-medium text-[18px] leading-[24px] text-gray-700 dark:text-gray-200">
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
                  Join 25+ Businesses Growing with Forte™
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

      {/* Free Website Checkup - Compact Version */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('/images/home/bg-dark.svg')] opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-gray-300">Curious How Your</span> <span className="text-blue-400 animate-pulse">Website</span> <span className="text-gray-300">Really</span> <span className="text-green-400 font-extrabold">Performs</span><span className="text-yellow-400">?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                Get instant insights on what's helping or hurting your website's success. Our 5-point analysis covers the critical factors that impact your online performance.
              </p>
              
              {/* 5-Point Analysis Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6 max-w-5xl mx-auto">
                <div className="bg-orange-500/20 rounded-lg p-3 border border-orange-400/30">
                  <div className="text-orange-400 text-2xl mb-2">🔥</div>
                  <div className="text-sm font-semibold text-white mb-1">Speed & Performance</div>
                  <div className="text-xs text-orange-200">How fast does your site really load?</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                  <div className="text-blue-400 text-2xl mb-2">📱</div>
                  <div className="text-sm font-semibold text-white mb-1">Mobile Optimization</div>
                  <div className="text-xs text-blue-200">Is your site optimized for phones?</div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-3 border border-green-400/30">
                  <div className="text-green-400 text-2xl mb-2">🟢</div>
                  <div className="text-sm font-semibold text-white mb-1">SEO Foundation</div>
                  <div className="text-xs text-green-200">How visible are you on Google?</div>
                </div>
                <div className="bg-pink-500/20 rounded-lg p-3 border border-pink-400/30">
                  <div className="text-pink-400 text-2xl mb-2">🎨</div>
                  <div className="text-sm font-semibold text-white mb-1">Design & UX</div>
                  <div className="text-xs text-pink-200">Is your homepage clear and conversion-ready?</div>
                </div>
                <div className="bg-yellow-500/20 rounded-lg p-3 border border-yellow-400/30">
                  <div className="text-yellow-400 text-2xl mb-2">🔒</div>
                  <div className="text-sm font-semibold text-white mb-1">Security & Trust</div>
                  <div className="text-xs text-yellow-200">Do visitors feel safe on your site?</div>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 justify-center text-gray-400">
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
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 lg:p-8 border border-blue-200 dark:border-blue-800/50">
                <Suspense fallback={
                  <div className="min-h-[300px] flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                  </div>
                }>
                  <InstantMiniAudit 
                    onFullAuditClick={(url: string, seoScore?: number) => {
                      window.location.href = `/solutions/seotool?url=${encodeURIComponent(url)}&score=${seoScore || 0}&autorun=true`;
                    }}
                  />
                </Suspense>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Trust Section with Client Results */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
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

      {/* Forte Ecosystem Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🌐 The Complete System
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                The Forte Ecosystem™
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                Your entire digital presence, handled by one expert team. No more juggling multiple vendors—everything works together seamlessly.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-6xl mx-auto">
            {/* Ecosystem Flow */}
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Foundation™</h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mb-2">Website Design Package</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Fast, secure website that converts visitors into customers</p>
                </div>
                
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pro™</h3>
                  <p className="text-xs text-purple-600 dark:text-purple-400 mb-2">Website Design Package</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Premium support, analytics, and unlimited updates</p>
                </div>
                
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">SEO & PPC</h3>
                  <p className="text-xs text-green-600 dark:text-green-400 mb-2">SEO Services & Google Ads Packages</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Strategic traffic generation that brings qualified leads</p>
                </div>
                
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Social Media</h3>
                  <p className="text-xs text-orange-600 dark:text-orange-400 mb-2">Social Media Management Package</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Consistent brand presence and community engagement</p>
                </div>
              </div>
            </SimpleScrollReveal>

            {/* Value Comparison */}
            <SimpleScrollReveal direction="up" delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800/50">
                  <h3 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4 text-center md:text-left">❌ The Old Way (Multiple Vendors)</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
                    <li>• Website guy doesn't talk to SEO guy</li>
                    <li>• PPC ads send traffic to slow pages</li>
                    <li>• Nobody takes responsibility for results</li>
                    <li>• Higher costs, constant vendor management</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800/50">
                  <h3 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4 text-center md:text-left">✅ The Forte Way (One Team)</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
                    <li>• Everything designed to work together</li>
                    <li>• PPC ads → optimized landing pages</li>
                    <li>• One team accountable for your success</li>
                    <li>• Better results, lower total cost</li>
                  </ul>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={400}>
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                  Whether you start with just a website or go full ecosystem, we build, optimize, and manage it all—so you can stay focused on your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <LightButton href="/ecosystem" className="bg-blue-600 text-white hover:bg-blue-700">
                    Learn About the Ecosystem
                  </LightButton>
                  <LightButton href="/pricing" className="border border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                    View Pricing
                  </LightButton>
                </div>
              </div>
            </SimpleScrollReveal>
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

      {/* Pricing Storytelling Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                💰 Simple, Transparent Pricing
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Start Your Growth Journey for <span className="text-blue-600">$200/Month</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Why spend $5,000+ upfront when you can start building your success today? Our Foundation™ website design package gets you a professional website that actually works — for the cost of a few dinners out.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Foundation™ Website Design Package - Primary */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 border-blue-500 shadow-xl relative transform hover:scale-105 transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Foundation™</h3>
                  <div className="text-xs font-semibold text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full mb-2">Website Design Package</div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">$200<span className="text-lg text-gray-500">/mo</span></div>
                  <p className="text-gray-600 dark:text-gray-400">Perfect starting point for serious businesses</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Hand-coded website (no WordPress vulnerabilities)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Lightning-fast loading (under 2 seconds)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Mobile-optimized design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">SSL security & hosting included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Unlimited edits & support</span>
                  </li>
                </ul>
                <Link href="/pricing#foundation" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Start Foundation™
                </Link>
              </div>

              {/* Growth Package */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Growth™</h3>
                  <div className="text-xs font-semibold text-green-600 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full mb-2">Website + SEO Services Bundle</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">$500<span className="text-lg text-gray-500">/mo</span></div>
                  <p className="text-gray-600 dark:text-gray-400">Foundation + SEO for visibility</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Everything in Foundation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Professional SEO optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Google Business setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Monthly SEO reports</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Content optimization</span>
                  </li>
                </ul>
                <Link href="/pricing#growth" className="block w-full bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Choose Growth™
                </Link>
              </div>

              {/* Dominate Package */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Dominate™</h3>
                  <div className="text-xs font-semibold text-purple-600 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full mb-2">Complete Digital Marketing Bundle</div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">$1,200<span className="text-lg text-gray-500">/mo</span></div>
                  <p className="text-gray-600 dark:text-gray-400">Complete digital dominance</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Everything in Growth</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Google Ads management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Social media management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Priority support & strategy</span>
                  </li>
                </ul>
                <Link href="/pricing#dominate" className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                  Choose Dominate™
                </Link>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Why Our Pricing Makes Sense</h3>
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="text-3xl mb-2">🚫</div>
                    <div className="font-semibold">No Huge Upfront Costs</div>
                    <div className="opacity-90">Start growing immediately instead of waiting months to save up $5,000+</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">📈</div>
                    <div className="font-semibold">Predictable Investment</div>
                    <div className="opacity-90">Know exactly what you're paying each month with no surprise bills</div>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🛠️</div>
                    <div className="font-semibold">Always Current</div>
                    <div className="opacity-90">Your site stays updated, secure, and optimized as technology evolves</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/pricing" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Complete Pricing Details
                <span>→</span>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                100% client satisfaction guarantee • No setup fees • Cancel anytime
              </p>
            </div>
          </SimpleScrollReveal>
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
            <p className="text-gray-700 font-inter font-normal text-[14px] sm:text-[18px] leading-[14px] sm:leading-[22px] text-center dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Choosing the right web partner can feel overwhelming. Let's start with a friendly chat about your goals. No pressure, just possibilities.
            </p>
            <div className="flex justify-center">
              <LightButton href="/contact">Schedule Call</LightButton>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3 max-w-md mx-auto">
              Choosing the right web partner can feel overwhelming. Let's start with a friendly chat about your goals.
            </p>
          </div>
        </div>      </section>

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
          <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
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
