'use client';

import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function AutomationAuditClient() {
  const deliverables = [
    { title: "Current State Map", description: "A clear picture of every tool, workflow, and process you're running today." },
    { title: "Opportunity List", description: "The biggest wins — ranked by impact and effort. What to fix first." },
    { title: "Prioritized Roadmap", description: "A step-by-step plan with timelines, so you know exactly what to build and when." },
    { title: "ROI Estimates", description: "Hours saved, revenue impact, and cost-per-lead projections for each opportunity." }
  ];

  const whoItsFor = [
    "You know things are broken but aren't sure what to fix first.",
    "You've outgrown your current systems and need a plan.",
    "You want to automate but don't know where the biggest ROI is.",
    "You're evaluating whether to hire someone or build internally."
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-gray-900 dark:text-white mb-4">
                Automation Audit
              </h1>
              <p className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-6">
                Not sure where to start? Start here.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                I review your current setup, identify the biggest opportunities, and give you a prioritized roadmap with ROI estimates. If you decide to move forward with a build, the audit fee applies as credit toward the project.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
              >
                Book an Audit
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-12 text-center">
              What You Get
            </h2>
          </SimpleScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
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

      {/* Who It's For */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-12 text-center">
              Who It's For
            </h2>
          </SimpleScrollReveal>
          <div className="space-y-4">
            {whoItsFor.map((item, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-600 dark:text-gray-400">{item}</p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-12 text-center">
              How It Works
            </h2>
          </SimpleScrollReveal>
          <div className="grid sm:grid-cols-3 gap-8">
            <SimpleScrollReveal direction="up">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mx-auto mb-4">1</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Call</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">30-minute call to understand your business, tools, and pain points.</p>
              </div>
            </SimpleScrollReveal>
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mx-auto mb-4">2</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Audit</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">I dig into your systems, map what's working, and identify the biggest opportunities.</p>
              </div>
            </SimpleScrollReveal>
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mx-auto mb-4">3</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Roadmap</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">You get a prioritized plan with ROI estimates. Move forward or don't — no pressure.</p>
              </div>
            </SimpleScrollReveal>
          </div>
          <SimpleScrollReveal direction="up">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
              If you decide to build, the audit fee applies as credit toward the project.
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SimpleScrollReveal direction="up">
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                  <OptimizedImage src="/images/about/headshot-6.jpg" alt="Seth Forte" width={96} height={96} className="w-full h-full object-cover" sizes="96px" />
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
                  Ready to find the opportunities?
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Book a call and let's figure out where the biggest wins are.
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
