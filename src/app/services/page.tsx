import { Metadata } from 'next';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Services | AI Automation, Custom Software & Web Design | Forte Web Designs',
  description: 'We build automation systems, custom software, and integrations that eliminate manual work and scale your business. Everything custom-built for how you actually operate.',
};

const services = [
  {
    id: "ai-automation",
    icon: "puzzle",
    title: "Automation",
    subhead: "Get your hours back",
    description: "The manual work eating up your week - lead routing, follow-ups, data entry, reporting - handled automatically. Your team focuses on work that actually moves the needle.",
    href: "/services/automation-ai",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: "integrations",
    icon: "flash",
    title: "CRM & Integrations",
    subhead: "One source of truth",
    description: "Stop arguing about which spreadsheet has the right number. Your CRM, email, forms, and tools working together with clean data, automatic handoffs, and real-time visibility across everything.",
    href: "/services/integrations",
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    id: "custom-software",
    icon: "code",
    title: "Custom Software",
    subhead: "Software that fits how you work",
    description: "Custom dashboards, internal tools, and applications built for your specific workflows. No templates. No limitations. Software that fits how you work.",
    href: "/services/custom-software",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: "web-design",
    icon: "click",
    title: "Web Design",
    subhead: "Sites that convert",
    description: "Hand-coded websites built to perform. Fast loading, SEO-optimized, designed to turn visitors into customers.",
    href: "/services/web-design",
    gradient: "from-pink-600 to-red-600"
  }
];

const results = [
  {
    client: "Modern Bungalow",
    metric: "Customer emails that send themselves",
    href: "/case-studies/modern-bungalow"
  },
  {
    client: "Hollow Bamboo",
    metric: "Complete equipment visibility",
    href: "/case-studies/hollow-bamboo"
  },
  {
    client: "CR Deals Cincinnati",
    metric: "Product listings that generate themselves",
    href: "/case-studies/fast-track-auction"
  },
  {
    client: "Revolut",
    metric: "£4M opportunity uncovered",
    href: "/case-studies/revolut"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6">
                What We Do
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                We start by understanding what the problem is costing you - hours per week, labor costs, missed opportunities. Then we build the right solution: automation, integrations, custom software, or infrastructure that pays for itself fast and keeps delivering after that. Everything custom-built for how you actually operate.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  Book a Strategy Call
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                How We Help
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Choose the area that fits your situation, or combine them for maximum impact.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <SimpleScrollReveal key={service.id} direction="up" delay={index * 100}>
                <Link href={service.href} className="block group h-full">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 group-hover:border-blue-600">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                      <Icon name={service.icon} className="w-7 h-7 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
                      {service.subhead}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                      Learn More
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Results
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Real outcomes from real projects.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {results.map((result, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <Link href={result.href} className="block group">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 group-hover:border-blue-600">
                    <p className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {result.client}
                    </p>
                    <p className="text-lg text-green-600 dark:text-green-400 font-semibold mb-4">
                      {result.metric}
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                      View Case Study
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </SimpleScrollReveal>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                See All Case Studies
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Ready to Talk?
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Book a free strategy call. We'll figure out what the problem is actually costing you and whether we can help. If we can, you'll know exactly when you'll see your investment back. If we can't, we'll tell you. No pressure, no obligation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg text-lg"
              >
                Book Your Strategy Call
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
