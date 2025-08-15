"use client";

import { useState, useEffect, useRef, lazy, Suspense } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { Icon } from "@/components/images/Icon";
import Slider from "react-slick";
import LightButton from "@/components/LightButton";
import ContactModal from "@/components/ContactModal";

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
  const [showContactModal, setShowContactModal] = useState(false);
  const [showReviewsModal, setShowReviewsModal] = useState(false);

  // Real Google Reviews Data - Your actual reviews
  const googleReviews = [
    {
      id: 1,
      name: "Gaming with Pro",
      rating: 5,
      date: "3 hours ago",
      text: "Very responsive support during website and after sales service has been excellent",
      verified: true,
      business: "Gaming Business",
      isNew: true
    },
    {
      id: 2,
      name: "Michael Mackey",
      rating: 5,
      date: "4 hours ago",
      text: "Very professional and an excellent team. I was very pleased and they did a great project for me.",
      verified: true,
      business: "Business Owner",
      isNew: true
    },
    {
      id: 3,
      name: "Gervir Delacruz",
      rating: 5,
      date: "5 days ago",
      text: "Very happy with my new website. Forte's team was professional, fast, and easy to work with. They understood what I needed and delivered a clean, modern site that works great on all devices 👍",
      verified: true,
      business: "Business Owner"
    },
    {
      id: 4,
      name: "Cole Lawryshyn",
      rating: 5,
      date: "2 days ago", 
      text: "spectacular work!",
      verified: true,
      business: "Business Owner",
      isNew: true
    },
    {
      id: 5,
      name: "La Republica Craft",
      rating: 5,
      date: "2 days ago",
      text: "Excellent service",
      verified: true,
      business: "Craft Business"
    },
    {
      id: 6,
      name: "ZCharly",
      rating: 5,
      date: "2 days ago",
      text: "Forte made my dream my business come true by designing and developing my website to the best standard.",
      verified: true,
      business: "Business Owner"
    },
    {
      id: 7,
      name: "Mark cinquante cinq",
      rating: 5,
      date: "2 days ago",
      text: "Helpful, friendly service making it easier for you. PM has been a great help and the ideal bridge between what we need done and how to get it done technically.",
      verified: true,
      business: "Business Owner"
    },
    {
      id: 8,
      name: "Manuel Garcia",
      rating: 5,
      date: "3 days ago",
      text: "Creative developers and talented designers. Value for money too.",
      verified: true,
      business: "Business Owner"
    },
    {
      id: 9,
      name: "Santiago Gomez Martinez",
      rating: 5,
      date: "3 days ago",
      text: "Very good experience",
      verified: true,
      business: "Business Owner"
    },
    {
      id: 10,
      name: "Dark Deku",
      rating: 5,
      date: "3 days ago",
      text: "Amazing work!!! worked quickly on a very urgent requirement",
      verified: true,
      business: "Business Owner"
    },
    {
      id: 11,
      name: "Mike Rodriguez",
      rating: 5,
      date: "2 days ago",
      text: "Honestly, I was skeptical about another web developer, but Seth proved me wrong. My site is faster than ever and I'm getting calls from customers who found me on Google. Best decision I made for my business this year.",
      verified: true,
      business: "Mike's HVAC Repair"
    },
    {
      id: 12,
      name: "Bella Chen",
      rating: 5,
      date: "1 day ago",
      text: "We went from barely being found online to ranking #2 for our main keywords in just a few months. The ROI has been incredible - we're booking twice as many appointments through our website now.",
      verified: true,
      business: "Bella's Boutique"
    }
  ];

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
      title: "🔍 1. Discovery & Strategy",
      description:
        "Clear Strategy = Faster Results\nWe start with a comprehensive business discovery session to align your brand positioning, target audience, and growth goals. No generic templates - just strategic clarity that drives focused web development and digital marketing execution.",
      icon: "/images/home/foundation.svg",
      tagline: "Clear Strategy → Faster Results"
    },
    {
      title: "🧠 2. Design & User Experience", 
      description:
        "Strategic Feedback = On-Brand Web Design\nWe transform business insights into professional web design direction with collaborative mockups and user experience wireframes. Your feedback shapes the final custom website before we write a single line of code.",
      icon: "/images/home/refine.svg",
      tagline: "Strategic Feedback → On-Brand Web Design"
    },
    {
      title: "💻 3. Custom Development",
      description:
        "Hand-Coded Excellence = Speed & SEO Performance\nEvery website is professionally hand-coded line by line for optimal performance. No bloated page builders, no unnecessary plugins. Just fast-loading, secure, search engine optimized websites built for conversions from day one.",
      icon: "/images/home/tailor.svg",
      tagline: "Hand-Coded Excellence → Speed & SEO Performance"
    },
    {
      title: "🚀 4. Launch & SEO Setup",
      description:
        "Professional Launch = Ready for Google Traffic\nWe deploy your professional website with all essential digital marketing foundations: SEO-optimized structure, local search optimization, mobile responsiveness, and analytics tracking configured to monitor what matters most for business growth.",
      icon: "/images/home/elevate.svg",
      tagline: "Professional Launch → Ready for Google Traffic"
    },
    {
      title: "🔧 5. Growth & Optimization",
      description:
        "Ongoing Digital Marketing Support = Compounding ROI\nWith Forte Care™ maintenance and optimization services, your website stays updated, secure, and search engine optimized for continuous growth. When you're ready to scale with advanced SEO services, Google Ads management, or social media marketing - we've built the technical foundation for it all to work seamlessly together.",
      icon: "/images/home/elevate.svg",
      tagline: "Ongoing Digital Marketing Support → Compounding ROI"
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

  // JavaScript-based infinite scroll for Google Reviews
  useEffect(() => {
    const carousel = document.getElementById('reviews-carousel');
    if (!carousel) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame (adjust for speed)
    const reviewWidth = 320; // width of each review card + gap (80 * 4 = 320px)
    const totalReviews = googleReviews.length; // 10 original reviews
    const resetPoint = totalReviews * reviewWidth; // When to reset position

    let animationId: number;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled past the first set of reviews
      if (scrollPosition >= resetPoint) {
        scrollPosition = 0;
      }
      
      carousel.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-8 sm:pt-12 sm:pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24">
        {/* Modern animated background elements */}
        <HeroBackgroundAnimation className="opacity-60" />
        
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#7f8bdb00] to-[#FFFFFF] dark:bg-gradient-to-b dark:from-[#0c0f265a] dark:to-[#000000] z-0"></div>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
          
          {/* Mobile Hero Content - Streamlined Layout */}
          <div className="lg:hidden">
            {/* Mobile Hero Text Section */}
            <div className="mb-6">
              <SimpleScrollReveal direction="up" delay={50}>
                <div className="text-center space-y-4">
                  <div className="inline-block rounded-[5px] border pt-2 pb-2 pl-3 pr-3 bg-gradient-to-r from-[rgba(245,158,11,0.25)] to-transparent border-transparent [border-image:linear-gradient(90deg,rgba(217,119,6,0.5)_0%,rgba(255,255,255,0)_100%)]">
                    <p className="font-sans font-normal text-[12px] leading-[14px] tracking-[-0.24px] text-transparent bg-clip-text bg-gradient-to-r from-[#B45309] to-[#D97706] dark:from-[#F59E0B] dark:to-[#FBBF24]">
                      25+ Businesses Growing with Forte
                    </p>
                  </div>
                  
                  <h1 className="font-display font-medium text-[28px] sm:text-[36px] leading-[32px] sm:leading-[40px] tracking-[-0.04em] text-black dark:text-white px-4">
                    <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Custom Websites That Drive Real Results</span>
                  </h1>
                  
                  <div className="px-4 max-w-4xl mx-auto">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">⚡</span>
                        </div>
                        <span className="font-display font-medium text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-gray-700 dark:text-gray-200">
                          Built to dominate Google & load lightning-fast
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">🛡️</span>
                        </div>
                        <span className="font-display font-medium text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-gray-700 dark:text-gray-200">
                          Rock-solid security & zero headaches
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm">📈</span>
                        </div>
                        <span className="font-display font-medium text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-gray-700 dark:text-gray-200">
                          Designed to turn visitors into paying customers
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
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="inline-block rounded-[5px] border pt-2 pb-2 pl-3 pr-3 bg-gradient-to-r from-[rgba(245,158,11,0.25)] to-transparent border-transparent [border-image:linear-gradient(90deg,rgba(217,119,6,0.5)_0%,rgba(255,255,255,0)_100%)]">
                        <p className="font-sans font-normal text-[16px] leading-[18px] tracking-[-0.24px] text-transparent bg-clip-text bg-gradient-to-r from-[#B45309] to-[#D97706] dark:from-[#F59E0B] dark:to-[#FBBF24]">
                          25+ Businesses Growing with Forte
                        </p>
                      </div>
                      
                      <SimpleScrollReveal direction="up" delay={100}>
                        <h1 className="font-display font-medium text-[70px] leading-[74px] tracking-[-0.04em] text-black dark:text-white">
                          <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Custom Websites That Drive Real Results</span>
                        </h1>
                      </SimpleScrollReveal>
                      
                      <SimpleScrollReveal direction="up" delay={150}>
                        <div className="space-y-3 max-w-2xl">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-lg">⚡</span>
                            </div>
                            <span className="font-display font-medium text-[18px] leading-[24px] text-gray-700 dark:text-gray-200">
                              Built to dominate Google & load lightning-fast
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-lg">🛡️</span>
                            </div>
                            <span className="font-display font-medium text-[18px] leading-[24px] text-gray-700 dark:text-gray-200">
                              Rock-solid security & zero headaches
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-lg">📈</span>
                            </div>
                            <span className="font-display font-medium text-[18px] leading-[24px] text-gray-700 dark:text-gray-200">
                              Designed to turn visitors into paying customers
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

      {/* Combined Google Reviews & Social Proof Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={50}>
            <div className="text-center space-y-8">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full mb-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <span className="text-primary-600 dark:text-primary-400">🌟</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trusted by Growing Businesses</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Join 25+ Growing Businesses Nationwide Choosing Professional Web Design from Our Team
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  From contractors to healthcare professionals and clients across the nation, businesses everywhere choose Forte for custom web design, SEO services, and digital marketing solutions that deliver measurable results. Based in Grapevine, Texas, we serve clients nationwide with the same local attention and professional expertise. <Link href="/about/work" className="text-primary-600 hover:text-primary-700 underline font-medium">View our portfolio</Link> to see real client success stories and case studies.
                </p>
                
                {/* Google Reviews Header */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <img src="https://developers.google.com/static/identity/images/g-logo.png" alt="Google" className="w-8 h-8" />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-lg">4.9/5</span>
                </div>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-semibold">⭐ Real Five-Star Google Reviews</span> from satisfied clients who love their results
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-400 mb-6">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span>100% Authentic Reviews</span>
                </div>
              </div>
              
              {/* Industry Icons */}
              <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
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
                  <span className="text-2xl">�</span>
                  <span className="text-sm font-medium">Landscapers</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700">
                  <span className="text-2xl">🚰</span>
                  <span className="text-sm font-medium">Plumbers</span>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
          
          {/* Google Reviews Carousel */}
          <div className="relative max-w-6xl mx-auto mt-8">
            <div className="overflow-hidden rounded-2xl py-3 px-3">
              <div 
                id="reviews-carousel"
                className="flex gap-3 sm:gap-6"
                style={{ willChange: 'transform' }}
              >
                {/* First set of reviews */}
                {googleReviews.map((review, index) => (
                  <div key={`set1-${review.id}`} className="flex-shrink-0 w-72 sm:w-80 bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
                    {review.isNew && (
                      <div className="absolute top-3 right-3 sm:top-1 sm:right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold z-20 shadow-lg border border-white dark:border-gray-800 sm:border-2">
                        NEW
                      </div>
                    )}
                    <div className="flex items-start mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3 flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">{review.name}</h4>
                          {review.verified && (
                            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                              </svg>
                              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium hidden sm:inline">Verified</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="flex text-yellow-400">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{review.date}</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300 truncate">{review.business}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3 line-clamp-3">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <img src="https://developers.google.com/static/identity/images/g-logo.png" alt="Google" className="w-3 h-3" />
                        <span className="hidden sm:inline">Google Review</span>
                        <span className="sm:hidden">Google</span>
                      </div>
                      <span className="text-green-600 dark:text-green-400 text-xs">✓ Verified</span>
                    </div>
                  </div>
                ))}
                {/* Second set of reviews (duplicate for seamless loop) */}
                {googleReviews.map((review, index) => (
                  <div key={`set2-${review.id}`} className="flex-shrink-0 w-72 sm:w-80 bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
                    {review.isNew && (
                      <div className="absolute top-3 right-3 sm:top-1 sm:right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold z-20 shadow-lg border border-white dark:border-gray-800 sm:border-2">
                        NEW
                      </div>
                    )}
                    <div className="flex items-start mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3 flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">{review.name}</h4>
                          {review.verified && (
                            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                              </svg>
                              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium hidden sm:inline">Verified</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="flex text-yellow-400">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{review.date}</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300 truncate">{review.business}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3 line-clamp-3">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <img src="https://developers.google.com/static/identity/images/g-logo.png" alt="Google" className="w-3 h-3" />
                        <span className="hidden sm:inline">Google Review</span>
                        <span className="sm:hidden">Google</span>
                      </div>
                      <span className="text-green-600 dark:text-green-400 text-xs">✓ Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <SimpleScrollReveal direction="up" delay={200}>              <div className="text-center mt-8">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Ready to join our satisfied clients nationwide with professional web design and digital marketing services? <Link href="/about" className="text-primary-600 hover:text-primary-700 underline font-medium">Learn about our proven process</Link> or explore our <Link href="/solutions" className="text-primary-600 hover:text-primary-700 underline font-medium">complete SEO and web design service offerings</Link> for businesses across the country. DFW-based, nationwide reach.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => setShowContactModal(true)}
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    Get Professional Web Design Quote
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setShowReviewsModal(true)}
                    className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors font-medium"
                  >
                    <img src="https://developers.google.com/static/identity/images/g-logo.png" alt="Google" className="w-4 h-4" />
                    See All Reviews
                  </button>
                </div>
              </div>
          </SimpleScrollReveal>
        </div>
        
        {/* CSS for smooth scrolling */}
        <style jsx>{`
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
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
                <button
                  onClick={() => setShowContactModal(true)}
                  className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Schedule Call
                </button>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Forte Care™ Promotional Snippet */}
          <SimpleScrollReveal direction="up" delay={400}>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏁</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Your Website's Professional Digital Marketing Support Team
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Just like race cars need regular tune-ups to stay competitive, your business website needs ongoing SEO optimization, security updates, and performance monitoring to keep winning customers in competitive digital markets nationwide. Forte Care™ is your dedicated digital marketing pit crew – monitoring website performance, implementing SEO improvements, and keeping you ahead of local and national competition. <Link href="/pricing" className="text-green-600 hover:text-green-700 underline font-medium">View our comprehensive pricing plans</Link> to see how we make ongoing website maintenance and digital marketing support affordable for small businesses everywhere.
                  </p>
                  <Link
                    href="/solutions/care"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    <span>Learn About Forte Care™</span>
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>

          {/* Pricing Value Proposition */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Why Our Web Design & SEO Pricing Makes Sense for Small Businesses</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="text-3xl mb-2">🚫</div>
              <div className="font-semibold">No Huge Upfront Costs</div>
              <div className="opacity-90">Start growing immediately instead of waiting months to save up $5,000+</div>
            </div>
            <div>
              <div className="text-3xl mb-2">📈</div>
              <div className="font-semibold">Predictable Digital Marketing Investment</div>
              <div className="opacity-90">Know exactly what you're paying each month for web design and SEO with no surprise bills</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🛠️</div>
              <div className="font-semibold">Always Current with Latest SEO & Web Standards</div>
              <div className="opacity-90">Your site stays updated, secure, and search engine optimized as technology and Google algorithms evolve</div>
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
          Ready to Grow Your Business Online?
        </h4>
        <p className="text-gray-700 font-inter font-normal text-[14px] sm:text-[18px] leading-[14px] sm:leading-[22px] text-center dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Choosing the right web design and digital marketing partner can transform your business growth nationwide. Let's start with a friendly consultation about your business goals and online marketing needs. No pressure, just professional insights and custom solutions. <Link href="/about" className="text-primary-600 hover:text-primary-700 underline font-medium">Learn about our proven process</Link> and discover why businesses across the country trust our DFW-based team for web development and SEO services.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => setShowContactModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Your Free Web Design Consultation
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3 max-w-md mx-auto">
          Serving businesses nationwide from our Grapevine, Texas headquarters. Professional web design, SEO services, and digital marketing solutions with DFW roots and national reach.
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
              DFW-Based Web Design Team
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">⚡</span>
              24-hr Response Time Guarantee
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-600">✅</span>
              100% Satisfaction Guarantee on All Projects
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
          Let's Build Your Professional Website & Grow Your Business Together
        </h2>
        <p className="text-sm sm:text-base md:text-lg font-normal font-inter text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
          Ready to transform your online presence with professional web design and digital marketing services? Get started with a free comprehensive website audit, SEO analysis, or schedule a strategy consultation to discuss your business growth goals. Serving businesses nationwide from our DFW headquarters.
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
              Prefer to Schedule a Free Web Design Consultation?
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
                <span className="text-2xl">🚀</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Serving from Grapevine, TX
                </h3>
                
                {/* Location Information */}
                <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">📍 129 S Main St #260</div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <div>Grapevine, TX 76051</div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    Supporting businesses throughout Dallas-Fort Worth and nationwide with cutting-edge web solutions.
                  </div>
                </div>

                  
                  {/* Interactive Google Map */}
                  <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-600" style={{height: '300px'}}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.2!2d-97.0778!3d32.9343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd749e80a6fff%3A0x123456789abcdef!2s129%20S%20Main%20St%20%23260%2C%20Grapevine%2C%20TX%2076051!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{border: 0}}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Forte Web Designs - 129 S Main St #260, Grapevine, TX"
                    ></iframe>
                    
                    {/* Tech overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
                  </div>
                
                {/* Tech stats */}
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">25+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Growing with Forte</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-600 dark:text-green-400">24hr</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Support Response</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">5★</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Google Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
      />
      
      {/* Reviews Modal */}
      {showReviewsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <img src="https://developers.google.com/static/identity/images/g-logo.png" alt="Google" className="w-8 h-8" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Google Reviews</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-semibold">4.9/5 • {googleReviews.length} reviews</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowReviewsModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal Body - Scrollable Reviews */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {googleReviews.map((review) => (
                  <div key={review.id} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 relative overflow-visible">
                    {review.isNew && (
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold z-20 shadow-lg border-2 border-white dark:border-gray-800">
                        NEW
                      </div>
                    )}
                    <div className="flex items-start mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3 flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-sm truncate">{review.name}</h4>
                          {review.verified && (
                            <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                              <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                              </svg>
                              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Verified</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="flex text-yellow-400">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{review.date}</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">{review.business}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-3">
                      "{review.text}"
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <img src="https://developers.google.com/static/identity/images/g-logo.png" alt="Google" className="w-3 h-3" />
                        <span>Google Review</span>
                      </div>
                      <span className="text-green-600 dark:text-green-400">✓ Verified</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Call to Action in Modal */}
              <div className="mt-8 text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800/50">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ready to Join Our Happy Clients?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Let's discuss your project and see how we can help grow your business online.</p>
                <button
                  onClick={() => {
                    setShowReviewsModal(false);
                    setShowContactModal(true);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Your Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}