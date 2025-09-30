'use client';

import Link from 'next/link'
import DarkButton from '@/components/DarkButton'

// JSON-LD Schema
const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "7 Lightweight Automations That Pay for Themselves",
  "description": "Quick-win business automations that deliver ROI in 30-60 days. Simple tools and workflows that save time without requiring technical expertise or huge investments.",
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
  "datePublished": "2025-10-15",
  "dateModified": "2025-10-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://fortewebdesigns.com/blog/7-lightweight-automations-that-pay-for-themselves"
  }
}

export default function LightweightAutomationsClient() {
  const automations = [
    {
      id: 1,
      title: 'Email Follow-up Sequences',
      setup: '30 minutes',
      roi: '2-4 weeks',
      tools: ['Mailchimp', 'ConvertKit', 'ActiveCampaign'],
      description: 'Automatically nurture leads without manual email sending',
      process: [
        'Set up 5-7 email templates for different lead types',
        'Create triggers based on form submissions or behaviors',
        'Test the sequence with internal team',
        'Launch with tracking enabled'
      ],
      metrics: 'Track open rates, click-through rates, and conversions'
    },
    {
      id: 2,
      title: 'Lead Scoring & Routing',
      setup: '45 minutes',
      roi: '3-6 weeks',
      tools: ['HubSpot', 'Pipedrive', 'Salesforce'],
      description: 'Automatically prioritize and route leads to the right team member',
      process: [
        'Define scoring criteria (company size, budget, urgency)',
        'Set up routing rules based on scores and territories',
        'Create notification workflows',
        'Train team on new lead priorities'
      ],
      metrics: 'Measure response times, conversion rates by score range'
    },
    {
      id: 3,
      title: 'Social Media Scheduling',
      setup: '1 hour',
      roi: '1-2 weeks',
      tools: ['Buffer', 'Hootsuite', 'Later'],
      description: 'Plan and publish content automatically across platforms',
      process: [
        'Create content calendar template',
        'Batch create posts for 30 days',
        'Set up posting schedule for optimal times',
        'Monitor engagement and adjust timing'
      ],
      metrics: 'Track posting consistency, engagement rates, time saved'
    },
    {
      id: 4,
      title: 'Invoice and Payment Automation',
      setup: '45 minutes',
      roi: '2-3 weeks',
      tools: ['QuickBooks', 'FreshBooks', 'Stripe'],
      description: 'Generate and send invoices automatically, track payments',
      process: [
        'Connect project management to accounting software',
        'Set up automated invoice generation triggers',
        'Enable automatic payment reminders',
        'Configure late fee calculations'
      ],
      metrics: 'Monitor payment times, outstanding invoices, cash flow'
    },
    {
      id: 5,
      title: 'Customer Support Ticket Routing',
      setup: '30 minutes',
      roi: '1-3 weeks',
      tools: ['Zendesk', 'Freshdesk', 'Help Scout'],
      description: 'Automatically categorize and assign support requests',
      process: [
        'Define categories and priority levels',
        'Set up keyword-based routing rules',
        'Create escalation workflows',
        'Enable auto-responses for common issues'
      ],
      metrics: 'Track response times, resolution rates, customer satisfaction'
    },
    {
      id: 6,
      title: 'Project Status Updates',
      setup: '20 minutes',
      roi: '1-2 weeks',
      tools: ['Slack', 'Microsoft Teams', 'Asana'],
      description: 'Send automatic updates when project milestones are reached',
      process: [
        'Connect project management to communication tools',
        'Define milestone trigger points',
        'Create update message templates',
        'Set up client notification preferences'
      ],
      metrics: 'Measure client communication frequency, project transparency'
    },
    {
      id: 7,
      title: 'Inventory and Supply Alerts',
      setup: '15 minutes',
      roi: '2-4 weeks',
      tools: ['Google Sheets', 'Airtable', 'Monday.com'],
      description: 'Get notified when supplies run low or need reordering',
      process: [
        'Set up inventory tracking spreadsheet or database',
        'Define minimum stock levels for each item',
        'Create automated alert rules',
        'Connect to ordering systems where possible'
      ],
      metrics: 'Track stockout incidents, ordering frequency, cost savings'
    }
  ]

  const implementationTips = [
    'Start with the automation that addresses your biggest daily pain point',
    'Test each automation with a small group before full rollout',
    'Document the process so team members can maintain it',
    'Set up tracking from day one to measure actual ROI',
    'Plan for 2-3 weeks of fine-tuning after initial setup'
  ]

  const handleCTAClick = (action: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'snapshot_requested_blog', {
        blog_post: 'lightweight-automations-pay-for-themselves',
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
                  Quick-win business automations that deliver ROI in 30-60 days. Simple tools and workflows that save time without requiring technical expertise or huge investments.
                </p>
              </header>

              {/* Intro */}
              <section className="mb-12">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  These automations require minimal setup, use tools you probably already have, and start saving time immediately. Each one pays for itself through reduced manual work and improved efficiency.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Combined impact:</strong> Businesses typically save 8-15 hours per week by implementing 3-4 of these automations, equivalent to $400-$1,200 in monthly labor savings.
                  </p>
                </div>
              </section>

              {/* Automations List */}
              <section className="mb-12">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-8">
                  7 Quick-Win Automations
                </h2>
                <div className="space-y-8">
                  {automations.map((automation) => (
                    <div key={automation.id} className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="lg:flex-1">
                          <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-3">
                            {automation.id}. {automation.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {automation.description}
                          </p>
                        </div>
                        <div className="lg:ml-8 lg:flex-shrink-0">
                          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 text-sm">
                            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg px-3 py-2">
                              <div className="font-semibold text-blue-900 dark:text-blue-100">Setup Time</div>
                              <div className="text-blue-700 dark:text-blue-300">{automation.setup}</div>
                            </div>
                            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg px-3 py-2">
                              <div className="font-semibold text-green-900 dark:text-green-100">ROI Timeline</div>
                              <div className="text-green-700 dark:text-green-300">{automation.roi}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Implementation Steps</h4>
                          <ol className="space-y-2">
                            {automation.process.map((step, index) => (
                              <li key={index} className="flex items-start">
                                <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                                  {index + 1}
                                </span>
                                <span className="text-gray-600 dark:text-gray-300">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Recommended Tools</h4>
                            <div className="flex flex-wrap gap-2">
                              {automation.tools.map((tool, index) => (
                                <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Success Metrics</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{automation.metrics}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation Tips */}
              <section className="mb-12">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                  Implementation Best Practices
                </h2>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 lg:p-8">
                  <ul className="space-y-4">
                    {implementationTips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1 text-xl">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* ROI Calculation Example */}
              <section className="mb-12">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                  Real ROI Example
                </h2>
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 lg:p-8">
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-6">
                    Small Marketing Agency - 3 Automations Implemented
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Monthly Savings</h4>
                      <ul className="space-y-3">
                        <li className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Email follow-ups (8 hrs)</span>
                          <span className="font-semibold text-gray-900 dark:text-white">$400</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Social media posting (4 hrs)</span>
                          <span className="font-semibold text-gray-900 dark:text-white">$200</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Invoice processing (3 hrs)</span>
                          <span className="font-semibold text-gray-900 dark:text-white">$150</span>
                        </li>
                        <li className="flex justify-between border-t border-gray-300 dark:border-gray-600 pt-2">
                          <span className="font-semibold text-gray-900 dark:text-white">Total Monthly Savings</span>
                          <span className="font-semibold text-primary-600 dark:text-primary-400">$750</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">Setup Costs</h4>
                      <ul className="space-y-3">
                        <li className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Tool subscriptions</span>
                          <span className="font-semibold text-gray-900 dark:text-white">$97/month</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Initial setup (one-time)</span>
                          <span className="font-semibold text-gray-900 dark:text-white">$500</span>
                        </li>
                        <li className="flex justify-between border-t border-gray-300 dark:border-gray-600 pt-2">
                          <span className="font-semibold text-gray-900 dark:text-white">Net Monthly Benefit</span>
                          <span className="font-semibold text-green-600 dark:text-green-400">$653</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                      Payback Period: 3 weeks
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Annual savings: $7,836 | Setup investment: $597 | ROI: 1,213%
                    </p>
                  </div>
                </div>
              </section>

              {/* Next Steps */}
              <section className="mb-12">
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
                  Your 30-Day Implementation Plan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-100 mb-3">Week 1</h3>
                    <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                      <li>• Choose your top 2 pain points</li>
                      <li>• Sign up for recommended tools</li>
                      <li>• Set up first automation</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-yellow-900 dark:text-yellow-100 mb-3">Week 2-3</h3>
                    <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                      <li>• Test and refine first automation</li>
                      <li>• Implement second automation</li>
                      <li>• Train team on new processes</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                    <h3 className="font-semibold text-lg text-green-900 dark:text-green-100 mb-3">Week 4</h3>
                    <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                      <li>• Measure time and cost savings</li>
                      <li>• Document processes</li>
                      <li>• Plan next automation</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 lg:p-12 text-center mb-12">
                <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-6">
                  Need help implementing these automations?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Get a <strong>Free Growth Snapshot</strong> with a customized automation roadmap
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
                    href="/blog/how-to-measure-roi-of-automation-in-90-days" 
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Measure Automation ROI</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">90-day tracking framework</p>
                  </Link>
                  <Link 
                    href="/case-studies" 
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Success Stories</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Real automation results</p>
                  </Link>
                  <Link 
                    href="/services/automation-ai" 
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).gtag) {
                        (window as any).gtag('event', 'services_view_blog', {
                          blog_post: 'lightweight-automations-pay-for-themselves',
                          service: 'automation-ai'
                        });
                      }
                    }}
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Automation Services</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Professional implementation</p>
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