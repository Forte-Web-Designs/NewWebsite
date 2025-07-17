import { Metadata } from 'next';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';

export const metadata: Metadata = {
  title: 'Plumber Website Design | Mobile-Ready Sites That Book More Jobs',
  description: 'Custom-built websites for plumbers. Mobile-ready, SEO-optimized, and designed for emergency call conversions. Convert late-night searches into paying customers.',
  keywords: 'plumber website design, plumbing websites, emergency plumber websites, local plumber SEO, plumbing lead generation',
  openGraph: {
    title: 'Plumber Website Design | Mobile-Ready Sites That Book More Jobs',
    description: 'Custom-built websites for plumbers. Mobile-ready, SEO-optimized, and designed for emergency call conversions. Convert late-night searches into paying customers.',
    type: 'website',
  },
};

export default function PlumbersPage() {
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
                  Websites That Help Plumbers <span className="text-blue-300">Book More Emergency Jobs</span>
                </h1>
                <h2 className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Mobile‑first, call‑ready websites designed to turn late‑night Google searches into paying plumbing customers.
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <DarkButton href="/contact?industry=plumbing" className="bg-orange-600 hover:bg-orange-700">
                    Start My Plumber Website – $200/mo
                  </DarkButton>
                  <LightButton href="/checkup?industry=plumbing">
                    Get Free Plumbing Site Audit
                  </LightButton>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✔</span>
                    Mobile‑Optimized
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✔</span>
                    Local SEO Built‑In
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✔</span>
                    30‑Day Guarantee
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-gray-800 text-xl font-bold mb-4 text-center">Sample Plumber Website</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Left Column - Services & Pricing */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 text-sm">Emergency Services</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Drain Cleaning</span>
                          <span className="font-semibold text-gray-800">$89+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Water Heater Repair</span>
                          <span className="font-semibold text-gray-800">$150+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Pipe Leak Fix</span>
                          <span className="font-semibold text-gray-800">$120+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Toilet Repair</span>
                          <span className="font-semibold text-gray-800">$95+</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Badge Block */}
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-600 mb-2">📍 Serving Dallas Metro</div>
                      <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold text-lg mb-3">
                        CALL NOW: (214) 555-0123
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                        <span className="text-gray-600 text-sm ml-2">(247 reviews)</span>
                      </div>
                      <div className="text-xs text-gray-500">⏰ 30min Response Time</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Licensed & Insured
                </div>
                <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  30min Response
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Plumbers Choose Forte Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Plumbers Choose <span className="text-blue-600">Forte</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We've built websites for 15+ plumbing companies and understand exactly what drives emergency calls and builds customer trust in the plumbing industry.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {plumberChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-full shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4 text-center">{challenge.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                    {challenge.title}
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-red-500">⚠️</span>
                        <div className="text-sm font-medium text-red-700 dark:text-red-400">The Problem:</div>
                      </div>
                      <div className="text-sm text-red-600 dark:text-red-300">{challenge.problem}</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-500">✅</span>
                        <div className="text-sm font-medium text-green-700 dark:text-green-400">Our Solution:</div>
                      </div>
                      <div className="text-sm text-green-600 dark:text-green-300">{challenge.solution}</div>
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-500/30 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                📊 Real Results from Plumbing Clients
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Proven Results for Plumbing Companies</h3>
              <p className="text-blue-100">Real metrics from our plumbing clients in the first 6 months</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center bg-blue-500/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-4xl mb-3">{metric.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-white">{metric.metric}</div>
                  <div className="text-sm text-blue-100">{metric.description}</div>
                </div>
              ))}
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
                Everything Your Plumbing Website Needs to <span className="text-blue-600">Convert Emergency Calls</span>
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
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Read Full Case Study
                    <span>→</span>
                  </Link>
                  <Link href="/contact?industry=plumbing" className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all">
                    Get Similar Results
                  </Link>
                </div>
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
                    <div className="text-3xl font-bold text-green-600 mb-1">$50K</div>
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stop Losing Emergency Calls to Competitors
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              While your competitors struggle with outdated websites, you could be booking 2-3x more emergency plumbing jobs with a mobile-first website designed for conversions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <DarkButton href="/contact?industry=plumbing" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
                Start My Plumber Website - $200/mo
              </DarkButton>
              <LightButton href="/checkup?industry=plumbing" className="text-lg px-8 py-4">
                Get Free Plumbing Website Audit
              </LightButton>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-sm">
              <div className="flex items-center gap-2 justify-center bg-blue-800/30 rounded-lg p-3">
                <span className="text-green-400">✓</span>
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-2 justify-center bg-blue-800/30 rounded-lg p-3">
                <span className="text-green-400">✓</span>
                <span>Mobile-Emergency Optimized</span>
              </div>
              <div className="flex items-center gap-2 justify-center bg-blue-800/30 rounded-lg p-3">
                <span className="text-green-400">✓</span>
                <span>Local SEO Domination</span>
              </div>
              <div className="flex items-center gap-2 justify-center bg-blue-800/30 rounded-lg p-3">
                <span className="text-green-400">✓</span>
                <span>Same-Day Response</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-800/40 rounded-xl max-w-2xl mx-auto">
              <p className="text-blue-100 text-sm">
                <strong>📞 Ready to talk?</strong> Call <span className="text-white font-semibold">(817) 873-6655</span> or book your free consultation below.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
