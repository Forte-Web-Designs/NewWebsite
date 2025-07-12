import LightButton from "@/components/LightButton";
import { Icon } from "@/components/images/Icon";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { TestimonialSlider } from "@/components/work/TestimonialSlider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore our previous business work that will help your company grow and succeed.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-fit mx-auto lg:text-center text-left flex flex-col justify-center lg:items-center items-start pl-5 lg:pl-0">
          <span className="md:text-[24px] text-[12px] font-normal font-roboto flex items-center md:gap-2 gap-1 text-primary-1000">
            <Icon name="star" className="md:h-6 md:w-6 h-[14px] w-[14px]" />
            Our Portfolio
          </span>
          <h1 className="md:text-[62px] text-[32px] font-medium font-roboto md:mt-5 mt-4 w-[90%] max-[767px]:leading-[36px] dark:text-secondary-1000">
            Real Results for Real Businesses
          </h1>
          <p className="md:text-[18px] text-[14px] font-normal font-inter dark:text-primary-1050 lg:w-[794px] md:w-[740px] w-[95%] mt-5">
            From local service providers to growing online brands, we build
            websites that load fast, rank well, and drive real results. Every
            site is hand-crafted for performance, security, and tailored to your
            unique business goals.
          </p>
        </div>
      </section>

      <section className="container mx-auto flex flex-col md:gap-5 gap-10 items-center sm:px-0 px-5 md:py-0 py-14">
        <div className="flex lg:flex-row flex-col md:gap-5 gap-10">
          <OptimizedImage
            src="/images/work/project-1.webp"
            width={600}
            height={400}
            alt="Modern business solutions - Forte"
            className="lg:w-[387px] lg:h-auto sm:h-[387px] h-[190px] rounded object-top"
            priority
          />
          <OptimizedImage
            src="/images/work/project-2.webp"
            width={600}
            height={400}
            alt="Modern business solutions - Forte"
            className="lg:w-[793px] lg:h-auto sm:h-[387px] h-[190px] rounded object-top"
            priority
          />
        </div>
        <div className="flex lg:flex-row-reverse flex-col md:gap-5 gap-10">
          <OptimizedImage
            src="/images/work/project-4.webp"
            width={600}
            height={400}
            alt="Modern business solutions - Forte"
            className="lg:w-[387px] lg:h-auto h-[190px] rounded object-top"
            priority
          />
          <OptimizedImage
            src="/images/work/project-3.webp"
            width={600}
            height={400}
            alt="Modern business solutions - Forte"
            className="lg:w-[793px] lg:h-auto h-[190px] rounded object-top"
            priority
          />
        </div>
        <div className="flex lg:flex-row flex-col md:gap-5 gap-10">
          <OptimizedImage
            src="/images/work/project-5.webp"
            width={600}
            height={400}
            alt="Modern business solutions - Forte"
            className="lg:w-[387px] lg:h-auto h-[190px] rounded object-top"
            priority
          />
          <OptimizedImage
            src="/images/work/project-6.webp"
            width={600}
            height={400}
            alt="Modern business solutions - Forte"
            className="lg:w-[793px] lg:h-auto h-[190px] rounded object-top"
            priority
          />
        </div>
      </section>

      <section className="container mx-auto flex justify-center items-center sm:py-40 py-28 sm:px-0 px-5">
        <TestimonialSlider />
      </section>

      <section className="container mx-auto flex justify-center items-center pt-4 pb-28 sm:px-0 px-5">
        <OptimizedImage
          src="/images/work/Background.webp"
          width={1200}
          height={600}
          alt="Teams Background"
          className="absolute -z-10 lg:block hidden"
        />
        <div className="lg:w-[650px] text-center lg:mx-auto">
          <p className="lg:w-[600px] md:text-[38px] text-[24px] font-medium font-inter dark:text-secondary-1000 md:leading-[40px] leading-[32px] m-auto">
            Behind Every Project Is a Business that Grew
          </p>
          <p className="md:text-[18px] text-[14px] max-[767px]:leading-4 font-normal font-inter text-primary-1400 dark:text-primary-1050 mt-5">
            We don’t believe in one-size-fits-all websites. Every site we build
            is hand-coded for speed, strategy, and long-term success. Your
            business deserves a web presence that’s not just beautiful—but built
            to perform.
          </p>
          <div className="mt-5">
            <LightButton href="/contact">Contact Us</LightButton>
          </div>
        </div>
      </section>
    </>
  );
}
