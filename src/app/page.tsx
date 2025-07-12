"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { Icon } from "@/components/images/Icon";
import ContactForm from "@/components/ContactForm";
import InstantMiniAudit from "@/components/InstantMiniAudit";
import { PricingPage } from "@/components/pricing";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileServicesSlider from "@/components/slider/MobileServicesSlider";
import LightButton from "@/components/LightButton";
import ForteMethodSlider from "@/components/slider/ForteMethodSlider";
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isNavigatingToAudit, setIsNavigatingToAudit] = useState(false);

  const handleFullAuditClick = (url: string, seoScore?: number) => {
    setIsNavigatingToAudit(true);
    
    // Add a slight delay for visual feedback
    setTimeout(() => {
      const params = new URLSearchParams({ 
        url: url,
        autorun: 'true'
      });
      
      // Route high-performing sites to Forte Care™ page
      if (seoScore && seoScore >= 8) {
        params.append('type', 'protection');
        window.location.href = `/solutions/care?${params.toString()}`;
      } else {
        window.location.href = `/solutions/seotool?${params.toString()}`;
      }
    }, 200);
  };

  const sliderItems = [
    {
      title: "Foundations",
      description:
        "We dive into your goals, brand, and target audience with a personalised onboarding form and call",
      icon: "/images/home/foundation.svg",
    },
    {
      title: "Outline",
      description:
        "We write and structure your content for clarity, SEO, and conversions - no fluff",
      icon: "/images/home/outline.svg",
    },
    {
      title: "Refine",
      description:
        "You review a custom homepage design and give feedback in a collaborative video call",
      icon: "/images/home/refine.svg",
    },
    {
      title: "Tailor",
      description:
        "We hand-code the full site, optimised for mobile, speed, and clean performance",
      icon: "/images/home/tailor.svg",
    },
    {
      title: "Elevate",
      description:
        "We go live, track analytics, and continue refining over time. You grow. We maintain",
      icon: "/images/home/elevate.svg",
    },
  ];

  const sliderImages = [
    { id: 1, src: "/images/home/slider1.png" },
    { id: 2, src: "/images/home/slider2.png" },
    { id: 3, src: "/images/home/slider3.png" },
    { id: 4, src: "/images/home/slider4.png" },
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
    cssEase: 'ease-in-out', // Smoother easing
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
    setMounted(true);
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


  return (
    <>
      {!mounted ? (
        // Render a server-safe version while mounting to prevent hydration mismatch
        <div className="min-h-screen">
          <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#7f8bdb00] to-[#FFFFFF] z-0"></div>
            <div className="container lg:flex-row flex-col flex mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gap-3 pt-5 pr-3 pb-5 pl-5 rounded-[22px] border border-[#DCDCDC] bg-white shadow-[0px_44px_44px_-30px_#00000026]">
              <div className="w-full max-w-[98%] grid lg:grid-cols-2 items-center gap-2.5 rounded-[10px] border border-[#DCDCDC] bg-[#F8F8F8] bg-[url('/images/home/banner-bg.png')] bg-cover bg-center bg-no-repeat p-3">
                <div className="">
                  <div className="mb-6 gap-[25px] grid">
                    <div className="rounded-[5px] border pt-2 pb-2 pl-3 pr-3 bg-gradient-to-r from-[rgba(90,115,255,0.18)] to-transparent border-transparent">
                      <p className="font-sans font-normal text-[12px] sm:text-[16px] leading-[12px] sm:leading-[18px] tracking-[-0.24px] align-middle text-transparent bg-clip-text bg-gradient-to-r from-[#1C3AF6] to-[#8495FF] dark:from-[#F59E0B] dark:to-[#FBBF24]">
                        25+ Businesses Growing with Forte
                      </p>
                    </div>
                    <h1 className="font-display font-medium text-[38px] sm:text-[70px] leading-[40px] sm:leading-[74px] tracking-[-0.04em] align-middle text-black">
                      Websites That Grow With You —<br /><span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Start Fast. Scale Strong.</span>
                    </h1>
                    <p className="font-display font-medium text-[14px] sm:text-[20px] leading-[100%] tracking-[0%] align-middle text-[#626262]">
                      Whether you're launching a new business or ready to level up, Forte Web Designs offers one powerful path: fully custom-coded websites built for speed, security, and long-term growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#7f8bdb00] to-[#FFFFFF] dark:bg-gradient-to-b dark:from-[#0c0f265a] dark:to-[#000000] z-0"></div>
        <div className="container lg:flex-row flex-col flex mx-auto px-4 sm:px-6 lg:px-8 relative z-10 gap-3 pt-5 pr-3 pb-5 pl-5 rounded-[22px] border border-[#DCDCDC] bg-white shadow-[0px_44px_44px_-30px_#00000026] dark:bg-[#0C0C0C] dark:border-[#323232] dark:shadow-[0px_44px_44px_30px_#00000026]">
          <div className="w-full max-w-[98%] grid lg:grid-cols-2 items-center gap-2.5 rounded-[10px] border border-[#DCDCDC] bg-[#F8F8F8] bg-[url('/images/home/banner-bg.png')] bg-cover bg-center bg-no-repeat p-3 dark:border-[#323232] dark:bg-[#141414] dark:bg-[url('/images/home/dark-banner-bg.png')]">
            <div className="">
              <div className="mb-6 gap-[25px] grid">
                <div className="rounded-[5px] border pt-2 pb-2 pl-3 pr-3 bg-gradient-to-r from-[rgba(90,115,255,0.18)] to-transparent border-transparent [border-image:linear-gradient(90deg,rgba(124,142,255,0.4)_0%,rgba(255,255,255,0)_100%)]">
                  <p
                    className="font-sans font-normal 
  text-[12px]  sm:text-[16px] leading-[12px] sm:leading-[18px] tracking-[-0.24px] align-middle text-transparent bg-clip-text bg-gradient-to-r from-[#1C3AF6] to-[#8495FF] dark:from-[#F59E0B] dark:to-[#FBBF24]"
                  >
                    25+ Businesses Growing with Forte
                  </p>
                </div>
                <h1 className="font-display font-medium text-[38px] sm:text-[70px] leading-[40px] sm:leading-[74px] tracking-[-0.04em] align-middle text-black dark:text-white">
                  Websites That Grow With You —<br /><span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Start Fast. Scale Strong.</span>
                </h1>
                <p className="font-display font-medium text-[14px] sm:text-[20px] leading-[100%] tracking-[0%] align-middle text-[#626262] dark:text-white">
                  Whether you're launching a new business or ready to level up, Forte Web Designs offers one powerful path: fully custom-coded websites built for speed, security, and long-term growth.
                </p>
              </div>
              <div className="flex justify-start flex-col sm:flex-row">
                <LightButton href="/contact">Get Started Today</LightButton>
              </div>
            </div>
            <div className="relative w-[75vw] m-auto lg:w-full">
              {/* Main Slider - Clean and Prominent */}
              <div className="relative rounded-lg shadow-xl overflow-hidden p-2 mb-4 w-full max-w-full">
                <Slider ref={sliderRef} {...sliderSettings}>
                  {sliderImages.map((item) => (
                    <div key={item.id}>
                      <OptimizedImage
                        src={item.src}
                        width={626}
                        height={619}
                        alt={`Slide ${item.id}`}
                        className="w-full h-auto max-w-full"
                        priority={item.id === 1}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
          {/* Thumbnail Navigation */}
          <div className="flex flex-row lg:flex-col gap-2 grid-cols-4 w-full align-baseline items-center justify-center max-w-full lg:max-w-[5%] m-auto">
            {sliderImages.map((item, index) => (
              <div
                key={item.id}
                className={`cursor-pointer rounded-md overflow-hidden transition-all duration-300 grid w-[50px] hover:scale-110 hover:shadow-lg ${currentSlide === index
                    ? "ring-2 ring-[#000000] dark:ring-[#FFFFFF]"
                    : "opacity-70 hover:opacity-100"
                  }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <OptimizedImage
                  src={item.src}
                  width={50}
                  height={50}
                  alt={`Thumbnail ${item.id}`}
                  className="w-[50px] h-[50px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Audit CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('/images/home/bg-dark.svg')] opacity-30"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-600/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-400/30 mb-6">
                  <span className="text-2xl">🚀</span>
                  <span className="text-blue-200 font-semibold">Free Analysis</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  How Does Your Website 
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Compare</span>?
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Get instant insights into your website's performance, SEO health, and security. 
                  See exactly where you stand against competitors in just 2 seconds.
                </p>
                
                <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start text-gray-400">
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
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
                  <div className="text-center mb-6">
                    <h3 className="text-white font-bold text-xl mb-2">🎯 Test Your Website Now</h3>
                    <p className="text-white/80 text-sm">Enter your URL below for instant analysis</p>
                  </div>
                  <InstantMiniAudit 
                    onFullAuditClick={handleFullAuditClick} 
                    isNavigating={isNavigatingToAudit}
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

      {/* Forte Method Slider */}
      <ForteMethodSlider
        items={sliderItems}
        title="The|Forte Method™"
        subtitle="A high-performance web design system built for results."
      />

      {/* Services Section */}
      <section
        className="py-16 md:py-24 dark:bg-[#000000]"
        style={{
          backgroundImage: isDark ? "url('/images/home/bg-dark.svg')" : "url('/images/home/bg-img.svg')"
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8  ">
          <div className="grid gap-[62px]">
            <div className="grid gap-[16px]">
              <div className="flex justify-center gap-1">
                <Icon
                  name="star-icon"
                  alt="star-icon"
                  className="w-[18px] h-[18px] mt-1"
                />
                <p className="font-sans font-normal text-[12px] sm:text-2xl leading-6 tracking-[-0.24px] align-middle text-[#8D9DFF]">
                  100% Satisfaction Guaranteed
                </p>
              </div>
              <div className="">
                <h4 className="text-[32px] sm:text-[62px] leading-[36px] sm:leading-[62px] font-medium text-center align-middle tracking-[-0.078em] font-Roboto dark:text-[#F1F1EF]">
                  Our Services Include
                </h4>
              </div>
            </div>
            {/* ======== SM: Slider (Carousel) version ======== */}
            <MobileServicesSlider isDark={isDark} />

            {/* ======== Desktop: Grid version ======== */}
            <div className="hidden sm:flex flex-wrap -mx-4">
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 px-4">
                <div className="grid gap-[24px] rounded-[16px] px-[20px] sm:px-[100px] py-[20px] sm:py-[50px] bg-gradient-to-b from-[#F4F4F4] to-[rgba(232,232,232,0.5)] dark:bg-[linear-gradient(180deg,_#101010_0%,_rgba(16,16,16,0)_100%)]">
                  <div className="flex justify-center">
                    {isDark ? (
                      <OptimizedImage
                        src="/images/home/Frame8.png"
                        alt="Dark Frame"
                        width={120}
                        height={120}
                        className="flex"
                        priority={true}
                      />
                    ) : (
                      <OptimizedImage
                        src="/images/home/Frame2.png"
                        alt="Light Frame"
                        width={120}
                        height={120}
                        className="flex"
                        priority={true}
                      />
                    )}
                  </div>

                  <h3 className="font-Inter font-medium text-[20px] sm:text-[26px] leading-[36px] sm:leading-8 tracking-normal text-center align-middle">
                    High Performance Websites
                  </h3>
                  <p className="text-[#626262] font-Inter font-normal text-[14px] sm:text-lg leading-[14px] sm:leading-[22px] tracking-normal text-center align-middle">
                    Fully custom-coded websites built for speed, security, and long-term growth. No templates, no page builders.
                  </p>
                  <Link href="/pricing" prefetch={true} className="font-inter font-normal text-[14px] sm:text-[18px] leading-[18px] sm:leading-[22px] text-center text-[#0024FF] flex gap-[8px] items-center justify-center dark:text-[#B2BDFF]">
                    See Pricing{" "}
                    <span>
                      {isDark ? (
                        <Icon
                          name="light-blue-arrow"
                          alt="light-blue-arrow"
                          className="w-[7px] h-[12px] mb-0"
                        />
                      ) : (
                        <Icon
                          name="icon-blue"
                          alt="icon-blue"
                          className="w-[7px] h-[12px] mb-0"
                        />
                      )}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 px-4">
                <div className="grid gap-[24px] rounded-[16px] px-[20px] sm:px-[100px] py-[20px] sm:py-[50px] bg-gradient-to-b from-[#F4F4F4] to-[rgba(232,232,232,0.5)] dark:bg-[linear-gradient(180deg,_#101010_0%,_rgba(16,16,16,0)_100%)]">
                  <div className="flex justify-center">
                    {isDark ? (
                      <OptimizedImage
                        src="/images/home/Frame7.png"
                        alt="Dark Frame"
                        width={120}
                        height={120}
                        className="flex"
                        priority={true}
                      />
                    ) : (
                      <OptimizedImage
                        src="/images/home/Frame3.png"
                        alt="Light Frame"
                        width={120}
                        height={120}
                        className="flex"
                        priority={true}
                      />
                    )}
                  </div>

                  <h3 className="font-Inter font-medium text-[20px] sm:text-[26px] leading-[36px] sm:leading-8 tracking-normal text-center align-middle">
                    SEO Services
                  </h3>
                  <p className="text-[#626262] font-Inter font-normal text-[14px] sm:text-lg leading-[14px] sm:leading-[22px] tracking-normal text-center align-middle">
                    Improve your search rankings and drive organic traffic with our comprehensive SEO optimization services.
                  </p>
                  <Link href="/pricing" prefetch={true} className="font-inter font-normal text-[14px] sm:text-[18px] leading-[18px] sm:leading-[22px] text-center text-[#0024FF] flex gap-[8px] items-center justify-center dark:text-[#B2BDFF]">
                    See Pricing{" "}
                    <span>
                      {isDark ? (
                        <Icon
                          name="light-blue-arrow"
                          alt="light-blue-arrow"
                          className="w-[7px] h-[12px] mb-0"
                        />
                      ) : (
                        <Icon
                          name="icon-blue"
                          alt="icon-blue"
                          className="w-[7px] h-[12px] mb-0"
                        />
                      )}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 px-4 mt-5">
                <div className="grid gap-[24px] rounded-[16px] px-[20px] sm:px-[100px] py-[20px] sm:py-[50px] bg-gradient-to-b from-[#F4F4F4] to-[rgba(232,232,232,0.5)] dark:bg-[linear-gradient(180deg,_#101010_0%,_rgba(16,16,16,0)_100%)]">
                  <div className="flex justify-center">
                    {isDark ? (
                      <OptimizedImage
                        src="/images/home/Frame5.png"
                        alt="Dark Frame"
                        width={120}
                        height={120}
                        className="flex"
                        priority={true}
                      />
                    ) : (
                      <OptimizedImage
                        src="/images/home/Frame1.png"
                        alt="Light Frame"
                        width={120}
                        height={120}
                        className="flex"
                        priority={true}
                      />
                    )}
                  </div>

                  <h3 className="font-Inter font-medium text-[20px] sm:text-[26px] leading-[36px] sm:leading-8 tracking-normal text-center align-middle">
                    Google PPC Ads
                  </h3>
                  <p className="text-[#626262] font-Inter font-normal text-[14px] sm:text-lg leading-[14px] sm:leading-[22px] tracking-normal text-center align-middle">
                    Get immediate visibility with targeted Google Ads campaigns designed to drive qualified leads to your business.
                  </p>
                  <Link href="/pricing" prefetch={true} className="font-inter font-normal text-[14px] sm:text-[18px] leading-[18px] sm:leading-[22px] text-center text-[#0024FF] flex gap-[8px] items-center justify-center dark:text-[#B2BDFF]">
                    See Pricing{" "}
                    <span>
                      {isDark ? (
                        <Icon
                          name="light-blue-arrow"
                          alt="light-blue-arrow"
                          className="w-[7px] h-[12px] mb-0"
                        />
                      ) : (
                        <Icon
                          name="icon-blue"
                          alt="icon-blue"
                          className="w-[7px] h-[12px] mb-0"
                        />
                      )}
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 px-4 mt-5">
                <div className="grid gap-[24px] rounded-[16px] px-[20px] sm:px-[100px] py-[20px] sm:py-[50px] bg-gradient-to-b from-[#F4F4F4] to-[rgba(232,232,232,0.5)] dark:bg-[linear-gradient(180deg,_#101010_0%,_rgba(16,16,16,0)_100%)]">
                  <div className="flex justify-center">
                    {isDark ? (
                      <OptimizedImage
                        src="/images/home/Frame6.png"
                        alt="Dark Frame"
                        width={120}
                        height={120}
                        className="flex"
                        priority={true}
                      />
                    ) : (
                      <OptimizedImage
                        src="/images/home/Frame4.png"
                        alt="Light Frame"
                        width={120}
                        height={120}
                        className="flex"
                        priority={true}
                      />
                    )}
                  </div>

                  <h3 className="font-Inter font-medium text-[20px] sm:text-[26px] leading-[36px] sm:leading-8 tracking-normal text-center align-middle">
                    Social Media Management
                  </h3>
                  <p className="text-[#626262] font-Inter font-normal text-[14px] sm:text-lg leading-[14px] sm:leading-[22px] tracking-normal text-center align-middle">
                    Build your brand presence and engage your audience with strategic social media content and management.
                  </p>
                  <Link href="/pricing" prefetch={true} className="font-inter font-normal text-[14px] sm:text-[18px] leading-[18px] sm:leading-[22px] text-center text-[#0024FF] flex gap-[8px] items-center justify-center dark:text-[#B2BDFF]">
                    See Pricing{" "}
                    <span>
                      {isDark ? (
                        <Icon
                          name="light-blue-arrow"
                          alt="light-blue-arrow"
                          className="w-[7px] h-[12px] mb-0"
                        />
                      ) : (
                        <Icon
                          name="icon-blue"
                          alt="icon-blue"
                          className="w-[7px] h-[12px] mb-0"
                        />
                      )}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 lg:gap-4  justify-center items-center max-w-5xl  mx-auto">
            {[
              "Performance",
              "Security",
              "Speed",
              "Ongoing edits",
              "Hosting",
              "Analytics & Support",
              "Unlimited Edits",
              "Organic Setup",
              "Transparent Tracking",
              "Unlimited Edits",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 bg-[#F3F3F3] rounded-[16px] px-4 py-2  col-span-2 sm:col-span-1 lg:col-span-2 dark:bg-[#101010] dark:text-[#F1F1EF]"
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
          <div className="rounded-[20px] pt-[16px] px-[16px] pb-[8px]  sm:pt-[48px] sm:px-[48px] sm:pb-[8px] bg-[#F4F4F4] dark:bg-[#101010]">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 px-4">
                <div className="grid gap-5 sm:gap-10">
                  <div className="flex justify-start gap-1">
                    <Icon
                      name="star-icon"
                      alt="star-icon"
                      className="w-[18px] h-[18px] mt-1"
                    />
                    <p className="font-sans font-normal text-[12px] sm:text-2xl leading-6 tracking-[-0.24px]  align-middle text-[#8D9DFF] ">
                      Why Businesses Choose Forte
                    </p>
                  </div>
                  <div className="">
                    <h4 className="text-[32px] sm:text-[62px] leading-[36px] sm:leading-[62px] font-medium text-start font-Roboto text-[#000000] dark:text-[#F1F1EF]">
                      Results That Speak for Themselves
                    </h4>
                  </div>
                  <div className="">
                    <p className="text-[#626262] font-inter font-normal text-[14px] sm:text-[18px] leading-[14px] sm:leading-[22px] tracking-normal align-middle dark:text-[#B4B4B4]">
                      From fast builder sites to handcrafted custom builds,
                      Forte Web Designs helps small businesses grow online with
                      clean, high-performance websites—delivered with clarity,
                      speed, and care.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-full md:w-full lg:w-1/2 px-4 mt-5  sm:mt-0 ">
                <div className="flex md:justify-normal justify-between align-bottom items-end gap-[16px] sm:gap-[24px]">
                  <div className="main-div w-full ">
                    <h4 className="grid font-roboto font-normal text-[21px] sm:text-[36px] leading-[100%] tracking-[-0.24px] text-center align-middle text-[#203FFC] gap-[4px] dark:text-[#8F9FFF]">
                      100%{" "}
                      <span className="font-roboto font-normal text-[16px] leading-[18px] tracking-[-0.24px] text-center align-middle text-[#203FFC] dark:text-[#8F9FFF]">
                        Client Satisfaction <br /> Guarantee
                      </span>
                    </h4>
                    <div className="w-[100%] h-[200px] bg-[radial-gradient(87%_57%_at_48%_18%,#203FFC_-13%,#F4F4F4_138%)] flex justify-center items-center align-middle mt-2 dark:bg-[radial-gradient(87%_57%_at_48%_18%,#203FFC_-13%,#101010_138%)] rounded-[8px]"></div>
                  </div>
                  <div className="main-div  w-full">
                    <h4 className="grid font-roboto font-normal  text-[21px] sm:text-[36px] leading-[100%] tracking-[-0.24px] text-center align-middle text-[#203FFC] gap-[4px] dark:text-[#8F9FFF]">
                      25+{" "}
                      <span className="font-roboto font-normal text-[16px] leading-[18px] tracking-[-0.24px] text-center align-middle text-[#203FFC] dark:text-[#8F9FFF]">
                        Businesses Growing <br />with Forte
                      </span>
                    </h4>
                    <div className="w-[100%] h-[250px] bg-[radial-gradient(87%_57%_at_48%_18%,#203FFC_-13%,#F4F4F4_138%)]  flex justify-center items-center align-middle mt-2 dark:bg-[radial-gradient(87%_57%_at_48%_18%,#203FFC_-13%,#101010_138%)] rounded-[8px]"></div>
                  </div>
                  <div className="main-div  w-full">
                    <h4 className="grid font-roboto font-normal  text-[21px] sm:text-[36px] leading-[100%] tracking-[-0.24px] text-center align-middle text-[#203FFC] gap-[4px] dark:text-[#8F9FFF]">
                      1000s{" "}
                      <span className="font-roboto font-normal text-[16px] leading-[18px] tracking-[-0.24px] text-center align-middle text-[#203FFC] dark:text-[#8F9FFF]">
                        Of Leads Generated
                      </span>
                    </h4>
                    <div className="w-[100%] h-[300px] bg-[radial-gradient(87%_57%_at_48%_18%,#203FFC_-13%,#F4F4F4_138%)]  flex justify-center items-center align-middle mt-2 dark:bg-[radial-gradient(87%_57%_at_48%_18%,#203FFC_-13%,#101010_138%)] rounded-[8px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mt-[20px]">
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 px-4">
              <div className="sm:rounded-[20px] rounded-tr-[20px] rounded-tl-[20px] sm:p-[16px] px-[16px] pt-[16px] pb-[8px]  bg-[#F4F4F4] dark:bg-[#101010]">
                <div className="main-div order-2 sm:order-1">
                  {isDark ? (
                    <OptimizedImage
                      src="/images/home/Frame9.png"
                      width={581}
                      height={338}
                      alt="grafh"
                      className="w-full h-auto"
                      priority={true}
                    />
                  ) : (
                    <OptimizedImage
                      src="/images/home/Frame10.png"
                      width={581}
                      height={338}
                      alt="grafh"
                      className="w-full h-auto"
                      priority={true}
                    />
                  )}
                </div>
                <div className="my-[20px] order-1 sm:order-2 sm:p-[24px] p-[16px]">
                  <h4 className="font-inter-display font-medium text-[32px] sm:text-[38px] leading-[36px] sm:leading-[38px] tracking-normal align-middle ms-2">
                    24/7 Monitoring & Performance Tracking
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 px-4">
              <div className="sm:rounded-[20px] rounded-b-[20px] sm:p-[16px] px-[16px] pt-[16px] pb-[8px]  bg-[#F4F4F4] dark:bg-[#101010] grid align-middle justify-between items-center w-full h-[100%] sm:gap-[0px] gap-[32px]">
                <div className="main-div sm:p-[24px] p-[16px]">
                  <h4 className="font-inter-display font-medium text-[32px] sm:text-[38px] leading-[36px] sm:leading-[38px] tracking-normal align-middle text-[#000000] dark:text-[#F4F4F4] lg:py-0 md:py-0 sm:py-8">
                    0% Cookie Cutter Templates Used
                  </h4>
                </div>
                <hr className="dark:border-[1px] dark:border-[#262626] " />
                <div className="sm:p-[24px] p-[16px] ">
                  <h4 className="font-inter-display font-medium text-[32px] sm:text-[38px] leading-[36px] sm:leading-[38px] tracking-normal align-middle ">
                    100% U.S. Based Support
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] dark:bg-[#000000] py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="lg:w-[100%] md:w-[full] sm:w-[full] px-4">
              <div className="grid gap-[16px]">
                <div className="flex justify-center gap-1">
                  <Icon
                    name="star-icon"
                    alt="star-icon"
                    className="w-[18px] h-[18px] mt-1"
                  />
                  <p className="font-sans font-normal text-[12px] sm:text-2xl leading-6 tracking-[-0.24px]  align-middle text-[#8D9DFF] ">
                    Proudly US Based Company
                  </p>
                </div>
                <div className="">
                  <h4 className="font-roboto font-medium text-[32px] sm:text-[62px] leading-[36px] sm:leading-[62px] tracking-[-1.24px] text-center align-middle text-[#000000] dark:text-[#F1F1EF]">
                    Working Hard For Small Businesses
                  </h4>
                </div>
                <div className="">
                  <p className="text-[#626262] font-inter font-normal text-[14px] sm:text-[18px] leading-[14px] sm:leading-[22px] tracking-normal align-middle dark:text-[#B4B4B4] text-center">
                    Let's be real—your website shouldn't just exist, it should do work. At Forte Web Designs, we build powerful sites that look sharp, load fast, and actually help you win business. No cookie cutter templates... just strong, reliable websites made for real-world results. We keep it simple, smart, and tailored to your goals. Because when your website wins, so do you.
                  </p>
                </div>
                <div className="flex flex-row sm:flex-row justify-center sm:justify-center">
                  <LightButton href="/about">
                    Learn More About Us
                  </LightButton>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] sm:px-[48px] sm:py-[60px] px-[15px] pb-[24px] pt-[35px]  bg-[#F4F4F4] dark:bg-[#101010] mt-10">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-full md:w-1/2 lg:w-1/2 pl-10 pb-10 lg:pb-0 lg:px-4">
                <div className="flex align-middle lg:justify-center justify-start items-center">
                  <OptimizedImage
                    src="/images/home/shape2.png"
                    alt="shape1"
                    width={470}
                    height={409}
                    className="lg:w-full h-auto w-1/2"
                    priority={true}
                  />
                </div>
              </div>
              <div className="w-full sm:w-full md:w-full lg:w-1/2 sm:py-[60px] sm:pr-[60px] px-[24px] pb-[24px]  grid justify-start  items-center mt-5 sm:mt-0 ">
                <div className="grid justify-start align-middle gap-[14px] ">
                  <h4 className="text-[#000000] font-inter font-medium text-[20px] sm:text-[26px] leading-[24px] sm:leading-[32px] tracking-[0%] align-middle dark:text-[#EEEEEE]">
                    Experts in helping Small Business grow
                  </h4>
                  <p className="text-[#626262] font-inter font-normal text-[14px] sm:text-lg leading-[16px] sm:leading-[22px] tracking-normal align-middle dark:text-[#B4B4B4]">
                    We specialize in creating custom websites that are not only
                    visually appealing but also optimized for performance,
                    ensuring your business stands out in the digital landscape.
                  </p>
                </div>
                <div className="grid justify-start align-middle gap-[14px] mt-10">
                  <h4 className="text-[#000000] font-inter font-medium text-[20px] sm:text-[26px] leading-[24px] sm:leading-[32px] tracking-[0%] align-middle dark:text-[#EEEEEE]">
                    Consistent Availability
                  </h4>
                  <p className="text-[#626262] font-inter font-normal text-[14px] sm:text-lg leading-[16px] sm:leading-[22px] tracking-normal align-middle dark:text-[#B4B4B4]">
                    Our team is always ready to assist you, ensuring that your
                    website remains up-to-date and fully functional, so you can
                    focus on running your business without interruptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[20px] sm:px-[48px] sm:py-[60px] px-[15px] py-[30px]    bg-secondary-1350 dark:bg-[#101010] mt-2">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full sm:w-1/2 lg:w-1/2 px-4 order-1 sm:order-2">
                <div className="flex align-middle lg:justify-center justify-start items-center">
                  <OptimizedImage
                    src="/images/home/shape1.png"
                    alt="shape2"
                    width={470}
                    height={447}
                    className="lg:w-full h-auto w-1/2"
                    priority={true}
                  />
                </div>
              </div>
              <div className="w-full sm:w-full md:w-full lg:w-1/2 sm:py-[60px] sm:pl-[60px] px-[24px] pt-[24px] grid justify-start items-center order-2 sm:order-1">
                <div className="grid justify-start items-center gap-[14px]">
                  <h4 className="text-[#000000] font-inter font-medium text-[20px] sm:text-[26px] leading-[24px] sm:leading-[32px] tracking-[0%] align-middle dark:text-[#EEEEEE]">
                    Goal-Oriented Process
                  </h4>
                  <p className="text-[#626262] font-inter font-normal text-[14px] sm:text-lg leading-[16px] sm:leading-[22px] tracking-normal align-middle dark:text-[#B4B4B4]">
                    We work closely with you to understand your business goals
                    and tailor our services to meet your specific needs,
                    ensuring that your website not only looks great but also
                    drives results.
                  </p>
                </div>
                <div className="grid justify-start align-middle gap-[14px] mt-10">
                  <h4 className="text-[#000000] font-inter font-medium text-[20px] sm:text-[26px] leading-[24px] sm:leading-[32px] tracking-[0%] align-middle dark:text-[#EEEEEE]">
                    Client-First Experience
                  </h4>
                  <p className="text-[#626262] font-inter font-normal text-[14px] sm:text-lg leading-[16px] sm:leading-[22px] tracking-normal align-middle dark:text-[#B4B4B4]">
                    From our initial intake process to scheduling, every aspect
                    is designed with your needs in mind, ensuring a seamless and
                    supportive experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Plans */}
      <PricingPage />
      <ContactForm />
        </>
      )}
    </>
  );
}
