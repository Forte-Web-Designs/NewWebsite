import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customer Project Showcase | AI-Powered Business Solutions | Forte Web Designs',
  description: 'Explore our successful AI-powered implementations across various industries. See how we\'ve helped businesses transform operations with custom automation, lead discovery systems, and intelligent assistants.',
};

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  readTime?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'tabletop-board-game-club',
    title: 'TableTop Board Game Club',
    subtitle: 'AI-Powered Omnichannel Concierge System',
    description: 'Custom AI automation system for streamlined member communications, reservations, and group coordination across SMS, Discord, and Telegram platforms',
    readTime: '8 min read'
  },
  {
    id: 'qupons',
    title: 'Qupons',
    subtitle: 'AI-Powered Lead Discovery System',
    description: 'Automated restaurant lead discovery and enrichment system with web crawling, API integration, and user-friendly interface, enabling efficient partner acquisition and global scaling',
    readTime: '6 min read'
  },
  {
    id: 'barkbox',
    title: 'Barkbox',
    subtitle: 'Executive Assistant',
    description: 'AI assistant that freed up 15 hours per week of executive time',
    readTime: '4 min read'
  },
  {
    id: 'pierpont-holdings',
    title: 'Pierpont Holdings AI',
    subtitle: 'AI-Enabled Procurement Analytics Platform',
    description: 'Transformative procurement analytics solution with three specialized AI agents for real-time insights and automation',
    readTime: '10 min read'
  },
  {
    id: 'advanced-water-treatment',
    title: 'Advanced Water Treatment Technologies',
    subtitle: 'AI-Driven Quoting & CRM Automation',
    description: 'Custom AI automation system for streamlined customer communications and quote generation',
    readTime: '7 min read'
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white mb-6">
              Customer Project Showcase
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore our successful implementations and see how we've helped businesses transform their operations with AI-powered solutions. Each case study details the challenges faced, our approach, and the measurable results achieved.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="group cursor-pointer">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                        Case Study {String(index + 1).padStart(2, '0')}
                      </span>
                      {study.readTime && (
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {study.readTime}
                        </span>
                      )}
                    </div>
                    <h2 className="font-display font-bold text-2xl lg:text-3xl text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {study.title}
                    </h2>
                    <h3 className="font-semibold text-lg text-primary-600 dark:text-primary-400 mb-4">
                      {study.subtitle}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow mb-6">
                    {study.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <button className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group">
                      Read Case Study
                      <svg 
                        className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    {/* Technology Tags */}
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">AI-Powered</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              See how our AI-powered solutions can streamline your operations and drive measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Start Your Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
