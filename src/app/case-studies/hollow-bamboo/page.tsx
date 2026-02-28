import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import LightButton from '@/components/LightButton';
import DarkButton from '@/components/DarkButton';

export const metadata: Metadata = {
  title: 'Hollow Bamboo Case Study - Custom Google Sheets Inventory Automation | Forte Web Designs',
  description: 'Discover how we built a custom Google Sheets automation system for Hollow Bamboo Film Productions that saves 20+ hours per week on inventory management across multiple film sets.',
  openGraph: {
    title: 'Hollow Bamboo Case Study - Google Sheets Inventory Automation',
    description: 'Custom automation system with QR code mobile access and real-time multi-location sync for film production equipment tracking.',
    images: ['/images/case-studies/hollow-bamboo-hero.jpg'],
  },
};

export default function HollowBambooCaseStudy() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Film Production/Location Management
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6">
                Hollow Bamboo Film Productions
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
                Custom Google Sheets Inventory Automation System
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  2 weeks
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  20+ hrs/week saved
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  6 locations tracked
                </div>
              </div>
            </div>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up" delay={200}>
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-emerald-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Google Sheets Inventory System</p>
                  </div>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
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
                  <source src="/video-walkthroughs/Revolutionizing Inventory Management for Film Production.mp4" type="video/mp4" />
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
                <p className="mb-6">
                  Hollow Bamboo, a film production location management company, was manually tracking hundreds of equipment items across multiple film sets, vans, and lock-ups throughout the city. Their team faced constant challenges:
                </p>
                <ul className="space-y-3 mb-6">
                  <li>• Equipment constantly moving between 6+ locations with no real-time visibility</li>
                  <li>• Manual tracking in spreadsheets that required constant updates</li>
                  <li>• High-turnover expendables with no automated restock alerts</li>
                  <li>• Rental equipment returns tracked on paper, leading to missed deadlines and vendor issues</li>
                  <li>• Crew members wasting time searching for equipment or discovering it was checked out after arriving on set</li>
                  <li>• Chaotic handoffs during permit-pressured wraps, leading to equipment ending up in wrong vans</li>
                </ul>
                <p>
                  The manual system was costing 20+ hours per week in administrative overhead and creating friction that slowed down production.
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
                  We built a custom Google Sheets automation system that transforms static spreadsheets into a dynamic, real-time inventory management platform. The system uses Google Apps Script, QUERY formulas, and conditional formatting to create an automated tracking solution that updates instantly across all locations.
                </p>
                <p>
                  The solution provides mobile QR code access for field crews, automated data validation to prevent errors, and intelligent reporting that flags overdue rentals, missing equipment, and low-stock items-all without requiring external platforms or monthly SaaS fees.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>

          {/* Key Features */}
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11a2 2 0 00-2-2H8a2 2 0 00-2 2v2a2 2 0 002 2h8a2 2 0 002-2v-2zM8 10h8l-1-1h-6l-1 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  QR Code Mobile Check-Out System
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Field crews scan a QR code to access a Google Form that updates the master inventory instantly. No apps to download, no training required-equipment location updates automatically across all tracking views.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Real-Time Multi-Location Sync
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Six location tabs (vans, lock-ups, film sets) auto-populate based on current equipment location using dynamic QUERY formulas. When equipment moves, all views update instantly without manual intervention.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Intelligent Rental Tracking
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Automated overdue rental alerts with vendor tracking, expected return dates, and visual flagging. The system calculates days overdue and highlights at-risk rentals before they become expensive problems.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.002 3h5.498a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-5.498a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Automated Restock Alerts
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  High-turnover expendables trigger visual alerts when quantities drop below customizable thresholds, ensuring crews never run out of critical supplies mid-shoot.
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
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-emerald-600 mb-2">
                  20+ hrs
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Per week saved
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  on manual inventory updates
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 mb-2">
                  6
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Locations tracked
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  with real-time sync
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600 mb-2">
                  100%
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Equipment visibility
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  across all sets
                </p>
              </div>

              <div className="text-center">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-red-600 mb-2">
                  $0
                </div>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Monthly software costs
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  (Google Workspace only)
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
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Mobile Form Submission
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Crew members scan QR code and submit equipment check-out via Google Form in under 60 seconds. The form captures team member, equipment name, quantity, destination, and optional notes.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={200}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Apps Script Automation
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Google Apps Script triggers on form submission, searches the Master Inventory for the equipment item, and automatically updates current location, status (Available → Checked Out), and timestamp-all in real-time.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={300}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Dynamic Database Updates
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    QUERY formulas in location tabs automatically filter and display equipment based on current location. Conditional formatting applies color-coding (green = available, orange = checked out, red = missing/damaged) for instant visual status.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={400}>
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Automated Reporting
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Monthly Audit tab compiles checked-out items, overdue rentals, missing equipment, and damaged gear using filtered queries. Rentals Tracking tab calculates days until return and flags overdue items in red.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Technical Implementation Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                Technical Implementation
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Google Sheets as Database
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Master Inventory tab serves as the central database with 14 tracked fields including Item ID, Equipment Name, Category, Quantity, Ownership Status, Condition, Current Location, Status, Rental Vendor, dates, restock thresholds, and notes.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={200}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Data Validation & Integrity
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Custom dropdown validation using Named Ranges ensures data consistency across 1,000+ rows. Users can only select from predefined categories, locations, conditions, and statuses-eliminating typos and data quality issues.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={300}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Apps Script Event-Driven Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Form submission trigger executes onFormSubmit() function that parses form data, searches Master Inventory by equipment name, updates location and status fields, and appends timestamped notes-all in milliseconds.
                </p>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={400}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Advanced Formula Logic
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  QUERY formulas with SQL-like syntax filter and sort data across multiple dimensions, dynamically populating location-specific views with real-time equipment status and availability.
                </p>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Unique Feature Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                Hybrid Prep Kit Architecture
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                A unique challenge: vendor-delivered prep kits that sometimes stay together, sometimes get separated across vans during chaotic night wraps.
              </p>
            </div>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up" delay={200}>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Solution: Flexible Tracking System
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hybrid tracking where prep kits can be logged as single "parent" line items OR broken down into individual sub-items when needed. If items get separated, they can be tracked individually without losing the prep kit relationship-giving flexibility without complexity.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 dark:text-white mb-8 leading-relaxed">
                "Everything looks awesome so far, really liking how it's shaping up. The automation is exactly what we needed-our crew can finally focus on the shoot instead of hunting for equipment."
              </blockquote>
              <div className="text-lg text-gray-600 dark:text-gray-400">
                - Dustin Shea, Assistant Location Manager, Hollow Bamboo
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Why This Approach Works Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-8">
                Why This Approach Works
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">No Monthly Fees</h3>
                    <p className="text-gray-600 dark:text-gray-300">Built entirely on Google Workspace-no additional SaaS subscriptions or per-user costs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Instant Mobile Access</h3>
                    <p className="text-gray-600 dark:text-gray-300">QR code works on any smartphone without downloading apps or creating accounts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Zero Training Required</h3>
                    <p className="text-gray-600 dark:text-gray-300">Familiar Google Forms interface means crew members can use it immediately</p>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={200}>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Offline-Friendly</h3>
                    <p className="text-gray-600 dark:text-gray-300">Form submissions queue when offline and sync when connection returns</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Fully Customizable</h3>
                    <p className="text-gray-600 dark:text-gray-300">Client owns the system and can modify dropdowns, categories, and logic as needs evolve</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Production-Ready</h3>
                    <p className="text-gray-600 dark:text-gray-300">Handles real-world chaos-rushed wraps, equipment splits, rental tracking, and multi-location coordination</p>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900">
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