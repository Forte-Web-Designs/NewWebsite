import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Digital Marketing Agency Case Study | Three-Tier Automation | Forte Web Designs',
  description: 'Three-tier automation system for marketing agency: AI email responder, meeting follow-up automation, invoice processing. Projected 15-24 hrs/week saved, $39K-$62K annual value. Modular implementation.',
  openGraph: {
    title: 'Digital Marketing Agency Proposed Solution - Three-Tier Automation',
    description: 'Modular automation system addressing email management, meeting coordination, and invoice processing.',
    images: ['/images/case-studies/marketing-agency.jpg'],
  },
};

export default function DigitalMarketingAgencyCaseStudy() {
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
            <span className="text-gray-900 dark:text-white">Digital Marketing Agency</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-violet-600 to-fuchsia-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Proposed Solution
              </span>
              <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
                Digital Marketing Agency
              </h1>
              <p className="text-xl lg:text-2xl text-violet-100 mb-8">
                Three-Tier Operations Automation System
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Icon name="clock" className="w-5 h-5" />
                  <span>Feasibility Confirmed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="services" className="w-5 h-5" />
                  <span>Digital Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5" />
                  <span>15-24 hrs/week projected</span>
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
                This digital marketing agency is successful but drowning in operational overhead. Like many service businesses, they've grown to the point where admin work is consuming more time than actual client work. Three specific areas are particularly painful: email management (5-8 hours/week responding to routine questions), meeting administration (4-6 hours/week on follow-ups and scheduling), and financial administration (6-10 hours/week processing invoices).
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                They reached out for a feasibility assessment: Could these three workflows be automated? What would it cost? What would the ROI be? We analyzed their workflows, confirmed feasibility, and designed a three-tier system that addresses each challenge with appropriate automation complexity.
              </p>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Proposed Solution
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                We proposed a three-tier automation system, each tier addressing a different level of complexity: Tier 1 (Simple) - Gmail AI Responder for quick wins and immediate ROI; Tier 2 (Medium) - Meeting Follow-Up Automation using Fathom transcripts for higher complexity and bigger impact; Tier 3 (Complex) - Invoice Processing with FreeAgent integration to transform finance operations. Each tier can function independently but they're designed to work together as a complete operations automation ecosystem.
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
                Three-Tier System
              </h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="puzzle" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <div className="text-sm font-bold text-violet-600 dark:text-violet-400 mb-2">TIER 1: SIMPLE</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Gmail AI Responder
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    GPT-4 analyzes incoming emails, generates draft responses in company tone, sends to team for approval. Handles routine client questions, service inquiries, and scheduling requests.
                  </p>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    Projected: 5-8 hrs/week saved
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="check" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">TIER 2: MEDIUM</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Meeting Follow-Up Automation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Retrieves Fathom transcripts, GPT-4 analyzes key points and action items, generates follow-up emails, creates next meeting, saves notes to Drive, sends reminders.
                  </p>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    Projected: 4-6 hrs/week saved
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="flash" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <div className="text-sm font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">TIER 3: COMPLEX</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Invoice Processing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Monitors Gmail and vendor portals for invoices, extracts data via FreeAgent OCR, populates Google Sheets with tracking, generates monthly reports, flags overdue invoices.
                  </p>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    Projected: 6-10 hrs/week saved
                  </div>
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
                  <div className="text-4xl lg:text-5xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                    15-24 hrs
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Per week projected across all tiers
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    $39K-$62K
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Estimated annual value in recovered time
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">
                    &lt;1%
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Error rate (down from 10-15%)
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={300}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                    2x
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Capacity without adding staff
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>

            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-2xl p-8 border-2 border-violet-200 dark:border-violet-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Breakdown by Tier
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-violet-200 dark:border-violet-700">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Tier 1: Gmail AI</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">5-8 hrs/week saved</div>
                    </div>
                    <div className="text-lg font-bold text-violet-600 dark:text-violet-400">$13K-$20K/yr</div>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-violet-200 dark:border-violet-700">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Tier 2: Meeting Follow-Up</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">4-6 hrs/week saved</div>
                    </div>
                    <div className="text-lg font-bold text-purple-600 dark:text-purple-400">$10K-$15K/yr</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Tier 3: Invoice Processing</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">6-10 hrs/week saved</div>
                    </div>
                    <div className="text-lg font-bold text-fuchsia-600 dark:text-fuchsia-400">$15K-$26K/yr</div>
                  </div>
                </div>
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
                How It Would Work
              </h2>
            </SimpleScrollReveal>

            <div className="space-y-8">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      AI-Powered Email Analysis
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Gmail API monitors designated inbox. When emails arrive, GPT-4 analyzes content and context (what's being asked, appropriate response, needed tone). System generates draft response matching company communication style, sends to team member for approval. Team reviews (usually no edits needed) and clicks send, or auto-send after 15-minute review window.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Automated Meeting Follow-Up
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      After Microsoft Teams calls end, system retrieves Fathom transcript. GPT-4 analyzes discussion for key points, decisions, and action items. Drafts comprehensive follow-up email with meeting summary and action item list with assignments. Creates next meeting in Google Calendar, saves notes to Drive, and sends 24-hour reminders before next meeting.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Intelligent Invoice Processing
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      System monitors Gmail and vendor portals for invoices, downloads PDFs, uploads to FreeAgent Smart Capture. OCR extracts vendor name, amounts, dates, line items. Validates data for errors, then populates monthly Google Sheets with tracking columns (date, vendor, amount, category, status, due date). Auto-generates monthly expense summaries and flags approaching due dates.
                    </p>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>

            <SimpleScrollReveal direction="up" delay={300}>
              <div className="mt-12 bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Proposed Investment
                </h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Full System (All 3 Tiers):</div>
                      <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">$7,500-$15,000</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Individual Tiers:</div>
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">$2,500-$7,000 each</div>
                    </div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
                    Includes workflow design, all integrations, GPT-4 training, testing, documentation, and 60-day optimization period
                  </div>
                  <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-lg p-4">
                    <div className="font-semibold text-gray-900 dark:text-white mb-2">Flexible Implementation:</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">Start with one tier for quick wins, expand based on results. Each tier stands alone but works better together.</div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Eliminate Operational Overhead?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                See how three-tier automation can help your agency scale without operational bloat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition-all duration-200"
                >
                  Book a Discovery Call
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
