"use client";

import { useState } from 'react';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How much does this cost?",
      a: "$1,500-15,000+ depending on scope. Starter projects start at $1,500. Full systems run $7,500+. You'll know the exact number before we start."
    },
    {
      q: "How long do projects take?",
      a: "2-12 weeks depending on scope. Most automation projects: 2-4 weeks. Custom software: 4-8 weeks. Full systems: 6-12 weeks."
    },
    {
      q: "What's included?",
      a: "Discovery, build, testing, training, documentation, and support. You own everything."
    },
    {
      q: "How do I know if automation is right for me?",
      a: "If your team spends hours on repetitive tasks that follow a pattern... data entry, follow-ups, reporting, moving info between systems. If yes, probably. If not sure, that's what the call is for."
    },
    {
      q: "What if I'm not sure what I need?",
      a: "That's what the discovery call is for. I'll look at your situation and tell you what makes sense. No pressure."
    },
    {
      q: "Who do I work with?",
      a: "Me. No account managers, no handoffs. The person you talk to is the person who builds it."
    },
    {
      q: "Do you offer payment plans?",
      a: "Yes. 50% upfront, 50% on completion. Milestone payments for larger projects."
    },
    {
      q: "What's the discovery phase?",
      a: "For complex projects, I prove the approach works before you commit to the full build. Credits toward your project if we move forward."
    },
    {
      q: "What if it doesn't work?",
      a: "I don't disappear after launch. Support is included. If something breaks, I fix it."
    },
    {
      q: "Do you work with businesses outside Grapevine?",
      a: "Yes. Based in Grapevine, TX, working with clients nationwide. Everything is remote."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-8">
                FAQ
              </h1>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
              >
                Book a Call
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <SimpleScrollReveal key={index} direction="up" delay={index * 50}>
                  <div className="border-b border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left py-5 flex items-center justify-between gap-4 group"
                    >
                      <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {faq.q}
                      </h2>
                      <div className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[200px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </SimpleScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Got a question not listed?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
              >
                Book a Call
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
