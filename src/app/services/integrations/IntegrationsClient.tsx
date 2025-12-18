'use client';

import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function IntegrationsClient() {
  // What we build blocks
  const integrationBlocks = [
    {
      title: "CRM Setup and Optimization",
      description: "Your CRM should be the source of truth for your business. We set it up properly, clean up the mess, and make sure it actually works the way you need it to.",
      examples: [
        "Pipeline stages that match your actual sales process",
        "Custom fields that capture what matters",
        "Automations that move deals forward without manual work",
        "Data that's accurate and up to date"
      ]
    },
    {
      title: "System Connections",
      description: "Your CRM, email platform, forms, accounting software, and everything else should share data automatically. We build the connections that make your stack work as one system.",
      examples: [
        "New leads flow into your CRM automatically",
        "Customer data syncs across all platforms",
        "No more copy-pasting between tools",
        "Changes in one system update everywhere"
      ]
    },
    {
      title: "Automated Handoffs",
      description: "When a lead becomes a customer, when a deal closes, when a project kicks off, the right things should happen automatically. We build the handoffs so nothing gets dropped.",
      examples: [
        "Sales to operations handoffs without manual work",
        "Automatic task creation when deals move stages",
        "Notifications to the right people at the right time",
        "Nothing falls through the cracks"
      ]
    },
    {
      title: "Dashboards and Reporting",
      description: "You shouldn't have to check five tools to know what's happening. We build dashboards that pull data from across your stack and show you the truth in one place.",
      examples: [
        "Real-time visibility into pipeline, revenue, and operations",
        "Data from multiple sources in one view",
        "Reports that generate automatically",
        "No more digging through spreadsheets"
      ]
    }
  ];

  // Problems this solves
  const problems = [
    {
      problem: "My team is copy-pasting data between five different tools.",
      solution: "Connections that sync data automatically. Enter it once, it shows up everywhere."
    },
    {
      problem: "Our CRM is a mess and nobody trusts the data.",
      solution: "Cleanup, proper setup, and systems that keep it accurate going forward."
    },
    {
      problem: "Leads come in but nobody follows up fast enough.",
      solution: "Automatic routing and notifications. Leads get to the right person instantly."
    },
    {
      problem: "Things fall through the cracks when deals close or projects kick off.",
      solution: "Automated handoffs that trigger the right actions without anyone remembering to do it."
    },
    {
      problem: "I have no idea what's happening without asking three people.",
      solution: "Dashboards that show you pipeline, revenue, and operations in one place. Real-time, no digging."
    }
  ];

  // How we work steps
  const steps = [
    {
      number: "1",
      title: "Audit",
      description: "We map out your current tools, how data flows (or doesn't), and where things break down. We find the gaps and the opportunities."
    },
    {
      number: "2",
      title: "Plan",
      description: "You get a clear plan for what we'll connect, how data will flow, and what changes when it's done. No surprises."
    },
    {
      number: "3",
      title: "Build",
      description: "We build the connections, set up the automations, and test everything. We make sure it works before you rely on it."
    },
    {
      number: "4",
      title: "Train and Support",
      description: "We show your team how it works and document everything. You're not dependent on us to understand your own systems."
    }
  ];

  // Systems we work with
  const systemCategories = [
    {
      category: "CRMs",
      tools: "HubSpot, Salesforce, Pipedrive, Go High Level, Zoho, Monday.com"
    },
    {
      category: "Email",
      tools: "Mailchimp, ActiveCampaign, Klaviyo, ConvertKit, Gmail, Outlook"
    },
    {
      category: "Forms",
      tools: "Typeform, JotForm, Gravity Forms, Google Forms, Webflow"
    },
    {
      category: "Accounting",
      tools: "QuickBooks, Xero, FreshBooks, Wave"
    },
    {
      category: "E-commerce",
      tools: "Shopify, WooCommerce, BigCommerce"
    },
    {
      category: "Project Management",
      tools: "Asana, ClickUp, Notion, Basecamp"
    },
    {
      category: "Communication",
      tools: "Slack, Microsoft Teams, Twilio"
    }
  ];

  // Results
  const results = [
    {
      company: "Modern Bungalow",
      result: "Shopify orders automatically trigger the right customer emails across 9 different scenarios. Zero manual work."
    },
    {
      company: "CR Deals Cincinnati",
      result: "Product data flows from inventory to listings to social channels automatically. 3,000 products monthly without bottlenecks."
    },
    {
      company: "Kingfisher Ads",
      result: "Ad spend data from Meta and Google pulls automatically into reporting. Monthly process cut from 2-4 hours to 15 minutes."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
                CRM & Integrations
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Make your tools actually talk to each other. We connect your systems so data flows automatically and your team stops copy-pasting between platforms.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  Book a Strategy Call
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                What We Build
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                You're paying for powerful tools but they don't work together. Your team wastes hours moving data between systems, and something always falls through the cracks. We fix that.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationBlocks.map((block, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 h-full">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {block.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {block.description}
                  </p>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      What this means
                    </p>
                    <ul className="space-y-2">
                      {block.examples.map((example, exIndex) => (
                        <li key={exIndex} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300 text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problems This Solves Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                The Problems This Solves
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-8">
            {problems.map((item, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4 italic">
                    "{item.problem}"
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Systems We Work With Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Systems We Work With
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We've connected hundreds of tools. Here are some of the most common.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {systemCategories.map((category, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {category.category}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {category.tools}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">And more:</span> If it has an API, we can probably connect it. If you don't see your tool, ask.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                How We Work
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Timeline:</span> Most integration projects take 2-4 weeks depending on complexity. We'll give you a specific timeline in your proposal.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                What Clients Have Achieved
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {results.map((item, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.result}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>

          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                See All Case Studies
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
                Ready to Talk?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                If your tools don't talk to each other and your team is wasting time on manual data work, let's figure out what's possible. We'll look at your current stack, find the gaps, and show you what connected systems could look like.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg"
                >
                  Book a Strategy Call
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold transition-all duration-200"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
