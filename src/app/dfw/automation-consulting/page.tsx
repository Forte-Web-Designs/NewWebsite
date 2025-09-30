import type { Metadata } from 'next'
import Link from 'next/link'
import DarkButton from '@/components/DarkButton'
import LightButton from '@/components/LightButton'

export const metadata: Metadata = {
  title: 'Automation Consulting in Dallas–Fort Worth | Done-For-You Systems – Forte',
  description: 'We design and deploy automation that removes manual work and unlocks capacity. Intake, quotes, follow-ups, dashboards—measurable results in 30–90 days.',
  keywords: [
    "automation consulting Dallas", "business process automation DFW", "workflow automation Dallas", 
    "automation consultant Fort Worth", "process improvement Dallas", "business automation services DFW",
    "workflow optimization Dallas", "automation implementation Fort Worth", "Dallas business efficiency"
  ],
  openGraph: {
    title: 'Automation Consulting in Dallas–Fort Worth | Done-For-You Systems – Forte',
    description: 'We design and deploy automation that removes manual work and unlocks capacity. Intake, quotes, follow-ups, dashboards—measurable results in 30–90 days.',
    type: "website"
  },
  alternates: {
    canonical: "https://fortewebdesigns.com/dfw/automation-consulting/"
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
      "description": "Business process automation consulting in Dallas-Fort Worth",
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
      "@id": "https://fortewebdesigns.com/dfw/automation-consulting/#service",
      "name": "Business Process Automation",
      "description": "Remove manual steps, increase capacity, keep revenue moving",
      "provider": {
        "@id": "https://fortewebdesigns.com/#localbusiness"
      },
      "serviceType": "Business Process Automation",
      "url": "https://fortewebdesigns.com/dfw/automation-consulting"
    }
  ]
}

export default function DFWAutomationConsulting() {
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
                Automation Consulting in Dallas–Fort Worth
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                Remove manual steps. Increase capacity. Keep revenue moving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DarkButton href="/growth-audit">Start with a Free Snapshot</DarkButton>
                <LightButton href="/pricing">See Pricing</LightButton>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8 text-center">
                Outcomes you can expect
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Work moves faster</h3>
                  <p className="text-gray-600 dark:text-gray-300">Fewer handoffs, fewer stalls.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Capacity rises</h3>
                  <p className="text-gray-600 dark:text-gray-300">Teams focus on high-value work, not admin.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Pipeline clarity</h3>
                  <p className="text-gray-600 dark:text-gray-300">Know what's stuck and why—fix it early.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Predictable follow-through</h3>
                  <p className="text-gray-600 dark:text-gray-300">Nudges and reminders happen every time.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8 md:col-span-2">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Lower costs</h3>
                  <p className="text-gray-600 dark:text-gray-300">Less rework and duplicate data entry.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where We Automate Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8 text-center">
                Where we automate
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Lead intake & routing</h3>
                  <p className="text-gray-600 dark:text-gray-300">(phones/forms/chat → right owner fast)</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Quote workflows</h3>
                  <p className="text-gray-600 dark:text-gray-300">(templated docs, approvals, same-day send)</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Follow-ups</h3>
                  <p className="text-gray-600 dark:text-gray-300">(finish the loop—no manual chasing)</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Scheduling</h3>
                  <p className="text-gray-600 dark:text-gray-300">(self-serve, reminders, no-shows down)</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Data sync</h3>
                  <p className="text-gray-600 dark:text-gray-300">(CRM ↔ billing ↔ calendars ↔ phone)</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Owner dashboards</h3>
                  <p className="text-gray-600 dark:text-gray-300">(response time, quote time, follow-through, throughput)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Model Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                Engagement model
              </h2>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 lg:p-12 max-w-3xl mx-auto">
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  <span className="font-semibold text-primary-600 dark:text-primary-400">Free Snapshot</span> → <span className="font-semibold text-primary-600 dark:text-primary-400">Pilot</span> (2–4 weeks) → <span className="font-semibold text-primary-600 dark:text-primary-400">Scale</span> (4–8 weeks) → <span className="font-semibold text-primary-600 dark:text-primary-400">Operate</span> (ongoing Forte Care™)
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <DarkButton href="/growth-audit">Start with a Free Snapshot</DarkButton>
                  <LightButton href="/pricing">See Pricing</LightButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                Related resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/services/automation-ai" className="bg-white dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Automation & AI Services</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Complete automation and AI solutions</p>
                </Link>
                <Link href="/docs/technology-stack" className="bg-white dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Technology Stack</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Our automation infrastructure</p>
                </Link>
                <Link href="/case-studies" className="bg-white dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Case Studies</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Real client outcomes</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}