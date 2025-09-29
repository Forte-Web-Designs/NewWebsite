"use client";

import { useState } from "react";
import { Metadata } from 'next';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';

// Note: Metadata should be exported from a separate file in App Router
// export const metadata: Metadata = {
//   title: 'Growth Systems by Industry | Forte Web Designs',
//   description: 'Industry-specific growth systems tailored to your business bottlenecks. From home services to healthcare, see how Forte adapts proven systems to fit your industry.',
//   keywords: 'industry growth systems, home services automation, healthcare patient management, contractor lead systems, retail customer retention, professional services CRM',
//   openGraph: {
//     title: 'Growth Systems by Industry | Your Industry, Your Bottlenecks, Our Systems',
//     description: 'Industry-specific growth systems tailored to your business bottlenecks. Forte adapts proven systems to fit the way your business works.',
//     type: 'website',
//   },
// };

export default function IndustriesPage() {
  const [showGrowthSnapshotForm, setShowGrowthSnapshotForm] = useState(false);

  // Handle CTA clicks with tracking
  const handleCTAClick = (buttonType: string, placement: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        button_type: buttonType,
        placement: placement
      });
    }
  };

  // Industries data
  const industries = [
    {
      name: 'Plumbers',
      icon: '🔧',
      href: '/industries/plumbers',
      description: 'Smart reception + automated follow-up that turns emergency calls into booked jobs',
      features: ['24/7 Emergency Contact', 'Local SEO', 'Mobile-First Design', 'Review Integration'],
      available: true,
      clients: '8',
      avgIncrease: '67%'
    },
    {
      name: 'Restaurants',
      icon: '🍕',
      href: '/industries/restaurants',
      description: 'Mobile-first menus, online ordering, and automated reminders that keep tables full',
      features: ['Mobile-Optimized Menus', 'Local SEO & Maps', 'Online Ordering Integration', 'Review Display'],
      available: true,
      clients: '8',
      avgIncrease: '63%'
    },
    {
      name: 'Landscapers',
      icon: '🌿',
      href: '/industries/landscapers',
      description: 'Before/after galleries with booking flows and CRM integration to manage seasonal demand',
      features: ['Before/After Galleries', 'Seasonal Services', 'Local SEO', 'Mobile Booking'],
      available: true,
      clients: '12',
      avgIncrease: '54%'
    },
    {
      name: 'Handyman Services',
      icon: '🛠️',
      href: '/industries/handyman',
      description: 'Instant tap-to-call buttons, follow-up automations, and dashboards that track every request',
      features: ['Tap-to-Call Optimization', 'Local SEO & Zip Targeting', 'Before/After Galleries', 'Trust Building'],
      available: true,
      clients: '6',
      avgIncrease: '212%'
    },
    {
      name: 'Painters',
      icon: '🖌️',
      href: '/industries/painters',
      description: 'Dynamic project galleries, mobile quotes, and systems that keep leads warm until they book',
      features: ['Dynamic Project Galleries', 'Service-Specific Pages', 'Mobile Quote CTAs', 'Local SEO'],
      available: true,
      clients: '7',
      avgIncrease: '143%'
    },
    {
      name: 'Construction',
      icon: '🏗️',
      href: '/industries/construction',
      description: 'Integrated project portfolios, CRM-based bid management, and lead tracking dashboards',
      features: ['Project Portfolio Showcase', 'Mobile Quote Tools', 'Trust Indicators', 'Bid Request Forms'],
      available: true,
      clients: '10',
      avgIncrease: '160%'
    },
    {
      name: 'Healthcare',
      icon: '⚕️',
      href: '/industries/healthcare',
      description: 'Appointment booking + automated reminders that reduce no-shows and increase patient flow',
      features: ['HIPAA-Aware Setup', 'Appointment Integration', 'Provider Bios', 'Local SEO'],
      available: true,
      clients: '8',
      avgIncrease: '340%'
    },
    {
      name: 'HVAC Companies',
      icon: '🌡️',
      href: '/industries/hvac',
      description: '24/7 emergency response automations, seasonal service campaigns, and lead dashboards',
      features: ['Emergency Contact Buttons', 'Seasonal Specials', 'Online Booking', 'Local SEO'],
      available: true,
      clients: '12',
      avgIncrease: '220%'
    },
    {
      name: 'Electricians',
      icon: '⚡',
      href: '/industries/electricians',
      description: 'Fast-response call optimization + automated intake that prioritizes high-value service calls',
      features: ['Emergency Call Optimization', 'License & Insurance Display', 'Service Area Maps', 'Online Estimates'],
      available: true,
      clients: '18',
      avgIncrease: '59%'
    }
  ];

  const whyIndustrySpecific = [
    {
      icon: '🎯',
      title: 'Industry Expertise',
      description: 'We understand the workflows and lead challenges unique to your trade.'
    },
    {
      icon: '⚡',
      title: 'Faster Results',
      description: 'Proven playbooks that start generating leads immediately.'
    },
    {
      icon: '📈',
      title: 'Higher Conversions',
      description: 'Smart automations that turn inquiries into appointments.'
    },
    {
      icon: '🏆',
      title: 'Competitive Advantage',
      description: 'Systems built to outperform generic marketing agencies.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="inline-flex items-center gap-2 bg-blue-800/50 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🏭 Professional Industry Specialization
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Industries We Serve — <span className="text-blue-300">Tailored Growth Systems for Every Business</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Every industry has unique challenges. That's why we don't just build websites — we design complete growth systems. From instant lead capture to automated follow-up and CRM integration, we help you solve industry-specific problems and scale with measurable, predictable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DarkButton href="/contact" className="bg-orange-600 hover:bg-orange-700">
                  Discuss My Professional Industry Needs
                </DarkButton>
                <Link href="#industries" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Browse Industries
                  <span>↓</span>
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why <span className="text-blue-600">Industry-Specific Growth Systems</span> Work Better
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Generic websites don't solve real business problems. Your industry has specific customer behaviors, lead flow issues, and operational needs. We design systems that address those directly — giving you faster results, higher conversions, and a competitive edge.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyIndustrySpecific.map((reason, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center">
                  <div className="text-4xl mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {reason.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industries" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Industries We <span className="text-blue-600">Specialize In</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Each industry page includes proven strategies, specific features, and real case studies from businesses just like yours.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <SimpleAnimatedCard key={index}>
                <div className={`bg-white dark:bg-gray-900 rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-all duration-300 ${
                  industry.available ? 'border-l-4 border-blue-600' : 'border-l-4 border-gray-300'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{industry.icon}</div>
                    <div className="text-right">
                      {industry.available ? (
                        <div>
                          <div className="text-sm font-semibold text-blue-600">{industry.clients} Clients</div>
                          <div className="text-xs text-gray-500">Avg +{industry.avgIncrease} leads</div>
                        </div>
                      ) : (
                        <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                          {industry.clients}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {industry.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto">
                    {industry.available ? (
                      <Link 
                        href={industry.href}
                        className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                      >
                        View {industry.name} Websites
                      </Link>
                    ) : (
                      <div className="w-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-center py-3 rounded-lg font-semibold">
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industry Spotlight */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🏆 Featured Industry
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Plumber Growth Systems That Convert Emergency Calls
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  We've helped dozens of plumbing companies turn emergency calls into booked jobs. With smart reception, automated reminders, and dashboards to track every lead, our plumber clients see 2–3x more booked jobs within months.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">📱</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Mobile-first design optimized for emergency calls</div>
                      <div className="text-gray-600 dark:text-gray-400">Instant tap-to-call buttons and emergency contact forms</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">🗺️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Local SEO domination with map pack rankings</div>
                      <div className="text-gray-600 dark:text-gray-400">Rank #1 for "emergency plumber [city]" searches</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">🤖</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Smart reception + follow-up sequences to book jobs 24/7</div>
                      <div className="text-gray-600 dark:text-gray-400">Automated texts and emails that keep prospects warm</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">📊</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Lead dashboards that track calls, jobs, and ROI</div>
                      <div className="text-gray-600 dark:text-gray-400">See exactly where your best jobs come from</div>
                    </div>
                  </div>
                </div>

                <Link href="/industries/plumbers" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  See Plumber Website Details
                  <span>→</span>
                </Link>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6 text-center">Plumber Growth System Results</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">67%</div>
                      <div className="text-sm text-blue-100">More Booked Jobs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">85%</div>
                      <div className="text-sm text-blue-100">Faster Response Times</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">2-3x</div>
                      <div className="text-sm text-blue-100">Higher Conversion Rates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">24/7</div>
                      <div className="text-sm text-blue-100">Lead Capture</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating testimonial */}
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg max-w-xs">
                  <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map((star) => (
                      <span key={star} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    "Booked jobs increased 67% in 6 months. The automated follow-up system is a game-changer."
                  </p>
                  <div className="text-xs text-gray-500 mt-1">- Dallas Plumbing Pro</div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Every industry has unique challenges — and we've built systems to solve them. Book your free Growth Audit today and let's map out how we can help your business grow predictably.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DarkButton href="/contact" className="bg-orange-600 hover:bg-orange-700">
                Book My Free Growth Audit
              </DarkButton>
              <Link href="/checkup" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
