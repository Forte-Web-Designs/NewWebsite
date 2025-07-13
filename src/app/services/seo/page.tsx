"use client";

import LightButton from "@/components/LightButton";
import { BackgroundImage } from "@/components/images/BackgroundImage";
import { Icon } from "@/components/images/Icon";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "How Long Does It Take? 🤔",
    answer:
      "Some clients see improvements in just a few weeks. Others, especially in competitive markets, may need a few months of consistent SEO to see results. But we'll always be transparent about what's realistic—and we track everything so you can see progress clearly.",
  },
  {
    question: "Ready to Get Started? 🚀",
    answer:
      "Awesome! Getting started is super easy. Just reach out and we'll chat about your business goals and show you exactly how we can help you get found online. No pressure, just honest advice about what'll work best for you.",
  },
];

export default function SeoDesignPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="container max-w-7xl mx-auto flex flex-col md:items-center items-start py-16 md:py-28">
      <span className="sm:text-2xl text-xs font-normal font-roboto flex items-center sm:gap-2 gap-1 text-primary-1000 px-5">
        <Icon name="star" className="sm:h-6 sm:w-6 h-[14px] w-[14px]" />
        Hi there! 👋
      </span>
      <h1 className="md:text-[62px] text-[36px] md:max-w-[794px] font-medium font-roboto md:mt-6 mt-5 w-[100%] max-[768px]:leading-[40px] leading-[66px] dark:text-secondary-1000 md:text-center px-5">
        Tired of Being Invisible on Google?
      </h1>
      <p className="md:text-[18px] text-[14px] font-normal font-inter dark:text-primary-1050 text-primary-1400 lg:w-[824px] md:w-[740px] w-full md:mt-5 mt-4 md:text-center md:leading-[22px] leading-4 px-5">
        Let's be real - if customers can't find you online, you don't exist. Our SEO gets you found by people who are ready to buy what you sell.
      </p>

      <div className="w-full lg:pt-[17rem] lg:pb-[6rem] md:py-36 sm:py-28 py-28 flex flex-col md:gap-5 gap-9 pl-5 pr-4">
        <div className="dark:bg-[radial-gradient(50.48%_57.98%_at_5.98%_5.37%,_#1A1A1A_0%,_rgba(21,21,21,0.5)_50%,_rgba(16,16,16,0)_100%)] bg-[radial-gradient(50.48%_57.98%_at_5.98%_5.37%,_#f4f4f4_0%,_rgba(244,244,244,0.5)_50%,_rgba(244,244,244,0)_100%)] md:pl-[48px] md:pt-[27px] pl-[28px] pt-[20px] md:rounded-tl-3xl rounded-tl-xl md:w-[692px] w-full">
          <div className="flex justify-between items-center">
            <div>
              <p className="md:text-[14px] text-[11px] bg-secondary-1250 md:py-[6px] md:px-4 py-[1px] px-2 rounded-[34px] dark:text-white text-secondary-1050">
                users
              </p>
            </div>
            <div className="flex items-center md:gap-4 gap-2">
              <div className="relative inline-block md:rounded-[34px] rounded-[20px] md:p-[1.11px] p-[0.5px] dark:bg-[linear-gradient(125.29deg,rgba(255,255,255,0.1)_24.73%,rgba(128,128,128,0.05)_39.69%,rgba(0,0,0,0)_54.64%)] bg-primary-1150">
                <button className="flex items-center gap-2 bg-[#1E1E1E80] dark:text-secondary-1500 text-secondary-1050 md:py-[8px] py-[4px] md:px-4 px-2 rounded-[34px] md:text-sm text-[6px] w-full h-full">
                  Daily Active Users
                  <Icon
                    name="down-arrow"
                    className="md:w-[10px] md:h-[6px] w-[4.66px] h-[3.32px] dark:text-secondary-1500 text-secondary-1050"
                  />
                </button>
              </div>

              <div className="relative inline-block md:rounded-[34px] rounded-[20px] md:p-[1.11px] p-[0.5px] dark:bg-[linear-gradient(125.29deg,rgba(255,255,255,0.1)_24.73%,rgba(128,128,128,0.05)_39.69%,rgba(0,0,0,0)_54.64%)] bg-primary-1150">
                <button className="flex items-center gap-2 bg-[#1E1E1E80] dark:text-secondary-1500 text-secondary-1050 md:py-[8px] py-[4px] md:px-4 px-2 pr-10 rounded-[34px] md:text-sm text-[6px] w-full h-full">
                  Last 28 Days
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-end md:gap-3 gap-1.5">
            <p className="md:text-[62px] text-[36px] md:font-medium font-normal dark:text-primary-1550 text-primary-1150 font-roboto md:h-[72px] h-10">
              5.24K
            </p>
            <div className="md:text-[14px] text-[8px] font-normal font-inter dark:text-secondary-1500 text-secondary-1050 flex items-center md:gap-1.5 gap-0.5 bg-primary-1150 rounded-xl md:px-2 px-1 w-fit md:h-6 h-3">
              <Icon
                name="top-arrow"
                className="md:w-[10px] md:h-3 w-[5.42px] h-1"
              />{" "}
              25%
            </div>
          </div>
          <BackgroundImage
            src="/images/services/graph.png"
            alt="Banner description"
            overlayClassName=""
          >
            <div className="md:py-14 py-6 flex flex-col md:gap-10 gap-7">
              <div className="flex md:gap-3 gap-2 items-center">
                <p className="md:text-[14px] text-[6px] font-normal font-inter text-primary-1350">
                  6K
                </p>
                <div className="relative md:w-[40vw] w-[70vw] h-[1.11px] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_37.93%,rgba(255,255,255,0.04)_65.24%,rgba(255,255,255,0)_92.56%)] bg-[linear-gradient(90deg,#101010_37.93%,#101010_65.24%,#101010_92.56%)]"></div>
              </div>
              <div className="flex md:gap-3 gap-2 items-center">
                <p className="md:text-[14px] text-[6px] font-normal font-inter text-primary-1350">
                  5K
                </p>
                <div className="relative md:w-[40vw] w-[70vw] h-[1.11px] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_37.93%,rgba(255,255,255,0.04)_65.24%,rgba(255,255,255,0)_92.56%)] bg-[linear-gradient(90deg,#101010_37.93%,#101010_65.24%,#101010_92.56%)]"></div>
              </div>
              <div className="flex md:gap-3 gap-2 items-center">
                <p className="md:text-[14px] text-[6px] font-normal font-inter text-primary-1350">
                  4K
                </p>
                <div className="relative md:w-[40vw] w-[70vw] h-[1.11px] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_37.93%,rgba(255,255,255,0.04)_65.24%,rgba(255,255,255,0)_92.56%)] bg-[linear-gradient(90deg,#101010_37.93%,#101010_65.24%,#101010_92.56%)]"></div>
              </div>
            </div>
          </BackgroundImage>
        </div>
        <div className="flex justify-end md:-mt-32">
          <h2 className="md:w-[696px] w-full md:text-[38px] text-[22px] font-medium font-inter max-[767px]:leading-[26px] dark:bg-transparent bg-white relative z-20">
            Here's the thing - we don't just build beautiful websites. We make sure people can actually find them! Our SEO is designed specifically for small businesses who want real results without the confusing agency jargon.
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center text-center lg:py-48 md:py-36 sm:py-10 py-6 px-5">
        <h2 className="md:text-[38px] text-[26px] font-medium font-inter dark:text-secondary-1000">
          Who We Love Working With
        </h2>
        <p className="text-[18px] font-normal font-inter dark:text-primary-1050 text-primary-1400 max-w-[794px] leading-[22px] sm:mt-8 mt-5">
          Whether you're a local service business, online store, or growing company, we've helped all kinds of businesses get found and grow their customer base:
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:mt-16 sm:mt-14 mt-6 lg:gap-[5.2rem] md:gap-10 gap-8 max-[768px]:w-[80%]">
          <div className="flex flex-col items-center gap-3">
            <Icon
              name="location"
              className="h-[28px] w-[22px] md:w-[30px] md:h-[30px]"
            />
            <p className="text-[14px] font-medium font-inter dark:text-white text-primary-1400 leading-[18px] md:w-auto w-[246px]">
              Local Businesses (Contractors, Dentists, Cafes—you name it)
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Icon
              name="bag"
              className="h-[28px] w-[22px] md:w-[30px] md:h-[30px]"
            />
            <p className="text-[14px] font-medium font-inter dark:text-white text-primary-1400 leading-[18px] md:w-auto w-[246px]">
              B2B services (consultants, agencies, software providers)
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Icon
              name="cap"
              className="h-[28px] w-[22px] md:w-[30px] md:h-[30px]"
            />
            <p className="text-[14px] font-medium font-inter dark:text-white text-primary-1400 leading-[18px] md:w-auto w-[246px]">
              Education & training programs
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Icon
              name="cursor"
              className="h-[28px] w-[22px] md:w-[30px] md:h-[30px]"
            />
            <p className="text-[14px] font-medium font-inter dark:text-white text-primary-1400 leading-[18px] md:w-auto w-[246px]">
              Clinics, nonprofits, travel brands, and more
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:items-center lg:py-36 sm:py-28 py-14 px-5">
        <p className="md:text-[38px] text-[26px] font-medium font-inter dark:text-secondary-1000 lg:mb-10 md:mb-9 mb-7 md:leading-[46px] leading-[30px]">
          What's Inside Our SEO Package?
        </p>

        <div className="md:grid md:grid-cols-2 flex flex-col-reverse items-center dark:bg-primary-1150 rounded-[20px] md:gap-5 gap-3 bg-secondary-1350">
          <div className="flex flex-col md:gap-14 gap-6 lg:p-[60px] md:p-10 sm:p-8 p-5 pr-0">
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black md:leading-8 leading-6 md:w-auto w-[85%]">
                1. Rock-Solid Technical Foundation
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal md:leading-[22px] font-inter text-primary-1400 dark:text-primary-1050 md:mt-3 mt-2.5 leading-[18px] md:w-auto w-[94%]">
                Every site we build is lightning-fast and error-free by design. But we go deeper—fixing crawl issues, broken links, and adding the technical magic that makes Google trust your site.
              </p>
            </div>
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black md:leading-8 leading-6 md:w-auto w-[85%]">
                2. Content That Actually Gets Found
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal md:leading-[22px] font-inter text-primary-1400 dark:text-primary-1050 md:mt-3 mt-2.5 leading-[18px] md:w-auto w-[94%]">
                We research what your customers are actually searching for, then create content that matches their needs. Whether it's service pages or helpful blog posts, we make sure you show up when it matters.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center md:p-[60px] p-5">
            <OptimizedImage
              src="/images/services/seo-approach.png"
              width={438}
              height={438}
              alt="Descriptive text"
            />
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 flex flex-col items-center dark:bg-primary-1150 rounded-[20px] md:gap-5 gap-3 mt-5 bg-secondary-1350">
          <div className="flex justify-center items-center md:p-[60px] p-5">
            {/* Replaced large shape image with scalable SVG design */}
            <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-tr from-blue-400/30 to-indigo-500/30 rounded-full animate-pulse delay-300"></div>
              <div className="absolute inset-8 bg-gradient-to-bl from-cyan-400/40 to-blue-500/40 rounded-full animate-pulse delay-700"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl md:text-6xl mb-4">📈</div>
                <div className="text-lg font-semibold text-gray-800 dark:text-white">SEO Growth</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-14 gap-6 lg:p-[60px] md:p-10 sm:p-8 p-5 pr-0">
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black md:leading-8 leading-6 md:w-auto w-[85%]">
                3. Local SEO That Works
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal font-inter md:leading-[22px] text-primary-1400 dark:text-primary-1050  md:mt-3 mt-2.5 leading-[18px] md:w-auto w-[94%]">
                We optimize your Google Business Profile and local listings so you show up when people search "near me." Perfect for service businesses, local stores, and anyone who serves their community.
              </p>
            </div>
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black md:leading-8 leading-6 md:w-auto w-[85%]">
                4. Quality Link Building
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal font-inter md:leading-[22px] text-primary-1400 dark:text-primary-1050 md:mt-3 mt-2.5 leading-[18px] md:w-auto w-[94%]">
                We build relationships with reputable websites and directories to boost your authority. No spammy shortcuts—just quality connections that Google respects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:pt-36 lg:pb-48 sm:py-20 py-10 sm:items-center items-start px-5">
        <h2 className="md:text-[38px] text-[26px] font-medium font-inter text-black dark:text-secondary-1000 lg:mb-9 md:mb-6 mb-1">
          Quick Questions...
        </h2>

        {faqData?.map((faq, index) => (
          <div
            key={index}
            className="dark:bg-primary-1150 bg-secondary-1350 sm:p-8 p-4 rounded-2xl transition-all duration-300 w-full"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="sm:text-[26px] text-[20px] max-[640px]:leading-7 font-medium font-inter dark:text-secondary-1050 text-black">
                {faq.question}
              </h2>
              <button className="transform transition-transform duration-300">
                <svg
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`sm:h-[14px] h-[11px] sm:w-2 w-[6px] transition-transform duration-300 ${expandedIndex === index ? "rotate-[270deg]" : "rotate-90"
                    }`}
                >
                  <path
                    d="M1.01932 12.0736C0.884094 12.1984 0.700785 12.2686 0.509661 12.2686C0.318537 12.2686 0.135229 12.1984 0 12.0736V0.463543C0.135229 
                  0.338685 0.318537 0.268555 0.509661 0.268555C0.700785 0.268555 0.884094 0.338685 1.01932 0.463543L6.78908 5.7974C6.92414 5.92241 7 6.09187
                  7 6.26855C7 6.44524 6.92414 6.6147 6.78908 6.73971L1.01932 12.0736Z"
                    className="fill-gray-900 dark:fill-white"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-300 md:w-auto w-[86%] ${expandedIndex === index ? "max-h-[500px] mt-3" : "max-h-0"
                }`}
            >
              <p className="sm:text-[18px] text-[14px] font-normal font-inter dark:text-primary-1050 text-primary-1400 md:leading-[22px] leading-[18px]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}

        <div className="sm:mt-10 mt-3">
          <LightButton href="/contact">Let's Talk About Your Goals</LightButton>
        </div>
      </div>
    </section>
  );
}
