import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oklahoma City Growth Systems & Web Design | Energy, Healthcare, Aerospace | Forte',
  description: 'Forte builds Growth Systems for Oklahoma City businesses — from energy to healthcare, aerospace to government. Custom websites, automation, and integrations designed for measurable growth.',
  openGraph: {
    title: 'Oklahoma City Growth Systems & Web Design | Energy, Healthcare, Aerospace',
    description: 'Growth Systems for Oklahoma City businesses — from energy to healthcare, aerospace to government. Custom websites, automation, and integrations for measurable growth.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Growth Systems - Oklahoma City Energy, Healthcare, Aerospace Solutions',
      },
    ],
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/oklahoma/oklahoma-city',
  },
};

export default function OklahomaCityPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <SectionBackgroundAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Oklahoma City Growth Systems — Built for Energy, Healthcare & Innovation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              From energy giants to healthcare leaders, aerospace firms to government agencies, we help Oklahoma City businesses scale with custom websites, automated follow-ups, and integrated systems designed for measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start My OKC Growth System
              </Link>
              <Link
                href="/checkup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Book Free OKC Growth Snapshot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Oklahoma City Business Landscape */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Oklahoma City's Thriving Business Scene
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Capital City, Growth-Ready Systems
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  As Oklahoma's capital and largest city, Oklahoma City blends tradition with innovation. With thriving energy companies, advanced healthcare systems, aerospace leadership, and government agencies, OKC businesses need more than a website — they need Growth Systems that meet enterprise-level demands while staying rooted in local authenticity.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Energy Sector Leadership</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Competing with major corporations in a high-stakes, resource-heavy market.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Solution:</strong> Foundation websites + Growth Layer automation built to establish credibility and manage high-volume inquiries.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Healthcare Innovation</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Patients expect seamless online booking and secure communication.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Solution:</strong> HIPAA-conscious design, online scheduling integrations, and mobile-first UX.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Government & Aerospace</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> High regulation and security standards.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Solution:</strong> Custom-coded, secure platforms with Scaling Layer dashboards for reporting, compliance, and communication.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Oklahoma City at Scale
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Population</span>
                    <span className="font-semibold text-gray-900 dark:text-white">695,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Metro Area</span>
                    <span className="font-semibold text-gray-900 dark:text-white">1.4 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Businesses</span>
                    <span className="font-semibold text-gray-900 dark:text-white">35,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Median Income</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$59,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
              Growth Systems for Oklahoma City Businesses
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Foundation Layer */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-8 shadow-lg">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Foundation Websites
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Custom-coded sites designed for OKC's competitive industries.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Energy sector credibility design</li>
                  <li>• Healthcare compliance & security</li>
                  <li>• Government-grade performance</li>
                  <li>• Aerospace industry standards</li>
                </ul>
              </div>

              {/* Growth Layer */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-8 shadow-lg">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Growth Layer SEO & Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Local SEO, automated follow-ups, and reputation management to keep OKC businesses top of mind.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Local Oklahoma City SEO</li>
                  <li>• Automated inquiry follow-up</li>
                  <li>• Reputation management</li>
                  <li>• Lead nurturing sequences</li>
                </ul>
              </div>

              {/* Scaling Layer */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg p-8 shadow-lg">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Scaling Layer Integrations
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Business dashboards, intake forms, and workflow automation to unify marketing, sales, and service.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Business intelligence dashboards</li>
                  <li>• Workflow automation systems</li>
                  <li>• Advanced intake forms</li>
                  <li>• Sales & service integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
              Why Oklahoma City Businesses Choose Forte
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Lightning-Fast Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Foundation websites that load instantly and never lag behind.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Local Market Insight
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep understanding of OKC's unique mix of energy, healthcare, aerospace, and government.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Proven Growth Results
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Measurable outcomes: more leads, fewer no-shows, stronger ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Scale in Oklahoma City?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Oklahoma City businesses that trust Forte Growth Systems to compete with industry leaders while staying authentically local.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start My OKC Growth System
              </Link>
              <Link
                href="/checkup"
                className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Book Free Growth Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
