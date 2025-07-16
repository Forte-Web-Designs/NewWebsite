"use client";

import { useState, useEffect, useRef, lazy, Suspense } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { Icon } from "@/components/images/Icon";
import Slider from "react-slick";
import LightButton from "@/components/LightButton";

// Import simple animations
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import { HeroBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

// Lazy load non-critical components
const ContactForm = lazy(() => import("@/components/ContactForm"));
const CalendlyWidget = lazy(() => import("@/components/CalendlyWidget"));
const InstantMiniAudit = lazy(() => import("@/components/InstantMiniAudit"));

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayTimeout, setOverlayTimeout] = useState<NodeJS.Timeout | null>(null);

  // Portfolio images for slider
  const sliderImages = [
    { id: 1, src: "/images/work/placeholder-1.jpg" },
    { id: 2, src: "/images/work/placeholder-2.jpg" },
    { id: 3, src: "/images/work/placeholder-3.jpg" },
    { id: 4, src: "/images/work/placeholder-4.jpg" }
  ];

  // Auto-advance slider
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [sliderImages.length]);

  // Handle image click for overlay
  const handleImageClick = () => {
    setShowOverlay(true);
    if (overlayTimeout) clearTimeout(overlayTimeout);
    
    const timeout = setTimeout(() => {
      setShowOverlay(false);
    }, 3000);
    setOverlayTimeout(timeout);
  };

  const handleOverlayClick = () => {
    window.location.href = '/about/work';
  };

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    if (overlayTimeout) {
      clearTimeout(overlayTimeout);
      setOverlayTimeout(null);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        setCurrentSlide((prevSlide) => 
          prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
        );
      } else if (isRightSwipe) {
        setCurrentSlide((prevSlide) => 
          prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1
        );
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-16 sm:pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
        <HeroBackgroundAnimation className="opacity-60" />
        
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#7f8bdb00] to-[#FFFFFF] dark:bg-gradient-to-b dark:from-[#0c0f265a] dark:to-[#000000] z-0"></div>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          
          {/* Mobile Hero Content */}
          <div className="lg:hidden">
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
                          Lightning-fast performance
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">🛡️</span>
                        </div>
                        <span className="font-display font-medium text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-[#626262] dark:text-white">
                          Enterprise-grade security
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">📈</span>
                        </div>
                        <span className="font-display font-medium text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-[#626262] dark:text-white">
                          Built for conversions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
            
            {/* Mobile Portfolio Showcase */}
            <div className="px-4">
              <SimpleScrollReveal direction="up" delay={100}>
                <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 px-4 py-3 border-b border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="flex-1 text-center">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Recent Work</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative p-3">
                    <div 
                      className="relative rounded-lg overflow-hidden cursor-pointer" 
                      onClick={handleImageClick}
                    >
                      <div 
                        className="relative w-full h-[200px] sm:h-[250px] overflow-hidden rounded-lg"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        style={{ touchAction: 'pan-y' }}
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

                      {/* Overlay */}
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

                      {/* Navigation arrows */}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          const prevSlide = currentSlide === 0 ? sliderImages.length - 1 : currentSlide - 1;
                          setCurrentSlide(prevSlide);
                        }}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200"
                      >
                        <Icon name="arrow-left" className="w-4 h-4 text-gray-700 dark:text-gray-300" alt="Previous" />
                      </button>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          const nextSlide = currentSlide === sliderImages.length - 1 ? 0 : currentSlide + 1;
                          setCurrentSlide(nextSlide);
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 rounded-full p-2 shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-200"
                      >
                        <Icon name="arrow-right" className="w-4 h-4 text-gray-700 dark:text-gray-300" alt="Next" />
                      </button>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center gap-2 mt-4">
                      {sliderImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                              ? 'bg-blue-600 dark:bg-blue-400 w-6' 
                              : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>

          {/* Desktop Hero Content */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="space-y-8">
              <SimpleScrollReveal direction="up" delay={50}>
                <div className="space-y-6">
                  <div className="inline-block rounded-[5px] border pt-2 pb-2 pl-3 pr-3 bg-gradient-to-r from-[rgba(90,115,255,0.18)] to-transparent border-transparent">
                    <p className="font-sans font-normal text-[14px] leading-[16px] tracking-[-0.24px] text-transparent bg-clip-text bg-gradient-to-r from-[#1C3AF6] to-[#8495FF] dark:from-[#F59E0B] dark:to-[#FBBF24]">
                      20+ Businesses Growing with Forte
                    </p>
                  </div>
                  
                  <h1 className="font-display font-medium text-[42px] lg:text-[52px] xl:text-[62px] leading-[46px] lg:leading-[56px] xl:leading-[66px] tracking-[-0.04em] text-black dark:text-white">
                    <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Hand-Coded Websites</span><br />
                    That Drive Results
                  </h1>
                  
                  <p className="text-[18px] lg:text-[20px] leading-[24px] lg:leading-[28px] text-[#626262] dark:text-[#B4B4B4] font-medium max-w-lg">
                    No templates. No plugins. Just lightning-fast, secure websites built to convert visitors into customers.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <LightButton href="/contact">Get Started Today</LightButton>
                    <Link href="/about/work" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-semibold">
                      View Our Work
                      <Icon name="arrow-right" className="w-4 h-4" alt="arrow" />
                    </Link>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>

            {/* Desktop Portfolio Slider */}
            <div className="relative">
              <SimpleScrollReveal direction="up" delay={100}>
                <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Recent Work</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div 
                      className="relative rounded-lg overflow-hidden cursor-pointer group"
                      onClick={handleImageClick}
                    >
                      <div className="relative w-full h-[320px] overflow-hidden rounded-lg">
                        <div 
                          className="flex transition-transform duration-500 ease-in-out h-full"
                          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                          {sliderImages.map((item, index) => (
                            <div key={item.id} className="w-full h-full flex-shrink-0">
                              <OptimizedImage
                                src={item.src}
                                width={500}
                                height={320}
                                alt={`Portfolio Example ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                priority={index === 0}
                                loading={index === 0 ? 'eager' : 'lazy'}
                                sizes="(max-width: 1024px) 50vw, 500px"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg flex items-center justify-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOverlayClick();
                          }}
                          className="bg-white/95 dark:bg-gray-900/95 px-8 py-4 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 transform hover:scale-105"
                        >
                          <span className="text-xl font-semibold text-gray-900 dark:text-white">View Our Work →</span>
                        </button>
                      </div>
                    </div>

                    {/* Thumbnail navigation */}
                    <div className="flex justify-center gap-3 mt-4">
                      {sliderImages.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                              ? 'bg-blue-600 dark:bg-blue-400 w-8' 
                              : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Social Proof */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={50}>
            <div className="text-center mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Trusted by businesses across Texas
              </h2>
            </div>
            
            {/* Industry icons */}
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 opacity-60">
              {[
                { name: "Healthcare", icon: "🏥" },
                { name: "Legal", icon: "⚖️" },
                { name: "Home Services", icon: "🔧" },
                { name: "Professional Services", icon: "💼" },
                { name: "Retail", icon: "🛍️" },
                { name: "Real Estate", icon: "🏠" }
              ].map((industry, index) => (
                <div key={index} className="flex flex-col items-center gap-2 text-center">
                  <span className="text-2xl">{industry.icon}</span>
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{industry.name}</span>
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Free Website Checkup */}
      <section className="py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🆓 Free Website Analysis
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Get Your 5-Point Website Audit
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                See exactly what's holding your website back from getting more leads and conversions.
              </p>
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
                      window.location.href = `/solutions/seotool?url=${encodeURIComponent(url)}&score=${seoScore || 0}`;
                    }}
                  />
                </Suspense>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Real Results from Real Clients
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                See what businesses achieve with websites that actually work
              </p>
            </div>
          </SimpleScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SimpleScrollReveal direction="up" delay={200}>
              <SimpleAnimatedCard className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">RC</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">RiverSide Clinic</h3>
                <div className="text-3xl font-bold text-green-600 mb-3">3x More Leads</div>
                <p className="text-gray-600 dark:text-gray-400">From 8 to 25+ patient inquiries per month</p>
              </SimpleAnimatedCard>
            </SimpleScrollReveal>
            
            <SimpleScrollReveal direction="up" delay={300}>
              <SimpleAnimatedCard className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">PH</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">ProHome Services</h3>
                <div className="text-3xl font-bold text-green-600 mb-3">127% More Traffic</div>
                <p className="text-gray-600 dark:text-gray-400">Ranking #1 for "HVAC repair near me"</p>
              </SimpleAnimatedCard>
            </SimpleScrollReveal>
            
            <SimpleScrollReveal direction="up" delay={400}>
              <SimpleAnimatedCard className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BB</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Bella's Boutique</h3>
                <div className="text-3xl font-bold text-green-600 mb-3">245% ROI</div>
                <p className="text-gray-600 dark:text-gray-400">Website paid for itself in 3 months</p>
              </SimpleAnimatedCard>
            </SimpleScrollReveal>
          </div>

          <SimpleScrollReveal direction="up" delay={500}>
            <div className="text-center mt-12">
              <Link href="/about/work" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-semibold text-lg">
                See More Success Stories
                <Icon name="arrow-right" className="w-5 h-5" alt="arrow" />
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <SimpleScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Get More Leads?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Let's talk about your goals and see how we can help your business grow online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LightButton href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                  Get Started Today
                </LightButton>
                <Link href="tel:8178736655" className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors duration-200 font-semibold text-lg px-6 py-3 border border-white/30 rounded-lg hover:border-white/50">
                  <span>📞</span>
                  (817) 873-6655
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Ready to transform your online presence? Get started with a free consultation or website audit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Suspense fallback={
                <div className="min-h-[400px] flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              }>
                <ContactForm />
              </Suspense>
            </div>

            {/* Booking Widget */}
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Prefer to Schedule a Call?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Book a free 30-minute strategy session to discuss your project.
                </p>
                <Suspense fallback={
                  <div className="h-96 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                }>
                  <CalendlyWidget url="https://calendly.com/seth-fortewebdesigns/30min" />
                </Suspense>
              </div>

              {/* Quick contact info */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Dallas-Fort Worth Based
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <span>📞</span>
                    <a href="tel:8178736655" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                      (817) 873-6655
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span>⚡</span>
                    <span className="text-gray-600 dark:text-gray-400">24-hr Response Guarantee</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span>✅</span>
                    <span className="text-gray-600 dark:text-gray-400">100% Satisfaction Guarantee</span>
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
