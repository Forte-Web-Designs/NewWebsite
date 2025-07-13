import LightButton from "@/components/LightButton";
import { Icon } from "@/components/images/Icon";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { TestimonialSlider } from "@/components/work/TestimonialSlider";
import { SectionBackgroundAnimation } from "@/components/animations/BackgroundAnimation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore our previous business work that will help your company grow and succeed.",
};

export default function SolutionsPage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-xs sm:text-base md:text-lg lg:text-xl font-normal font-roboto flex items-center justify-center gap-1 sm:gap-2 text-primary-1000 mb-4 sm:mb-6">
              <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
              Our Portfolio
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-roboto leading-tight dark:text-secondary-1000 mb-4 sm:mb-6">
              Real Results for Real Businesses
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-normal font-inter dark:text-primary-1050 max-w-4xl mx-auto leading-relaxed">
              From local service providers to growing online brands, we build
              websites that load fast, rank well, and drive real results. Every
              site is hand-crafted for performance, security, and tailored to your
              unique business goals.
            </p>
          </div>
        </section>

        {/* Portfolio Gallery - Mobile First Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
              <div className="lg:col-span-5">
                <a href="https://thesouthernlandscapefirm.com/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity duration-300">
                  <OptimizedImage
                    src="/images/work/project-1.webp"
                    width={600}
                    height={400}
                    alt="The Southern Landscape Firm - Professional landscaping website"
                    className="w-full h-48 sm:h-64 lg:h-80 rounded-lg object-cover object-top"
                    priority
                  />
                </a>
              </div>
              <div className="lg:col-span-7">
                <a href="https://triavision.com/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity duration-300">
                  <OptimizedImage
                    src="/images/work/project-2.webp"
                    width={600}
                    height={400}
                    alt="Tria Vision - Professional vision care website"
                    className="w-full h-48 sm:h-64 lg:h-80 rounded-lg object-cover object-top"
                    priority
                  />
                </a>
              </div>
            </div>

            {/* Row 2 - Reversed on large screens */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
              <div className="lg:col-span-7 lg:order-first order-last">
                <a href="https://ashleymartinministry.com/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity duration-300">
                  <OptimizedImage
                    src="/images/work/project-3.webp"
                    width={600}
                    height={400}
                    alt="Ashley Martin Ministry - Faith-based website"
                    className="w-full h-48 sm:h-64 lg:h-80 rounded-lg object-cover object-top"
                    priority
                  />
                </a>
              </div>
              <div className="lg:col-span-5">
                <a href="https://goodlaborjobs.com/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity duration-300">
                  <OptimizedImage
                    src="/images/work/project-4.webp"
                    width={600}
                    height={400}
                    alt="Good Labor Jobs - Employment platform"
                    className="w-full h-48 sm:h-64 lg:h-80 rounded-lg object-cover object-top"
                    priority
                  />
                </a>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
              <div className="lg:col-span-5">
                <a href="https://donovanbuildersllc.com/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity duration-300">
                  <OptimizedImage
                    src="/images/work/project-5.webp"
                    width={600}
                    height={400}
                    alt="Donovan Builders LLC - Construction company website"
                    className="w-full h-48 sm:h-64 lg:h-80 rounded-lg object-cover object-top"
                    priority
                  />
                </a>
              </div>
              <div className="lg:col-span-7">
                <a href="https://oakmountainrealtygroup.com/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-90 transition-opacity duration-300">
                  <OptimizedImage
                    src="/images/work/project-6.webp"
                    width={600}
                    height={400}
                    alt="Oak Mountain Realty Group - Real estate website"
                    className="w-full h-48 sm:h-64 lg:h-80 rounded-lg object-cover object-top"
                    priority
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Mobile Optimized */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-40">
          <TestimonialSlider />
        </section>

        {/* CTA Section - Mobile Optimized */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative">
          <OptimizedImage
            src="/images/work/Background.webp"
            width={1200}
            height={600}
            alt="Teams Background"
            className="absolute inset-0 -z-10 w-full h-full object-cover opacity-20 lg:opacity-100 hidden lg:block"
          />
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-inter dark:text-secondary-1000 leading-tight mb-4 sm:mb-6">
              Behind Every Project Is a Business that Grew
            </h2>
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
      </div>
    </div>
  );
}
