import { Metadata } from 'next';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';
import { OptimizedImage } from '@/components/images/OptimizedImage';

export const metadata: Metadata = {
  title: 'Services | AI Automation, Custom Software & Web Design | Forte Web Designs',
  description: 'Automation, integrations, custom software, and web design. Custom-built for how you actually operate.',
};

const services = [
  {
    icon: "puzzle",
    title: "Automation",
    tagline: "The work that eats your week.",
    href: "/services/automation-ai"
  },
  {
    icon: "flash",
    title: "CRM & Integrations",
    tagline: "One number everyone trusts.",
    href: "/services/integrations"
  },
  {
    icon: "code",
    title: "Custom Software",
    tagline: "Built around how you work.",
    href: "/services/custom-software"
  },
  {
    icon: "click",
    title: "Web Design",
    tagline: "The starting point.",
    href: "/services/web-design"
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
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white mb-10">
                What I Build
              </h1>
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

      {/* Services - Minimal */}
      <section className="py-24 sm:py-32 lg:py-40 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-12 lg:gap-16">
            {services.map((service, index) => (
              <SimpleScrollReveal key={service.title} direction="up" delay={index * 100}>
                <Link href={service.href} className="group block">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name={service.icon} className="w-7 h-7 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                    </div>
                    <div className="flex-1 text-left">
                      <h2 className="font-semibold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        {service.tagline}
                      </p>
                      <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
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
