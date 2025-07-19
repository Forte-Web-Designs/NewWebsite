"use client";

import { useState } from "react";
import { Icon } from "@/components/images/Icon";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqData: FAQItem[];
};

export default function FAQSection({ faqData }: FAQSectionProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 pr-4">
                {faq.question}
              </h3>
              <div className="flex-shrink-0">
                <Icon
                  name={openFAQ === index ? "minus" : "plus"}
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                />
              </div>
            </div>
          </button>
          
          {openFAQ === index && (
            <div className="px-6 pb-6">
              <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
