'use client';

import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

export default function WebDesignClient() {
  // What we build blocks
  const designBlocks = [
    {
      title: "Custom Design",
      description: "Your brand isn't generic. Your website shouldn't be either. We design from scratch based on your business, your audience, and what you're trying to accomplish.",
      examples: [
        "Design that matches your brand identity",
        "Layout built around your specific goals",
        "No template limitations or \"that feature costs extra\""
      ]
    },
    {
      title: "Performance",
      description: "Slow sites lose visitors. We build sites that load fast because the code is clean and optimized, not bloated with plugins and page builder overhead.",
      examples: [
        "90+ PageSpeed scores",
        "Fast load times on mobile and desktop",
        "No unnecessary code slowing things down"
      ]
    },
    {
      title: "SEO Foundation",
      description: "A beautiful site that nobody finds is useless. We build with SEO fundamentals baked in from the start, not bolted on after.",
      examples: [
        "Clean URL structure and semantic HTML",
        "Meta tags, schema markup, and proper headings",
        "Mobile-responsive design (Google's ranking factor)"
      ]
    },
    {
      title: "Lead Capture",
      description: "Your website should generate leads, not just look good. We build with conversion in mind, making it easy for visitors to take the next step.",
      examples: [
        "Clear calls to action throughout",
        "Contact forms that actually work",
        "Analytics and tracking so you know what's working"
      ]
    }
  ];

  // Problems this solves
  const problems = [
    {
      problem: "Our website looks outdated and we're embarrassed to send people there.",
      solution: "A modern, professional site that you're proud to share. Design that reflects where your business is today, not where it was five years ago."
    },
    {
      problem: "Our site loads slowly and people leave before it finishes.",
      solution: "Hand-coded sites without the bloat. Fast load times that keep visitors engaged."
    },
    {
      problem: "We're not showing up in Google searches.",
      solution: "SEO fundamentals built in from the start. Clean code, proper structure, and the technical foundation you need to rank."
    },
    {
      problem: "We get traffic but nobody contacts us.",
      solution: "Design focused on conversion. Clear paths to contact, prominent calls to action, and forms that actually work."
    },
    {
      problem: "We used a template but it doesn't fit our business.",
      solution: "Custom design built for your specific needs. No forcing your content into someone else's layout."
    },
    {
      problem: "We know we need a new site but it keeps getting pushed down the priority list.",
      solution: "Every month with a site that doesn't convert is leads you're not getting. Every slow page load is a visitor who left before they saw what you offer. The longer you wait, the more first impressions you're losing."
    }
  ];

  // How we work steps
  const steps = [
    {
      number: "1",
      title: "Discovery",
      description: "We start by understanding what you want the website to actually do - generate leads, establish credibility, convert visitors. Then we learn about your business, your audience, and what success looks like. Goals first, design second."
    },
    {
      number: "2",
      title: "Design",
      description: "We create mockups based on your brand and goals. You see exactly what you're getting before we write any code."
    },
    {
      number: "3",
      title: "Build",
      description: "Hand-coded development. Clean, fast, optimized. We build it right the first time."
    },
    {
      number: "4",
      title: "Launch and Train",
      description: "We launch, train you on updates, and make sure everything works. You're not dependent on us for simple changes."
    }
  ];

  // What's included
  const included = [
    {
      title: "Custom Design",
      description: "Original design created for your business. Not a template with your logo swapped in."
    },
    {
      title: "Clean Code",
      description: "Hand-coded HTML, CSS, and JavaScript. No page builder bloat. Fast and maintainable."
    },
    {
      title: "Mobile Responsive",
      description: "Looks and works great on phones, tablets, and desktops. Not an afterthought."
    },
    {
      title: "SEO Foundation",
      description: "Technical SEO built in. Meta tags, schema, clean URLs, proper headings."
    },
    {
      title: "Analytics Setup",
      description: "Google Analytics configured so you can see what's working."
    },
    {
      title: "Training",
      description: "We show you how to make basic updates yourself. You're not stuck calling us for every small change."
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
                Web Design & Digital Presence
              </h1>
              <div className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto mb-8 space-y-4">
                <p>
                  Your website is working for you or against you. Every slow load, every outdated page, every visitor who can't figure out how to contact you - that's a deal you might have closed.
                </p>
                <p>
                  Hand-coded websites built to convert. Fast, SEO-optimized, and designed to showcase your brand. Not templates. Not page builders. Real code that performs.
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
              <div className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto space-y-4">
                <p>
                  Your website is often the first impression - and you don't get a second one. A slow, outdated, or confusing site costs you credibility before you ever get a chance to make your pitch.
                </p>
                <p>
                  We build sites that load fast, rank well, and turn visitors into customers. No templates. No drag-and-drop builders. Hand-coded for performance.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {designBlocks.map((block, index) => (
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

      {/* How We Work Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
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
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Timeline:</span> Most websites take 2-4 weeks from kickoff to launch. We'll give you a specific timeline and clear deliverables in your proposal - no surprises.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SimpleScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                What's Included
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item, index) => (
              <SimpleScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm pl-8">
                    {item.description}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
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
              <div className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto space-y-4">
                <p>
                  If your website isn't working for your business - if it's slow, outdated, or not converting visitors into leads - let's figure out what it's costing you.
                </p>
                <p>
                  We'll look at your current site, identify what's working and what's not, and show you what a custom build could do for your credibility and conversion. If it makes sense, you'll have a clear path forward. If your current site just needs tweaks, we'll tell you that too.
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
    </div>
  );
}
