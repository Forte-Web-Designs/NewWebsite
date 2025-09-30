import type { Metadata } from 'next'
import Link from 'next/link'
import DarkButton from '@/components/DarkButton'

export const metadata: Metadata = {
  title: 'From Missed Calls to Booked Jobs: Automating First Touch (Without New Software)',
  description: 'You can cut first response to minutes using the tools you already have. Here is a no-rip-and-replace approach to automate first touch.',
  keywords: ['first touch automation', 'missed call automation', 'lead response automation', 'business automation', 'customer response system'],
  openGraph: {
    title: 'From Missed Calls to Booked Jobs: Automating First Touch (Without New Software)',
    description: 'You can cut first response to minutes using the tools you already have. Here is a no-rip-and-replace approach to automate first touch.',
    type: 'article',
  },
  alternates: {
    canonical: 'https://fortewebdesigns.com/blog/automating-first-touch-without-new-software',
  },
}

export default function AutomatingFirstTouchBlog() {
  const steps = [
    {
      number: 1,
      title: 'Capture Every Inquiry',
      items: [
        'Missed call → automatic text-back ("We saw your call, here is the next step").',
        'Form submit → instant confirmation email + scheduler link.',
        'Chat → collect contact + auto-reply with next step.'
      ]
    },
    {
      number: 2,
      title: 'Route to the Right Owner',
      items: [
        'Simple rules: by service line, location, or calendar availability.',
        'Put escalations in a shared "urgent" channel.'
      ]
    },
    {
      number: 3,
      title: 'Offer a Self-Serve Next Step',
      items: [
        'Scheduler link.',
        '"Reply with a photo/details" shortcut for quotes.',
        'FAQ/estimate page for common questions.'
      ]
    },
    {
      number: 4,
      title: 'Close the Loop',
      items: [
        'If no reply at 24/72h, send a polite nudge.',
        'If booked, send a reminder; if no-show, auto-reschedule link.'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <article className="pt-24 pb-12 sm:pt-32 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-6">
                From Missed Calls to Booked Jobs: Automating First Touch (Without New Software)
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                You can cut first response to minutes using the tools you already have. Here is a no-rip-and-replace approach to automate first touch.
              </p>
            </header>

            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                You don&#39;t need a new platform to fix first touch. Use what you already have and add thin automation.
              </p>
            </section>

            {/* Steps */}
            {steps.map((step) => (
              <section key={step.number} className="mb-12">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                  Step {step.number}: {step.title}
                </h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
                  <ul className="space-y-4">
                    {step.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}

            {/* Measure It */}
            <section className="mb-12">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                Measure It
              </h2>
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 lg:p-8">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  First response (minutes), booked call rate (%), no-show rate (%).
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Improve copy, timing, and routing weekly.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 lg:p-12 text-center">
              <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                We&#39;ll map it for you in a free Growth Snapshot
              </h2>
              <DarkButton href="/growth-audit">Get Your Free Growth Snapshot</DarkButton>
            </section>

            {/* Internal Links */}
            <section className="mt-12">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-6">Related Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/services/automation-ai" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Automation & AI Services</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Complete first-touch automation</p>
                </Link>
                <Link href="/case-studies" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Case Studies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">See real first-touch improvements</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  )
}