import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Texas Web Design & AI Automation | Forte Web Designs',
  description: 'Professional web design and AI automation services in Texas. Custom websites, business automation, and growth systems for Texas businesses. Based in Dallas, TX.',
  keywords: 'Texas web design, Dallas web design, Fort Worth web design, DFW web design, Texas AI automation, Austin web design, Houston web design, San Antonio web design, Texas digital marketing',
};

export default function Texas() {
  const services = [
    {
      icon: "services",
      title: "Custom Web Design",
      description: "Hand-coded websites that convert Texas visitors into customers"
    },
    {
      icon: "puzzle",
      title: "AI Automation",
      description: "Intelligent systems that handle repetitive work 24/7"
    },
    {
      icon: "flash",
      title: "Business Systems",
      description: "Integrated CRM, email, and workflow automation"
    }
  ];

  const cities = [
    "Dallas", "Fort Worth", "Houston", "Austin", "San Antonio", "Arlington",
    "Plano", "Irving", "Garland", "Frisco", "McKinney", "Grapevine",
    "El Paso", "Corpus Christi", "Lubbock", "Amarillo", "Waco", "Denton"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                📍 Based in Texas
              </div>
              <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
                Texas Web Design & AI Automation
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 mb-8">
                Professional web design and business automation for growing Texas businesses. 100% USA-based team serving Texas from our Dallas headquarters.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Your Free Growth Snapshot
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Services for Texas Businesses
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  We help Texas businesses grow with custom web design and intelligent automation
                </p>
              </div>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg">
                      <Icon name={service.icon} className="w-7 h-7 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Local Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Why Choose a Texas-Based Web Design Partner?
              </h2>
            </SimpleScrollReveal>

            <div className="space-y-6">
              <SimpleScrollReveal direction="up" delay={100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    🤝 Local Understanding, National Reach
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Based in Dallas, we understand the Texas business landscape. We know your market, your competitors, and what Texas customers expect. Plus, we're available for in-person meetings when needed.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    🇺🇸 100% USA-Based Team
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    No outsourcing, no offshore teams, no language barriers. Every line of code, every design decision, and every support interaction comes from our Texas-based team. You'll always know who you're working with.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={300}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    ⚡ Fast Response Times
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We're in your time zone. When you need support, updates, or have questions—we're here during Texas business hours. No waiting overnight for responses from another continent.
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Serving Texas Businesses Statewide
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
                From our Dallas headquarters, we proudly serve businesses throughout Texas
              </p>
            </SimpleScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((city, index) => (
                <SimpleScrollReveal key={index} direction="up" delay={index * 20}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                    <span className="text-gray-900 dark:text-white font-medium">{city}</span>
                  </div>
                </SimpleScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Grow Your Texas Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's talk about how custom web design and AI automation can scale your business—no pressure, no sales pitch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Your Free Strategy Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-200"
                >
                  See Our Results
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
