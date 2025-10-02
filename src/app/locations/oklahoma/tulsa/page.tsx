import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Tulsa Growth Systems & Web Design | Energy, Tech, Manufacturing | Forte',
  description: 'Forte builds Growth Systems for Tulsa businesses — from energy and healthcare to tech and manufacturing. Custom websites, automation, and integrations designed for measurable growth.',
  openGraph: {
    title: 'Tulsa Growth Systems & Web Design | Energy, Tech, Manufacturing',
    description: 'Growth Systems for Tulsa businesses — from energy and healthcare to tech and manufacturing. Custom websites, automation, and integrations for measurable growth.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forte Growth Systems - Tulsa Energy, Tech, Manufacturing Solutions',
      },
    ],
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/locations/oklahoma/tulsa',
  },
};

export default function TulsaPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <SectionBackgroundAnimation />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Tulsa Growth Systems — Built for Energy, Tech & Manufacturing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              From oil & gas giants to fast-growing startups, healthcare leaders to advanced manufacturers, we build Growth Systems for Tulsa businesses — custom websites, automated follow-ups, and integrated business dashboards designed for measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start My Tulsa Growth System
              </Link>
              <Link
                href="/checkup"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Book Free Tulsa Growth Snapshot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tulsa Business Landscape */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Tulsa's Dynamic Business Environment
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Oil Capital Roots. Growth Future.
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Tulsa's legacy as the 'Oil Capital of the World' has evolved into a diverse, innovation-driven economy. Today, Tulsa is home to energy leaders, a thriving startup ecosystem, world-class healthcare, and advanced manufacturing. To compete here, your business needs more than a website — you need a Growth System that adapts to Tulsa's fast-changing business landscape.
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Energy Innovation</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Competing with established energy corporations and industry leaders.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Solution:</strong> Foundation websites with enterprise-level performance + Growth Layer SEO to build credibility in a competitive market.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tech Hub Growth</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Startups need to scale fast while keeping costs manageable.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Solution:</strong> Growth Systems with automation, lead dashboards, and scalable integrations.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Healthcare Expansion</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Patients demand secure, seamless booking and trusted communication.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Solution:</strong> HIPAA-aware design, mobile-first scheduling, and Scaling Layer dashboards for patient tracking.</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Manufacturing Excellence</h4>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-1"><strong>Challenge:</strong> Manufacturers often rely on outdated, brochure-style websites.</p>
                    <p className="text-sm text-green-600 dark:text-green-400"><strong>Solution:</strong> Modern Growth Systems with service showcases, distributor portals, and lead automation.</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Tulsa by the Numbers: Innovation in Action
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Population</span>
                    <span className="font-semibold text-gray-900 dark:text-white">413,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Metro Area</span>
                    <span className="font-semibold text-gray-900 dark:text-white">1 million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Businesses</span>
                    <span className="font-semibold text-gray-900 dark:text-white">28,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Median Income</span>
                    <span className="font-semibold text-gray-900 dark:text-white">$54,000</span>
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
              Growth Systems for Tulsa Businesses
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
                  Custom-coded designs that capture Tulsa's mix of heritage and innovation.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Energy sector credibility design</li>
                  <li>• Startup-friendly scalable platforms</li>
                  <li>• Manufacturing showcase websites</li>
                  <li>• Healthcare compliance & security</li>
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
                  Local SEO, automated follow-ups, and reputation management designed for Tulsa's competitive industries.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Local Tulsa SEO optimization</li>
                  <li>• Automated inquiry follow-up</li>
                  <li>• Reputation management systems</li>
                  <li>• Lead nurturing automation</li>
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
                  Business dashboards, CRM systems, and workflow automation to scale startups and streamline enterprises.
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Business intelligence dashboards</li>
                  <li>• CRM systems & integrations</li>
                  <li>• Workflow automation tools</li>
                  <li>• Distributor portals & management</li>
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
              Why Tulsa Businesses Choose Forte
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Speed that Competes
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Custom-coded sites that load instantly and outperform outdated templates.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  Industry-Specific Expertise
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Deep understanding of Tulsa's energy, tech, healthcare, and manufacturing sectors.
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
                  Proven Local Results
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Systems that drive measurable lead growth, stronger conversions, and long-term scalability.
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
              Ready to Scale in Tulsa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Tulsa businesses that trust Forte Growth Systems to transform their online presence into a true growth engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start My Tulsa Growth System
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
