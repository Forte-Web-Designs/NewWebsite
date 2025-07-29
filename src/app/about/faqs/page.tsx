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
      question: "How much does a website cost? (Most important question first!) 💰",
      answer:
        "I love that you're asking this upfront! We have three clear pricing paths: Forte Essential™ starts at $2,000 (perfect for getting online fast), Forte Growth™ is $200/month with $0 down (our most popular - includes everything plus ongoing care), and Forte Pro™ at $5,000 (for businesses serious about dominating their market). The real question is: how much is staying invisible to potential customers costing you right now?",
    },
    {
      question: "How long will my website take to build? ⏰",
      answer:
        "Here's what's exciting - you'll see your design in the first week! Most websites are live in 4-6 weeks. But here's the thing: every day you wait is another day your competitors are capturing the customers who should be calling you. The sooner we start, the sooner you're making money from your new site. Ready to get started?",
    },
    {
      question: "What if I don't love the design? 😬",
      answer:
        "Honestly? This never happens with our process, but if it did, we'd fix it completely free. We include unlimited design revisions because I'd rather do it right than do it fast. In 4+ years, we've never had a client who wasn't excited to show off their new site. That's not luck - it's our process working!",
    },
  ],
  "Plans & Pricing": [
    {
      question: "What's included with Forte Growth™ at $200/month? 📦",
      answer: "Everything! 5-page custom site, hosting, domain, lifetime support, and Forte Care™ (unlimited edits). No hidden fees, no surprises. Most businesses spend more than this on coffee each month, but this actually grows your revenue. It's like having a full marketing team for less than hiring one employee.",
    },
    {
      question: "Why is Forte Essential™ $2,000 when I can get a template for $100? 🤔",
      answer:
        "Great question! That $100 template will cost you thousands in lost customers because it loads slowly, looks generic, and doesn't convert visitors. Our clients typically see their investment returned within 60 days through new business. Would you rather save $1,900 upfront or make an extra $10,000+ this year?",
    },
    {
      question: "Can I upgrade as my business grows? 📈",
      answer:
        "Absolutely! And here's the best part - when you're ready to upgrade, we credit everything you've already invested. It's like we're betting on your success. Start where you're comfortable, then scale as your business grows. Your website should fuel your growth, not limit it.",
    },
  ],
  "Forte Care™ Support": [
    {
      question: "What exactly is Forte Care™? 🛠️",
      answer:
        "Think of it as insurance for your most important marketing asset. We monitor your site 24/7, make unlimited updates, handle all technical issues, and continuously optimize for better results. Most importantly: when your website makes you money, you call it. When it breaks, we fix it. While you sleep, we're making sure your site is working for you.",
    },
    {
      question: "What happens if my website breaks? 😱",
      answer:
        "With Forte Care™, we typically fix issues before you even know they exist. But if something does happen, we guarantee a response within 2 hours. Compare that to hiring a freelancer who might take days to get back to you. Every minute your site is down, you're losing money.",
    },
    {
      question: "Why should I pay for ongoing care vs. just fixing things when they break? 💡",
      answer:
        "Because prevention is always cheaper than emergency repair! Our Forte Care™ clients have 99.9% uptime and their sites get faster and better performing over time. The real question: can you afford for your website to be down when your biggest opportunity walks through the door?",
    },
  ],
  "Website & Tech": [
    {
      question: "Will my website work on phones? 📱",
      answer:
        "Not just work - it'll shine! 60%+ of your customers will find you on mobile, so we design mobile-first. Every site gets tested on dozens of devices. Your mobile site won't just look good, it'll convert visitors into customers better than most desktop sites. Mobile-friendly isn't enough anymore - you need mobile-optimized.",
    },
    {
      question: "How fast will my website be? ⚡",
      answer:
        "Lightning fast! Our sites load in under 2 seconds-so visitors stay, engage, and convert faster. Why does this matter? Every second your site takes to load costs you 7% of potential customers. Our speed optimization has helped clients increase conversions by 40%+. Fast sites don't just feel better - they make more money.",
    },
    {
      question: "What makes your websites different from everyone else's? 🔥",
      answer:
        "Three words: Hand. Coded. Performance. No WordPress, no page builders, no bloated templates. Just clean, custom code that loads instantly and converts like crazy. Plus, you get a real human who answers the phone, not a ticket system. When was the last time your current web company actually called you back?",
    },
  ],
  "SEO & Marketing": [
    {
      question: "Will people be able to find my website on Google? 🎯",
      answer:
        "That's the whole point! Every site is built SEO-ready from day one. Our clients typically see 50-200% increases in Google visibility within 3-6 months. But here's what's really exciting: we can also manage your Google Ads and social media to get you found even faster. Imagine having customers find you while you sleep!",
    },
    {
      question: "How quickly will I see results? 📊",
      answer:
        "Week 1: Your new site is converting visitors better. Month 1: You're seeing more inquiries. Month 3-6: Google starts ranking you higher. Month 12: You're wondering why you waited so long! The sooner you start, the sooner you're ahead of competitors who are still 'thinking about it.'",
    },
    {
      question: "Why should I choose Forte Web Designs over the hundreds of other options? 🏆",
      answer:
        "Because we're not just building websites - we're building your business growth engine. Our clients don't just get a website, they get a competitive advantage. We've helped businesses increase their revenue by 200-500% within the first year. The real question isn't why choose us - it's how much longer can you afford to wait?",
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
    <section className="container max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Hero Section - Mobile Optimized */}
      <div className="text-center lg:text-left mb-8 sm:mb-12">
        <span className="text-xs sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center lg:justify-start gap-1 sm:gap-2 text-primary-1000 mb-4 sm:mb-6">
          <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
          FAQs
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000">
          Got Questions? We've Got Answers!
        </h1>
      </div>

      {/* Category Buttons - Mobile Optimized */}
      <div className="mb-8 sm:mb-12">
        <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1">
          {buttons.map((button) => (
            <button
              key={button.id}
              onClick={() => handleCategoryChange(button.label)}
              className={`text-xs sm:text-sm md:text-base font-normal font-roboto flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl whitespace-nowrap flex-shrink-0 transition-all duration-200 ${activeButton === button.label
                  ? "text-white bg-gradient-to-r from-secondary-1150 to-primary-1200 shadow-lg"
                  : "dark:text-secondary-1000 dark:bg-primary-1150 text-primary-1150 bg-secondary-1000 hover:bg-opacity-80"
                }`}
            >
              {activeButton === button.label ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 19"
                  fill="none"
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0"
                >
                  <path
                    d="M8.75348 17.8554C7.72056 14.2308 3.94416 10.4686 0.305928 9.43954C-0.101976 9.30845 -0.101976 9.02006 0.305928 8.88242C3.95074 7.84682 7.72056 4.09116 8.76005 0.460019C8.8719 0.0602019 9.14164 0.0602019 9.25349 0.460019C10.2864 4.09116 14.0628 7.84682 17.6945 8.88242C18.1024 9.01351 18.1024 9.30845 17.6945 9.43954C14.0562 10.4686 10.2798 14.2308 9.24691 17.8554C9.13506 18.2618 8.86532 18.2618 8.75348 17.8554Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <Icon
                  name="star"
                  className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0"
                />
              )}
              <span className="text-xs sm:text-sm md:text-base">{button.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Accordion - Mobile Optimized */}
      <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
        {faqData[activeButton]?.map((faq, index) => (
          <div
            key={index}
            className="dark:bg-primary-1150 bg-secondary-1350 p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <button
              className="flex justify-between items-start gap-4 cursor-pointer w-full text-left"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050 text-primary-1150 leading-tight pr-2">
                {faq.question}
              </h2>
              <span className="flex-shrink-0 mt-1">
                <svg
                  viewBox="0 0 7 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${expandedIndex === index ? "rotate-[270deg]" : "rotate-90"
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
                  ? "max-h-[1000px] mt-3 sm:mt-4"
                  : "max-h-0"
                }`}
            >
              <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-gray-300 text-primary-1250 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button - Mobile Optimized */}
      <div className="flex justify-center">
        <LightButton href="/contact">Ready to Get Started? Let's Chat!</LightButton>
      </div>
    </section>
  );
}
