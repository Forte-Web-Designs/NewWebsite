'use client';

import Link from 'next/link';
import SimpleScrollReveal from './animations/SimpleScrollReveal';

// Investment Options - Highest price first for anchoring
const investmentTiers = [
  {
    name: 'Complete Business System',
    priceRange: '$7,500 - $15,000+',
    subhead: 'End-to-end transformation',
    whatSolves: "You need a complete overhaul. Multiple systems that don't talk to each other, manual processes everywhere, no visibility into what's happening. You want it all fixed, properly.",
    features: [
      'Full workflow audit and strategy',
      'Custom software and automation suite',
      'CRM optimization and integrations',
      'Real-time dashboards and reporting',
      'Team training and documentation',
      '90 days of support and optimization'
    ],
    outcomes: [
      '40+ hours saved weekly',
      'Complete operational visibility',
      'Systems that scale with growth'
    ],
    timeline: '6-12 weeks',
    cta: 'Book a Strategy Call',
    href: '/contact'
  },
  {
    name: 'Automation System',
    priceRange: '$3,500 - $7,500',
    subhead: 'Eliminate manual work',
    whatSolves: "You're spending hours every week on repetitive tasks. Lead routing, follow-ups, data entry, reporting. You need systems that handle it automatically so your team can focus on work that matters.",
    features: [
      'Workflow analysis and optimization',
      'Custom automation build',
      'CRM and tool integrations',
      'Error handling and monitoring',
      'Training and documentation',
      '60 days of support'
    ],
    outcomes: [
      '20+ hours saved weekly',
      'Zero missed follow-ups',
      'Scales without adding headcount'
    ],
    timeline: '3-6 weeks',
    cta: 'Book a Strategy Call',
    href: '/contact',
    popular: true,
    badge: 'MOST POPULAR'
  },
  {
    name: 'Starter Project',
    priceRange: '$1,500 - $3,500',
    subhead: 'Solve one problem well',
    whatSolves: "You have a specific bottleneck that's costing you time. One workflow, one integration, one system that needs to work. You want it fixed without a massive project.",
    features: [
      'Focused workflow optimization',
      'Single automation or integration',
      'Testing and deployment',
      'Documentation',
      '30 days of support'
    ],
    outcomes: [
      '5-10 hours saved weekly',
      'One major pain point eliminated',
      'Foundation for future automation'
    ],
    timeline: '2-3 weeks',
    cta: 'Book a Strategy Call',
    href: '/contact'
  }
];

// Ongoing Support Tiers - Highest first
const supportTiers = [
  {
    name: 'Priority Partner',
    price: '$1,997',
    period: '/month',
    features: [
      'Same-day response on all requests - you jump the queue',
      'After-hours emergency support when it matters',
      'Quarterly strategy sessions to keep improving',
      'Proactive recommendations before problems happen',
      'Up to 20 hours of development or optimization included monthly'
    ],
    bestFor: 'Mission-critical operations where you need someone who knows your system on speed dial',
    cta: 'Get Started',
    href: '/contact'
  },
  {
    name: 'Growth Partner',
    price: '$997',
    period: '/month',
    features: [
      'Priority phone and Slack support - fast answers when you need them',
      'Quarterly system audits to catch issues early',
      'Proactive recommendations for continuous improvement',
      'Monthly performance reports',
      'Up to 8 hours of development or optimization included monthly'
    ],
    bestFor: 'Businesses that want someone who knows their system available when they need them',
    cta: 'Get Started',
    href: '/contact',
    recommended: true,
    badge: 'RECOMMENDED'
  },
  {
    name: 'Essential Care',
    price: '$497',
    period: '/month',
    features: [
      'Hosting, security, and monitoring handled for you',
      'Priority email support (24-hour response)',
      'Monthly performance reports',
      'Up to 2 hours of updates or optimization included monthly'
    ],
    bestFor: 'Keeping systems running smoothly with minimal ongoing changes',
    cta: 'Get Started',
    href: '/contact'
  }
];

// Testimonials with attribution and outcomes
const testimonials = [
  {
    quote: "Very good at thinking through the logic of how to best automate a process, and then executing on that vision. Definitely will work with him again.",
    company: 'Modern Bungalow',
    location: 'Denver furniture retailer',
    result: 'Customer communication that runs itself - 15+ hours monthly back'
  },
  {
    quote: "Extremely attentive and responsive. Gave us an accurate timeline and met it. Highly recommend.",
    company: 'Hollow Bamboo Film Productions',
    location: '',
    result: 'Complete equipment visibility - 20+ hours weekly back'
  },
  {
    quote: "Communication was 10/10. I felt very safe throughout the entire project.",
    company: 'Yves Klein, Germany',
    location: 'Marketing agency',
    result: "From 'everything is down' to fully operational in 2 hours"
  },
  {
    quote: "Figured it out quickly and got everything working smoothly. Very responsive throughout.",
    company: 'Prediction Market Trader',
    location: '',
    result: 'Research that runs while you sleep - hundreds of markets analyzed daily'
  }
];

