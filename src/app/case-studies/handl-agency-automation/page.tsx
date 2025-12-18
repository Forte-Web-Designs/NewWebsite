import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'HandL Agency Case Study | Three-Tier Automation | Forte Web Designs',
  description: 'Three-tier automation system for HandL marketing agency: AI email responder, meeting follow-up automation, invoice processing. 15-24 hrs/week saved, $40K+ annual value.',
  openGraph: {
    title: 'HandL Agency Case Study - Three-Tier Operations Automation',
    description: 'Modular automation system addressing email management, meeting coordination, and invoice processing for digital marketing agency.',
    images: ['/images/case-studies/handl-agency.jpg'],
  },
};

export default function HandLAgencyCaseStudy() {
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
            <span className="text-gray-900 dark:text-white">HandL Agency</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-violet-600 to-fuchsia-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Case Study
              </span>
              <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
                HandL Agency
              </h1>
              <p className="text-xl lg:text-2xl text-violet-100 mb-8">
                Three-Tier Operations Automation System
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Icon name="clock" className="w-5 h-5" />
                  <span>6 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="services" className="w-5 h-5" />
                  <span>Digital Marketing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5" />
                  <span>15-24 hrs/week saved</span>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Video Walkthrough */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Video Walkthrough
              </h2>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  controls
                  className="w-full"
                >
                  <source src="/video-walkthroughs/Emergency Recovery_ Fixing a Full Disk Crisis for Automation Workflows 🚨.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
                HandL Agency, a successful digital marketing firm, was drowning in operational overhead. As they grew, admin work started consuming more time than actual client work. Three specific areas were particularly painful: routine email responses (5-8 hours/week), meeting follow-ups and coordination (4-6 hours/week), and invoice processing (6-10 hours/week). Combined, these repetitive tasks were eating 15-24 hours weekly—time that should have been spent on strategy and client success.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                The agency was at a crossroads: hire more operations staff (expensive and difficult to manage) or find a way to automate the bottlenecks. Manual invoice processing had a 10-15% error rate, delayed responses were hurting client relationships, and meeting follow-ups were inconsistent. They needed a solution that could scale with their growth without proportional overhead increase.
              </p>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Solution
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                We built a three-tier automation system, each tier addressing different complexity levels. Tier 1: AI-powered email responder handles routine client questions with GPT-4 drafts and human approval. Tier 2: Meeting follow-up automation uses Fathom transcripts to generate summaries, action items, and next-meeting scheduling automatically. Tier 3: Invoice processing monitors Gmail and vendor portals, extracts data via OCR, and populates tracking sheets—reducing errors to near-zero. The result: they reclaimed 15-24 hours per week and can now handle 2x the client load without adding operations staff.
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
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="puzzle" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <div className="text-sm font-bold text-violet-600 dark:text-violet-400 mb-2">TIER 1</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    AI Email Responder
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    GPT-4 analyzes incoming emails and generates draft responses in company tone. Team approves before sending. Handles routine questions, service inquiries, and scheduling—saving 5-8 hours weekly.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-fuchsia-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="check" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-2">TIER 2</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Meeting Follow-Up
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Automatically retrieves Fathom transcripts, generates summaries with action items, creates follow-up emails, schedules next meetings, and saves notes to Drive—saving 4-6 hours weekly.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="flash" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <div className="text-sm font-bold text-fuchsia-600 dark:text-fuchsia-400 mb-2">TIER 3</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Invoice Processing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Monitors Gmail and vendor portals, extracts invoice data via OCR, populates tracking sheets, and generates monthly reports—reducing errors to &lt;1% and saving 6-10 hours weekly.
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
                  <div className="text-4xl lg:text-5xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                    15-24 hrs
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Per week saved across all tiers
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    $40K+
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Annual value in recovered time
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
                    Client capacity without adding staff
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>

            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-2xl p-8 border-2 border-violet-200 dark:border-violet-700">
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
                    <span className="text-gray-700 dark:text-gray-300">Team can focus on strategy and client success instead of repetitive admin tasks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Scalable growth without proportional increase in operational overhead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Faster client responses and professional follow-ups improve satisfaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">Eliminated invoice errors and improved financial visibility</span>
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
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      AI-Powered Email Analysis
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Gmail API monitors designated inbox. When emails arrive, GPT-4 analyzes content and generates draft responses matching company tone. Drafts go to team for approval—usually no edits needed. Auto-send after 15-minute review window or immediate approval.
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
                      After Microsoft Teams calls end, system retrieves Fathom transcript. GPT-4 analyzes for key points, decisions, and action items. Generates comprehensive follow-up email with summary and assignments, creates next meeting in Google Calendar, saves notes to Drive, and sends 24-hour reminders.
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
                      System monitors Gmail and vendor portals for invoices, downloads PDFs, uploads to FreeAgent Smart Capture. OCR extracts vendor name, amounts, dates, line items. Validates data for errors, then populates monthly Google Sheets with tracking columns. Auto-generates expense summaries and flags approaching due dates.
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
                Ready to Eliminate Operational Overhead?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                See how automation can help your agency scale without operational bloat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-semibold transition-all duration-200"
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
