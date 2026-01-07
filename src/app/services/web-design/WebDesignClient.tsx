'use client';

import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function WebDesignClient() {
  const services = [
    {
      title: "The Website",
      description: "Professional site that captures leads. Mobile-friendly, fast, easy to update."
    },
    {
      title: "CRM Connection",
      description: "Form submissions create contacts automatically. No copy-pasting, no leads lost."
    },
    {
      title: "Automated Follow-Up",
      description: "New lead comes in, they get an immediate response. You get notified. Sequence starts."
    },
    {
      title: "Dashboards",
      description: "See your leads, conversions, pipeline. Not buried in Google Analytics."
    }
  ];

  const problems = [
    {
      problem: "Our website looks outdated.",
      solution: "A modern site you're proud to share."
    },
    {
      problem: "Leads come in but nobody follows up fast enough.",
      solution: "Automation responds instantly. By the time you reach out, they feel taken care of."
    },
    {
      problem: "The website doesn't connect to anything.",
      solution: "I build the site AND the system behind it. Everything connected from day one."
    }
  ];

  const pricing = [
    { tier: "Website only", range: "$3,000 - $6,000" },
    { tier: "Website + CRM", range: "$5,000 - $10,000" },
    { tier: "Website + CRM + automation", range: "$8,000 - $15,000" },
    { tier: "Full system", range: "$12,000 - $25,000" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6">
                Web Design
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10">
                Your website is just the front door. I build the whole house.
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
                <span className="font-semibold text-gray-900 dark:text-white">1. Discovery</span> — I figure out what you actually need. Sometimes just a site, sometimes the whole system.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">2. Design</span> — You see mockups before I write code.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">3. Build</span> — Site, CRM, automation. Layers added as we go or all at once.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-white">4. Launch</span> — Training on updates. You're not stuck depending on me.
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Timeline: 3-6 weeks depending on scope.
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Investment */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-16 text-center">
              Investment
            </h2>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up">
            <div className="space-y-4">
              {pricing.map((item) => (
                <div key={item.tier} className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.tier}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.range}
                  </span>
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Already Have a Site */}
      <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-gray-900 dark:text-white mb-8">
                Already Have a Site?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                We don't have to start over. I can just add:
              </p>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-8">
                <li>CRM connection</li>
                <li>Automated follow-up</li>
                <li>Dashboards</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-400 italic">
                The goal is a system that works, not rebuilding for the sake of it.
              </p>
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
                  Book a call. No pitch, no pressure. Just tell me what's not working.
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
