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
    description: "Automate the repetitive stuff that eats up your week. Lead routing, follow-ups, CRM updates, reporting. Your team focuses on work that actually requires a human. The system handles everything else.",
    benefits: [
      "20+ hours back per week on manual tasks",
      "Instant lead routing and assignment",
      "Automated email and SMS follow-ups",
      "CRM integration and data sync",
      "Real-time notifications and alerts"
    ],
    cta: "Explore AI Automation",
    href: "/services/automation-ai",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    id: "software-development",
    icon: "services",
    title: "Custom Software Development",
    tagline: "Built for how your business actually works",
    description: "Custom dashboards, internal tools, and applications built from scratch. No generic templates forcing you to change your workflow. No limitations from platforms built for everyone else. Software that fits your operations, not the other way around.",
    benefits: [
      "Custom-built applications and tools",
      "Architecture designed for growth",
      "API integrations with your existing systems",
      "Real-time dashboards and reporting",
      "Ongoing support and improvements"
    ],
    cta: "Learn More",
    href: "/services#software-development",
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    id: "web-design",
    icon: "services",
    title: "Web Design & Digital Presence",
    tagline: "Websites that do more than look good",
    description: "Hand-coded, fast-loading websites designed to turn visitors into customers. SEO-optimized and built to showcase your brand and drive real results.",
    benefits: [
      "Custom design tailored to your brand",
      "Fast loading speeds (90+ PageSpeed score)",
      "Mobile-responsive and SEO optimized",
      "Lead capture and conversion optimization",
      "Training and ongoing support"
    ],
    cta: "View Web Design",
    href: "/services",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    id: "integrations",
    icon: "flash",
    title: "CRM & Integrations",
    tagline: "Make your tools actually talk to each other",
    description: "Connect your CRM, email, forms, and tools into one system that actually works together. Clean data, automatic handoffs, and real-time visibility across your operation.",
    benefits: [
      "Connect CRM, email, forms, and tools",
      "Automated data sync and handoffs",
      "Real-time dashboards and reporting",
      "Eliminate manual data entry",
      "Custom API integrations"
    ],
    cta: "Learn About Integrations",
    href: "/services/automation-ai",
    gradient: "from-pink-600 to-red-600"
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
    client: "Modern Bungalow",
    outcome: "15+ hours saved monthly automating customer support emails",
    href: "/case-studies/modern-bungalow"
  },
  {
    client: "Hollow Bamboo Film Productions",
    outcome: "20+ hours saved weekly tracking equipment and crew schedules",
    href: "/case-studies/hollow-bamboo"
  },
  {
    client: "Revolut (Fintech)",
    outcome: "£4M growth pathway identified with AI-powered financial analytics",
    href: "/case-studies/revolut"
  },
  {
    client: "Prediction Market Trader",
    outcome: "Hundreds of markets analyzed daily, opportunities surfaced instantly",
    href: "/case-studies/prediction-market-trader"
  },
  {
    client: "Marketing Agency",
    outcome: "Monthly client reporting cut from 2-4 hours to 15 minutes",
    href: "/case-studies/marketing-agency"
  },
  {
    client: "German Marketing Agency",
    outcome: "43 workflows saved, 2 hours from disaster to full recovery",
    href: "/case-studies/german-marketing-agency"
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
                AI Automation & Custom Software
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                We build automation systems, custom software, and integrations that eliminate manual work and scale your business. Everything custom-built for how you actually operate.
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
                Choose the service that fits your needs, or combine them for maximum impact.
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

                    {/* Right: Scenario & Benefits */}
                    <div className="space-y-6">
                      {/* Scenario Block */}
                      {service.id === 'ai-automation' && (
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-2 border-yellow-200 dark:border-yellow-700">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                            Does this sound familiar?
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            You're spending 15 hours a week routing leads, updating your CRM, and sending follow-up emails. Your team is growing but somehow you're busier than ever. You've tried Zapier—it broke. You hired a VA—they quit. You need something that actually works.
                          </p>
                        </div>
                      )}
                      {service.id === 'software-development' && (
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-2 border-yellow-200 dark:border-yellow-700">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                            Sound like your situation?
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Your business has unique workflows that no off-the-shelf software handles properly. You're forced to adapt your processes to fit generic platforms, or you're cobbling together 5 different tools with spreadsheets filling the gaps. You need software that fits how you actually work.
                          </p>
                        </div>
                      )}
                      {service.id === 'web-design' && (
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-2 border-yellow-200 dark:border-yellow-700">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                            Is this you?
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Your website looks like it was built in 2015. It loads slowly. The mobile experience is terrible. Visitors bounce before seeing your value. You know it's costing you business, but you don't want another template that looks like everyone else's.
                          </p>
                        </div>
                      )}
                      {service.id === 'integrations' && (
                        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-2 border-yellow-200 dark:border-yellow-700">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                            Dealing with this?
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Your team is copy-pasting data between Salesforce, your email platform, your forms, and three other tools. Information gets lost. Follow-ups get missed. Your CRM data is always out of date. You're paying for powerful tools but getting Frankenstein's monster.
                          </p>
                        </div>
                      )}

                      {/* Benefits List */}
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
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Software Development Section */}
      <section id="software-development" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                Custom Software Development
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
                Build solutions that don't exist off-the-shelf
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                We specialize in business automation software and internal tools. Custom applications that eliminate manual work and scale your operations.
              </p>
            </div>
          </SimpleScrollReveal>

          {/* What We Build */}
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="mb-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                What We Build
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="trending-up" className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Custom Dashboards & Analytics
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Real-time visibility into your operations with custom-built dashboards pulling data from multiple sources into one unified view.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="services" className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Internal Business Tools
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Custom applications that automate your unique workflows. Inventory systems, project management tools, client portals, or specialized operational software.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="flash" className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    API Integrations & Middleware
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Connect systems that weren't designed to talk to each other. Custom middleware that bridges the gap between your existing tools and creates smooth data flow.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="puzzle" className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Data Processing & Automation
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Handle complex data transformations, automated reporting, and intelligent processing that goes beyond what standard automation platforms can do.
                  </p>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>

          {/* What You Get & Perfect For */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  What You Get:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Fully custom-built web applications",
                    "Architecture designed for growth",
                    "Clean, maintainable code",
                    "Documentation and training",
                    "Ongoing support and improvements",
                    "You own the source code"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={300}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Perfect For:
                </h4>
                <ul className="space-y-3">
                  {[
                    "Businesses with unique processes that don't fit existing software",
                    "Companies outgrowing their current systems",
                    "Teams spending hours on manual work that should be automated",
                    "Operations that need custom reporting or analytics"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Icon name="star" className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SimpleScrollReveal>
          </div>

          {/* Recent Projects */}
          <SimpleScrollReveal direction="up" delay={400}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-700 mb-12">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Recent Projects:
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+ hrs/week saved</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Custom inventory management system for film production company</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">£4M growth pathway identified</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">AI-powered financial analytics platform for fintech</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">15 hrs/week saved</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Multi-location booking system with real-time sync</p>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>

          {/* CTAs */}
          <SimpleScrollReveal direction="up" delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 rounded-lg font-semibold transition-all duration-200 shadow-lg"
              >
                Book a Strategy Call
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services/custom-software"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-200"
              >
                Learn More
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
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
                Book a free strategy call. We'll analyze your needs, identify opportunities, and show you exactly how we can help. No pressure, no obligation.
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
