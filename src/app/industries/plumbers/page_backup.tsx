import { Metadata } from 'next';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';

export const metadata: Metadata = {
  title: 'Plumber Website Design & Development | Emergency Call Ready',
  description: 'Plumbers emergencies happen. Your clients need a reliable website to get in touch with you quickly. We build plumber websites that capture emergency calls, build trust instantly, and dominate local search results.',
  keywords: 'plumber website design, plumbing websites, emergency plumber websites, local plumber SEO, plumbing lead generation',
  openGraph: {
    title: 'Plumber Website Design & Development | Emergency Call Ready',
    description: 'Plumbers emergencies happen. Your clients need a reliable website to get in touch with you quickly. We build plumber websites that capture emergency calls, build trust instantly, and dominate local search results.',
    type: 'website',
  },
};

export default function PlumbersPage() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Dallas Elite Plumbing", location: "" },
    { name: "Rapid Response Plumbers", location: "" },
    { name: "Metro Drain Solutions", location: "" },
    { name: "Emergency Pipe Pros", location: "" },
    { name: "All Hours Plumbing Co", location: "" }
  ];

  // Comparison data
  const comparisonFeatures = [
    {
      feature: "Mobile-first for plumbers",
      typical: false,
      forte: true
    },
    {
      feature: "SEO built-in",
      typical: false,
      forte: true
    },
    {
      feature: "Emergency CTA optimization",
      typical: false,
      forte: true
    },
    {
      feature: "Ongoing edits included",
      typical: false,
      forte: true
    },
    {
      feature: "24/7 emergency setup",
      typical: false,
      forte: true
    },
    {
      feature: "Local search domination",
      typical: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can you get my plumber website live?",
      answer: "Most plumber websites are live within 7-10 business days. We prioritize emergency-ready features first, so your site starts converting calls immediately."
    },
    {
      question: "Do you understand the plumbing industry?",
      answer: "Absolutely. We've built websites for 15+ plumbing companies and understand emergency call patterns, local SEO for plumbers, and what builds trust with homeowners in crisis."
    },
    {
      question: "What makes your plumber websites different?",
      answer: "We focus on mobile-first emergency call conversion. While other designers build pretty websites, we build websites that book more plumbing jobs and dominate local search."
    },
    {
      question: "Do you handle ongoing updates and maintenance?",
      answer: "Yes! All plumber websites include ongoing updates, security monitoring, and content changes. No additional fees for adding new services or updating pricing."
    }
  ];

  const plumberChallenges = [
    {
      icon: "📱",
      title: "Emergency Calls on Mobile",
      problem: "73% of plumbing searches happen on mobile during emergencies",
      solution: "Mobile-first design with one-tap calling"
    },
    {
      icon: "⏰",
      title: "24/7 Availability",
      problem: "Customers need immediate response, day or night",
      solution: "Clear emergency contact info and online scheduling"
    },
    {
      icon: "🗺️",
      title: "Local Competition",
      problem: "Competing with 50+ local plumbers in search results",
      solution: "Local SEO optimization and Google Business prominence"
    },
    {
      icon: "💰",
      title: "Trust & Pricing",
      problem: "Customers worry about scams and surprise costs",
      solution: "Transparent pricing, licensing info, and reviews"
    }
  ];

  const plumberFeatures = [
    {
      icon: "🚨",
      title: "Emergency Call Button",
      description: "Prominent emergency contact that works on all devices"
    },
    {
      icon: "📍",
      title: "Service Area Map",
      description: "Clear coverage area with response time estimates"
    },
    {
      icon: "⭐",
      title: "Review Integration",
      description: "Google reviews prominently displayed for trust"
    },
    {
      icon: "💵",
      title: "Transparent Pricing",
      description: "Clear service pricing without surprises"
    },
    {
      icon: "🛠️",
      title: "Service Showcase",
      description: "Before/after photos and service descriptions"
    },
    {
      icon: "📅",
      title: "Online Booking",
      description: "Schedule non-emergency appointments 24/7"
    }
  ];

  const successMetrics = [
    {
      metric: "43%",
      description: "Average increase in emergency calls",
      icon: "📞"
    },
    {
      metric: "67%",
      description: "More qualified leads from mobile",
      icon: "📱"
    },
    {
      metric: "2.3x",
      description: "Higher local search rankings",
      icon: "🎯"
    },
    {
      metric: "89%",
      description: "Client retention rate",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-800/50 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🔧 Industry Expertise: Plumbing
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Plumber Websites That Convert <span className="text-blue-300">Emergency Calls Into Customers</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Plumbing emergencies happen. Your clients need a reliable website to get in touch with you quickly. We build plumber websites that capture emergency calls, build trust instantly, and dominate local search results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <DarkButton href="/contact?industry=plumbing" className="bg-orange-600 hover:bg-orange-700">
                    Get My Plumber Website Quote
                    <Icon name="rightarrow" alt="right arrow icon" className="w-2 h-3 ml-2" />
                  </DarkButton>
                  <LightButton href="/checkup?industry=plumbing">
                    Free Plumbing Website Audit
                    <Icon name="rightarrow" alt="right arrow icon" className="w-2 h-3 ml-2" />
                  </LightButton>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Mobile-First Design
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Local SEO Optimized
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Emergency Call Ready
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border-2 border-blue-100">
                  {/* Header with animated pulse */}
                  <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl text-white">
                    <span className="text-3xl animate-pulse">🚨</span>
                    <div>
                      <h3 className="text-white text-xl font-bold">EMERGENCY PLUMBING</h3>
                      <p className="text-red-100 text-sm font-semibold">⚡ 24/7 Same-Day Service ⚡</p>
                    </div>
                  </div>
                  
                  {/* Services with enhanced styling */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        🚰 <span>Drain Cleaning</span>
                      </span>
                      <span className="font-bold text-blue-600 text-lg">$89+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        🔥 <span>Water Heater Repair</span>
                      </span>
                      <span className="font-bold text-orange-600 text-lg">$150+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        🆘 <span>Emergency Service</span>
                      </span>
                      <span className="font-bold text-red-600 text-lg animate-pulse">CALL NOW!</span>
                    </div>
                  </div>

                  {/* Enhanced call button */}
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-4 rounded-xl mb-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl animate-bounce">📞</span>
                      <div>
                        <div className="font-bold text-lg">Call (555) 123-PLUMBER</div>
                        <div className="text-green-100 text-sm">Click to Call Now!</div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced reviews section */}
                  <div className="text-center bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="text-gray-700 font-semibold">4.9/5 Stars</div>
                    <div className="text-gray-600 text-sm">(247 Google Reviews)</div>
                    <div className="text-blue-600 text-sm font-medium mt-1">💯 Licensed & Insured</div>
                  </div>
                </div>
                
                {/* Enhanced floating elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  ✅ Licensed & Insured
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⚡ 15min Response
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Client Logo Bar */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6">
              Trusted by Local Plumbing Companies:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
              {clientCompanies.map((company, index) => (
                <div key={index} className="text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  <div className="text-2xl mb-2">🔧</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {company.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {company.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why We're Plumbing Website Experts Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why We're <span className="text-blue-600">Plumbing Website Experts</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We've built websites for 15+ plumbing companies and understand exactly what drives emergency calls and builds customer trust in the plumbing industry.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {plumberChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                  <div className="text-3xl mb-4">{challenge.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {challenge.title}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-red-600 mb-1">The Problem:</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{challenge.problem}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-green-600 mb-1">Our Solution:</div>
                      <div className="text-sm text-gray-700 dark:text-gray-300">{challenge.solution}</div>
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Proven Results for Plumbing Companies</h3>
              <p className="text-blue-100">Real metrics from our plumbing clients in the first 6 months</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-3xl font-bold mb-1">{metric.metric}</div>
                  <div className="text-sm text-blue-100">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Forte vs Other Designers Comparison */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Forte vs. <span className="text-blue-600">Other Web Designers</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Most web designers build pretty websites. We build websites that book more plumbing jobs.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 gap-0">
                {/* Header */}
                <div className="p-4 bg-gray-100 dark:bg-gray-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Feature</h3>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-center">Typical Designer</h3>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-center">Forte</h3>
                </div>

                {/* Feature Rows */}
                {comparisonFeatures.map((item, index) => (
                  <SimpleAnimatedCard key={index} className="contents">
                    <div className="p-4 border-t border-gray-200 dark:border-gray-600">
                      <span className="text-gray-700 dark:text-gray-300">{item.feature}</span>
                    </div>
                    <div className="p-4 border-t border-gray-200 dark:border-gray-600 text-center">
                      <span className="text-2xl">{item.typical ? '✅' : '❌'}</span>
                    </div>
                    <div className="p-4 border-t border-gray-200 dark:border-gray-600 text-center">
                      <span className="text-2xl">{item.forte ? '✅' : '❌'}</span>
                    </div>
                  </SimpleAnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plumber-Specific Features */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Essential Features for <span className="text-blue-600">Plumber Websites</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Every plumbing website we build includes these conversion-focused features designed specifically for the plumbing industry.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plumberFeatures.map((feature, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  📈 Success Story
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Dallas Plumber Increases Emergency Calls by 67%
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Mobile-First Redesign</div>
                      <div className="text-gray-600 dark:text-gray-400">Optimized for emergency calls on mobile devices</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Local SEO Domination</div>
                      <div className="text-gray-600 dark:text-gray-400">Ranked #1 for "emergency plumber Dallas"</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-lg mt-1">✓</span>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Trust Building Elements</div>
                      <div className="text-gray-600 dark:text-gray-400">Clear pricing, reviews, and licensing information</div>
                    </div>
                  </div>
                </div>
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                  Read Full Case Study
                  <span>→</span>
                </Link>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">67%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">More Emergency Calls</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">$8K</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Additional Monthly Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">2.1x</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Higher Conversion Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-1">30%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Faster Response Time</div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked <span className="text-blue-600">Questions</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Common questions from plumbing companies about our website services.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <SimpleAnimatedCard key={index}>
                <details className="group bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Dominate Local Plumbing Search?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 15+ plumbing companies who've increased their emergency calls and revenue with our proven plumber website formula.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <DarkButton href="/contact?industry=plumbing" className="bg-orange-600 hover:bg-orange-700">
                Start My Plumber Website
                <Icon name="rightarrow" alt="right arrow icon" className="w-2 h-3 ml-2" />
              </DarkButton>
              <LightButton href="/checkup?industry=plumbing">
                Get Free Plumbing Website Audit
                <Icon name="rightarrow" alt="right arrow icon" className="w-2 h-3 ml-2" />
              </LightButton>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-green-400">✓</span>
                100% Satisfaction Guarantee
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-green-400">✓</span>
                Mobile-Optimized Design
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-green-400">✓</span>
                Local SEO Included
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Mobile Call Button */}
      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <a
          href="tel:555-123-PLUMBER"
          className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl shadow-2xl font-bold text-lg transition-all duration-200 w-full"
        >
          <span className="text-2xl">📞</span>
          Call (555) 123-PLUMBER
        </a>
      </div>

      {/* Live Chat Widget */}
      <div className="fixed bottom-4 right-4 z-40 hidden md:block">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg font-semibold transition-all duration-200 flex items-center gap-2">
          <span className="text-lg">💬</span>
          Let's Chat
        </button>
      </div>

      {/* Exit Intent Modal Placeholder */}
      <div id="exit-intent-modal" className="hidden fixed inset-0 bg-black bg-opacity-50 z-50 items-center justify-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md mx-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Wait! Is Your Site Converting Enough Calls?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Get a free audit in 30 seconds and discover what's costing you emergency calls.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <DarkButton href="/checkup?industry=plumbing" className="bg-blue-600 hover:bg-blue-700">
              Get Free Audit
            </DarkButton>
            <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              No thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
