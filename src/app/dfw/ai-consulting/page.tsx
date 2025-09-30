import type { Metadata } from 'next'
import Link from 'next/link'
import DarkButton from '@/components/DarkButton'
import LightButton from '@/components/LightButton'

export const metadata: Metadata = {
  title: 'AI Consulting in Dallas–Fort Worth | Automation & Growth Systems – Forte',
  description: 'DFW-based AI consultants who deliver outcomes in 30–90 days. We build practical automations, AI assistants, and owner dashboards that give you time back and grow revenue.',
  keywords: ['AI consulting Dallas', 'AI consultant Fort Worth', 'DFW AI services', 'Dallas automation', 'Fort Worth AI consultant', 'AI consultants DFW', 'business automation Dallas', 'AI systems Fort Worth'],
  openGraph: {
    title: 'AI Consulting in Dallas–Fort Worth | Automation & Growth Systems – Forte',
    description: 'DFW-based AI consultants who deliver outcomes in 30–90 days. We build practical automations, AI assistants, and owner dashboards that give you time back and grow revenue.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Forte Web Designs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting in Dallas–Fort Worth | Automation & Growth Systems – Forte',
    description: 'DFW-based AI consultants who deliver outcomes in 30–90 days. We build practical automations, AI assistants, and owner dashboards that give you time back and grow revenue.',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/dfw/ai-consulting',
  },
}

// JSON-LD Schema
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://fortewebdesigns.com/#localbusiness",
      "name": "Forte Web Designs",
      "description": "AI consulting and automation services in Dallas-Fort Worth",
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
        },
        {
          "@type": "City",
          "name": "Arlington"
        },
        {
          "@type": "City",
          "name": "Irving"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Consulting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Consulting",
              "description": "Custom AI automation and business growth systems"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://fortewebdesigns.com/dfw/ai-consulting/#service",
      "name": "AI Consulting",
      "description": "Practical automation and AI systems that return time and increase throughput",
      "provider": {
        "@id": "https://fortewebdesigns.com/#localbusiness"
      },
      "areaServed": [
        "Dallas, TX",
        "Fort Worth, TX", 
        "Plano, TX",
        "Frisco, TX",
        "Arlington, TX",
        "Irving, TX"
      ],
      "serviceType": "AI Consulting",
      "url": "https://fortewebdesigns.com/dfw/ai-consulting"
    }
  ]
}

export default function DFWAIConsulting() {
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
                AI Consulting in Dallas–Fort Worth
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
                Practical automation and AI systems that return time and increase throughput—without ripping out your tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DarkButton href="/growth-audit">Get Your Free Growth Snapshot</DarkButton>
                <LightButton href="/contact">Talk to a DFW Consultant</LightButton>
              </div>
            </div>
          </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8 text-center">
                What we deliver in 30–90 days
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Time back</h3>
                  <p className="text-gray-600 dark:text-gray-300">Automate intake, routing, reminders, and follow-ups (~5–20 hours/week reclaimed).</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Faster response</h3>
                  <p className="text-gray-600 dark:text-gray-300">First touch drops from hours to minutes across calls, forms, and chat.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Throughput</h3>
                  <p className="text-gray-600 dark:text-gray-300">Quotes and approvals move same-day instead of stalling for days.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Visibility</h3>
                  <p className="text-gray-600 dark:text-gray-300">One owner dashboard for workload, bottlenecks, and ROI.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 lg:p-8 md:col-span-2">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Consistency</h3>
                  <p className="text-gray-600 dark:text-gray-300">90–100% follow-up coverage without manual chasing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Systems We Build Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8 text-center">
                Systems we build (in plain English)
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Smart Intake & First Touch</h3>
                  <p className="text-gray-600 dark:text-gray-300">Instant text-back, form auto-replies, channel handoff.</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Quote & Sales Follow-Through</h3>
                  <p className="text-gray-600 dark:text-gray-300">Templates, nudges, and "next best step" reminders.</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Retention & Review Loops</h3>
                  <p className="text-gray-600 dark:text-gray-300">No-show reminders, win-backs, steady reviews.</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Owner Dashboards & Alerts</h3>
                  <p className="text-gray-600 dark:text-gray-300">One view of leads, quotes, and stuck points.</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Integrations & Clean Handoffs</h3>
                  <p className="text-gray-600 dark:text-gray-300">CRM, phones, calendars, invoices—no duplicate entry.</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Secure, Managed Infrastructure</h3>
                  <p className="text-gray-600 dark:text-gray-300">Cloud-hosted, permissioned, monitored.</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">AI Assistants (when useful)</h3>
                  <p className="text-gray-600 dark:text-gray-300">Retrieval-aware replies and task handling.</p>
                </div>
                <div className="border-l-4 border-primary-600 pl-6">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Custom Plays for Your Ops</h3>
                  <p className="text-gray-600 dark:text-gray-300">Tailored workflows for your team's reality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8 text-center">
                How it works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Snapshot & Plan (free)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">We map 3–4 biggest leaks and give two quick wins.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Pilot & Prove (2–4 weeks)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Deploy a focused pilot and measure lift.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Scale & Instrument (4–8 weeks)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Extend across intake, quotes, retention, dashboards.</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Operate & Improve (ongoing)</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Forte Care™ keeps it secure and tuned.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8 text-center">
                Who we help in DFW
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">Service businesses</h3>
                  <p className="text-gray-600 dark:text-gray-300">Faster first touch, same-day quotes, better reviews.</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">E-commerce & retail</h3>
                  <p className="text-gray-600 dark:text-gray-300">Fewer abandoned carts, faster checkouts, higher repeat rate.</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">Professional services</h3>
                  <p className="text-gray-600 dark:text-gray-300">Faster intake and scheduling, clearer status, higher retention.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8 text-center">
                FAQ
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Do we need new software?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Usually no. We integrate with what you use today.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">How fast are results?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Most clients see measurable lifts within 2–4 weeks of the pilot.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Is this custom?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Yes—scoped to outcomes, not zaps or bots.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">Who owns the system?</h3>
                  <p className="text-gray-600 dark:text-gray-300">You own deliverables after the 12-month minimum per our pricing/terms.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Proof Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-900 dark:text-white mb-8">
                Local proof
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                See outcomes on our <Link href="/case-studies" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">Case Studies</Link>: Summit Gaming Lounge, DineEase, Fetchly, ClearFlow Water Systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DarkButton href="/growth-audit">Get Your Free Growth Snapshot</DarkButton>
                <LightButton href="/contact">Talk to a DFW Consultant</LightButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}