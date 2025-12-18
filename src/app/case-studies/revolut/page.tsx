import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import LightButton from '@/components/LightButton';
import DarkButton from '@/components/DarkButton';

export const metadata: Metadata = {
  title: 'Revolut Case Study - AI-Powered Financial Analytics Automation | Forte Web Designs',
  description: 'Discover how we built an AI-powered financial analytics system for Revolut that processes 200K+ transactions and saves 40 hours per week through automated insight generation.',
  openGraph: {
    title: 'Revolut Case Study - AI Financial Analytics Automation',
    description: 'AI-powered analytics system processing 200K+ transactions with automated insights and £4M growth pathway identification.',
    images: ['/images/case-studies/revolut-hero.jpg'],
  },
};

export default function RevolutCaseStudy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Fintech/Financial Services
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
                Revolut (Fintech)
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
                AI-Powered Financial Analytics & Automated Insight Generation
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  8 weeks
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  40 hrs/week saved
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  £4M growth pathway identified
                </div>
              </div>
            </div>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up" delay={200}>
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Financial Analytics Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Video Walkthrough */}
      <section id="video" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
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
                  <source src="/video-walkthroughs/Transforming Data Analysis with AI for Strategic Growth 🚀.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                The Challenge
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p>
                  A fintech company needed to analyze 200,000+ transaction records across 90 days to identify profitability drivers and develop a £4M growth strategy. Manual data analysis, initiative tracking, and executive reporting was consuming excessive analyst time and creating delays in strategic decision-making. The leadership team required real-time visibility into gross profit performance across 17 recent initiatives, 62 countries, and multiple user segments.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                The Solution
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p>
                  We built an AI-powered financial analytics automation system that processes massive transaction datasets, automatically identifies profitability patterns, quantifies initiative impacts, and generates executive-ready insights. The system includes intelligent data cleaning, automated pre/post analysis, dynamic PowerBI dashboards with real-time filtering, and automated report generation—eliminating weeks of manual analysis work.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>

          {/* Key Features */}
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Intelligent Data Processing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  AI-powered data cleaning and validation across 200K+ transactions with automated anomaly detection, missing value handling, and cross-dimensional analysis across geography, user segments, and product categories.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Automated Initiative Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Smart pre/post comparison engine that automatically quantifies the financial impact of 17 business initiatives, identifies GP drivers and detractors, and calculates ROI without manual intervention.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Dynamic Executive Dashboards
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Real-time PowerBI dashboards with intelligent filtering across date ranges, countries, user types, and plans. Automated insights generation with color-coded performance indicators and trend analysis.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                Results & Impact
              </h2>
            </div>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up" delay={200}>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 mb-2">
                  90%
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Analysis time reduced
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  through automation
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600 mb-2">
                  40 hrs
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Per week saved
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  on manual reporting
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-teal-600 mb-2">
                  £4M
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Growth pathway
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  identified and quantified
                </p>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                How It Works
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-12">
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Automated Data Pipeline
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Python-powered data ingestion processes 200K+ transactions, automatically cleaning, structuring, and validating data across 17 columns with intelligent type detection and error handling.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={200}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    AI-Driven Pattern Recognition
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Machine learning algorithms identify profitability trends, detect anomalies (like the -£3.3M "Other" cost category), and automatically segment performance by geography, user type, and product with zero manual intervention.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={300}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Intelligent Report Generation
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Automated executive report creation with AI-generated insights, strategic recommendations, and dynamic visualizations. System automatically identifies top performers, cost optimization opportunities, and generates actionable pathways to financial targets.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white mb-8 leading-relaxed">
                "This automated analytics system eliminated weeks of manual analysis work. We now have real-time visibility into our profitability drivers and can make data-driven decisions instantly."
              </blockquote>
              <div className="text-lg text-gray-600 dark:text-gray-400">
                — Fintech Leadership Team
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Automate Your Operations?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                See how we can build a custom automation solution for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200"
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
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </main>
  );
}