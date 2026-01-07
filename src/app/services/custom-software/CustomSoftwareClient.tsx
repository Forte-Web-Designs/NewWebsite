'use client';

import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function CustomSoftwareClient() {
  // What I build blocks
  const softwareBlocks = [
    {
      title: "Custom Dashboards",
      description: "You shouldn't have to log into six different tools to understand your business. I build dashboards that pull your data into one view and show you what actually matters.",
      examples: [
        "Revenue and performance metrics in real-time",
        "Multi-source data aggregation (CRM, payments, inventory, etc.)",
        "Automated reports delivered on your schedule"
      ]
    },
    {
      title: "Internal Tools",
      description: "When off-the-shelf software forces you to adapt your workflow, it creates friction. I build tools that match how your team actually works.",
      examples: [
        "Inventory management systems",
        "Client portals and booking systems",
        "Operational tools specific to your industry"
      ]
    },
    {
      title: "Data Processing",
      description: "Some data operations are too complex for standard automation platforms. I build systems that can handle heavy transformations and intelligent processing.",
      examples: [
        "Bulk data transformations and cleanup",
        "AI-powered analysis and categorization",
        "Complex calculation engines"
      ]
    },
    {
      title: "API Integrations",
      description: "When tools don't talk to each other, someone has to manually move data. I build the connections that make your systems work as one.",
      examples: [
        "Bi-directional sync between platforms",
        "Custom middleware for legacy systems",
        "Automated data flow between any systems with an API"
      ]
    }
  ];

  // Problems this solves
  const problems = [
    {
      problem: "We're using spreadsheets for things we shouldn't be.",
      solution: "Custom tools replace spreadsheet workflows with purpose-built applications that handle validation, automation, and multi-user access."
    },
    {
      problem: "Our software doesn't work the way we work.",
      solution: "I build around your processes, not the other way around. No forcing your team to adapt to software limitations."
    },
    {
      problem: "Data is scattered across multiple systems with no unified view.",
      solution: "Dashboards that aggregate from anywhere. One login, full visibility, real-time updates."
    },
    {
      problem: "We've outgrown what off-the-shelf tools can do.",
      solution: "Custom software scales with you. No feature limitations, no per-seat pricing, no waiting for vendors to build what you need."
    },
    {
      problem: "We know we need to fix this, but custom software sounds expensive.",
      solution: "It's not about whether custom software costs money. It's about whether it costs less than the problem. I help you see the real numbers - what the workarounds cost now, what they'll cost as you grow, and exactly when a real solution pays for itself."
    }
  ];

  // How I work steps
  const steps = [
    {
      number: "1",
      title: "Discovery",
      description: "I start by understanding what the current workarounds are costing you - hours wasted, errors, growth you can't capture. Then I map your workflows, identify the pain points, and define exactly what needs to be built. You'll know the scope, timeline, investment, and payback period before I start. For complex projects, I start with a paid discovery phase - I dig into your operations and prove the approach works before you commit to the full build."
    },
    {
      number: "2",
      title: "Design",
      description: "You'll see mockups and prototypes before I write production code. No surprises. You approve the design, then I build."
    },
    {
      number: "3",
      title: "Build",
      description: "Development with weekly updates. You'll see progress throughout, not just at the end. I test as I go."
    },
    {
      number: "4",
      title: "Handoff",
      description: "You get working software, full documentation, and training for your team. I stick around to make sure everything runs smoothly."
    }
  ];

  // Results
  const results = [
    {
      company: "Hollow Bamboo Film Productions",
      result: "Complete equipment visibility across 6 locations - 20+ hours weekly back"
    },
    {
      company: "Revolut",
      result: "£4M growth opportunity uncovered - analysis that took weeks now takes hours"
    },
    {
      company: "CR Deals Cincinnati",
      result: "Product listings that generate themselves - 1,040+ hours back annually"
    }
  ];

  // What's included
  const included = [
    "Full source code ownership (no licensing fees)",
    "Comprehensive documentation",
    "Team training and onboarding",
    "90 days of bug fixes included",
    "Scalable, maintainable architecture",
    "Ongoing support options available"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
          <SimpleScrollReveal direction="up">
            <div className="text-center">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6">
                Custom Software Development
              </h1>
              <div className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8 space-y-4">
                <p>
                  When off-the-shelf tools don't cut it, you end up with spreadsheet workarounds, manual processes, and duct-taped solutions that break as you grow.
                </p>
                <p>
                  I build software that fits how your business actually works - dashboards, internal tools, integrations, and applications designed for your operations. And I start by figuring out what the workarounds are actually costing you.
                </p>
              </div>

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
                What I Build
              </h2>
              <div className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto space-y-4">
                <p>
                  I build software that actually fits how your business works. No generic templates forcing you to adapt your workflows. No limitations from platforms built for everyone else.
                </p>
                <p>
                  Before I scope anything, I figure out what the current workarounds are costing you - hours per week, errors, limitations on growth. Once I know that number, you'll know exactly when custom software pays for itself.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {softwareBlocks.map((block, index) => (
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
                      Examples
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
                Sound Familiar?
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

      {/* How We Work Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                How I Work
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Custom software projects vary in scope and complexity. I'll scope your project specifically and give you a clear timeline and investment before any work begins.
              </p>
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
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Timeline:</span> Custom software projects typically take 4-12 weeks depending on scope and complexity. We'll give you specific timelines and ROI calculations in your proposal.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                What's Included
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Every custom software project includes:
              </p>
            </div>
          </SimpleScrollReveal>

          <SimpleScrollReveal direction="up">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
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
                Got a Problem?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                If I can help, you'll know exactly when you'll see your money back. If I can't, I'll tell you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-200 shadow-lg text-lg"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
