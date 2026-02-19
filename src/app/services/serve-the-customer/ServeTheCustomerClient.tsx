'use client';

import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function ServeTheCustomerClient() {
  const services = [
    {
      title: "Invoicing and Payments",
      description: "QuickBooks, Stripe, whatever you use. Connected to your CRM so when someone pays, the system knows."
    },
    {
      title: "Client Onboarding",
      description: "Welcome emails, intake forms, next steps. All triggered automatically when a new client comes in. Same professional experience every time."
    },
    {
      title: "Project Management",
      description: "Tasks, milestones, status updates. Connected to client records so your team knows what's happening without checking 5 different tools."
    },
    {
      title: "Internal Notifications",
      description: "The right person gets notified when something needs attention. No more checking inboxes and hoping someone saw it."
    }
  ];

  const problems = [
    {
      problem: "I update QuickBooks, then the CRM, then a spreadsheet, then Slack.",
      solution: "That should be one action, not four. We wire them together so data moves once and shows up everywhere it needs to."
    },
    {
      problem: "Onboarding is different every time depending on who handles it.",
      solution: "We build the onboarding sequence so every client gets the same experience. Professional, consistent, automatic."
    },
    {
      problem: "Things fall through the cracks after someone pays.",
      solution: "Usually because there's no handoff system between sales and delivery. We build the bridge so nothing gets lost."
    }
  ];

  const results = [
    { client: "Hollow Bamboo", metric: "20 hrs/week back" },
    { client: "CR Deals Cincinnati", metric: "$52K/year saved" },
    { client: "Revolut", metric: "$4M opportunity found" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6">
                Serve the Customer
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10">
                They said yes. Now make the experience match the promise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200">
                  Book a Call
                </Link>
                <Link href="/pricing" className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-gray-400 dark:hover:border-gray-500 rounded-lg font-semibold transition-all duration-200">
                  View Pricing
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-16 text-center">What I Build</h2>
          </SimpleScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <SimpleScrollReveal key={service.title} direction="up" delay={index * 100}>
                <div>
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-16 text-center">Sound Familiar?</h2>
          </SimpleScrollReveal>
          <div className="space-y-10">
            {problems.map((item, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-2 italic">&ldquo;{item.problem}&rdquo;</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.solution}</p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-16 text-center">How I Work</h2>
          </SimpleScrollReveal>
          <SimpleScrollReveal direction="up">
            <div className="space-y-6 mb-10">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">1. Discovery</span> - I map out how you serve clients today and where the gaps are.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">2. Build</span> - I connect your tools, build the automations, and test everything end to end.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">3. Handoff</span> - You get the documentation, the system map, and training. Your team owns it.
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Timeline: 3-6 weeks. The back office starts running itself.
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-16 text-center">Results</h2>
          </SimpleScrollReveal>
          <div className="space-y-6 mb-12">
            {results.map((result, index) => (
              <SimpleScrollReveal key={result.client} direction="up" delay={index * 100}>
                <div className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-900 dark:text-white">{result.client}</span>
                  <span className="text-gray-600 dark:text-gray-400">{result.metric}</span>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <Link href="/case-studies" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
                See all
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <SimpleScrollReveal direction="up">
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                  <OptimizedImage src="/images/about/headshot-6.jpg" alt="Seth Forte" width={96} height={96} className="w-full h-full object-cover" sizes="96px" />
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">Got a problem?</h2>
                <p className="text-gray-600 dark:text-gray-400">Book a call. Just tell me what's not working.</p>
              </div>
            </SimpleScrollReveal>
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <iframe src="https://calendly.com/seth-fortewebdesigns/30min" width="100%" height="600" frameBorder="0" title="Schedule a call with Seth" className="w-full" />
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
