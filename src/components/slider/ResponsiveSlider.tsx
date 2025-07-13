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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality with pause on user interaction
  useEffect(() => {
    if (!isAutoPlaying || isUserInteracting) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000); // Faster timing - change slide every 3 seconds

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [items.length, isAutoPlaying, isUserInteracting]);

  // Resume auto-play after user interaction stops
  useEffect(() => {
    if (isUserInteracting) {
      const resumeTimer = setTimeout(() => {
        setIsUserInteracting(false);
      }, 5000); // Resume auto-play 5 seconds after last user interaction

      return () => clearTimeout(resumeTimer);
    }
  }, [isUserInteracting]);

  // Sync visual scroll with activeIndex changes (for autoplay)
  useEffect(() => {
    if (containerRef.current && !isUserInteracting) {
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        const { clientHeight, scrollHeight } = containerRef.current;
        const maxScroll = scrollHeight - clientHeight;
        const targetScroll = (activeIndex / (items.length - 1)) * maxScroll;
        containerRef.current.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      } else {
        const { clientWidth } = containerRef.current;
        const targetScroll = activeIndex * clientWidth;
        containerRef.current.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex, items.length, isUserInteracting]);

  const scrollToCard = (index: number) => {
    setActiveIndex(index);
    setIsUserInteracting(true);
    
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
      if (containerRef.current && !isUserInteracting) {
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

    const handleUserScroll = () => {
      setIsUserInteracting(true);
    };

    const handleResize = () => {
      if (containerRef.current) {
        containerRef.current.scrollTo(0, 0);
        setActiveIndex(0);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll, { passive: true });
    container?.addEventListener("scroll", handleUserScroll, { passive: true, once: true });
    window.addEventListener("resize", handleResize);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
      container?.removeEventListener("scroll", handleUserScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [items.length, isUserInteracting]);

  return (
    <div className={`w-full lg:w-1/2 md:w-full relative overflow-hidden ${className}`}>
      {/* Progress indicator for mobile */}
      <div className="absolute top-0 left-0 w-full h-[14px] lg:hidden">
        <div className="h-1 rounded-full overflow-hidden bg-gray-200 w-full dark:bg-gray-800">
          {/* Show individual progress segments */}
          <div className="h-full flex">
            {items.map((_, index) => (
              <div
                key={index}
                className={`flex-1 h-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[linear-gradient(90deg,#FFF_0%,#132696_100%)]'
                    : index < activeIndex
                    ? 'bg-blue-600'
                    : 'bg-transparent'
                }`}
                style={{
                  marginRight: index < items.length - 1 ? '2px' : '0'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Auto-play control button */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="w-8 h-8 rounded-full bg-white/80 dark:bg-black/80 border border-gray-300 dark:border-gray-600 flex items-center justify-center hover:bg-white dark:hover:bg-black transition-colors"
          title={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
        >
          {isAutoPlaying ? (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
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

      {/* Progress indicator for desktop */}
      <div className="absolute right-0 top-0 h-[391px] w-[14px] hidden lg:block">
        <div className="w-1 rounded-full overflow-hidden bg-gray-200 h-[391px] dark:bg-gray-800">
          {/* Show individual progress segments */}
          <div className="w-full h-full flex flex-col">
            {items.map((_, index) => (
              <div
                key={index}
                className={`w-full flex-1 transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-[linear-gradient(180deg,#FFF_0%,#132696_100%)]'
                    : index < activeIndex
                    ? 'bg-blue-600'
                    : 'bg-transparent'
                }`}
                style={{
                  marginBottom: index < items.length - 1 ? '2px' : '0'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 lg:hidden">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToCard(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === activeIndex
                ? 'bg-blue-600 dark:bg-blue-400'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}: ${items[index].title}`}
          />
        ))}
      </div>
    </div>
  );
} 