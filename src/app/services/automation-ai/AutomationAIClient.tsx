'use client';

import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function AutomationAIClient() {
  // What we build blocks
  const automationBlocks = [
    {
      title: "Lead Response and Follow-Up",
      description: "When a lead comes in, time matters. We build systems that respond instantly, route to the right person, and follow up automatically until you get an answer. No leads falling through cracks. No manual reminders.",
      examples: [
        "Missed call text-back (responds in seconds, not hours)",
        "Form submissions routed to the right team member",
        "Automated follow-up sequences until they book or buy"
      ]
    },
    {
      title: "Sales and Quoting",
      description: "Getting quotes out fast wins deals. We build systems that help your team quote faster and follow up consistently without chasing spreadsheets.",
      examples: [
        "Quote templates that populate automatically",
        "Follow-up reminders until you get a yes or no",
        "Pipeline visibility so nothing gets stuck"
      ]
    },
    {
      title: "Customer Communication",
      description: "Your customers expect updates. We build systems that send the right message at the right time without anyone typing an email.",
      examples: [
        "Order status updates triggered by your systems",
        "Appointment reminders that reduce no-shows",
        "Review requests that actually get sent"
      ]
    },
    {
      title: "Reporting and Visibility",
      description: "You shouldn't have to dig through three tools to know how your business is doing. We build dashboards that show you what's working and what needs attention.",
      examples: [
        "Weekly scorecards delivered automatically",
        "Alerts when something needs your attention",
        "Data pulled from multiple sources into one view"
      ]
    }
  ];

  // Problems this solves
  const problems = [
    {
      problem: "We're dropping leads because no one follows up fast enough.",
      solution: "Automation responds in seconds and keeps following up until you get an answer. Nothing falls through."
    },
    {
      problem: "My team spends hours on repetitive tasks instead of real work.",
      solution: "Systems handle the repetitive stuff. Your team focuses on work that actually requires a human."
    },
    {
      problem: "I have no idea what's happening in my business without asking five people.",
      solution: "Dashboards pull data from everywhere and show you what matters. No digging, no asking."
    },
    {
      problem: "We're growing but our processes can't keep up.",
      solution: "Automation scales without adding headcount. More volume, same team."
    },
    {
      problem: "We know we should automate, but we keep putting it off.",
      solution: "Every week you wait costs you the same hours and frustration. Most clients see ROI in 4-8 weeks. The math usually makes the decision obvious."
    }
  ];

  // How we work steps
  const steps = [
    {
      number: "1",
      title: "Discovery",
      description: "We start by understanding what the problem is costing you - hours per week, labor costs, missed opportunities. Then we look at your workflows, find the bottlenecks, and identify what's worth automating. Not every workflow needs automation. We'll tell you what does and what doesn't - even if it costs us the project. For complex projects, we offer a paid discovery phase where we prove the approach works before you commit to the full build."
    },
    {
      number: "2",
      title: "Build",
      description: "We build the systems, test them with your team, and make sure everything works before going live. No \"hope it works\" deployments."
    },
    {
      number: "3",
      title: "Handoff",
      description: "You get documentation, training, and support. The goal is systems that run without you calling us every week."
    }
  ];

  // Results
  const results = [
    {
      company: "Modern Bungalow",
      result: "Customer emails that send themselves across 9 order scenarios"
    },
    {
      company: "Hollow Bamboo Film Productions",
      result: "Complete equipment visibility across 6 locations"
    },
    {
      company: "CR Deals Cincinnati",
      result: "Product listings that generate themselves for 3,000 items monthly"
    },
    {
      company: "Kingfisher Ads",
      result: "Monthly reporting that runs without anyone touching it"
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
                Automation
              </h1>
              <div className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8 space-y-4">
                <p>
                  How much is manual work actually costing you? Hours per week, labor on tasks that don't need a human, opportunities you can't get to because your team is stuck in the weeds.
                </p>
                <p>
                  We build systems that handle the repetitive stuff so your team can focus on what actually matters. Most clients see ROI in 4-8 weeks.
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
                What We Build
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Automation isn't about replacing your team. It's about freeing them from the manual work that eats up their week - and giving you a clear payback timeline on every project we build. Here's what that looks like in practice.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {automationBlocks.map((block, index) => (
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

      {/* How We Work Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                How We Work
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Every business is different. We don't sell a standard package. We figure out what's actually costing you time and money, then build the systems to fix it.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
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
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Timeline:</span> Most automation projects take 2-6 weeks depending on scope. ROI typically happens in 4-8 weeks. We'll give you specific timelines and payback calculations in your proposal.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                What Clients Have Achieved
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {results.map((item, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
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
                Book a free strategy call. We'll figure out what the problem is actually costing you and whether automation makes sense. If it does, you'll know exactly when you'll see your investment back. If it doesn't, we'll tell you. No pressure, no obligation.
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
