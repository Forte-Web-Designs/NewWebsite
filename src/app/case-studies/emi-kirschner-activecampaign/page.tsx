import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Emi Kirschner Coaching Case Study | ActiveCampaign CRM Setup | Forte Web Designs',
  description: 'Strategic ActiveCampaign setup for executive coaching business. Built 5 pipelines, lifecycle automations, and multi-tool integrations. Projected 8-12 hours/week saved, $20K-$30K annual value.',
  openGraph: {
    title: 'Emi Kirschner Coaching Case Study - ActiveCampaign CRM Success',
    description: 'Strategic CRM implementation for high-touch coaching business with multi-pipeline system and lifecycle automation.',
    images: ['/images/case-studies/emi-kirschner.jpg'],
  },
};

export default function EmiKirschnerCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb */}
      <section className="py-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-blue-600 dark:hover:text-blue-400">Case Studies</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">Emi Kirschner Coaching</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Case Study
              </span>
              <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
                Emi Kirschner Coaching
              </h1>
              <p className="text-xl lg:text-2xl text-purple-100 mb-8">
                Strategic ActiveCampaign CRM Setup & Marketing Automation
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Icon name="clock" className="w-5 h-5" />
                  <span>Ongoing Implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="services" className="w-5 h-5" />
                  <span>Business Coaching</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5" />
                  <span>8-12 hrs/week projected</span>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Emi Kirschner runs a high-touch executive coaching business serving powerhouse entrepreneurs. Her work blends strategic consulting with deep coaching to help visionaries build businesses that run beautifully without running them into the ground.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                After a decade of growth, her backend systems were holding her back. Client data was scattered across Gmail, spreadsheets, and various platforms. Manual follow-ups were consuming 8-12 hours per week. With multiple program types (1:1 coaching, intensive programs, and group coaching), she needed a CRM that could handle complexity while keeping the personal, high-touch feel her clients valued. The real challenge wasn't just tech setup-it was designing systems that aligned with her unique client journey and supported sustainable long-term growth.
              </p>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Solution
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                We took a strategic, business-first approach: mapping the complete client journey before touching any technology, designing a sophisticated contact structure for segmentation without overwhelm, and building automations that feel personal and high-touch while running completely hands-free. The goal was to make technology invisible so Emi could focus on coaching, not admin work.
              </p>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                What We Built
              </h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="puzzle" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Multi-Pipeline System
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    5 specialized pipelines for networking, lead generation, and client onboarding (1:1, intensive, and group programs) with automated status updates and milestone tracking.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="check" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Lifecycle Automation Suite
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automated client check-ins, birthday greetings, referral requests, testimonial collection, and graceful off-boarding that maintains relationships for future re-engagement.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="flash" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Multi-Tool Integration
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Seamless connections between ActiveCampaign, Kajabi (courses), WordPress (website), and ClickUp (project management) creating one unified ecosystem.
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Projected Impact
              </h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    8-12 hrs
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Per week saved on manual CRM tasks
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                    $20K-$30K
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Estimated annual value in recovered time
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-rose-600 dark:text-rose-400 mb-2">
                    20-30%
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Projected increase in referral generation
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={300}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                    15-25%
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Expected improvement in lead conversion
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>

            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Additional Projected Wins
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Can handle 2-3x current client volume without additional admin overhead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Maintained personal touch through automation that feels human and aligned with brand values</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Complete visibility into client journey with data-driven insights for smarter business decisions</span>
                  </li>
                </ul>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12">
                How It Works
              </h2>
            </SimpleScrollReveal>

            <div className="space-y-8">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Strategic Contact Management
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Custom fields capture social profiles, birthdays, program interests, and lifecycle stage. Sophisticated tagging enables targeted communication without overwhelming the database, creating a single source of truth for all client relationships.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Intelligent Pipeline Routing
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Five specialized pipelines automatically route contacts based on their journey stage-from networking and lead generation through program-specific onboarding. Each pipeline includes automated status updates, task assignments, and milestone tracking.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-rose-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Lifecycle Automation Engine
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Automated workflows handle client check-ins (30/60/90 days), birthday greetings, referral requests at optimal timing, testimonial collection, and graceful off-boarding that transitions clients to engaged alumni. Each automation adapts based on program type and engagement level.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Scale Your Coaching Business?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                See how we can design a strategic CRM system that grows with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-200"
                >
                  Book a Strategy Call
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all duration-200"
                >
                  View More Case Studies
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
