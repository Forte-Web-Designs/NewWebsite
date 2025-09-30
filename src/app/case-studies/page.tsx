import { Metadata } from 'next';

// Note: Since this is now a client component, metadata should be moved to a layout or parent component
// export const metadata: Metadata = {
//   title: 'Customer Project Showcase | AI-Powered Business Solutions | Forte Web Designs',
//   description: 'Explore our successful AI-powered implementations across various industries. See how we\'ve helped businesses transform operations with custom automation, lead discovery systems, and intelligent assistants.',
// };

interface Phase {
  title: string;
  trigger: string;
  capabilities: string[];
  result?: string;
}

interface ROI {
  title: string;
  description: string;
  benefits: string[];
  result: string;
}

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  readTime?: string;
  phases?: Phase[];
  roi?: ROI;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'summit-gaming-lounge',
    title: 'Summit Gaming Lounge',
    subtitle: 'AI-Powered Omnichannel Concierge System',
    description: 'Summit Gaming Lounge needed to streamline customer communications and reservation management across multiple platforms. We built a custom AI automation system with intelligent user recognition, reservation management, and group coordination. The system operates across SMS, Discord, and Telegram platforms with personalized customer experiences. This solution allows the venue to focus on exceptional experiences while scaling operations efficiently.',
    readTime: '8 min read'
  },
  {
    id: 'metroeats',
    title: 'MetroEats',
    subtitle: 'AI-Powered Restaurant Partner Discovery System',
    description: 'MetroEats, a fast-scaling DFW food delivery startup, needed to automate restaurant identification and onboarding. We built an AI-powered partner discovery system with web crawling, API-driven search, and a user-friendly dashboard. The solution provides a live pipeline of high-quality leads with actionable contact details. Results: 85% contact info coverage, 40% increase in monthly sign-ups, and multi-city expansion within 6 months.',
    readTime: '6 min read'
  },
  {
    id: 'summit-supply-chain',
    title: 'Summit Supply Chain Partners',
    subtitle: 'AI-Powered Procurement Analytics',
    description: 'Summit Supply Chain Partners needed to eliminate manual procurement processes and accelerate decision-making. We deployed SummitProcure™, an AI-powered analytics system that identifies revenue risks and generates detailed supplier reports. The platform integrates with existing SQL databases and external data sources for real-time intelligence. Results: 85% faster query response, 40% faster procurement decisions, and supplier assessments completed in under 30 minutes.',
    readTime: '8 min read'
  },
  {
    id: 'clearwater-systems',
    title: 'ClearWater Systems',
    subtitle: 'AI-Powered Quoting & CRM Automation',
    description: 'ClearWater Systems was losing time on repetitive email replies, manual quotes, and disorganized lead tracking. We deployed an AI-driven quoting and CRM automation system that handles customer communication and generates accurate quotes. The system operates 24/7 and keeps the CRM clean and updated automatically. Results: 80% reduction in manual quoting time, same-day quotes that win more deals, and seamless scaling as leads grow.',
    readTime: '8 min read'
  },
  {
    id: 'fetchly',
    title: 'Fetchly',
    subtitle: 'AI-Powered Executive Assistant in Slack',
    description: 'Fetchly\'s leadership team was overwhelmed by repetitive admin tasks across multiple platforms. We designed a custom AI executive assistant that operates within Slack, integrating with Gmail, Google Calendar, monday.com, and Google Contacts. The assistant matches their unique tone of voice and handles email management, calendar scheduling, and project updates. This solution eliminated administrative overhead and gave the team daily operational visibility without platform switching.',
    readTime: '7 min read',
    phases: [
      {
        title: 'Phase 1: Slack-Based Personal Assistant',
        trigger: 'Activated by a Slack @mention',
        capabilities: [
          'Email Management: Drafts, labels, and summarizes inboxes — all in the client\'s unique style',
          'Calendar Integration: Checks availability, schedules, and updates meetings',
          'monday.com Integration: Creates and updates boards, tasks, and project items',
          'Contact Management: Dynamically updates Google Contacts with enriched lead details',
          'Tone Matching: Ensures all messages remain in the client\'s personal style'
        ]
      },
      {
        title: 'Phase 2: Inbox Management Automation',
        trigger: 'Continuous monitoring of incoming emails',
        capabilities: [
          'Auto-enriches contact details for new senders',
          'Summarizes billing emails and pushes them into Slack',
          'Flags VIP emails with automatic labeling',
          'Categorizes internal emails for streamlined review'
        ],
        result: 'Eliminated inbox clutter and accelerated response time'
      },
      {
        title: 'Phase 3: Daily Operational Summary',
        trigger: 'Automatically runs every weekday at 5:00 AM',
        capabilities: [
          'Pulls the day\'s meetings from Google Calendar',
          'Surfaces active/due tasks from monday.com',
          'Generates a concise, actionable summary directly in Slack'
        ],
        result: 'Gave the team daily visibility without logging into multiple platforms'
      }
    ],
    roi: {
      title: 'Return on Investment',
      description: 'By implementing this AI assistant, Fetchly effectively onboarded the equivalent of a full-time executive assistant that lives in Slack',
      benefits: [
        '24/7 availability, no training, no PTO',
        'Seamlessly integrated with existing tools',
        'Reduced administrative overhead by double-digit hours weekly',
        'Created a scalable, modular framework for future AI-driven workflows'
      ],
      result: 'Faster decision-making, less context-switching, and a deeply integrated AI layer that enhanced executive focus and team productivity'
    }
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
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">            {caseStudies.map((study, index) => (
                <div key={study.id} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
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
                      <a 
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
                      >
                        Read Full Case Study
                        <svg 
                          className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>

                      {/* Technology Tags */}
                      <div className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
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