// FAQ items for objection handling
const faqItems = [
  {
    question: 'How do you price custom software projects?',
    answer: "Based on the outcome you're trying to achieve and what the problem is costing you now. After a discovery call, we provide a detailed proposal with clear deliverables, timeline, investment, and ROI calculation. For complex projects, we offer a paid discovery phase to prove the approach works before you commit to the full build. Projects typically range from $3,500 to $15,000+ depending on scope. You own the source code."
  },
  {
    question: "What's included in every project?",
    answer: "Discovery and strategy, custom build, testing, training, documentation, and post-launch support. We don't hand you something and disappear. You get a system that works and the knowledge to manage it."
  },
  {
    question: 'How long do projects take?',
    answer: "Most automation projects take 2-4 weeks. Larger custom software projects take 4-8 weeks. We'll give you a specific timeline in your proposal."
  },
  {
    question: "What if I'm not sure what I need?",
    answer: "That's what the discovery call is for. We'll look at your situation, identify opportunities, and recommend the right scope. No pressure, no obligation."
  },
  {
    question: 'Do you offer payment plans?',
    answer: "Yes. Typically 50% upfront, 50% on completion. For larger projects, we do milestone-based payments aligned with deliverables."
  },
  {
    question: 'What\'s your minimum project size?',
    answer: "$1,500 for standalone projects. If your need is smaller than that, we're probably not the right fit, but we can point you in the right direction."
  },
  {
    question: 'How do I know this will work for my business?',
    answer: "We show you the ROI math before you commit. If the numbers don't make sense for your situation, we'll tell you. We turn down projects that won't deliver real value."
  },
  {
    question: "What's the discovery phase?",
    answer: "For complex projects, we offer a paid discovery phase before quoting the full build. We get into your systems, test the critical connections, and prove the approach will work. If it won't work as planned, you keep everything we've documented and you're not obligated to continue. If it does work, the discovery investment credits toward your full project. It protects both of us - you don't commit to a large build until we've proven it's viable."
  }
];

