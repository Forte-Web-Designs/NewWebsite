"use client";

import { useState } from 'react';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I know if automation is right for my business?",
          a: "Start with a simple question: Is your team spending hours every week on repetitive tasks that follow a predictable pattern? Things like data entry, lead routing, follow-up emails, reporting, moving information between systems. If yes, automation probably makes sense. If your work requires judgment, creativity, or changes every time, it might not. We'll tell you honestly on the discovery call whether automation fits your situation."
        },
        {
          q: "What if I'm not sure what I need?",
          a: "That's what the discovery call is for. We'll talk about what's slowing you down, where time disappears, and what you've already tried. We'll help you figure out whether you need automation, custom software, integrations, or something else entirely. No pressure to buy anything. If we're not the right fit, we'll tell you."
        },
        {
          q: "How fast can we get started?",
          a: "Discovery calls are usually scheduled within a few days. After that, you'll get a proposal within 2-3 business days. Once you approve, most projects kick off within a week."
        }
      ]
    },
    {
      category: "Pricing",
      questions: [
        {
          q: "How much does automation cost?",
          a: "Most automation projects range from $1,500 to $7,500 depending on complexity. Simple single-workflow automations start around $1,500. More comprehensive systems with multiple integrations run $3,500 to $7,500. We price based on the outcome you're trying to achieve, not hours. Every proposal includes a clear scope, timeline, and ROI calculation so you know when it pays for itself."
        },
        {
          q: "How much does custom software cost?",
          a: "Custom software projects typically range from $3,500 to $15,000+, depending on scope and complexity. Simple internal tools start around $3,500. More complex applications with multiple features, integrations, and user types run higher. After a discovery call, we provide a detailed proposal with exactly what you're getting."
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes. Typically 50% upfront, 50% on completion. For larger projects, we do milestone-based payments aligned with deliverables."
        },
        {
          q: "What's your minimum project size?",
          a: "$1,500 for standalone projects. If your need is smaller than that, we're probably not the right fit, but we can point you in the right direction."
        }
      ]
    },
    {
      category: "Process",
      questions: [
        {
          q: "How long does a project take?",
          a: "It depends on scope. Simple automations: 2-3 weeks. Comprehensive automation systems: 3-6 weeks. Custom software: 4-12 weeks. Websites: 2-4 weeks. We'll give you a specific timeline in your proposal."
        },
        {
          q: "What do you need from me to get started?",
          a: "Access to the systems we're integrating (CRM, email platform, etc.), clarity on your current workflow, and availability for questions during the build. We handle the technical work. You provide the business context."
        },
        {
          q: "Can I see progress during the project?",
          a: "Yes. We build in phases and check in regularly. You're not waiting months to find out if we understood the requirements."
        }
      ]
    },
    {
      category: "Results",
      questions: [
        {
          q: "What kind of results can I expect?",
          a: "Depends on the project, but here's what clients have seen: 15-20+ hours saved weekly on manual work. Follow-up tasks that never get missed. Reports that generate automatically instead of manually. Systems that scale without adding headcount. We calculate expected ROI in every proposal. Most clients see payback within 4-8 weeks."
        },
        {
          q: "What if it doesn't work?",
          a: "We test everything before deployment. If something breaks after launch, we fix it. All projects include post-launch support (30-60 days depending on scope). If you're not satisfied with the work, we make it right."
        }
      ]
    },
    {
      category: "Support",
      questions: [
        {
          q: "Do you offer ongoing support after launch?",
          a: "Yes. Every project includes post-launch support. After that, we offer monthly retainer plans ($497-$1,997/month) for clients who want ongoing optimization, development hours, and priority support. Not required. Some clients prefer one-off projects. Others want continuous improvement."
        },
        {
          q: "Can I make updates myself, or do I need you?",
          a: "For automations and integrations, most day-to-day management you can handle yourself. We provide documentation and training. For custom software and websites, it depends on the changes. Simple content updates you can do. Structural changes or new features typically need development work."
        }
      ]
    },
    {
      category: "Working Together",
      questions: [
        {
          q: "Who do I actually work with?",
          a: "You work directly with Seth. No account managers, no junior developers, no bait-and-switch. The person on the discovery call is the person who builds your systems."
        },
        {
          q: "Do you work with businesses outside of Dallas?",
          a: "Yes. Most clients are remote. We work with businesses nationwide. Location doesn't matter for automation and software projects."
        },
        {
          q: "What tools do you work with?",
          a: "We're tool-agnostic. Common platforms include n8n, Make.com, Zapier for automation. HubSpot, Salesforce, Go High Level, Pipedrive for CRMs. Shopify, WooCommerce for e-commerce. QuickBooks, Xero for accounting. And many more. If it has an API, we can probably connect it."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg sm:text-xl text-blue-100">
                Common questions about working together, pricing, and what to expect.
              </p>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-10 sm:mb-12">
                <SimpleScrollReveal direction="up" delay={categoryIndex * 50}>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-3 border-b-2 border-blue-600">
                    {category.category}
                  </h2>
                </SimpleScrollReveal>

                <div className="space-y-3 sm:space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <SimpleScrollReveal key={faqIndex} direction="up" delay={categoryIndex * 50 + faqIndex * 25}>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg">
                          <button
                            onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                            className="w-full text-left p-4 sm:p-6 flex items-start justify-between gap-3 sm:gap-4 group"
                          >
                            <div className="flex-1">
                              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {faq.q}
                              </h3>
                            </div>
                            <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                              <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                          >
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        </div>
                      </SimpleScrollReveal>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Still Have Questions?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8">
                Book a discovery call and we'll talk through your specific situation. No pressure, no obligation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Book a Strategy Call
                <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
