'use client';

import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function IntegrationsClient() {
  const services = [
    {
      title: "CRM Setup",
      description: "Your CRM as the source of truth. Set up properly, cleaned up, working the way you need."
    },
    {
      title: "System Connections",
      description: "Your tools sharing data automatically. Enter it once, it shows up everywhere."
    },
    {
      title: "Automated Handoffs",
      description: "When deals close or projects kick off, the right things happen automatically."
    },
    {
      title: "Dashboards",
      description: "Data from everywhere in one view. Real-time. No digging."
    }
  ];

  const problems = [
    {
      problem: "My team is copy-pasting between five different tools.",
      solution: "Connections that sync automatically. Enter it once, it's everywhere."
    },
    {
      problem: "Our CRM is a mess and nobody trusts the data.",
      solution: "Cleanup, proper setup, systems that keep it accurate."
    },
    {
      problem: "Things fall through when deals close.",
      solution: "Automated handoffs. The right actions trigger without anyone remembering."
    }
  ];

  const systems = [
    { category: "CRMs", tools: "HubSpot, Salesforce, Pipedrive, Go High Level, Zoho" },
    { category: "Email", tools: "Mailchimp, ActiveCampaign, Klaviyo, Gmail" },
    { category: "Forms", tools: "Typeform, JotForm, Gravity Forms, Webflow" },
    { category: "Accounting", tools: "QuickBooks, Xero, FreshBooks" },
    { category: "E-commerce", tools: "Shopify, WooCommerce" },
    { category: "Project Management", tools: "Asana, ClickUp, Notion" }
  ];

  const results = [
    { client: "Modern Bungalow", metric: "Customer comms that run themselves" },
    { client: "CR Deals", metric: "3,000 listings/month, no bottlenecks" },
    { client: "Kingfisher Ads", metric: "Data pulls itself from Meta and Google" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6">
                CRM & Integrations
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10">
                One number everyone trusts.
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
                <span className="font-semibold text-gray-900 dark:text-white">1. Audit</span> - I map your tools, find the gaps, figure out what's costing you.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">2. Plan</span> - Clear plan for what gets connected and how data flows.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">3. Build</span> - I build it, test it, make sure it works before you rely on it.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">4. Train</span> - Your team knows how it works. You're not dependent on me.
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Timeline: 2-4 weeks. ROI in 4-8 weeks.
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Systems I Work With */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-16 text-center">
              Systems I Work With
            </h2>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up">
            <div className="space-y-4 mb-8">
              {systems.map((system) => (
                <p key={system.category} className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">{system.category}:</span> {system.tools}
                </p>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center italic">
              If it has an API, I can probably connect it.
            </p>
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

      {/* CTA with Headshot & Calendly */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Headshot & Brief */}
            <SimpleScrollReveal direction="up">
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
                  <OptimizedImage
                    src="/images/about/headshot-6.jpg"
                    alt="Seth Forte"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                    sizes="96px"
                  />
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
                  Got a problem?
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Book a call. Just tell me what's not working.
                </p>
              </div>
            </SimpleScrollReveal>

            {/* Right - Calendly */}
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  src="https://calendly.com/seth-fortewebdesigns/30min"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Schedule a call with Seth"
                  className="w-full"
                />
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
