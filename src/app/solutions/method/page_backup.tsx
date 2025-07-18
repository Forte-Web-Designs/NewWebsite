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
    <section className="container max-w-7xl mx-auto flex flex-col md:items-center items-start px-5 py-16 md:py-24">
      <div className="grid gap-[24px] justify-center items-center">
        <span className="sm:text-[24px] text-[12px] font-normal leading-[12px] sm:leading-[24px] flex items-center text-center sm:justify-center sm:gap-2 gap-1 text-primary-1000">
          <Icon name="star" className="sm:h-6 sm:w-6 h-[14px] w-[14px]" />
          We Keep It Simple. And Powerful.
        </span>
        <h1 className=" md:max-w-[794px] font-roboto font-medium text-[32px] sm:text-[62px] sm:leading-[62px] leading-[40px] tracking-[-1.24px] sm:text-center text-start align-middle text-black w-full max-[767px]:leading-[40px] dark:text-secondary-1000 md:text-center">
          The Forte Method™: Our Process, Your Results
        </h1>
        <p className=" dark:text-gray-300 lg:w-[794px] md:w-[740px] w-[94%] font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px] tracking-normal sm:text-center text-start align-middle text-[#626262]">
          At Forte Web Designs, we don’t believe in overcomplicating things. No
          fluff. No gimmicks. Just a clear, proven system that delivers fast,
          secure, and high-converting websites—every time. Here’s what makes our
          process different:
        </p>
      </div>
      <div className="flex flex-col md:items-center lg:pt-56 lg:pb-[196.5px] py-20 w-full">
        <div className="w-full flex flex-col md:items-center lg:mb-12 md:mb-9 mb-8 md:text-center text-start gap-[24px]">
          <h2 className="font-inter-display font-medium text-[26px] sm:text-[38px] leading-[30px] sm:leading-[38px] tracking-normal align-middle sm:text-center text-black dark:text-[#FFFFFF]">
            Performance Comes First
          </h2>
          <p className=" max-w-[794px]  font-inter font-normal text-[14px]  sm:text-[18px]  sm:leading-[22px] leading-[16px] tracking-normal sm:text-center align-middle text-[#626262] dark:text-gray-300">
            Your site’s speed and user experience directly affect your traffic,
            SEO, and conversion rates. That’s why we build sites that load in
            under a second, crush PageSpeed scores, and give your visitors an
            effortless experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full md:gap-5 gap-3 md:mt-0 mt-3">
          <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] md:py-[60px] py-10 rounded-2xl gap-6 flex flex-col justify-center items-center text-center">
            <div
              className="
                border 
                border-transparent 
                p-[1px] 
                bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] 
                bg-origin-border
                rounded-[90px]
                md:w-[120px] md:h-[120px] w-[80px] h-[80px] flex justify-center items-center
            "
            >
              <div className="p-2">
                <Icon name="users" className="md:w-[34px] md:h-9 w-7 h-6" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className="sm:text-[26px]   text-[18px] sm:leading-[32px] leading-[22px] font-medium font-inter dark:text-secondary-1050 mb-1">
                Faster load times
              </p>
              <Icon name="equals" className="w-4 h-3" />
              <p className="sm:text-[18px] text-[14px] sm:leading-[32px] leading-[22px] font-normal font-inter dark:text-gray-300 mt-1">
                higher conversions.
              </p>
            </div>
          </div>

          <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] md:py-[60px] py-10 rounded-2xl gap-6 flex flex-col justify-center items-center text-center">
            <div
              className="
                border 
                border-transparent 
                p-[1px] 
                bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] 
                bg-origin-border
                rounded-[90px]
                md:w-[120px] md:h-[120px] w-[80px] h-[80px] flex justify-center items-center
            "
            >
              <div className="p-2">
                <Icon name="code" className="md:w-[34px] md:h-9 w-7 h-6" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className="sm:text-[26px]   text-[18px] sm:leading-[32px] leading-[22px] font-medium font-inter dark:text-secondary-1050 mb-1">
                Clean code
              </p>
              <Icon name="equals" className="w-4 h-3" />
              <p className="sm:text-[18px] text-[14px] sm:leading-[32px] leading-[22px] font-normal font-inter dark:text-gray-300 mt-1">
                Stronger SEO performance.
              </p>
            </div>
          </div>

          <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] md:py-[60px] py-10 rounded-2xl gap-6 flex flex-col justify-center items-center text-center">
            <div
              className="
                border 
                border-transparent 
                p-[1px] 
                bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] 
                bg-origin-border
                rounded-[90px]
                md:w-[120px] md:h-[120px] w-[80px] h-[80px] flex justify-center items-center
            "
            >
              <div className="p-2">
                <Icon name="click" className="md:w-[34px] md:h-9 w-7 h-6" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <p className="sm:text-[26px]   text-[18px] sm:leading-[32px] leading-[22px] font-medium font-inter dark:text-secondary-1050 mb-1">
                Better UX
              </p>
              <Icon name="equals" className="w-4 h-3" />
              <p className="sm:text-[18px] text-[14px] sm:leading-[32px] leading-[22px] font-normal font-inter dark:text-gray-300 mt-1">
                Customers who stick around.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full justify-center items-center text-center  pt-6 md:pt-0">
        <div className="lg:min-w-[1000px] lg:max-w-[1000px] md:min-w-[98%] lg:-mb-32 md:-mb-20 max-[640px]:mb-6">
          <OptimizedImage
            src="/images/services/Shape-Holo-Mini.png"
            width={230}
            height={230}
            alt="Descriptive text"
            className="md:w-[230px] md:h-[230px] sm:w-[150px] w-[115px] sm:h-[150px] h-[115px] mx-auto md:mx-0"
          />
        </div>
        <h2
          className="md:text-[62px] text-[38px] md:h-[58px] md:pt-2 pt-1 font-bold font-inter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our $0 Down Offer
        </h2>
        <p className="sm:text-[24px] text-[18px] sm:leading-[32px] font-medium font-inter dark:text-secondary-1050 max-w-[754px] mt-5 leading-[22px] md:leading-8">
          We make getting started easy. You can launch with a 5-page
          custom-built site for $0 down and $200/month (12-month minimum). Need
          more pages or custom features? We’ll price it out based on scope—fair
          and simple.
        </p>
      </div>

      <div className="lg:pt-56 lg:pb-[92px] pt-28 pb-20 flex flex-col md:items-center px-[20px] sm:px-0 gap-[24px] sm:gap-[62px]">
        <h2 className="sm:text-[62px] text-[26px] md:font-bold font-medium max-[767px]:leading-[30px] font-inter dark:text-secondary-1000 sm:leading-[62px] leading-[30px]">
          What You Get With Every Site
        </h2>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 gap-[24px] sm:gap-[40px]">
          <div className="grid sm:gap-[24px] gap-[16px]">
            <h3 className="sm:text-[26px] sm:leading-[32px] text-[18px] font-medium font-inter dark:text-secondary-1050">
              Design That Fits:
            </h3>
            <p className="sm:text-[18px] text-[14px] sm:leading-[22px] font-normal font-inter md:leading-[22px] leading-4 dark:text-[#B4B4B4] text-[#626262]">
              Every website we build is fully custom-coded from the ground up,
              no templates.
            </p>
          </div>

          <div className="grid sm:gap-[24px] gap-[16px]">
            <h3 className="sm:text-[26px] sm:leading-[32px] text-[18px] font-medium font-inter dark:text-secondary-1050">
              Rock-Solid Security:
            </h3>
            <p className="sm:text-[18px] text-[14px] sm:leading-[22px] font-normal font-inter md:leading-[22px] leading-4 dark:text-[#B4B4B4] text-[#626262]">
              Our static sites don’t use databases—so there’s nothing to hack.
            </p>
          </div>

          <div className="grid sm:gap-[24px] gap-[16px]">
            <h3 className="sm:text-[26px] sm:leading-[32px] text-[18px] font-medium font-inter dark:text-secondary-1050">
              SEO-Ready:
            </h3>
            <p className="sm:text-[18px] text-[14px] sm:leading-[22px] font-normal font-inter md:leading-[22px] leading-4 dark:text-[#B4B4B4] text-[#626262]">
              Titles, tags, structure—all dialed in to help you rank.
            </p>
          </div>

          <div className="grid sm:gap-[24px] gap-[16px]">
            <h3 className="sm:text-[26px] sm:leading-[32px] text-[18px] font-medium font-inter dark:text-secondary-1050">
              Unlimited Edits:
            </h3>
            <p className="sm:text-[18px] text-[14px] sm:leading-[22px] font-normal font-inter md:leading-[22px] leading-4 dark:text-[#B4B4B4] text-[#626262]">
              Need a tweak? We’ve got you, no ticket system required.
            </p>
          </div>

          <div className="grid sm:gap-[24px] gap-[16px]">
            <h3 className="sm:text-[26px] sm:leading-[32px] text-[18px] font-medium font-inter dark:text-secondary-1050">
              Lifetime Support:
            </h3>
            <p className="sm:text-[18px] text-[14px] sm:leading-[22px] font-normal font-inter md:leading-[22px] leading-4 dark:text-[#B4B4B4] text-[#626262]">
              You get us—not a robot and U.S. based.
            </p>
          </div>

          <div className="grid sm:gap-[24px] gap-[16px]">
            <h3 className="sm:text-[26px] sm:leading-[32px] text-[18px] font-medium font-inter dark:text-secondary-1050">
              Money-Back Guarantee:
            </h3>
            <p className="sm:text-[18px] text-[14px] sm:leading-[22px] font-normal font-inter md:leading-[22px] leading-4 dark:text-[#B4B4B4] text-[#626262]">
              If we cant design something you love, we’ll refund you. Period.
            </p>
          </div>
        </div>
      </div>

      {/* Add ForteMethodSteps */}
      <ForteMethodSteps
        badge="The Forte Method"
        items={forteMethodItems}
        title="Our proprietary 5-step system ensures every site we launch is fast, secure, and conversion-optimized"
        subtitle=""
        titleClassName="font-inter-display font-medium text-[28px] md:text-[38px] leading-[38px] tracking-[0%] text-start align-middle text-gray-900 dark:text-white"
      />
    </section>
  );
}
