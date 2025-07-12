"use client";

import LightButton from "@/components/LightButton";
import { Icon } from "@/components/images/Icon";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: Record<string, FAQItem[]> = {
  "Getting Started": [
    {
      question: "How do I get started?",
      answer:
        "Just fill out our quick contact form and we'll schedule a call to discuss your goals and help you pick the right plan.",
    },
    {
      question: "How long does it take to build my site?",
      answer:
        "Typically, our websites take 4-6 weeks from initial consultation to launch, depending on complexity.",
    },
    {
      question: "Can I give input on the design?",
      answer:
        "Absolutely! We welcome your input and will work closely with you to create a design that matches your vision.",
    },
  ],
  "Plans & Pricing": [
    {
      question: "What payment options do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "We offer a 14-day free trial for our basic plan so you can test our services.",
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer:
        "Yes, you can change your plan at any time with prorated adjustments to your billing.",
    },
  ],
  "Forte Care™ Support": [
    {
      question: "What's included in Forte Care™?",
      answer:
        "Our support package includes 24/7 monitoring, weekly backups, and priority support.",
    },
    {
      question: "How quickly do you respond to support requests?",
      answer:
        "We guarantee response within 2 hours for priority requests and 24 hours for standard requests.",
    },
    {
      question: "Can I purchase Forte Care™ separately?",
      answer:
        "Yes, our support plans are available as standalone services for existing websites.",
    },
  ],
  "Website & Tech": [
    {
      question: "What platforms do you build websites on?",
      answer:
        "We specialize in WordPress, Shopify, and custom web applications using modern frameworks.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes, all our websites are fully responsive and optimized for all device sizes.",
    },
    {
      question: "Do you provide hosting services?",
      answer:
        "Yes, we offer managed hosting with 99.9% uptime guarantee and automatic updates.",
    },
  ],
  "SEO & Marketing": [
    {
      question: "How long does SEO take to show results?",
      answer:
        "Typically 3-6 months for noticeable improvements, depending on your industry competition.",
    },
    {
      question: "Do you do local SEO?",
      answer:
        "Yes, we specialize in local SEO strategies including Google My Business optimization.",
    },
    {
      question: "What's included in your SEO packages?",
      answer:
        "Keyword research, on-page optimization, content strategy, backlink building, and monthly reporting.",
    },
  ],
};

export default function SolutionsPage() {
  const [activeButton, setActiveButton] = useState("Getting Started");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const buttons = [
    { id: "getting-started", label: "Getting Started" },
    { id: "plans-pricing", label: "Plans & Pricing" },
    { id: "forte-care", label: "Forte Care™ Support" },
    { id: "website-tech", label: "Website & Tech" },
    { id: "seo-marketing", label: "SEO & Marketing" },
  ];

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleCategoryChange = (label: string) => {
    setActiveButton(label);
    setExpandedIndex(null);
  };

  return (
    <section className="container max-w-7xl mx-auto flex flex-col pt-16 pb-20 md:pt-24 md:pb-64">
      <span className="sm:text-2xl text-xs font-normal font-roboto flex items-center sm:gap-2 gap-1 text-primary-1000 px-5">
        <Icon name="star" className="sm:h-6 sm:w-6 h-[14px] w-[14px]" />
        FAQs
      </span>
      <h1 className="md:text-[62px] text-[38px] font-medium font-roboto mt-6 w-[90%] max-[767px]:leading-[40px] dark:text-secondary-1000 px-5">
        Frequently Asked Questions
      </h1>

      <div className="sm:py-16 py-6 flex gap-3 overflow-x-auto no-scrollbar pb-3 ml-5">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleCategoryChange(button.label)}
            className={`text-[14px] sm:text-[16px] font-normal font-roboto flex items-center gap-2 sm:gap-3 p-2 sm:p-3 pr-3 sm:pr-4 rounded-xl sm:rounded-2xl whitespace-nowrap flex-shrink-0 ${activeButton === button.label
                ? "text-white bg-gradient-to-r from-secondary-1150 to-primary-1200"
                : "dark:text-secondary-1000 dark:bg-primary-1150 text-primary-1150 bg-secondary-1000"
              }`}
          >
            {activeButton === button.label ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 19"
                fill="none"
                className="w-[14px] h-[14px] sm:w-6 sm:h-6 flex-shrink-0"
              >
                <path
                  d="M8.75348 17.8554C7.72056 14.2308 3.94416 10.4686 0.305928 9.43954C-0.101976 9.30845 -0.101976 9.02006 0.305928 8.88242C3.95074 7.84682 7.72056 4.09116 8.76005 0.460019C8.8719 0.0602019 9.14164 0.0602019 9.25349 0.460019C10.2864 4.09116 14.0628 7.84682 17.6945 8.88242C18.1024 9.01351 18.1024 9.30845 17.6945 9.43954C14.0562 10.4686 10.2798 14.2308 9.24691 17.8554C9.13506 18.2618 8.86532 18.2618 8.75348 17.8554Z"
                  fill="white"
                />
              </svg>
            ) : (
              <Icon
                name="star"
                className="w-[14px] h-[14px] sm:w-6 sm:h-6 flex-shrink-0"
              />
            )}
            {button.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2 sm:py-2 py-7 px-5">
        {faqData[activeButton]?.map((faq, index) => (
          <div
            key={index}
            className="dark:bg-primary-1150 sm:p-8 p-4 rounded-2xl transition-all duration-300 bg-secondary-1350"
          >
            <button
              className="flex justify-between md:items-center cursor-pointer w-full text-left"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="sm:text-[26px] text-[18px] max-[767px]:leading-6 max-[767px]:w-[85%] font-medium font-inter dark:text-secondary-1050 text-primary-1150">
                {faq.question}
              </h2>
              <span className="transform transition-transform duration-300 max-[767px]:h-[22px] max-[767px]:w-[6px]">
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
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${expandedIndex === index
                  ? "max-h-[500px] sm:mt-3 mt-2"
                  : "max-h-0"
                }`}
            >
              <p className="sm:text-[18px] text-[14px] font-normal font-inter dark:text-primary-1050 text-primary-1250 max-[767px]:leading-[20px] max-[767px]:w-[90%]">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="sm:mt-12 px-5">
        <LightButton href="/contact">Contact Us</LightButton>
      </div>
    </section>
  );
}
