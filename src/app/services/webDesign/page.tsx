import LightButton from "@/components/LightButton";
import { BackgroundImage } from "@/components/images/BackgroundImage";
import { Icon } from "@/components/images/Icon";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Web Services",
  description:
    "Professional web development and digital services offered by Forte.",
};

export default function WebsiteThreePage() {
  return (
    <section className="container max-w-7xl mx-auto flex flex-col md:items-center items-start py-16 md:py-24">
      <span className="sm:text-2xl text-xs font-normal font-roboto flex items-center sm:gap-1.5 gap-1 text-primary-1000 px-5">
        <Icon name="star" className="sm:h-6 sm:w-6 h-[14px] w-[14px]" />
        Results by Design
      </span>
      <h1 className="md:text-[62px] text-[36px] md:max-w-[794px] font-medium font-roboto md:mt-7 mt-5 w-[95%] max-[767px]:leading-[40px] dark:text-secondary-1000 md:text-center px-5">
        Why Custom Beats Templates—Every Time
      </h1>
      <p className="md:text-[18px] text-[14px] font-normal font-inter dark:text-primary-1050 lg:w-[840px] md:w-[715px] w-[97%] md:mt-6 mt-5 md:text-center text-primary-1400 max-[767px]:leading-[18px] px-5 leading-[22px]">
        At Forte Web Designs, we don’t use templates or page builders. Every
        site is hand-coded for performance, security, and SEO. Here’s what
        sets us apart from the cookie-cutter crowd.Curious how your current
        site stacks up? Try our{" "}
        <Link
          className="md:text-primary-1000 md:border-b md:border-primary-1000"
          href="https://www.fortewebdesigns.com/seotool"
          target="_blank"
        >
          FREE Forte SiteCheckup™
        </Link>
        .
      </p>

      <div className="md:mt-44 sm:mt-24 mt-14 flex sm:flex-row flex-col sm:text-center xl:gap-16 lg:gap-12 gap-5 max-[640px]:w-full max-w-[1200px] px-5">
        <div className="flex flex-col sm:gap-5 gap-3 sm:border-r max-[640px]:border-b dark:border-secondary-1200 border-secondary-1550 xl:pr-20 sm:pr-5 max-[640px]:pb-4">
          <h1 className="lg:text-[38px] min-[1280px]:pt-1.5 min-[1280px]:h-[60px] xl:text-[62px] md:text-3xl font-medium font-roboto bg-gradient-to-r from-secondary-1150 to-primary-1200 bg-clip-text text-transparent">
            98–100
          </h1>
          <p className="md:text-[18px] text-[14px] font-normal font-inter dark:text-white text-primary-1400">
            Google PageSpeed Score
          </p>
        </div>
        <div className="flex flex-col sm:gap-5 gap-3 sm:border-r max-[640px]:border-b dark:border-secondary-1200 border-secondary-1550 xl:pr-6 sm:pr-5 max-[640px]:pb-4">
          <h1 className="lg:text-[38px] min-[1280px]:pt-1.5 min-[1280px]:h-[62px] xl:text-[62px] md:text-3xl font-medium font-roboto bg-gradient-to-r from-secondary-1150 to-primary-1200 bg-clip-text text-transparent">
            100%
          </h1>
          <p className="md:text-[18px] text-[14px] font-normal font-inter dark:text-white text-primary-1400">
            Hand-Coded for Speed, Security & SEO
          </p>
        </div>
        <div className="flex flex-col sm:gap-5 gap-3">
          <h1 className="lg:text-[38px] min-[1280px]:pt-1.5 min-[1280px]:h-[60px] xl:text-[62px] md:text-3xl font-medium font-roboto bg-gradient-to-r from-secondary-1150 to-primary-1200 bg-clip-text text-transparent">
            Unlimited
          </h1>
          <p className="md:text-[18px] text-[14px] font-normal font-inter dark:text-white text-primary-1400">
            Scalability & Flexibility
          </p>
        </div>
      </div>

      <div className="border border-primary-1250 p-[10px] pb-6 md:mt-72 sm:mt-32 md:mb-44 mb-8 mt-32 w-full rounded-2xl">
        <BackgroundImage
          src="/images/services/web-service-back.png"
          alt="Banner description"
          className="md:h-[640px] h-[380px] flex justify-center items-center max-[767px]:px-3 rounded-2xl"
        >
          <span className="sm:text-2xl text-xs font-normal max-w-[774px] font-roboto flex items-center justify-center sm:gap-2 gap-1 text-primary-1000">
            <Icon name="star" className="sm:h-6 sm:w-6 h-[14px] w-[14px]" />
            The Custom Code Advantage
          </span>
          <h1 className="md:text-[62px] text-[34px] flex justify-center md:max-w-[794px] max-w-full font-medium font-roboto md:mt-10 mt-6 w-full max-[767px]:leading-[36px] dark:text-secondary-1000 text-white text-center">
            Results That Speak for Themselves
          </h1>
          <p className="md:text-[18px] text-[14px] font-normal font-inter text-white lg:w-[794px] md:w-[768px] w-[94%] mx-auto md:mt-5 mt-3 text-center max-[767px]:leading-[18px] leading-[22px]">
            From fast builder sites to handcrafted custom builds, Forte Web
            Designs helps small businesses grow online with clean,
            high-performance websites—delivered with clarity, speed, and care.
          </p>
          <div className="flex justify-center sm:mt-10 md:mt-10 mt-6">
            <LightButton href="/contact">Contact Us</LightButton>
          </div>
        </BackgroundImage>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:gap-5 gap-8 md:pt-16 md:pb-16 pt-9 pb-1.5 md:px-11 px-5">
          <div className="flex items-center gap-5">
            <Icon name="flash" className="h-8 w-[27px]" />
            <p className="md:text-[14px] text-[12px] md:font-medium font-inter dark:text-white text-primary-1400">
              Lightning-fast speeds for better rankings and lower ad costs
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Icon name="puzzle" className="h-8 w-[27px]" />
            <p className="md:text-[14px] text-[12px] md:font-medium font-inter dark:text-white text-primary-1400">
              No plugins or updates = less risk and fewer issues
            </p>
          </div>
          <div className="sm:flex hidden items-center gap-5">
            <Icon name="clean" className="h-8 w-[27px]" />
            <p className="md:text-[14px] text-[12px] md:font-medium font-inter dark:text-white text-primary-1400">
              Clean code = better conversions & Google Core Web Vitals
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Icon name="search" className="h-8 w-[27px]" />
            <p className="md:text-[14px] text-[12px] md:font-medium font-inter dark:text-white text-primary-1400">
              Optimized for strong Google Maps and local SEO results
            </p>
          </div>
          <div className="flex sm:hidden items-center gap-5">
            <Icon name="clean" className="h-8 w-[27px]" />
            <p className="md:text-[14px] text-[12px] md:font-medium font-inter dark:text-white text-primary-1400">
              Clean code = better conversions & Google Core Web Vitals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