export function PricingPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Section 1: Hero - Value-focused */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <SimpleScrollReveal direction="up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Stop Paying for Problems That Should Already Be Solved
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            We solve the technical problems holding your business back - and we price based on what they're costing you, not how long they take us to fix. Most clients see ROI in 4-8 weeks.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
          >
            Book a Strategy Call
          </Link>
        </SimpleScrollReveal>
      </div>

      {/* Section 2: ROI Frame - Key section */}
      <div className="max-w-4xl mx-auto mb-24">
        <SimpleScrollReveal direction="up">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              What Is This Problem Costing You?
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Before we talk about investment, let's talk about what you're losing right now.
              </p>
              <p>
                Maybe it's hours - your team spending 20 hours a week on manual work that should be automated. At $40/hour, that's $38,400 a year walking out the door.
              </p>
              <p>
                Maybe it's risk - a security gap, compliance issue, or infrastructure problem that could cost you far more if it breaks.
              </p>
              <p>
                Maybe it's opportunity - growth you can't capture because you don't have the systems to support it.
              </p>
              <p>
                Most of our projects pay for themselves in 4-8 weeks. After that, it's pure value - savings, protection, or capacity you didn't have before.
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                That's how we think about pricing. Not "what does this cost" but "when does this pay for itself."
              </p>
            </div>
          </div>
        </SimpleScrollReveal>
      </div>

      {/* Section 3: How We Price Projects */}
      <div className="max-w-4xl mx-auto mb-24">
        <SimpleScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            How We Price Projects
          </h2>
          <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6 text-center max-w-3xl mx-auto">
            <p>
              We price based on the outcome you're trying to achieve, not the hours it takes us to build it.
            </p>
            <p>
              Every project starts with a discovery call where we understand your situation, identify opportunities, and map out what's possible. Then we send a detailed proposal with clear scope, timeline, and investment.
            </p>
            <p>
              For complex projects, we offer a paid discovery phase before the full build. We get into your systems, test the approach, and prove it works before you commit to the larger investment. If it won't work as planned, you keep everything we've documented. If it does, the discovery investment credits toward your project.
            </p>
            <p className="font-medium text-gray-900 dark:text-white">
              No hourly billing. No surprises. No hidden costs. No paying for something until we've proven it will work.
            </p>
          </div>
        </SimpleScrollReveal>
      </div>

      {/* Section 4: Investment Options - Highest first, middle highlighted */}
      <div className="max-w-7xl mx-auto mb-16">
        <SimpleScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Investment Options
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Choose the scope that fits your situation. Every project is custom-built for your business.
          </p>
        </SimpleScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {investmentTiers.map((tier, index) => (
            <SimpleScrollReveal key={tier.name} direction="up" delay={index * 100}>
              <div
                className={`relative bg-white dark:bg-gray-900 rounded-2xl p-8 h-full flex flex-col ${
                  tier.popular
                    ? 'ring-2 ring-blue-600 shadow-xl'
                    : 'ring-1 ring-gray-200 dark:ring-gray-700'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {tier.priceRange}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {tier.subhead}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                    What this solves
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {tier.whatSolves}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    What's included
                  </h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Typical outcomes
                  </h4>
                  <ul className="space-y-2">
                    {tier.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-amber-500 dark:text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Timeline:</span> {tier.timeline}
                  </p>
                </div>

                <div className="mt-auto">
                  <Link
                    href={tier.href}
                    className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      tier.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            </SimpleScrollReveal>
          ))}
        </div>

        <SimpleScrollReveal direction="up">
          <p className="text-center text-gray-600 dark:text-gray-300">
            Not sure which fits? Book a strategy call and we'll help you figure out the right scope.
          </p>
        </SimpleScrollReveal>
      </div>

      {/* Section 4B: Also Available - Web Design (buried) */}
      <div className="max-w-4xl mx-auto mb-24">
        <SimpleScrollReveal direction="up">
          <div className="text-center py-8 border-t border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Also Available: Web Design
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We also build custom websites for clients who need a complete digital presence alongside their automation systems. Hand-coded, fast-loading, SEO-optimized. Starting at $2,000.
            </p>
            <Link
              href="/services/web-design"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Learn more about web design
            </Link>
          </div>
        </SimpleScrollReveal>
      </div>

      {/* Section 5: Ongoing Support - Highest first */}
      <div className="max-w-6xl mx-auto mb-24">
        <SimpleScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Ongoing Support
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            For businesses that want someone who knows their system available when they need them. Priority access, not hourly billing. No long-term contracts. Month-to-month.
          </p>
        </SimpleScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {supportTiers.map((tier, index) => (
            <SimpleScrollReveal key={tier.name} direction="up" delay={index * 100}>
              <div
                className={`relative bg-white dark:bg-gray-900 rounded-xl p-6 h-full flex flex-col ${
                  tier.recommended
                    ? 'border-2 border-blue-600'
                    : 'border border-gray-200 dark:border-gray-700'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{tier.period}</span>
                </div>

                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium">Best for:</span> {tier.bestFor}
                  </p>
                </div>

                <Link
                  href={tier.href}
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    tier.recommended
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            </SimpleScrollReveal>
          ))}
        </div>
      </div>

      {/* Section 6: Results With Attribution - Testimonials */}
      <div className="max-w-6xl mx-auto mb-24">
        <SimpleScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
            Real results from real projects.
          </p>
        </SimpleScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                <blockquote className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.company}
                  </p>
                  {testimonial.location && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {testimonial.location}
                    </p>
                  )}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
                    <svg className="w-4 h-4 text-green-600 dark:text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-sm font-medium text-green-700 dark:text-green-400">
                      {testimonial.result}
                    </span>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          ))}
        </div>

        <SimpleScrollReveal direction="up">
          <div className="text-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              See More Case Studies
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </SimpleScrollReveal>
      </div>

      {/* Section 7: Common Questions - Objection-handling FAQ */}
      <div className="max-w-3xl mx-auto mb-24">
        <SimpleScrollReveal direction="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Common Questions
          </h2>
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </SimpleScrollReveal>
      </div>

      {/* Section 8: Final CTA with Authentic Scarcity */}
      <div className="max-w-3xl mx-auto">
        <SimpleScrollReveal direction="up">
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Talk?
            </h2>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              We take on 2-3 new projects each month to ensure every client gets the attention they deserve. Book a strategy call and we'll look at your situation, identify opportunities, and show you what's possible.
            </p>
            <p className="text-blue-200 mb-8">
              If we're not the right fit, we'll tell you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 mb-4"
            >
              Book Your Strategy Call
            </Link>
            <p className="text-blue-200 text-sm">
              Free 30-minute call. No pressure. No obligation.
            </p>
          </div>
        </SimpleScrollReveal>
      </div>
    </div>
  );
}
