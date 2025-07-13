import { Icon } from "@/components/images/Icon";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import ForteMethodSteps from "@/components/ForteMethodSteps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Forte Method™: Our Process, Your Results | Forte Web Designs",
  description: "Discover the Forte Method™ - our proven 5-step system that delivers fast, secure, and high-converting websites. No fluff, no gimmicks, just results.",
  keywords: ["web design process", "website development", "Forte Method", "custom websites", "high-performance websites"],
};

export default function SocialMediaManagement() {
  const forteMethodItems = [
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
    <section className="container max-w-7xl mx-auto flex flex-col md:items-center items-start px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
      {/* Hero Section - Mobile Optimized */}
      <div className="grid gap-6 sm:gap-8 justify-center items-center text-center w-full">
        <span className="text-xs sm:text-base md:text-xl font-normal leading-tight flex items-center justify-center gap-1 sm:gap-2 text-primary-1000">
          <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
          We Keep It Simple. And Powerful.
        </span>
        <h1 className="font-roboto font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-center text-black dark:text-secondary-1000 max-w-4xl mx-auto">
          The Forte Method™: Our Process, Your Results
        </h1>
        <p className="font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed text-center text-[#626262] dark:text-primary-1050 max-w-3xl mx-auto px-4">
          At Forte Web Designs, we don't believe in overcomplicating things. No
          fluff. No gimmicks. Just a clear, proven system that delivers fast,
          secure, and high-converting websites—every time. Here's what makes our
          process different:
        </p>
      </div>

      {/* Performance Section - Mobile Optimized */}
      <div className="flex flex-col md:items-center py-16 sm:py-20 lg:py-28 w-full">
        <div className="w-full flex flex-col md:items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          <h2 className="font-inter-display font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black dark:text-[#FFFFFF]">
            Performance Comes First
          </h2>
          <p className="max-w-3xl font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed text-[#626262] dark:text-primary-1050 px-4">
            Your site's speed and user experience directly affect your traffic,
            SEO, and conversion rates. That's why we build sites that load in
            under a second, crush PageSpeed scores, and give your visitors an
            effortless experience.
          </p>
        </div>

        {/* Performance Cards - Mobile First Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 sm:gap-6">
          <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] py-8 sm:py-12 md:py-16 rounded-2xl gap-4 sm:gap-6 flex flex-col justify-center items-center text-center">
            <div className="border border-transparent p-[1px] bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] bg-origin-border rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center">
              <div className="p-2">
                <Icon name="users" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight font-medium font-inter dark:text-secondary-1050 mb-2">
                Faster load times
              </p>
              <Icon name="equals" className="w-3 h-2 sm:w-4 sm:h-3" />
              <p className="text-sm sm:text-base md:text-lg leading-tight font-normal font-inter dark:text-primary-1050 mt-2">
                higher conversions.
              </p>
            </div>
          </div>

          <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] py-8 sm:py-12 md:py-16 rounded-2xl gap-4 sm:gap-6 flex flex-col justify-center items-center text-center">
            <div className="border border-transparent p-[1px] bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] bg-origin-border rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center">
              <div className="p-2">
                <Icon name="code" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight font-medium font-inter dark:text-secondary-1050 mb-2">
                Clean code
              </p>
              <Icon name="equals" className="w-3 h-2 sm:w-4 sm:h-3" />
              <p className="text-sm sm:text-base md:text-lg leading-tight font-normal font-inter dark:text-primary-1050 mt-2">
                Stronger SEO performance.
              </p>
            </div>
          </div>

          <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] py-8 sm:py-12 md:py-16 rounded-2xl gap-4 sm:gap-6 flex flex-col justify-center items-center text-center md:col-span-2 lg:col-span-1">
            <div className="border border-transparent p-[1px] bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] bg-origin-border rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center">
              <div className="p-2">
                <Icon name="click" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight font-medium font-inter dark:text-secondary-1050 mb-2">
                Better UX
              </p>
              <Icon name="equals" className="w-3 h-2 sm:w-4 sm:h-3" />
              <p className="text-sm sm:text-base md:text-lg leading-tight font-normal font-inter dark:text-primary-1050 mt-2">
                Customers who stick around.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* $0 Down Offer Section - Mobile Optimized */}
      <div className="flex flex-col w-full justify-center items-center text-center py-12 sm:py-16">
        <div className="mb-6 sm:mb-8 lg:mb-12">
          {/* Animated Method Circle - Same style as SEO Growth */}
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 relative flex items-center justify-center mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-blue-600/40 to-purple-600/30 animate-pulse shadow-2xl"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-400/20 to-indigo-500/30 animate-pulse delay-300"></div>
            <div className="relative z-10 text-center bg-white/90 dark:bg-gray-800/90 rounded-full p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl backdrop-blur-sm">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-3 md:mb-4">🚀</div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Method
              </div>
            </div>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-bounce delay-500"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-indigo-400 rounded-full animate-bounce delay-700"></div>
          </div>
        </div>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-inter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4 sm:mb-6"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our $0 Down Offer
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium font-inter dark:text-secondary-1050 max-w-4xl mx-auto px-4">
          We make getting started easy. You can launch with a 5-page
          custom-built site for $0 down and $200/month (12-month minimum). Need
          more pages or custom features? We'll price it out based on scope—fair
          and simple.
        </p>
      </div>

      {/* What You Get Section - Mobile Optimized */}
      <div className="py-16 sm:py-20 lg:py-28 flex flex-col md:items-center w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold md:font-bold font-inter dark:text-secondary-1000 leading-tight text-center mb-12 sm:mb-16">
          What You Get With Every Site
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full">
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050">
              Design That Fits:
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-[#B4B4B4] text-[#626262]">
              Every website we build is fully custom-coded from the ground up,
              no templates.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050">
              Rock-Solid Security:
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-[#B4B4B4] text-[#626262]">
              Our static sites don't use databases—so there's nothing to hack.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050">
              SEO-Ready:
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-[#B4B4B4] text-[#626262]">
              Titles, tags, structure—all dialed in to help you rank.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050">
              Unlimited Edits:
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-[#B4B4B4] text-[#626262]">
              Need a tweak? We've got you, no ticket system required.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050">
              Lifetime Support:
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-[#B4B4B4] text-[#626262]">
              You get us—not a robot and U.S. based.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050">
              Money-Back Guarantee:
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-[#B4B4B4] text-[#626262]">
              If we cant design something you love, we'll refund you. Period.
            </p>
          </div>
        </div>
      </div>

      {/* Add ForteMethodSteps - Mobile Optimized */}
      <ForteMethodSteps
        badge="The Forte Method"
        items={forteMethodItems}
        title="Our proprietary 5-step system ensures every site we launch is fast, secure, and conversion-optimized"
        subtitle=""
        titleClassName="font-inter-display font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight text-start text-gray-900 dark:text-white"
      />
    </section>
  );
}