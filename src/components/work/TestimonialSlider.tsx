"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    text: `Seth at Forte Web Designs built our site from scratch! We've already seen a noticeable increase in leads and conversions. Hands down the best investment we've made for our business.`,
    author: "Seth",
    role: "Owner of Carter HVAC",
  },
  {
    text: `We saw a 2x increase in online leads after working with Forte Web Designs. Their team is incredibly professional and results-driven.`,
    author: "Forte Web Designs",
    role: "Founder of Lee & Co. Legal",
  },
  {
    text: `Working with Seth and Forte Web Designs was a game changer for our startup. They not only built a stunning website but helped us understand how to convert traffic into sales.`,
    author: "Seth",
    role: "CEO of SparkCommerce",
  },
];

export const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto h-80 overflow-hidden">
      {testimonials.map((t, i) => {
        const isActive = i === index;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center h-full md:px-8 pr-2 sm:-mt-12 -mt-8 transform sm:translate-x-8 translate-x-5 opacity-100 sm:w-[87%] w-[90%]">
              <div className="relative bg-gradient-to-r from-blue-400 to-blue-600 sm:p-8 p-3 sm:rounded-3xl rounded-xl shadow-2xl max-w-2xl">
                <div className="text-white sm:text-lg text-[14px] font-medium md:leading-relaxed leading-4">
                  {t.text}
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col justify-center h-full md:px-8 px-2">
              <div className="relative bg-gradient-to-r from-blue-400 to-blue-600 sm:p-8 p-4 sm:rounded-3xl rounded-xl shadow-2xl max-w-2xl">
                <div className="text-white sm:text-lg text-[14px] font-medium md:leading-relaxed leading-4">
                  {t.text}
                </div>

                <div className="absolute bottom-0 translate-y-full">
                  <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-primary-1450"></div>
                </div>
              </div>

              <div className="md:mt-8 mt-5 sm:ml-8 ml-5">
                <div className="dark:text-gray-300 text-primary-1400 sm:text-sm text-[12px]">
                  {t.author} • {t.role}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
