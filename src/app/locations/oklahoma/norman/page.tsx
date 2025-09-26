import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Norman Growth Systems & Web Design | Education, Research, Local Business | Forte',
  description: 'Forte builds Growth Systems for Norman businesses — from university research and weather technology to healthcare and local enterprises. Custom websites, automation, and integrations designed for measurable growth.',
  openGraph: {
    title: 'Norman Growth Systems & Web Design | Education, Research, Local Business',
    description: 'Growth Systems for Norman businesses — from university research and weather technology to healthcare and local enterprises. Custom websites, automation, and integrations for measurable growth.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Growth Systems - Norman Education, Research, Local Business Solutions',
      },
    ],
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/oklahoma/norman',
  },
};

export default function NormanPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <SectionBackgroundAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Norman Growth Systems — Powered by Education, Research & Innovation
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              From University of Oklahoma research to local small businesses, Forte builds Growth Systems for Norman — combining custom websites, automated follow-ups, and integrated dashboards that deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start My Norman Growth System
              </Link>
              <Link
                href="/checkup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Book Free Norman Growth Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Norman Business Landscape */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Norman's Innovation Hub
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Innovation Rooted in Education
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Norman thrives at the intersection of education, research, and entrepreneurship. Home to the University of Oklahoma and the National Weather Center, Norman is a hub for academic excellence, advanced technology, and a growing small business community. Competing here requires more than just a website — you need a Growth System built to match Norman's standard of innovation.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education & Research</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Academic institutions and research centers need credibility and seamless digital communication.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Solution:</strong> Foundation websites + Scaling Layer integrations with portals, dashboards, and secure document access.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Weather & Technology</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Norman's weather-tech industry requires real-time performance and data-driven communication.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Solution:</strong> Lightning-fast Foundation builds with Growth Layer automation to keep stakeholders informed.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Healthcare Expansion</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Local facilities must balance patient trust with modern digital expectations.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Solution:</strong> Mobile-first websites with HIPAA-aware scheduling, automation, and reporting dashboards.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Local Business Community</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Independent businesses risk getting lost in a university-dominated market.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Solution:</strong> Local SEO, Growth Layer follow-up systems, and authentic Norman branding.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Norman by the Numbers: Research Meets Community
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Population</span>
                    <span className="font-semibold text-gray-900 dark:text-white">128,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">University Students</span>
                    <span className="font-semibold text-gray-900 dark:text-white">28,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Businesses</span>
                    <span className="font-semibold text-gray-900 dark:text-white">8,500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Median Income</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$58,000</span>
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
              Growth Systems for Norman Businesses
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
                  Custom-coded designs that showcase Norman's academic excellence and business innovation.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Academic & research institution sites</li>
                  <li>• Weather & technology platforms</li>
                  <li>• Healthcare facility websites</li>
                  <li>• Local business community sites</li>
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
                  Local SEO, automated follow-ups, and lead dashboards tailored for Norman's dual academic and small business communities.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Local Norman SEO optimization</li>
                  <li>• University community targeting</li>
                  <li>• Automated inquiry follow-up</li>
                  <li>• Authentic Norman branding</li>
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
                  Research-ready dashboards, CRM setups, and workflow automations designed for growth.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Research portals & dashboards</li>
                  <li>• Secure document access systems</li>
                  <li>• CRM & workflow automation</li>
                  <li>• Real-time data communication</li>
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
              Why Norman Businesses Choose Forte
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Research-Grade Precision
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Custom-coded websites built to meet Norman's academic, professional, and research standards.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Education Ecosystem Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep understanding of Norman's university-driven economy and how to engage both students and professionals.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Innovation That Scales
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Growth Systems designed to evolve alongside Norman's research, healthcare, and entrepreneurial initiatives.
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
              Ready to Scale Your Norman Business or Institution?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              From startups to research centers, Norman businesses trust Forte Growth Systems to transform digital presence into measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start My Norman Growth System
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
