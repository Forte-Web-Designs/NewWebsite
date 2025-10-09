import { Metadata } from 'next';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import Link from 'next/link';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'AI Automation & Web Design Services | Forte Web Designs',
  description: 'Premium AI automation and custom web design services. We build intelligent systems that save time, websites that convert, and integrations that scale your business.',
};

const services = [
  {
    id: "ai-automation",
    icon: "puzzle",
    title: "AI Automation",
    tagline: "Work smarter, not harder",
    description: "Automate repetitive tasks, route leads instantly, and trigger follow-ups automatically. Your team focuses on closing deals while intelligent workflows handle everything else.",
    benefits: [
      "Save 20+ hours per week on manual tasks",
      "Instant lead routing and assignment",
      "Automated email & SMS follow-ups",
      "CRM integration and data sync",
      "Real-time notifications and alerts"
    ],
    cta: "Explore AI Automation",
    href: "/services/automation-ai",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: "web-design",
    icon: "services",
    title: "Custom Web Design",
    tagline: "Websites that actually convert",
    description: "Hand-coded, high-performance websites designed to turn visitors into customers. Fast, SEO-optimized, and built to showcase your brand and drive real results.",
    benefits: [
      "Custom design tailored to your brand",
      "Fast loading speeds (90+ PageSpeed score)",
      "Mobile-responsive and SEO optimized",
      "Lead capture and conversion optimization",
      "Training and ongoing support"
    ],
    cta: "View Web Design",
    href: "/services",
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    id: "integrations",
    icon: "flash",
    title: "CRM & Integrations",
    tagline: "Connect your entire stack",
    description: "Seamlessly integrate your CRM, email, forms, and tools into one unified system. Clean data, automated handoffs, and real-time insights across your entire operation.",
    benefits: [
      "Connect CRM, email, forms, and tools",
      "Automated data sync and handoffs",
      "Real-time dashboards and reporting",
      "Eliminate manual data entry",
      "Custom API integrations"
    ],
    cta: "Learn About Integrations",
    href: "/services/automation-ai",
    gradient: "from-purple-600 to-pink-600"
  }
];

const processSteps = [
  {
    number: "1",
    title: "Discovery Call",
    description: "We analyze your current workflows, identify bottlenecks, and map out opportunities for automation and optimization."
  },
  {
    number: "2",
    title: "Custom Strategy",
    description: "Receive a tailored roadmap with clear timelines, expected ROI, and recommended solutions designed specifically for your business."
  },
  {
    number: "3",
    title: "Build & Deploy",
    description: "Our team builds, tests, and deploys your solution. From automation workflows to custom websites—delivered on time and on spec."
  },
  {
    number: "4",
    title: "Ongoing Optimization",
    description: "Continuous monitoring, updates, and improvements. We ensure your systems stay fast, secure, and aligned with your growth."
  }
];

const caseStudies = [
  {
    client: "Summit Gaming Lounge",
    outcome: "Automated booking system reduced manual work by 15 hours/week",
    href: "/case-studies/summit-gaming-lounge"
  },
  {
    client: "MetroEats",
    outcome: "Lead generation automation increased qualified leads by 40%",
    href: "/case-studies/metroeats"
  },
  {
    client: "Fetchly",
    outcome: "Executive assistant AI saved 15 hours/week in admin tasks",
    href: "/case-studies/fetchly"
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
                AI Automation & Web Design
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                We build intelligent systems that save time, websites that convert, and integrations that scale your business. Everything custom-built for your unique needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  Book a Strategy Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
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
                What We Build For You
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Choose the service that fits your needs—or combine them for maximum impact.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-12">
            {services.map((service, index) => (
              <SimpleScrollReveal key={service.id} direction="up" delay={index * 100}>
                <div id={service.id} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 sm:p-10 lg:p-12 hover:shadow-xl transition-all duration-300 scroll-mt-20">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left: Icon, Title, Description */}
                    <div>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                        <Icon name={service.icon} className="w-8 h-8 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">
                        {service.tagline}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold hover:scale-105 transition-all duration-200`}
                      >
                        {service.cta}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>

                    {/* Right: Benefits List */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        What You Get:
                      </h4>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                How We Work
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Simple, transparent process from discovery to deployment.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Real Results
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                See how we've helped businesses save time and grow revenue.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <Link href={study.href} className="block group">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 group-hover:border-blue-600">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {study.client}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {study.outcome}
                    </p>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                      View Case Study
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

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Ready to Build Something Great?
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Book a free strategy call. We'll analyze your needs, identify opportunities, and show you exactly how we can help—no pressure, no obligation.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg text-lg"
              >
                Book Your Free Strategy Call
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
