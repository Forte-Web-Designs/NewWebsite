import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Compass Real Estate Case Study | AI Email & Drive Automation | Forte Web Designs',
  description: 'AI-powered email drafting and Google Drive automation for Compass real estate agents. 11-17 hours/week saved, 50x faster email drafting. Hybrid system delivers ChatGPT ease with automation reliability.',
  openGraph: {
    title: 'Compass Real Estate Case Study - AI Email & Drive Automation',
    description: 'Hybrid automation system with ChatGPT-powered email drafts and intelligent file organization for real estate professionals.',
    images: ['/images/case-studies/compass-real-estate.jpg'],
  },
};

export default function CompassRealEstateCaseStudy() {
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
            <span className="text-gray-900 dark:text-white">Compass Real Estate</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-600 to-amber-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Case Study
              </span>
              <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
                Compass Real Estate
              </h1>
              <p className="text-xl lg:text-2xl text-orange-100 mb-8">
                AI-Powered Email Drafting & Google Drive Automation
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Icon name="clock" className="w-5 h-5" />
                  <span>4 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="services" className="w-5 h-5" />
                  <span>Real Estate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5" />
                  <span>11-17 hrs/week saved</span>
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
                Josh Steck and Gracie Leslie, successful real estate agents with Compass in Colorado, were spending 11-17 hours per week on administrative work that didn't generate revenue. Email drafting alone consumed 8-12 hours weekly-writing showing confirmations, property descriptions, follow-ups, and client updates. Each email took 5-10 minutes to write, and with 50-100 emails per week, the time added up fast.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                File management was another pain point. Property photos, contracts, and documents scattered across Google Drive meant 2-3 hours weekly just searching for files. They needed a system that could handle the volume while maintaining the personal touch their clients valued-fast email responses without sacrificing quality, and organized files without manual sorting.
              </p>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Solution
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                We built a hybrid AI automation system that transformed how they handle admin work. ChatGPT-powered email drafting generates personalized responses in 10 seconds instead of 5-10 minutes-a 50x speed improvement. Simple triggers (Gmail labels, web forms, or Slack commands) capture context, and the system drafts emails that match their communication style. Intelligent Google Drive automation watches for uploaded files and automatically organizes property photos, contracts, and documents by property and client. The result: they reclaimed 11-17 hours per week to focus on showings and closings instead of admin work.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="puzzle" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    AI Email Drafting
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    ChatGPT-powered email drafts appearing in Gmail within 10 seconds. Multiple trigger options (Gmail label, web form, Slack command) with business context integration for personalized, professional communication.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="check" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Intelligent Drive Organization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automated file sorting for property photos, contracts, and documents. Files automatically organize by property, client, and type with duplicate detection and safe deletion workflows.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-500 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="flash" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Showing Workflow Automation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Automated showing confirmations, calendar invites with property details, 24-hour reminders, and post-showing follow-ups-all generated with context-aware AI drafting.
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
                Results & Impact
              </h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                    11-17 hrs
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Per week saved on admin work
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                    $30K+
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Annual value in recovered time
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                    50x
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Faster email drafting (10 sec vs 5-10 min)
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={300}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-orange-500 dark:text-orange-300 mb-2">
                    Same-Day
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Email responses became standard
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>

            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-2xl p-8 border-2 border-orange-200 dark:border-orange-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Why This Matters
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">More time for revenue-generating activities like showings and closings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Better work-life balance-reclaim nights and weekends from admin work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Faster response times strengthen client relationships and improve satisfaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Consistent professional communication maintains quality even during busy periods</span>
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
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Trigger-Based Email Drafting
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Simple triggers (Gmail label, web form, or Slack command) capture context about the email needed. System pulls relevant property information and past communication history, then ChatGPT generates a personalized draft in their communication style. Draft auto-populates Gmail within 10-15 seconds for review and sending.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Automated File Organization
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      System watches Google Drive and analyzes uploaded files (filename, OCR content, metadata). Determines property/client association and document type, then automatically moves to correct folder with standardized naming. Property photos, contracts, and documents all organize themselves with duplicate detection and safe deletion workflows.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Business Context Integration
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      System understands current listings, property details, client preferences, and past interactions. Adapts email tone based on relationship stage (new lead vs longtime client), includes relevant property information automatically, and learns from edits made over time to continuously improve draft quality.
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
                Ready for Similar Results?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                See how AI-powered automation can help your business eliminate admin work and scale efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all duration-200"
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
