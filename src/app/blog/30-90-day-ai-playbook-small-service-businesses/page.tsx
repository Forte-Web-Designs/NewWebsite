import type { Metadata } from 'next'
import Link from 'next/link'
import DarkButton from '@/components/DarkButton'

export const metadata: Metadata = {
  title: 'The 30–90 Day AI Playbook for Small Service Businesses',
  description: 'A practical, non-technical plan to cut response times, send quotes same-day, and reclaim 5–20 hours/week using light-touch automation and AI.',
  keywords: ['AI playbook', 'small business automation', 'service business AI', '30 day automation plan', 'business automation guide', 'AI for service businesses'],
  openGraph: {
    title: 'The 30–90 Day AI Playbook for Small Service Businesses',
    description: 'A practical, non-technical plan to cut response times, send quotes same-day, and reclaim 5–20 hours/week using light-touch automation and AI.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/blog/30-90-day-ai-playbook-small-service-businesses',
  },
}

export default function AIPlaybookBlog() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <article className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                The 30–90 Day AI Playbook for Small Service Businesses
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                A practical, non-technical plan to cut response times, send quotes same-day, and reclaim 5–20 hours/week using light-touch automation and AI.
              </p>
            </header>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Most service businesses don't lose work on quality—they lose it to slow response, manual follow-ups, and unclear handoffs. Here's a practical, three-phase plan you can run over 30–90 days to fix that with light-touch automation and AI.
              </p>
            </section>

            {/* Phase 1 */}
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                Phase 1 (Weeks 1–2): Fix First Touch
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8 mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Objective</h3>
                    <p className="text-gray-600 dark:text-gray-300">Respond in minutes, not hours.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Moves</h3>
                    <p className="text-gray-600 dark:text-gray-300">Missed-call text-back, form auto-reply with next step, single shared inbox.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Outcome</h3>
                    <p className="text-gray-600 dark:text-gray-300">More booked calls; fewer cold inquiries.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Phase 2 */}
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                Phase 2 (Weeks 3–6): Quote & Follow-Through
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8 mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Objective</h3>
                    <p className="text-gray-600 dark:text-gray-300">Send same-day quotes and close loops.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Moves</h3>
                    <p className="text-gray-600 dark:text-gray-300">Quote templates, approval links, automatic nudges at 24/72 hours, task reminders.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Outcome</h3>
                    <p className="text-gray-600 dark:text-gray-300">Higher reply and close rates; fewer stalls.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Phase 3 */}
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                Phase 3 (Weeks 7–12): Visibility & Scale
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8 mb-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Objective</h3>
                    <p className="text-gray-600 dark:text-gray-300">See bottlenecks and fix them early.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Moves</h3>
                    <p className="text-gray-600 dark:text-gray-300">Owner dashboard (response time, quote time, follow-through), weekly scorecards, simple SLAs.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3">Outcome</h3>
                    <p className="text-gray-600 dark:text-gray-300">Consistent performance; less firefighting.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tools That Play Nice */}
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                Tools That Play Nice
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                CRM, calendars, email, phones—keep them. Use n8n/Zapier as the glue; add AI where context helps (summaries, suggested replies).
              </p>
            </section>

            {/* What "Good" Looks Like */}
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                What "Good" Looks Like
              </h2>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 lg:p-8">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-3">•</span>
                    First response: hours → minutes
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-3">•</span>
                    Quote turnaround: days → same-day
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-3">•</span>
                    Follow-up coverage: ad-hoc → 90–100%
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-3">•</span>
                    Time saved: ~5–20 hours/week
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-3">•</span>
                    One dashboard for leads/quotes/stuck points
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 lg:p-12 text-center">
              <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                Ready to implement your playbook?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Start with a <strong>Free Growth Snapshot</strong> to map your biggest wins
              </p>
              <DarkButton href="/growth-audit">Get Your Free Growth Snapshot</DarkButton>
            </section>

            {/* Internal Links */}
            <section className="mt-12">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-6">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/services/automation-ai" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Automation & AI Services</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Complete automation solutions</p>
                </Link>
                <Link href="/case-studies" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Case Studies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Real client outcomes</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  )
}