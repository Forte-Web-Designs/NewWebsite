import type { Metadata } from 'next'
import Link from 'next/link'
import DarkButton from '@/components/DarkButton'

export const metadata: Metadata = {
  title: 'Owner Dashboards: 12 Metrics That Actually Predict Cash Flow',
  description: 'Stop staring at vanity metrics. Track these 12 signals—response speed, quote time, follow-through, throughput—to predict revenue and act early.',
  keywords: ['owner dashboard', 'business metrics', 'cash flow prediction', 'business analytics', 'KPI dashboard', 'business intelligence'],
  openGraph: {
    title: 'Owner Dashboards: 12 Metrics That Actually Predict Cash Flow',
    description: 'Stop staring at vanity metrics. Track these 12 signals—response speed, quote time, follow-through, throughput—to predict revenue and act early.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/blog/owner-dashboards-metrics-that-predict-cash-flow',
  },
}

export default function OwnerDashboardsBlog() {
  const intakeMetrics = [
    { metric: 'First response time', unit: '(minutes)' },
    { metric: 'Missed call coverage', unit: '(%)' },
    { metric: 'Lead source to booked call', unit: '(%)' }
  ]

  const quotesMetrics = [
    { metric: 'Quote turnaround time', unit: '' },
    { metric: 'Quote follow-up coverage', unit: '(%)' },
    { metric: 'Approval rate', unit: '(%)' }
  ]

  const pipelineMetrics = [
    { metric: 'Stuck items over SLA', unit: '(count)' },
    { metric: 'Time to next step', unit: '(median)' },
    { metric: 'Win rate by source', unit: '(%)' }
  ]

  const retentionMetrics = [
    { metric: 'Repeat job rate', unit: '(%)' },
    { metric: 'Review velocity', unit: '(per 30 days)' },
    { metric: 'Refunds/redo rate', unit: '(%)' }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <article className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                Owner Dashboards: 12 Metrics That Actually Predict Cash Flow
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Stop staring at vanity metrics. Track these 12 signals—response speed, quote time, follow-through, throughput—to predict revenue and act early.
              </p>
            </header>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                If your reports don't help you act, they're noise. These twelve metrics predict cash flow and tell you exactly where to intervene.
              </p>
            </section>

            {/* Intake & Response */}
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                Intake & Response
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
                <div className="space-y-4">
                  {intakeMetrics.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                      <span className="font-medium text-gray-900 dark:text-white">{index + 1}. {item.metric}</span>
                      <span className="text-gray-600 dark:text-gray-300">{item.unit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quotes & Approvals */}
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                Quotes & Approvals
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
                <div className="space-y-4">
                  {quotesMetrics.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                      <span className="font-medium text-gray-900 dark:text-white">{index + 4}. {item.metric}</span>
                      <span className="text-gray-600 dark:text-gray-300">{item.unit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pipeline Health */}
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                Pipeline Health
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
                <div className="space-y-4">
                  {pipelineMetrics.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                      <span className="font-medium text-gray-900 dark:text-white">{index + 7}. {item.metric}</span>
                      <span className="text-gray-600 dark:text-gray-300">{item.unit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Retention & Reputation */}
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                Retention & Reputation
              </h2>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
                <div className="space-y-4">
                  {retentionMetrics.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                      <span className="font-medium text-gray-900 dark:text-white">{index + 10}. {item.metric}</span>
                      <span className="text-gray-600 dark:text-gray-300">{item.unit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* How to Use It Weekly */}
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                How to Use It Weekly
              </h2>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 lg:p-8">
                <ol className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</span>
                    <span>Review every Monday.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</span>
                    <span>Triage the top two bottlenecks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</span>
                    <span>Assign owners; set a simple SLA; recheck next week.</span>
                  </li>
                </ol>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 lg:p-12 text-center">
              <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                Want this dashboard templated to your tools?
              </h2>
              <DarkButton href="/services/automation-ai">See Automation & AI</DarkButton>
            </section>

            {/* Internal Links */}
            <section className="mt-12">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-6">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/growth-audit" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Growth Audit</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Free business analysis</p>
                </Link>
                <Link href="/pricing" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pricing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Dashboard implementation costs</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  )
}