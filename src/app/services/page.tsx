import { Metadata } from 'next';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Services | AI Automation, Custom Software & Web Design | Forte Web Designs',
  description: 'I build automation systems, custom software, and integrations that eliminate manual work and scale your business. Everything custom-built for how you actually operate.',
};

const services = [
  {
    id: "ai-automation",
    icon: "puzzle",
    title: "Automation",
    subhead: "The work that eats your week",
    description: "Lead routing, follow-ups, data entry, reporting... handled automatically. I build with n8n, Make.com, Zapier, or direct API integrations when off-the-shelf doesn't cut it.",
    href: "/services/automation-ai",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: "integrations",
    icon: "flash",
    title: "CRM & Integrations",
    subhead: "One number everyone trusts",
    description: "Your CRM says one thing, your spreadsheet says another, someone's got a third version in their head. I connect your tools so data flows automatically and you stop arguing about which number is right.",
    href: "/services/integrations",
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    id: "custom-software",
    icon: "code",
    title: "Custom Software",
    subhead: "Built around how you actually work",
    description: "Dashboards, inventory systems, internal tools... built from scratch for your operations. Not a template you have to work around.",
    href: "/services/custom-software",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: "web-design",
    icon: "click",
    title: "Web Design",
    subhead: "The starting point",
    description: "Your website is just the front door. I build the site, connect it to your CRM, automate the follow-up, set up the dashboards. One person, whole system.",
    href: "/services/web-design",
    gradient: "from-pink-600 to-red-600"
  }
];

const results = [
  {
    client: "Modern Bungalow",
    metric: "15+ hours/month back",
    href: "/case-studies/modern-bungalow"
  },
  {
    client: "Hollow Bamboo",
    metric: "20+ hours/week back",
    href: "/case-studies/hollow-bamboo"
  },
  {
    client: "CR Deals Cincinnati",
    metric: "$52K/year saved",
    href: "/case-studies/fast-track-auction"
  },
  {
    client: "Revolut",
    metric: "£4M opportunity found",
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
                What I Build
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Before I build anything, I figure out what the problem is actually costing you... hours per week, labor costs, missed opportunities. Then I build something that pays for itself fast and keeps delivering after that. Custom-built for how you actually work.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  Book a Call
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
            <div className="text-center mb-8 sm:mb-16">
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Pick what fits. Or combine them.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <SimpleScrollReveal key={service.id} direction="up" delay={index * 100}>
                <Link href={service.href} className="block group h-full">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 sm:p-8 hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 group-hover:border-blue-600">
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
            <div className="text-center mb-8 sm:mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white">
                What I've Built
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-12">
            {results.map((result, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <Link href={result.href} className="block group">
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 group-hover:border-blue-600">
                    <p className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {result.client}
                    </p>
                    <p className="text-sm sm:text-lg text-green-600 dark:text-green-400 font-semibold mb-2 sm:mb-4">
                      {result.metric}
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium">
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
                Got a Problem?
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                If I can help, you'll know exactly when you'll see your money back. If I can't, I'll tell you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg text-lg"
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
