import type { Metadata } from 'next'
import Link from 'next/link'
import DarkButton from '@/components/DarkButton'
import LightButton from '@/components/LightButton'

export const metadata: Metadata = {
  title: 'Business Growth Systems in Dallas–Fort Worth | Websites, AI & Dashboards – Forte',
  description: 'Complete growth systems that give you time back and grow revenue—custom websites, AI automation, and owner dashboards. DFW-based, outcome-driven.',
  keywords: [
    "business growth systems Dallas", "business growth consultant DFW", "growth systems Fort Worth",
    "business growth Dallas", "DFW business growth", "Dallas business consultant", "Fort Worth growth systems",
    "business systems Dallas", "growth consultant DFW", "Dallas business automation"
  ],
  openGraph: {
    title: 'Business Growth Systems in Dallas–Fort Worth | Websites, AI & Dashboards – Forte',
    description: 'Complete growth systems that give you time back and grow revenue—custom websites, AI automation, and owner dashboards. DFW-based, outcome-driven.',
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/dfw/business-growth-systems/"
  }
}

// JSON-LD Schema
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://fortewebdesigns.com/#localbusiness",
      "name": "Forte Web Designs",
      "description": "Business growth systems consulting in Dallas-Fort Worth",
      "url": "https://fortewebdesigns.com",
      "telephone": "(469) 474-0348",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Grapevine",
        "addressLocality": "Grapevine", 
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "32.9343",
        "longitude": "-97.0781"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dallas"
        },
        {
          "@type": "City", 
          "name": "Fort Worth"
        },
        {
          "@type": "City",
          "name": "Plano"
        },
        {
          "@type": "City",
          "name": "Frisco"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://fortewebdesigns.com/dfw/business-growth-systems/#service",
      "name": "Business Growth Consultant",
      "description": "Website, automation, and dashboards engineered to return time and grow revenue",
      "provider": {
        "@id": "https://fortewebdesigns.com/#localbusiness"
      },
      "serviceType": "Business Growth Consultant",
      "url": "https://fortewebdesigns.com/dfw/business-growth-systems"
    }
  ]
}

export default function DFWBusinessGrowthSystems() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 dark:text-white mb-6 sm:mb-8">
                Business Growth Systems in Dallas–Fort Worth
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                Website, automation, and dashboards engineered to return time and grow revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DarkButton href="/services/automation-ai">See the System</DarkButton>
                <LightButton href="/growth-audit">Get Your Free Snapshot</LightButton>
              </div>
            </div>
          </div>
        </section>

        {/* The System Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8 text-center">
                The system (3 layers)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8 text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Foundation: Website Design</h3>
                  <p className="text-gray-600 dark:text-gray-300">Fast, custom-coded sites that convert.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8 text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Automation & AI</h3>
                  <p className="text-gray-600 dark:text-gray-300">Intake, quotes, follow-ups, and handoffs automated.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8 text-center">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Dashboards & Scaling</h3>
                  <p className="text-gray-600 dark:text-gray-300">One place to see what's working and fix bottlenecks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8 text-center">
                Results in 30–90 days
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">First response</h3>
                  <p className="text-gray-600 dark:text-gray-300"><span className="font-bold text-red-600">hours</span> → <span className="font-bold text-green-600">minutes</span></p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Quote turnaround</h3>
                  <p className="text-gray-600 dark:text-gray-300"><span className="font-bold text-red-600">days</span> → <span className="font-bold text-green-600">same-day</span></p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Follow-up coverage</h3>
                  <p className="text-gray-600 dark:text-gray-300"><span className="font-bold text-red-600">ad-hoc</span> → <span className="font-bold text-green-600">90–100%</span></p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Time saved</h3>
                  <p className="text-gray-600 dark:text-gray-300"><span className="font-bold text-green-600">~5–20 hours/week</span></p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8 md:col-span-2">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Owner visibility</h3>
                  <p className="text-gray-600 dark:text-gray-300"><span className="font-bold text-green-600">One dashboard</span> of leads/quotes/stuck points</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why DFW Companies Choose Forte */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8 text-center">
                Why DFW companies choose Forte
              </h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Local partner</h3>
                  <p className="text-gray-600 dark:text-gray-300">Grapevine HQ, service across Dallas–Fort Worth.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Outcome-scoped</h3>
                  <p className="text-gray-600 dark:text-gray-300">Priced to measurable results, not task lists.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">No rip-and-replace</h3>
                  <p className="text-gray-600 dark:text-gray-300">We integrate with your current tools.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Operated</h3>
                  <p className="text-gray-600 dark:text-gray-300">Forte Care™ keeps everything secure and optimized.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DarkButton href="/services/automation-ai">See the System</DarkButton>
                <LightButton href="/growth-audit">Get Your Free Snapshot</LightButton>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/services/web-design" className="bg-white dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Website Design</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Foundation layer for growth systems</p>
                </Link>
                <Link href="/services/automation-ai" className="bg-white dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Automation & AI</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Complete automation solutions</p>
                </Link>
                <Link href="/case-studies" className="bg-white dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Case Studies</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Real DFW client outcomes</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}