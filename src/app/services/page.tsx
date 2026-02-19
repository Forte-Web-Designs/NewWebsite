import { Metadata } from 'next';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';
import { OptimizedImage } from '@/components/images/OptimizedImage';

export const metadata: Metadata = {
  title: 'Services | The System Behind Your Business | Forte Web Designs',
  description: 'Every business needs the same six things. We build whichever ones are missing. Get found, capture leads, work the pipeline, serve customers, grow revenue, and see everything.',
};

const services = [
  {
    icon: "search1",
    title: "Get Found",
    subtitle: "SEO, Ads, Content, Outreach",
    description: "We build the system that brings people to your business and tracks where they came from. So you know what's working and what's wasting money.",
    href: "/services/get-found"
  },
  {
    icon: "cursor",
    title: "Capture It",
    subtitle: "Funnels, Landing Pages, Booking",
    description: "A place for every visitor to land that turns a stranger into a name in your system. Not just a homepage with a contact form.",
    href: "/services/capture-it"
  },
  {
    icon: "flash",
    title: "Work the Lead",
    subtitle: "CRM, Pipeline, Automated Follow-Up",
    description: "One source of truth for every lead and customer. Every lead gets worked consistently whether you're available or not.",
    href: "/services/work-the-lead"
  },
  {
    icon: "puzzle",
    title: "Serve the Customer",
    subtitle: "Invoicing, Onboarding, Operations",
    description: "QuickBooks knows what the CRM knows. Onboarding, project management, and communication all wired together so the back office runs.",
    href: "/services/serve-the-customer"
  },
  {
    icon: "star",
    title: "Keep and Grow",
    subtitle: "Reviews, Referrals, Reactivation",
    description: "Your past customers are the cheapest to sell to. We build the systems that keep you in front of them... review requests, referral campaigns, and reactivation for people who went quiet.",
    href: "/services/keep-and-grow"
  },
  {
    icon: "cube",
    title: "See Everything",
    subtitle: "Reporting, Dashboards, Data",
    description: "Where are leads coming from. How many turned into customers. What's the cost per lead. Which stage is leaking. No more guessing.",
    href: "/services/see-everything"
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
  },
  {
    title: "Web Design",
    description: "Websites that connect to your system, not just sit there."
  }
];

const results = [
  {
    client: "CR Deals Cincinnati",
    metric: "$52K/year saved",
    href: "/case-studies/fast-track-auction"
  },
  {
    client: "Modern Bungalow",
    metric: "15 hrs/month back",
    href: "/case-studies/modern-bungalow"
  },
  {
    client: "Revolut",
    metric: "$4M opportunity found",
    href: "/case-studies/revolut"
  },
  {
    client: "Hollow Bamboo",
    metric: "20 hrs/week back",
    href: "/case-studies/hollow-bamboo"
  }
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
                The System Behind Your Business
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
                Every business needs the same six things. We build whichever ones are missing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#book-a-call"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
                >
                  Book a Call
                </a>
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

      {/* The Six Stages */}
      <section className="py-24 sm:py-32 lg:py-40 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Mobile: stacked cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <SimpleScrollReveal key={service.title} direction="up" delay={index * 100}>
                <div className="group block p-6 rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                    </div>
                    <h2 className="font-semibold text-xl text-gray-900 dark:text-white mb-1">
                      {service.title}
                    </h2>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build It */}
      <section className="py-16 sm:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-3 text-center">
              How We Build It
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-xl mx-auto">
              We build these systems using whatever the job needs. These are the tools in the toolbox.
            </p>
          </SimpleScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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
        </div>
      </section>

      {/* Results - Minimal */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white dark:bg-gray-900">
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
                See all
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* CTA with Headshot, Video & Calendly */}
      <section id="book-a-call" className="py-24 sm:py-32 lg:py-40 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Headshot, Text & Video */}
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
                <div className="relative rounded-xl overflow-hidden shadow-lg bg-black max-w-sm mx-auto lg:mx-0">
                  <video
                    controls
                    className="w-full"
                  >
                    <source src="/video-walkthroughs/Business Growth Systems & AI Automation | Forte (DFW) - 26 October 2025.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 lg:text-left text-center">
                  2-minute intro
                </p>
              </div>
            </SimpleScrollReveal>

            {/* Right - Calendly */}
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
