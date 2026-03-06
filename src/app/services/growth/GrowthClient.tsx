'use client';

import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function GrowthClient() {
  const includes = [
    { title: "Automated Follow-Up", description: "Email and SMS sequences that go out automatically. Every lead gets worked whether you're available or not." },
    { title: "Sales Funnels", description: "Landing pages, opt-ins, and conversion paths that turn traffic into pipeline." },
    { title: "Booking Systems", description: "Calendar scheduling wired into your CRM. No back-and-forth emails." },
    { title: "SMS Integration", description: "Text message follow-up and notifications. Meet leads where they actually respond." },
    { title: "Channel Attribution", description: "Know exactly which marketing channels produce revenue and which ones waste money." },
    { title: "Conversion Tracking", description: "See where leads drop off. Fix the leaks. Measure what matters." }
  ];

  const problems = [
    { problem: "We're getting leads but can't follow up fast enough.", solution: "Automated sequences respond in seconds. Every lead gets worked consistently." },
    { problem: "We have no idea which marketing channels actually produce revenue.", solution: "Attribution tracking shows you exactly where customers come from and what each channel costs." },
    { problem: "Our sales process is inconsistent. It depends on who's working the lead.", solution: "Automated pipelines and follow-up sequences make the process the same every time." }
  ];

  const steps = [
    { step: "1", title: "Discovery", description: "I map your current lead flow and find where deals are dying." },
    { step: "2", title: "Build", description: "Funnels, follow-up, booking, SMS, and attribution — all connected." },
    { step: "3", title: "Handoff", description: "Training, documentation, and your first campaigns live." }
  ];

  const results = [
    { client: "Modern Bungalow", metric: "15 hrs/month back" },
    { client: "CR Deals", metric: "$52K/year saved" },
    { client: "Hollow Bamboo", metric: "20 hrs/week back" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white mb-4">
                Growth
              </h1>
              <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
                Turn leads into revenue. Know what's working.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Automated follow-up, sales funnels, booking, SMS, and the tracking that shows you exactly which channels produce revenue. Built in 2-3 weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200">
                  Book a Call
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-gray-400 rounded-lg font-semibold transition-all duration-200">
                  All Services
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-12 text-center">
              What's Included
            </h2>
          </SimpleScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {includes.map((item, index) => (
              <SimpleScrollReveal key={item.title} direction="up" delay={index * 100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sound Familiar? */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-12 text-center">
              Sound Familiar?
            </h2>
          </SimpleScrollReveal>
          <div className="space-y-8">
            {problems.map((item, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="border-l-4 border-blue-600 pl-6">
                  <p className="font-medium text-gray-900 dark:text-white mb-2 italic">"{item.problem}"</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.solution}</p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-12 text-center">
              How I Work
            </h2>
          </SimpleScrollReveal>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <SimpleScrollReveal key={item.step} direction="up" delay={index * 100}>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
          <SimpleScrollReveal direction="up">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">Timeline: 2-3 weeks. You own everything.</p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-12 text-center">
              Results
            </h2>
          </SimpleScrollReveal>
          <div className="space-y-4">
            {results.map((result, index) => (
              <SimpleScrollReveal key={result.client} direction="up" delay={index * 100}>
                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-900 dark:text-white">{result.client}</span>
                  <span className="text-gray-600 dark:text-gray-400">{result.metric}</span>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SimpleScrollReveal direction="up">
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                  <OptimizedImage src="/images/about/headshot-6.jpg" alt="Seth Forte" width={96} height={96} className="w-full h-full object-cover" sizes="96px" />
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
                  Got a problem?
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Book a call. Just tell me what's not working.
                </p>
              </div>
            </SimpleScrollReveal>
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <iframe src="https://calendly.com/seth-fortewebdesigns/30min" width="100%" height="600" title="Schedule a call with Seth" className="w-full" />
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
