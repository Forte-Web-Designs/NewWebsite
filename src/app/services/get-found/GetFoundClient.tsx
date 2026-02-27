'use client';

import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function GetFoundClient() {
  const services = [
    {
      title: "SEO",
      description: "Show up when people search for what you do. Local and organic. Built to compound over time."
    },
    {
      title: "Paid Ads",
      description: "Google, Facebook, Instagram, LinkedIn. Ads that go somewhere real with tracking so you know what they produced."
    },
    {
      title: "Content Systems",
      description: "Social media, email campaigns, blog content. Consistent visibility without you doing it all by hand."
    },
    {
      title: "Outreach",
      description: "Cold email, direct outreach, partnerships. New conversations with the right people, on repeat."
    }
  ];

  const problems = [
    {
      problem: "We're spending money on ads but have no idea what's actually working.",
      solution: "We build the tracking so every dollar is accounted for. You'll know exactly which channel is producing and which is burning money."
    },
    {
      problem: "We get most of our business from referrals and word of mouth.",
      solution: "That's great until it slows down. We build a system so you're not depending on luck to keep the pipeline full."
    },
    {
      problem: "We tried social media and ads but nothing stuck.",
      solution: "Usually the problem isn't the content or the platform. It's that there's no system behind it... no funnel, no tracking, no follow-up. We fix that."
    }
  ];

  const results = [
    { client: "CR Deals Cincinnati", metric: "$52K/year saved" },
    { client: "Prediction Market Trader", metric: "Research on autopilot" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6">
                Get Found
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10">
                Your business can't grow if nobody knows it exists.
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
                    &ldquo;{item.problem}&rdquo;
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
                <span className="font-semibold text-gray-900 dark:text-white">1. Discovery</span> - I look at where your traffic is coming from today, what's working, and what's missing.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">2. Build</span> - I set up the channels, the tracking, and the connection to your CRM so every lead is captured.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">3. Handoff</span> - You get the full system, the data, and the documentation. You can see exactly what's happening.
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Timeline: 2-6 weeks. You'll know where your customers are coming from.
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
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
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
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
