import Link from 'next/link';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export const metadata = {
  title: 'Custom Software Development | Forte Web Designs',
  description: 'Build custom dashboards, internal tools, and specialized applications. We create business automation software that eliminates manual work and scales your operations.',
  keywords: 'custom software development, business automation, internal tools, custom dashboards, API integrations, data processing, Dallas, DFW'
};

export default function CustomSoftware() {
  const services = [
    {
      icon: 'trending-up',
      title: 'Custom Dashboards & Analytics',
      subtitle: 'Real-time visibility into your operations',
      description: 'Pull data from multiple sources into one unified view. See what matters, when it matters. Custom metrics, automated reporting, live updates.',
      features: [
        'Multi-source data aggregation',
        'Real-time performance tracking',
        'Custom KPI dashboards',
        'Automated report generation',
        'Mobile-responsive interface'
      ]
    },
    {
      icon: 'services',
      title: 'Internal Business Tools',
      subtitle: 'Software that fits your exact workflow',
      description: 'Inventory systems. Project management tools. Client portals. Specialized operational software. Whatever your business needs that doesn\'t exist off-the-shelf.',
      features: [
        'Custom-built for your processes',
        'User-friendly interfaces',
        'Role-based access control',
        'Training and documentation',
        'Ongoing support'
      ]
    },
    {
      icon: 'flash',
      title: 'API Integrations & Middleware',
      subtitle: 'Make your systems talk to each other',
      description: 'Connect tools that weren\'t designed to work together. Automate data flow between platforms. Eliminate manual data entry and sync errors.',
      features: [
        'Seamless system connections',
        'Automated data synchronization',
        'Custom API development',
        'Error handling and monitoring',
        'Real-time data flow'
      ]
    },
    {
      icon: 'puzzle',
      title: 'Data Processing & Automation',
      subtitle: 'Handle complex operations automatically',
      description: 'Transform data, generate reports, process information intelligently. Beyond what standard automation platforms can do.',
      features: [
        'Complex data transformations',
        'Intelligent processing logic',
        'Automated workflows',
        'Scheduled operations',
        'Performance optimization'
      ]
    }
  ];

  const processSteps = [
    {
      number: '1',
      title: 'Discovery & Scoping',
      description: 'We map your current workflows, identify pain points, and define exactly what needs to be built. Clear scope, clear timeline, clear investment.'
    },
    {
      number: '2',
      title: 'Design & Planning',
      description: 'Detailed technical specification and user interface design. You see exactly what we\'re building before we write a single line of code.'
    },
    {
      number: '3',
      title: 'Development & Testing',
      description: 'We build, test, and refine. Weekly updates, working prototypes, continuous feedback. No surprises at launch.'
    },
    {
      number: '4',
      title: 'Deployment & Training',
      description: 'We deploy your software, train your team, provide documentation, and ensure everything runs smoothly. Ongoing support included.'
    }
  ];

  const pricingTiers = [
    {
      title: 'Simple Tools',
      price: '$5,000 - $15,000',
      description: 'Basic custom applications with standard features',
      features: [
        'Single-purpose tools',
        'Standard integrations',
        'Basic dashboards',
        '4-8 week timeline',
        '3 months support included'
      ],
      cta: 'Book Strategy Call'
    },
    {
      title: 'Complex Systems',
      price: '$15,000 - $35,000',
      description: 'Multi-feature applications with advanced capabilities',
      features: [
        'Multi-user systems',
        'Custom integrations',
        'Advanced dashboards',
        '8-16 week timeline',
        '6 months support included'
      ],
      cta: 'Book Strategy Call',
      popular: true
    },
    {
      title: 'Enterprise Solutions',
      price: '$35,000+',
      description: 'Comprehensive platforms with specialized requirements',
      features: [
        'Large-scale systems',
        'Complex integrations',
        'Custom AI/ML features',
        '16+ week timeline',
        '12 months support included'
      ],
      cta: 'Book Strategy Call'
    }
  ];

  const guarantees = [
    'Full source code ownership',
    'Comprehensive documentation',
    'Team training and onboarding',
    'Scalable architecture',
    'Clean, maintainable code',
    'Ongoing support options'
  ];

  const caseStudies = [
    {
      title: 'Film Production Company',
      subtitle: 'Custom Inventory Management System',
      metric: '20+ hours per week saved',
      description: 'on manual tracking across 6 locations. Real-time equipment visibility, QR code mobile access, multi-location sync.'
    },
    {
      title: 'Fintech Company',
      subtitle: 'AI-Powered Financial Analytics',
      metric: '40 hours per week saved',
      description: 'on manual analysis. Identified £4M growth pathway through intelligent data processing and automated insights.'
    },
    {
      title: 'Gaming Lounge',
      subtitle: 'Multi-Location Booking System',
      metric: '15 hours per week saved',
      description: 'on reservation management. Automated customer communications across SMS, Discord, and Telegram.'
    }
  ];

  const faqs = [
    {
      q: 'How long does custom software take to build?',
      a: 'Simple tools: 4-8 weeks. Complex systems: 8-16 weeks. Enterprise solutions: 16+ weeks. Timeline depends on scope and complexity. We provide exact timelines after discovery.'
    },
    {
      q: 'Do I own the code?',
      a: 'Yes. You own all source code, documentation, and intellectual property. No licensing fees, no vendor lock-in.'
    },
    {
      q: 'What if I need changes after launch?',
      a: 'First 90 days of bug fixes are included. Feature additions and enhancements are quoted separately or covered under ongoing support agreements.'
    },
    {
      q: 'Can you work with our existing systems?',
      a: 'Yes. We specialize in integrations. We can connect to virtually any system with an API or database access.'
    },
    {
      q: 'What technologies do you use?',
      a: 'We select the best technology for your specific needs. Common stack: React, Node.js, Python, PostgreSQL, AWS. We use proven, maintainable technologies.'
    },
    {
      q: 'Do you offer ongoing support?',
      a: 'Yes. We offer monthly support agreements starting at $497/month. Includes monitoring, updates, priority support, and monthly development hours.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
                Custom Software Development
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                We build business automation software and internal tools. Custom applications that eliminate manual work and scale your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                What We Build
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We build software that actually fits how your business works. No generic templates forcing you to adapt your workflows. No limitations from platforms built for everyone else. Just custom applications designed for your operations.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name={service.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What You Get:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="check" className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transparent process from discovery to deployment.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Pricing Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                Investment & Pricing
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                Custom software projects are scoped individually. Most projects range from $5,000 to $50,000+ depending on complexity and requirements.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {pricingTiers.map((tier, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className={`relative bg-white dark:bg-gray-900 rounded-xl p-8 border-2 transition-all duration-300 hover:shadow-lg ${
                  tier.popular 
                    ? 'border-blue-600 dark:border-blue-400 shadow-lg' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {tier.title}
                    </h3>
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                      {tier.price}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {tier.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="check" className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                        tier.popular
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                          : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                      }`}
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>

          {/* What You Always Get */}
          <SimpleScrollReveal direction="up">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                What You Always Get
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                Regardless of project size, every custom software project includes:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                Recent Projects
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real results from custom software we've built.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {study.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {study.subtitle}
                  </p>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">
                    {study.metric}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                    {study.description}
                  </p>
                  <Link
                    href="/case-studies"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    View Case Study
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 50}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.a}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Ready to Build Your Custom Software?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Book a free strategy call. We'll analyze your workflows, scope the project, and provide a detailed proposal with timeline and investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  Book Your Free Strategy Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-all duration-200"
                >
                  View Our Work
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
