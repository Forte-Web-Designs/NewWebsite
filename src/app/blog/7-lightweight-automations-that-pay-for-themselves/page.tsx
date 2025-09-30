import type { Metadata } from 'next'
import Link from 'next/link'
import DarkButton from '@/components/DarkButton'

export const metadata: Metadata = {
  title: '7 Lightweight Automations That Pay for Themselves',
  description: 'Quick wins you can launch without ripping out your tools. Automate first touch, quotes, follow-ups, scheduling, and reporting to reclaim 5–20 hours/week.',
  keywords: ['lightweight automation', 'business automation ROI', 'automation quick wins', 'small business automation', 'automation payback', 'workflow automation'],
  openGraph: {
    title: '7 Lightweight Automations That Pay for Themselves',
    description: 'Quick wins you can launch without ripping out your tools. Automate first touch, quotes, follow-ups, scheduling, and reporting to reclaim 5–20 hours/week.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/blog/7-lightweight-automations-that-pay-for-themselves',
  },
}

// JSON-LD Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "7 Lightweight Automations That Pay for Themselves",
  "description": "Quick wins you can launch without ripping out your tools. Automate first touch, quotes, follow-ups, scheduling, and reporting to reclaim 5–20 hours/week.",
  "author": {
    "@type": "Organization",
    "name": "Forte Web Designs"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Forte Web Designs",
    "logo": {
      "@type": "ImageObject",
      "url": "https://fortewebdesigns.com/images/logo.png"
    }
  },
  "datePublished": "2025-09-30",
  "dateModified": "2025-09-30",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://fortewebdesigns.com/blog/7-lightweight-automations-that-pay-for-themselves"
  }
}

export default function LightweightAutomationsBlog() {
  const automations = [
    {
      number: 1,
      title: 'Missed-Call Text-Back',
      whatItDoes: 'When a call is missed, send an automatic text with a next step (book, reply with details, or FAQ).',
      outcome: 'First response time drops from hours to minutes; more booked calls.'
    },
    {
      number: 2,
      title: 'Form Auto-Reply + Next Step',
      whatItDoes: 'Instant confirmation that sets expectations and offers a scheduler link or data request.',
      outcome: 'Fewer cold inquiries, faster handoffs.'
    },
    {
      number: 3,
      title: 'Quote Templates + Approval Links',
      whatItDoes: 'Generate consistent quotes with clear approval links; log status automatically.',
      outcome: 'Same-day quotes; fewer stalls; cleaner pipeline.'
    },
    {
      number: 4,
      title: 'Follow-Up Nudges at 24/72 Hours',
      whatItDoes: 'If no response, send a polite reminder. Stops when they reply or book.',
      outcome: '90–100% coverage without manual chasing.'
    },
    {
      number: 5,
      title: 'No-Show Prevention',
      whatItDoes: 'Confirmations and reminders with reschedule options; post-appointment reviews.',
      outcome: 'Fewer no-shows; more reviews.'
    },
    {
      number: 6,
      title: 'Shared "Urgent" Channel for Escalations',
      whatItDoes: 'Route SLA breaches (e.g., >60 min no response) to a single channel with owner.',
      outcome: 'Problems surfaced early; faster recovery.'
    },
    {
      number: 7,
      title: 'Owner Scorecard (Weekly)',
      whatItDoes: 'Email or Slack summary with response time, quote time, follow-through, and stuck items.',
      outcome: 'You know what to fix Monday morning—no spreadsheets.'
    }
  ]

  const trackingMetrics = [
    'First response (minutes)',
    'Quote turnaround (hours/days)',
    'Follow-up coverage (%)',
    'No-show rate (%)',
    'Time saved (hours/week)'
  ]

  const handleCTAClick = (action: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'snapshot_requested_blog', {
        blog_post: '7-lightweight-automations',
        action: action
      });
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <article className="pt-24 pb-12 sm:pt-32 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <header className="mb-12">
                <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                  7 Lightweight Automations That Pay for Themselves
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Quick wins you can launch without ripping out your tools. Automate first touch, quotes, follow-ups, scheduling, and reporting to reclaim 5–20 hours/week.
                </p>
              </header>

              {/* Intro */}
              <section className="mb-12">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  You don&#39;t need a new platform to see ROI from automation. Here are seven thin layers you can add to your current stack to give your team time back and keep revenue moving.
                </p>
              </section>

              {/* Automations */}
              <div className="space-y-8 mb-12">
                {automations.map((automation) => (
                  <section key={automation.number} className="border-l-4 border-primary-600 pl-6">
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-4">
                      {automation.number}) {automation.title}
                    </h2>
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">What it does:</span>
                        <span className="text-gray-600 dark:text-gray-300 ml-2">{automation.whatItDoes}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-primary-600 dark:text-primary-400">Outcome:</span>
                        <span className="text-gray-600 dark:text-gray-300 ml-2">{automation.outcome}</span>
                      </div>
                    </div>
                  </section>
                ))}
              </div>

              {/* What to Track */}
              <section className="mb-12">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                  What to Track
                </h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
                  <ul className="space-y-3">
                    {trackingMetrics.map((metric, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 lg:p-12 text-center mb-12">
                <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                  Want these set up on your tools?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Start with a <strong>Free Growth Snapshot</strong>
                </p>
                <DarkButton 
                  href="/growth-audit"
                  onClick={() => handleCTAClick('primary_cta')}
                >
                  Get Your Free Growth Snapshot
                </DarkButton>
              </section>

              {/* Internal Links */}
              <section>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-6">Related Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link 
                    href="/services/automation-ai" 
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'services_view_blog', {
                          blog_post: '7-lightweight-automations',
                          service: 'automation-ai'
                        });
                      }
                    }}
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Automation & AI Services</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Complete automation solutions</p>
                  </Link>
                  <Link 
                    href="/case-studies" 
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Case Studies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Real automation outcomes</p>
                  </Link>
                  <Link 
                    href="/pricing" 
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'pricing_view_blog', {
                          blog_post: '7-lightweight-automations'
                        });
                      }
                    }}
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pricing</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Automation implementation costs</p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}