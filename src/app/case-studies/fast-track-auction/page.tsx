import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import LightButton from '@/components/LightButton';
import DarkButton from '@/components/DarkButton';

export const metadata: Metadata = {
  title: 'Fast Track Auction Case Study - AI-Powered Marketplace Automation | Forte Web Designs',
  description: 'Discover how we built an AI-driven marketplace listing and social automation system for Fast Track Auction that automates product scoring, content generation, and social media posting.',
  openGraph: {
    title: 'Fast Track Auction Case Study - AI Marketplace Automation',
    description: 'AI-powered system that automates product listing, content generation, and social media posting for auction and resale business.',
    images: ['/images/case-studies/fast-track-auction-hero.jpg'],
  },
};

export default function FastTrackAuctionCaseStudy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full text-orange-700 dark:text-orange-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                Resale/Auction
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
                Fast Track Auction
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
                AI-Powered Marketplace Listing & Social Automation System
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  4 weeks
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  25+ hrs/week saved
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  300% listing volume increase
                </div>
              </div>
            </div>
          </SimpleScrollReveal>



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
                <p className="mb-6">
                  Fast Track Auction in Cincinnati was manually processing product listings for their auction and resale business—a time-consuming workflow that included:
                </p>
                <ul className="space-y-3 mb-6">
                  <li>• Researching market prices for hundreds of items from wholesale sources</li>
                  <li>• Writing unique descriptions and titles for each product</li>
                  <li>• Creating engaging social media posts</li>
                  <li>• Manually posting to Facebook Marketplace and managing promotions</li>
                  <li>• Tracking product performance and profitability across inventory</li>
                </ul>
                <p>
                  This manual process was consuming significant hours each week, limiting their ability to scale inventory volume and leaving revenue on the table due to inconsistent posting schedules and suboptimal product selection.
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
                <p className="mb-6">
                  We built a fully automated AI-driven marketplace listing and social media system that transforms Fast Track Auction's operations:
                </p>
                <ul className="space-y-3 mb-6">
                  <li>• Intelligently scores products using AI to evaluate profitability, market demand, and trend data</li>
                  <li>• Generates optimized content including SEO-friendly titles, compelling 8-12 bullet-point descriptions, and relevant hashtags</li>
                  <li>• Automates Facebook posting with scheduled "Deal Drops" and promotional campaigns</li>
                  <li>• Cross-posts to Instagram for maximum audience reach</li>
                  <li>• Provides real-time analytics through a custom dashboard showing product scores, margins, and performance</li>
                </ul>
                <p>
                  The system operates 24/7 without manual intervention, allowing the Fast Track Auction team to focus on sourcing profitable inventory and serving customers instead of administrative tasks.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>

          {/* Key Features */}
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  AI Product Scoring & Market Intelligence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  OpenAI-powered algorithm evaluates each product by comparing costs against real-time Amazon and eBay market comps, calculating profit margins, and analyzing trend data. Only high-potential products pass the filter and make it to listing—maximizing ROI on every post.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Automated Content Generation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  AI creates platform-optimized titles, 8-12 compelling bullet-point descriptions, accurate category tags, and strategic hashtag sets for each product—eliminating hours of manual copywriting while maintaining brand voice and conversion focus.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10M7 4l1 16h8l1-16M7 4H5a1 1 0 00-1 1v1a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Facebook & Instagram Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Meta Graph API integration enables automatic posting with optimized product images (cropped and watermarked), engaging captions, clear CTAs, and intelligent scheduling for consistent daily engagement without manual work.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Real-Time Performance Dashboard
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Centralized view of all products displaying AI trend scores, acquisition costs, suggested sell prices, projected profit margins, and post performance tracking—enabling data-driven inventory decisions.
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
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-red-600 mb-2">
                  25+ hrs
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Per week saved
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  on manual listing creation and social media management
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-600 to-pink-600 mb-2">
                  24/7
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Automated operation
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  across data processing, AI analysis, content generation, and social posting
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-purple-600 mb-2">
                  300%
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Increase in listing volume
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  without additional labor costs
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-indigo-600 mb-2">
                  85%
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Improvement in product selection
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  accuracy through AI-powered scoring
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
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Data Ingestion & Normalization
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Product data flows automatically from wholesale feeds (B-Stock, Liquidation.com), POS exports, and Google Sheets. The system normalizes different data formats and extracts key fields (SKU, cost, images, descriptions) for AI processing.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={200}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    AI-Powered Product Analysis
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    OpenAI evaluates each product against current market comparables on Amazon and eBay, calculates optimal pricing strategies, scores profitability potential (0-100 scale), and automatically filters out low-margin or low-demand items.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={300}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Content Generation & Optimization
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    AI creates platform-specific, conversion-focused content (titles optimized for search, benefit-driven descriptions, relevant hashtags), processes and watermarks product images, and packages everything for immediate publishing.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={400}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Automated Social Distribution
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Scheduled posts publish automatically to Fast Track Auction's Facebook Page and Instagram with performance tracking, error handling and alerts, and real-time monitoring—all operating 24/7 without manual intervention.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Technical Architecture Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                Technical Architecture
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Automation Platform
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <strong>n8n</strong> - Professionally hosted and managed automation platform
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <strong>AI Engine</strong> - OpenAI GPT-4 for intelligent scoring and content generation
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Social APIs</strong> - Meta Graph API (Facebook/Instagram)
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={200}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Data Sources & Processing
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <strong>Data Sources</strong> - Wholesale feeds (B-Stock, Liquidation.com), POS exports, Google Sheets
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  <strong>Image Processing</strong> - Automated cropping, optimization, and watermarking
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Monitoring</strong> - Custom error handling with automated email/SMS alerts
                </p>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Technology Highlights Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                Technology Highlights
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Smart Product Filtering</h3>
                    <p className="text-gray-600 dark:text-gray-300">AI evaluates profit potential before any content is generated, ensuring only viable products receive listing resources.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Market-Responsive Pricing</h3>
                    <p className="text-gray-600 dark:text-gray-300">Real-time comparison against Amazon/eBay prices ensures competitive positioning while maximizing margins.</p>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={200}>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Consistent Brand Presence</h3>
                    <p className="text-gray-600 dark:text-gray-300">Automated scheduling maintains daily Facebook engagement with "Deal Drop" promotions, keeping the audience engaged without manual effort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Scalable Infrastructure</h3>
                    <p className="text-gray-600 dark:text-gray-300">System handles increasing product volumes without additional labor, enabling Fast Track Auction to grow inventory without growing overhead.</p>
                  </div>
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
                "[To be collected after 30 days of successful operation]"
              </blockquote>
              <div className="text-lg text-gray-600 dark:text-gray-400">
                — Fast Track Auction Team, Cincinnati, OH
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                Ready to Automate Your Marketplace Operations?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                See how we can build a custom AI-powered automation solution for your resale business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <DarkButton>Book a Strategy Call</DarkButton>
                </Link>
                <Link href="/case-studies">
                  <LightButton>View More Case Studies</LightButton>
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </main>
  );
}