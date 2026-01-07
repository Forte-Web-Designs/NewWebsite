'use client';

import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function CustomSoftwareClient() {
  const services = [
    {
      title: "Dashboards",
      description: "Your data in one view. Real-time. No logging into six tools."
    },
    {
      title: "Internal Tools",
      description: "Inventory systems, client portals, operational tools. Built for your workflow."
    },
    {
      title: "Data Processing",
      description: "Heavy transformations, AI analysis, complex calculations. Beyond what automation platforms can handle."
    },
    {
      title: "API Integrations",
      description: "Your systems working as one. Bi-directional sync, custom middleware, automated data flow."
    }
  ];

  const problems = [
    {
      problem: "We're using spreadsheets for things we shouldn't be.",
      solution: "Custom tools that handle validation, automation, multi-user access."
    },
    {
      problem: "Our software doesn't work the way we work.",
      solution: "I build around your processes. Not the other way around."
    },
    {
      problem: "Custom software sounds expensive.",
      solution: "It's about whether it costs less than the problem. I show you the real numbers."
    }
  ];

  const included = [
    "Full source code ownership",
    "Complete documentation",
    "Team training",
    "90 days of bug fixes",
    "Ongoing support available"
  ];

  const results = [
    { client: "Hollow Bamboo", metric: "20+ hrs/week back" },
    { client: "Revolut", metric: "$4M opportunity found" },
    { client: "CR Deals", metric: "1,040+ hrs/year saved" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6">
                Custom Software
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10">
                Built around how you actually work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
                >
                  Book a Call
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-500 rounded-lg font-semibold transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-16 text-center">
              What I Build
            </h2>
          </SimpleScrollReveal>

          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <SimpleScrollReveal key={service.title} direction="up" delay={index * 100}>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sound Familiar */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-16 text-center">
              Sound Familiar?
            </h2>
          </SimpleScrollReveal>

          <div className="space-y-10">
            {problems.map((item, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-2 italic">
                    "{item.problem}"
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.solution}
                  </p>
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
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-16 text-center">
              How I Work
            </h2>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up">
            <div className="space-y-6 mb-10">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">1. Discovery</span> — I figure out what the workarounds are costing you.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">2. Design</span> — You see mockups before I write code.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">3. Build</span> — Development with regular updates. You see progress throughout.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">4. Handoff</span> — Working software, documentation, training.
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Timeline: 4-12 weeks depending on scope.
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-16 text-center">
              What's Included
            </h2>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up">
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-16 text-center">
              Results
            </h2>
          </SimpleScrollReveal>

          <div className="space-y-6 mb-12">
            {results.map((result, index) => (
              <SimpleScrollReveal key={result.client} direction="up" delay={index * 100}>
                <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {result.client}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {result.metric}
                  </span>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                See all
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-10">
                Got a problem?
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-200"
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
