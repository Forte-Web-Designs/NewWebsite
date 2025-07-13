"use client";

import { useState } from "react";
import { Icon } from "@/components/images/Icon";
import SimpleScrollReveal from "@/components/animations/SimpleScrollReveal";

interface StepItem {
  title: string;
  description: string;
  icon: string;
}

interface ForteMethodStepsProps {
  // Steps data
  items: StepItem[];

  // Section content
  badge?: string;
  title: string;
  subtitle: string;

  // Optional styling
  className?: string;
  titleClassName?: string;
}

export default function ForteMethodSteps({
  items,
  badge = "Workflow",
  title,
  subtitle,
  className = "",
  titleClassName = "font-display font-medium text-[38px] sm:text-[88px] leading-[40px] sm:leading-[90px] tracking-[-1.76px] text-start text-gray-900 dark:text-white"
}: ForteMethodStepsProps) {
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % items.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <section className={`bg-white dark:bg-[#000000] pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36 w-full ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap lg:gap-0 md:gap-8 max-w-[1200px] m-auto">
          <div className="w-full lg:w-1/2 md:w-full m-auto">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="grid gap-6">
                <div className="flex justify-start gap-1">
                  <Icon
                    name="star-icon"
                    alt="star-icon"
                    className="w-[18px] h-[18px] mt-1"
                  />
                  <p className="font-sans font-normal text-2xl leading-6 tracking-[-0.24px] align-middle text-[#8D9DFF]">
                    {badge}
                  </p>
                </div>
                <div className="flex align-middle justify-start">
                  <h3 className={titleClassName}>
                    {title?.split('|').map((line, index) => (
                      <span key={index}>
                        {line}
                        {index < title.split('|').length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
                <div className="flex align-middle justify-start">
                  <p className="font-display font-medium text-[14px] sm:text-xl leading-[100%] tracking-normal text-start text-gray-600 dark:text-gray-400 mb-10 sm:mb-0">
                    {subtitle}
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>

          {/* Steps Display */}
          <div className="w-full lg:w-1/2 md:w-full">
            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 h-[400px] flex flex-col justify-between">
                
                {/* Step Content */}
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="mb-6">
                    <img 
                      src={items[activeStep]?.icon} 
                      alt={items[activeStep]?.title}
                      className="w-16 h-16 mx-auto"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {items[activeStep]?.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {items[activeStep]?.description}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Step Indicators */}
                  <div className="flex space-x-2">
                    {items.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                          index === activeStep
                            ? 'bg-blue-600'
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextStep}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Step Counter */}
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Step {activeStep + 1} of {items.length}
                  </span>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
