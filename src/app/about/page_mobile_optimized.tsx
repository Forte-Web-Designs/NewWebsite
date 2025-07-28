"use client";

import { OptimizedImage } from '@/components/images/OptimizedImage';
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { BackgroundImage } from "@/components/images/BackgroundImage";
import ForteMethodSteps from "@/components/ForteMethodSteps";
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

export default function About() {
  const bulletsData = [
    {
      content: "Lightning-fast speeds for better rankings and lower ad costs",
      image: "/images/shared/icons/thunder.svg"
    },
    {
      content: "No plugins or updates = less risk and fewer issues",
      image: "/images/shared/icons/puzzel.svg"
    },
    {
      content: "Optimized for strong Google Maps and local SEO results",
      image: "/images/shared/icons/search.svg"
    },
    {
      content: "Clean code = better conversions & Google Core Web Vitals",
      image: "/images/shared/icons/cube.svg"
    }
  ]

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

  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section - Mobile Optimized */}
        <section className="pt-12 sm:pt-16 md:pt-24 pb-8 sm:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex gap-2 mb-4 sm:mb-6 md:mb-8 justify-center">
                <Image src="/images/shared/icons/star.svg" alt="" width={16} height={16} className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-[#8D9DFF] text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                  About
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-gray-900 dark:text-white text-center font-medium">
                Forte Web Designs
              </h1>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto px-4">
                Hey, I'm Seth - the founder of Forte Web Designs. I started this company in 2024 because I saw a major gap in the web design world.
              </p>
            </div>
          </div>
        </section>

        <section className="dark:bg-black">
          {/* Seth's Story Section - Mobile Optimized */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="divider w-[2px] h-[60px] sm:h-[80px] md:h-[100px] bg-[linear-gradient(180deg,#FFFFFF_0%,#132696_100%)] mx-auto mb-6 sm:mb-8"></div>
            
            <div className="bg-[#101010] rounded-xl py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 text-center mx-auto mb-6 sm:mb-8">
              <h2 className="font-normal text-xs sm:text-sm text-gray-700">Seth's Picture here</h2>
            </div>
            
            <div className="divider w-[2px] h-[60px] sm:h-[80px] md:h-[100px] bg-[linear-gradient(180deg,#FFFFFF_0%,#132696_100%)] mx-auto mb-8 sm:mb-12"></div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto font-medium bg-[linear-gradient(163.76deg,#FFFFFF_26.61%,#B1BCFF_83.14%)] dark:text-transparent text-gray-600 bg-clip-text text-justify px-4">
              You know what really got to me? Seeing so many amazing business owners getting stuck with websites that just... didn't work for them. Sure, they looked pretty in the demo, but then reality hit-slow loading times, constant updates breaking things, and when something went wrong? Good luck getting help! I started Forte Web Designs because I believe you deserve better. Way better. We build websites the old-school way-by hand, line by line-so they're lightning fast, rock solid, and actually grow your business. No bloated plugins, no surprise crashes, no "sorry, that'll be an extra $200" fees. Whether you go with our Forte Essential™ to get started, our all-in-one Forte Growth™ plan, or create something completely custom with Forte Pro™, you're getting a partner who genuinely cares about your success. Because here's the thing-your website should be working FOR you 24/7, not keeping you up at night wondering if it's still running.
            </p>
          </div>

          {/* What Makes Us Different - Mobile Optimized */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 md:mt-24">
            <div className="border dark:border-[#5C5C5C] border-primary-1250 rounded-xl p-3 sm:p-4 md:p-6 dark:bg-primary-1150">
              <BackgroundImage
                src="/images/services/web-service-back.png"
                alt="Banner description"
                className="flex justify-center items-center rounded-2xl"
              >
                <div className="rounded-xl py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12">
                  <h1 className="font-display font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-white text-center">
                    What Makes Us Different
                  </h1>
                </div>
              </BackgroundImage>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4 sm:mt-6">
                {bulletsData.map((data, index) => (
                  <div className="flex gap-3 sm:gap-4 items-center p-3 sm:p-4 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414]" key={index}>
                    <OptimizedImage 
                      src={data.image} 
                      alt="icon" 
                      width={35} 
                      height={35} 
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 flex-shrink-0"
                    />
                    <p className="font-medium text-xs sm:text-sm md:text-base font-display leading-tight dark:text-white text-gray-600">
                      {data.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Forte Method Section */}
          <ForteMethodSteps
            items={sliderItems}
            title="The|Forte Method™"
            subtitle="A high-performance web design system built for results."
          />

          {/* Who We Help Section - Mobile Optimized */}
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h1 className="font-display font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight dark:text-white text-black mb-4 sm:mb-6">
                Who We Help
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-gray-600 dark:text-gray-400 px-4">
                Whether you run a service-based business, a local storefront, or an online brand, we've helped all types of small businesses rank better and grow their visibility:
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414] text-center">
                <OptimizedImage 
                  src="/images/about/Group 21.png" 
                  alt="Local" 
                  width={28} 
                  height={28} 
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
                <p className="text-xs sm:text-sm dark:text-white text-gray-600">
                  Local Businesses (Contractors, Dentists, Cafes-you name it)
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414] text-center">
                <OptimizedImage 
                  src="/images/about/Vector (5).png" 
                  alt="B2B" 
                  width={33} 
                  height={28} 
                  className="w-7 h-6 sm:w-8 sm:h-7"
                />
                <p className="text-xs sm:text-sm dark:text-white text-gray-600">
                  B2B services (consultants, agencies, software providers)
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414] text-center">
                <OptimizedImage 
                  src="/images/about/Vector (6).png" 
                  alt="Education" 
                  width={38} 
                  height={28} 
                  className="w-8 h-6 sm:w-9 sm:h-7"
                />
                <p className="text-xs sm:text-sm dark:text-white text-gray-600">
                  Education & training programs
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414] text-center">
                <OptimizedImage 
                  src="/images/about/Vector (7).png" 
                  alt="Clinics" 
                  width={32} 
                  height={25} 
                  className="w-7 h-6 sm:w-8 sm:h-6"
                />
                <p className="text-xs sm:text-sm dark:text-white text-gray-600">
                  Clinics, nonprofits, travel brands, and more
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <div className="py-12 sm:py-16">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
