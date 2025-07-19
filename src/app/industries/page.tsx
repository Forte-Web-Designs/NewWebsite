import { Metadata } from 'next';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';

export const metadata: Metadata = {
  title: 'Industry-Specific Websites | Forte Web Designs',
  description: 'Professional websites designed for specific industries. We understand the unique challenges and requirements of your business sector.',
  keywords: 'industry websites, professional website design, sector-specific websites, business websites',
  openGraph: {
    title: 'Industry-Specific Websites | Forte Web Designs',
    description: 'Professional websites designed for specific industries. We understand the unique challenges and requirements of your business sector.',
    type: 'website',
  },
};

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Plumbers',
      icon: '🔧',
      href: '/industries/plumbers',
      description: 'Emergency-ready websites that convert mobile traffic into service calls',
      features: ['24/7 Emergency Contact', 'Local SEO', 'Mobile-First Design', 'Review Integration'],
      available: true,
      clients: '8',
      avgIncrease: '67%'
    },
    {
      name: 'Restaurants',
      icon: '🍕',
      href: '/industries/restaurants',
      description: 'Restaurant websites that fill tables and drive online orders with mobile-first design',
      features: ['Mobile-Optimized Menus', 'Local SEO & Maps', 'Online Ordering Integration', 'Review Display'],
      available: true,
      clients: '8',
      avgIncrease: '63%'
    },
    {
      name: 'Landscapers',
      icon: '🌿',
      href: '/industries/landscapers',
      description: 'Visual websites that turn visitors into local leads with stunning project galleries',
      features: ['Before/After Galleries', 'Seasonal Services', 'Local SEO', 'Mobile Booking'],
      available: true,
      clients: '12',
      avgIncrease: '54%'
    },
    {
      name: 'Construction',
      icon: '🏗️',
      href: '/industries/construction',
      description: 'Custom-coded construction websites built to win bids and build trust with project showcases',
      features: ['Project Portfolio Showcase', 'Mobile Quote Tools', 'Trust Indicators', 'Bid Request Forms'],
      available: true,
      clients: '10',
      avgIncrease: '160%'
    },
    {
      name: 'Healthcare',
      icon: '⚕️',
      href: '/industries/healthcare',
      description: 'HIPAA-aware websites that build trust, increase appointments, and comply with regulations',
      features: ['HIPAA-Aware Setup', 'Appointment Integration', 'Provider Bios', 'Local SEO'],
      available: true,
      clients: '8',
      avgIncrease: '340%'
    },
    {
      name: 'HVAC Companies',
      icon: '🌡️',
      href: '/industries/hvac',
      description: 'Mobile-first websites that bring the heat and cool new leads for heating & cooling contractors',
      features: ['Emergency Contact Buttons', 'Seasonal Specials', 'Online Booking', 'Local SEO'],
      available: true,
      clients: '12',
      avgIncrease: '220%'
    },
    {
      name: 'Electricians',
      icon: '⚡',
      href: '/industries/electricians',
      description: 'Mobile-first websites that power up lead generation and capture emergency service calls',
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
      description: 'We understand your specific business challenges, customer behavior, and industry requirements.'
    },
    {
      icon: '⚡',
      title: 'Faster Results',
      description: 'No learning curve. We know what works in your industry and implement proven strategies immediately.'
    },
    {
      icon: '📈',
      title: 'Higher Conversions',
      description: 'Industry-specific features and messaging that speak directly to your target customers.'
    },
    {
      icon: '🏆',
      title: 'Competitive Advantage',
      description: 'Stand out from generic websites with industry-tailored design and functionality.'
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
                🏭 Industry Specialization
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Websites Built for <span className="text-blue-300">Your Industry</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Generic websites don't convert. We build industry-specific websites that understand your customers, your challenges, and what drives results in your market.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <DarkButton href="/contact" className="bg-orange-600 hover:bg-orange-700">
                  Discuss My Industry Needs
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
                Why <span className="text-blue-600">Industry-Specific</span> Websites Work Better
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                We've learned that one-size-fits-all websites don't convert. Each industry has unique customer behaviors, pain points, and conversion triggers.
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
                  Plumber Websites That Convert Emergency Calls
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  We've built websites for dozens of plumbing companies and understand exactly what converts emergency calls into customers. Our plumbing clients convert 2–3x more local leads because their websites speak directly to plumbing customers.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">📱</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Mobile-First Emergency Design</div>
                      <div className="text-gray-600 dark:text-gray-400">73% of plumbing searches happen on mobile during emergencies</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">🗺️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Local SEO Domination</div>
                      <div className="text-gray-600 dark:text-gray-400">Rank #1 for "emergency plumber [city]" searches</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-600">💰</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">Trust-Building Elements</div>
                      <div className="text-gray-600 dark:text-gray-400">Transparent pricing, licensing, and customer reviews</div>
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
                  <h3 className="text-xl font-bold mb-6 text-center">Plumber Website Results</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">67%</div>
                      <div className="text-sm text-blue-100">More Emergency Calls</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">15+</div>
                      <div className="text-sm text-blue-100">Plumbing Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">2.3x</div>
                      <div className="text-sm text-blue-100">Higher Rankings</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">89%</div>
                      <div className="text-sm text-blue-100">Client Retention</div>
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
                    "Emergency calls increased 67% in 6 months. Best investment we made."
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
              Don't See Your Industry? We Can Help.
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Even if your industry isn't listed, we research your market, analyze your competition, and build websites that convert your specific customer type.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DarkButton href="/contact" className="bg-orange-600 hover:bg-orange-700">
                Discuss My Industry
              </DarkButton>
              <Link href="/checkup" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Free Industry Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
