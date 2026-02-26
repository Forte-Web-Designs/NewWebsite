import { Metadata } from 'next';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';

export const metadata: Metadata = {
  title: 'Services | Forte Web Designs',
  description: 'Foundation, Growth, and Scale — three tiers of systems built for where your business is right now. Automation, CRM, reporting, and the infrastructure to grow.',
};

const tiers = [
  {
    name: "Foundation",
    tagline: "Get your system built and your first leads flowing.",
    timeline: "1-2 WEEKS",
    description: "CRM with a real sales pipeline. Payment processing. Email that actually lands in inboxes. Booking and intake forms. Tracking so you know where leads come from. And your first lead source connected and producing, because nobody should walk away with an empty system.",
    includes: [
      "CRM setup with sales pipeline",
      "Payment processing",
      "Email deliverability",
      "Booking and intake forms",
      "Lead source tracking",
      "First lead channel connected"
    ],
    href: "/services/foundation"
  },
  {
    name: "Growth",
    tagline: "Turn leads into revenue. Know what's working.",
    timeline: "2-3 WEEKS",
    description: "Leads mean nothing if you don't know where they came from, can't follow up fast enough, or have no way to tell what's actually converting. Growth adds automated follow-up sequences, sales funnels, booking systems, SMS, and the tracking and attribution that shows you exactly which channels produce revenue and which ones waste money.",
    includes: [
      "Automated follow-up sequences",
      "Sales funnels",
      "Booking systems",
      "SMS integration",
      "Channel attribution",
      "Conversion tracking"
    ],
    href: "/services/growth"
  },
  {
    name: "Scale",
    tagline: "Optimize what's working. Grow without adding headcount.",
    timeline: "3-4 WEEKS",
    description: "Reporting dashboards so you stop guessing. Outbound systems to find prospects instead of waiting for them. AI agents that answer calls and chat 24/7. Content engines that keep you visible. And monthly management so someone's actually watching the machine. Built for businesses that already have leads and want to multiply what's working.",
    includes: [
      "Reporting dashboards",
      "Outbound prospecting systems",
      "AI agents (calls + chat)",
      "Content engines",
      "Monthly management",
      "Full system optimization"
    ],
    href: "/services/scale"
  }
];

const capabilities = [
  {
    title: "Automation",
    description: "Workflows that replace the manual work eating your week."
  },
  {
    title: "Custom Software",
    description: "When off-the-shelf tools don't fit how you actually work."
  },
  {
    title: "Integrations and APIs",
    description: "Connecting the tools you already use so data moves once."
  }
];

const results = [
  { client: "CR Deals Cincinnati", metric: "$52K/year saved", href: "/case-studies/fast-track-auction" },
  { client: "Modern Bungalow", metric: "15 hrs/month back", href: "/case-studies/modern-bungalow" },
  { client: "Revolut", metric: "$4M opportunity found", href: "/case-studies/revolut" },
  { client: "Hollow Bamboo", metric: "20 hrs/week back", href: "/case-studies/hollow-bamboo" }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-6">
                What I Build
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                Most businesses that come to me are dealing with one of three things: they have no systems at all, they have systems that don't talk to each other, or they've outgrown what they built and it's starting to break. The fix depends on where you are.
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

      {/* Tiers */}
      <section className="py-24 sm:py-32 lg:py-40 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="space-y-8">
            {tiers.map((tier, index) => (
              <SimpleScrollReveal key={tier.name} direction="up" delay={index * 100}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 sm:p-10 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        {tier.name}
                      </h2>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                        {tier.tagline}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider whitespace-nowrap">
                      {tier.timeline}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {tier.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={tier.href}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    Learn more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <p className="text-center text-gray-600 dark:text-gray-400 mt-12 text-sm">
              Every system is scoped, documented, tested, and handed off with training. You own everything I build.
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* How I Build It */}
      <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-3 text-center">
              How I Build It
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-xl mx-auto">
              These systems get built using whatever the job needs. These are the tools in the toolbox.
            </p>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((cap, index) => (
              <SimpleScrollReveal key={cap.title} direction="up" delay={index * 100}>
                <div className="text-center p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8">
              I also do web design when it's part of the system.{' '}
              <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                Ask me about it.
              </Link>
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Automation Audit CTA */}
      <section className="py-20 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
                Not sure where to start?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Most people aren't. The Automation Audit reviews your current setup, identifies the biggest opportunities, and gives you a prioritized roadmap with ROI estimates. If you move forward with a build, the audit fee applies as credit.
              </p>
              <Link
                href="/services/automation-audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
              >
                Book an Audit
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 sm:py-32 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-16 text-center">
              Results
            </h2>
          </SimpleScrollReveal>

          <div className="space-y-6 mb-12">
            {results.map((result, index) => (
              <SimpleScrollReveal key={result.client} direction="up" delay={index * 100}>
                <Link
                  href={result.href}
                  className="flex items-center justify-between py-4 border-b border-gray-200 dark:border-gray-700 group hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                >
                  <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {result.client}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {result.metric}
                  </span>
                </Link>
              </SimpleScrollReveal>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
              >
                See all results
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* CTA with Headshot & Calendly */}
      <section id="book-a-call" className="py-24 sm:py-32 lg:py-40 bg-gray-50 dark:bg-gray-800">
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
                <p className="text-gray-600 dark:text-gray-400 mb-6">
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
