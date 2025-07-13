"use client";

import { OptimizedImage } from '@/components/images/OptimizedImage';
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { BackgroundImage } from "@/components/images/BackgroundImage";
import ForteMethodSteps from "@/components/ForteMethodSteps";
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';


export default function Website2() {

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
        "You review a custom homepage design and give feedback in aa collaborative video call",
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
        "WWe go live, track analytics, and continue refining over time. You grow. We maintain",
      icon: "/images/home/elevate.svg",
    },
  ];

  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        <section className="pt-16 md:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center ">
            <div className="flex gap-2 mb-5 justify-center  md:mb-8">
              <Image src="/images/shared/icons/star.svg" alt="" width={16} height={16} />
              <span className="text-[#8D9DFF] text-sm font-normal md:text-lg  md:text-[#8D9DFF]">
                About
              </span>
            </div>
            <h1 className="sm:text-4xl text-3xl  sm:w-[85%] w-[95%]  tracking-tight text-gray-900 dark:text-white md:text-5xl md:mx-auto text-center ">
              Forte Web Designs
            </h1>
            <p className="mt-6 sm:text-lg text-sm leading-6 text-gray-600 dark:text-gray-400 text-center ">
              Hey, I’m Seth — the founder of Forte Web Designs. I started this company in 2024 because I saw a major gap in the web design world.
            </p>
          </div>
        </div>
      </section>
      <section className="dark:bg-black">
        {/* Header Section */}
        <div className="wrapper ">
          <section>
            <div className="divider w-[2px] h-[100px] bg-[linear-gradient(180deg,#FFFFFF_0%,#132696_100%)] mx-auto mt-8 mb-6"></div>
            <div className=" container bg-[#101010] md:w-[90%] w-[95%]  lg:py-48 md:py-40 sm:py-32 py-20 justify-center rounded-xl text-center items-center mx-auto">
              <h2 className="font-normal text-sm mx-auto  text-gray-700 text-center">Seth’s Pitcure here</h2>
            </div>
            <div className="divider w-[2px] h-[100px] bg-[linear-gradient(180deg,#FFFFFF_0%,#132696_100%)] mx-auto mt-8 mb-6"></div>
            <p className="text-justify lg:w-[60%] md:w-[70%] sm:w-[90%] w-[95%] mx-auto font-medium sm:text-xl text-lg bg-[linear-gradient(163.76deg,#FFFFFF_26.61%,#B1BCFF_83.14%)] dark:text-transparent text-gray-600 bg-clip-text">Too many small business owners were either overpaying for bloated WordPress sites or stuck with some other website drag and drop builder that quite frankly is a waste of money. Some looked decent… but loaded slow, broke often, or left business owners completely in the dark. That didn’t sit right with me. So I built Forte Web Designs to offer a better way — clean, handcrafted websites that load fast, stay secure, and are built to grow with your business. No cookie-cutter layouts. No surprise tech issues. Just smart design, reliable performance, and real results. Whether you choose the Forte Essential™, the all-in-one Forte Growth™ plan, or go big with a Forte Pro™ custom build, you’re getting a site that’s built to last — and a team that’s in your corner long after launch. We believe websites shouldn’t feel like a luxury or a liability — they should be fast, functional, and built to last.</p>
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

        {/* Forte Method Slider */}
        <ForteMethodSteps
          items={sliderItems}
          title="The|Forte Method™"
          subtitle="A high-performance web design system built for results."
        />

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