"use client";

import { OptimizedImage } from '@/components/images/OptimizedImage';
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { BackgroundImage } from "@/components/images/BackgroundImage";
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';


export default function Website2() {
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
      content: "Clean code = better conversions & faster loading",
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
        "You review a custom homepage design and give feedback in aa collaborative video call",
      icon: "/images/home/refine.svg",
    },
    {
      title: "Tailor",
      description:
        "We hand-code the full site, designed for mobile, speed, and smooth performance",
      icon: "/images/home/tailor.svg",
    },
    {
      title: "Elevate",
      description:
        "WWe go live, track analytics, and continue refining over time. You grow. We maintain",
      icon: "/images/home/elevate.svg",
    },
  ];

  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex gap-2 mb-4 sm:mb-6 md:mb-8 justify-center">
              <Image src="/images/shared/icons/star.svg" alt="" width={16} height={16} />
              <span className="text-[#8D9DFF] text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                About
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 dark:text-white text-center">
              Forte Web Designs
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 text-center">
              Hey, I'm Seth — the founder of Forte Web Designs. I started this company in 2024 because I saw a major gap in the web design world.
            </p>
          </div>
        </div>
      </section>
      <section className="dark:bg-black bg-gray-50">
        {/* Professional Headshot Section */}
        <div className="wrapper">
          <section className="py-16 md:py-24">
            <div className="divider w-[2px] h-[100px] bg-[linear-gradient(180deg,#FFFFFF_0%,#132696_100%)] mx-auto mt-8 mb-12"></div>
            
            {/* Modern Headshot Container */}
            <div className="container mx-auto max-w-4xl px-4">
              <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 rounded-3xl p-8 md:p-16 lg:p-20 shadow-2xl border border-gray-700/30">
                
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 rounded-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                  
                  {/* Professional Headshot */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-80 animate-pulse"></div>
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
                      <OptimizedImage 
                        src="/images/about/headshot.jpg" 
                        alt="Seth - Founder & Lead Developer of Forte Web Designs"
                        width={288}
                        height={288}
                        className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                        priority
                        sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
                      />
                      {/* Professional Badge */}
                      <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs md:text-sm font-semibold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg border-2 border-white/20">
                        Founder
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional Title */}
                  <div className="space-y-3 sm:space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                      Seth
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-blue-400 font-medium">
                      Founder & Lead Developer
                    </p>
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
                  </div>
                  
                  {/* Personal Stats/Highlights */}
                  <div className="grid grid-cols-3 md:grid-cols-3 gap-3 sm:gap-6 w-full max-w-lg text-center">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10">
                      <div className="text-lg sm:text-2xl font-bold text-white">100%</div>
                      <div className="text-xs sm:text-sm text-gray-400">USA Based</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10">
                      <div className="text-lg sm:text-2xl font-bold text-white">100%</div>
                      <div className="text-xs sm:text-sm text-gray-400">Custom Code</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10">
                      <div className="text-lg sm:text-2xl font-bold text-white">100%</div>
                      <div className="text-xs sm:text-sm text-gray-400">Customer First</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="divider w-[2px] h-[100px] bg-[linear-gradient(180deg,#FFFFFF_0%,#132696_100%)] mx-auto mt-12 mb-8"></div>
            <p className="text-justify lg:w-[60%] md:w-[70%] sm:w-[90%] w-[95%] mx-auto font-medium sm:text-xl text-lg bg-[linear-gradient(163.76deg,#FFFFFF_26.61%,#B1BCFF_83.14%)] dark:text-transparent text-gray-600 bg-clip-text">You know what really got to me? Seeing so many amazing business owners getting stuck with websites that just... didn't work for them. Sure, they looked pretty in the demo, but then reality hit—slow loading times, constant updates breaking things, and when something went wrong? Good luck getting help! I started Forte Web Designs because I believe you deserve better. Way better. We build websites the old-school way—by hand, line by line—so they're lightning fast, rock solid, and actually grow your business. No bloated plugins, no surprise crashes, no "sorry, that'll be an extra $200" fees. Whether you go with our Forte Essential™ to get started, our all-in-one Forte Growth™ plan, or create something completely custom with Forte Pro™, you're getting a partner who genuinely cares about your success. Because here's the thing—your website should be working FOR you 24/7, not keeping you up at night wondering if it's still running.</p>
            {/* <OptimizedImage src="" alt=""/> */}
          </section>
        </div>
        {/* Makes Us Different */}
        <section className=" container md:w-[90%] w-[95%] mx-auto px-[10px] pt-[10px] pb-[30px] border dark:border-[#5C5C5C] border-primary-1250 rounded-xl mt-[100px] dark:bg-primary-1150">
          <BackgroundImage
            src="/images/services/web-service-back.png"
            alt="Banner description"
            className=" flex justify-center items-center max-[768px]:px-3 rounded-2xl"
          >
            <div className="rounded-xl py-20 px-[45px] ">
              <h1 className="font-display font-medium sm:text-[38px] text-[32px] leading-10 text-[white] text-center">What Makes Us Different</h1>
            </div>
          </BackgroundImage>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-4 mt-5">
            {bulletsData.map((data, index) => (
              <div className="flex gap-4 items-center p-4 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414]" key={index}>
                <OptimizedImage src={data.image} alt="icon" width={35} height={35} />
                <p className="font-medium text-[13.56px] font-display leading-[18.2px] dark:text-white text-gray-600">
                  {data.content}
                </p>
              </div>
            ))}
          </div>

        </section>

        {/* Forte Method Timeline */}
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
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
                          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">
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

        <section className=" container w-[90%] mx-auto px-[10px] pt-[10px] pb-[30px]  rounded-xl  dark:bg-black">
          <div className="rounded-xl md:pt-16 md:pb-20 pt-8 pb-10 md:px-[45px]  ">
            <h1 className="font-display font-medium sm:text-[38px] text-[32px] leading-10 dark:text-[white] text-black text-center">Who We Help</h1>
            <p className="mt-6 sm:text-lg text-md leading-6 md:w-[70%] w-[100%]  md:mx-auto text-gray-600 dark:text-gray-400 text-center ">
              Whether you run a service-based business, a local storefront, or an online brand, we’ve helped all types of small businesses rank better and grow their visibility:
            </p>
          </div>
          <div className="dark:bg-black text-white pb-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 items-start text-center">

              {/* Card 1 */}
              <div className="flex flex-col items-center space-y-3 sm:px-4 p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414]">
                <OptimizedImage src="/images/about/Group 21.png" alt="Local" width={28} height={28} />
                <p className="text-sm dark:text-white text-gray-600 ">Local Businesses (Contractors, Dentists, Cafes—you name it)</p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center space-y-3 sm:px-4 p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414]">
                <OptimizedImage src="/images/about/Vector (5).png" alt="B2B" width={33} height={28} />
                <p className="text-sm dark:text-white text-gray-600 ">B2B services (consultants, agencies, software providers)</p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center space-y-3 sm:px-4 p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414]">
                <OptimizedImage src="/images/about/Vector (6).png" alt="Education" width={38} height={28} />
                <p className="text-sm dark:text-white text-gray-600 ">Education & training programs</p>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center space-y-3 sm:px-4 p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414]">
                <OptimizedImage src="/images/about/Vector (7).png" alt="Clinics" width={32} height={25} />
                <p className="text-sm dark:text-white text-gray-600 ">Clinics, nonprofits, travel brands, and more</p>
              </div>

            </div>
          </div>
        </section>
        <div className=" py-16">
          <ContactForm />
        </div>

      </section>
      </div>
    </div>
  );
}