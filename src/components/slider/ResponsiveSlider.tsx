"use client";
import { useState, useRef, useEffect } from "react";
import { OptimizedImage } from "@/components/images/OptimizedImage";

interface SliderItem {
  title: string;
  description: string;
  icon: string;
}

interface ResponsiveSliderProps {
  items: SliderItem[];
  className?: string;
  containerHeight?: string;
}

export default function ResponsiveSlider({
  items,
  className = "",
  containerHeight = "h-[322px] sm:h-[500px] lg:h-[58vh]"
}: ResponsiveSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        const { clientHeight, scrollHeight } = containerRef.current;
        const maxScroll = scrollHeight - clientHeight;
        const targetScroll = (index / (items.length - 1)) * maxScroll;
        containerRef.current.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      } else {
        const { clientWidth } = containerRef.current;
        const targetScroll = index * clientWidth;
        containerRef.current.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const isDesktop = window.innerWidth >= 1024;

        if (isDesktop) {
          const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
          const maxScroll = scrollHeight - clientHeight;
          const scrollProgress = maxScroll > 0 ? scrollTop / maxScroll : 0;
          const index = Math.round(scrollProgress * (items.length - 1));
          setActiveIndex(Math.max(0, Math.min(items.length - 1, index)));
        } else {
          const { scrollLeft, clientWidth } = containerRef.current;
          const index = Math.round(scrollLeft / clientWidth);
          setActiveIndex(Math.max(0, Math.min(items.length - 1, index)));
        }
      }
    };

    const handleResize = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo(0, 0);
        setActiveIndex(0);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [items.length]);

  return (
    <div className={`w-full lg:w-1/2 md:w-full relative overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full h-[14px] lg:hidden">
        <div className="h-1 rounded-full overflow-hidden bg-gray-200 w-full dark:bg-gray-800">
          <div
            className="h-full transition-all duration-300"
            style={{
              width: `${100 / items.length}%`,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          >
            <div className="w-full h-1 bg-[linear-gradient(90deg,#FFF_0%,#132696_100%)] rounded-full"></div>
          </div>
        </div>
      </div>

      <div
        ref={containerRef}
        className={`flex-1 gap-x-5 lg:gap-y-8 flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pt-[20px] lg:overflow-y-auto lg:overflow-x-hidden lg:snap-y lg:snap-x-none lg:flex-col lg:pt-0 ${containerHeight}`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full lg:w-full lg:max-w-[90%] h-full flex-shrink-0 lg:flex-shrink snap-start snap-always flex justify-center align-baseline lg:h-auto lg:px-0 lg:mb-8"
            onClick={() => scrollToCard(index)}
          >
            <div className="w-full max-w-[100%] gap-4 sm:gap-5 md:gap-6 rounded-2xl px-[25px] py-[30px] sm:w-[505px] sm:h-[562px] sm:px-[40px] sm:py-[45px] md:px-[50px] md:py-[55px] lg:px-[60px] lg:py-[50px] xl:px-[70px] xl:py-[55px] border-[0.673px] bg-gray-50 border-gray-300 grid shadow-[inset_0px_0px_8.079px_0px_#000] dark:bg-[#101010] dark:border-[#434343] h-fit sm:h-[562px] sm:place-content-center">
              <div className="grid justify-center">
                <OptimizedImage
                  src={item.icon}
                  alt={item.title}
                  width={88}
                  height={88}
                  className="flex"
                  priority={index === 0}
                />
              </div>
              <div className="">
                <h5 className="font-inter-display font-medium text-[38px] leading-[38px] tracking-[0%] text-center align-middle text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </div>
              <div className="">
                <p className="text-gray-600 font-sans font-normal text-[12px] sm:text-lg leading-[16px] sm:leading-[22px] tracking-normal text-center align-middle dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 h-[391px] w-[14px] hidden lg:block">
        <div className="w-1 rounded-full overflow-hidden bg-gray-200 h-[391px] dark:bg-gray-800">
          <div
            className="w-full transition-all duration-300"
            style={{
              height: `${100 / items.length}%`,
              transform: `translateY(${activeIndex * 100}%)`,
            }}
          >
            <div className="h-full w-1 bg-[linear-gradient(180deg,#FFF_0%,#132696_100%)] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 