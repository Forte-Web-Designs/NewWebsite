import { Metadata } from 'next';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import { getCompanyLogo } from '@/components/CompanyLogos';
import { InlineSVG } from '@/components/images/InlineSVG';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';
import ScrollToTop from '@/components/ScrollToTop';
import IndustryPageWrapper from '@/components/IndustryPageWrapper';

export const metadata: Metadata = {
  title: 'HVAC Websites That Bring the Heat (and Cool New Leads)',
  description: 'HVAC websites optimized for local SEO, mobile bookings, and 24/7 emergency calls. We design HVAC websites that make you the obvious choice when customers search for fast, reliable heating and cooling service.',
  keywords: 'HVAC website design, heating cooling websites, emergency HVAC mobile optimization, local HVAC SEO, HVAC lead generation',
  openGraph: {
    title: 'HVAC Websites That Bring the Heat (and Cool New Leads)',
    description: 'HVAC websites optimized for local SEO, mobile bookings, and 24/7 emergency calls. We design HVAC websites that make you the obvious choice when customers search for fast, reliable heating and cooling service.',
    type: 'website',
  },
};

export default function HVACPage() {
  return (
    <IndustryPageWrapper industry="hvac" businessType="hvac">
      <HVACContent />
    </IndustryPageWrapper>
  );
}

function HVACContent() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "High Desert Comfort Solutions", location: "Albuquerque" },
    { name: "All Season Climate Control", location: "Dallas" },
    { name: "Elite HVAC Systems", location: "Houston" },
    { name: "Emergency Comfort Pros", location: "Austin" },
    { name: "Premier Heating & Cooling", location: "Fort Worth" }
  ];

  // Comparison data
  const comparisonFeatures = [
    {
      feature: "Mobile-first HVAC design",
      typical: false,
      forte: true
    },
    {
      feature: "SEO-optimized",
      typical: false,
      forte: true
    },
    {
      feature: "Emergency CTA integration",
      typical: false,
      forte: true
    },
    {
      feature: "Ongoing edits & support",
      typical: false,
      forte: true
    },
    {
      feature: "Seasonal promo setup",
      typical: false,
      forte: true
    },
    {
      feature: "Local search strategy included",
      typical: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How fast can you launch our HVAC website?",
      answer: "Usually within 2–3 weeks depending on complexity. We prioritize emergency contact buttons and seasonal service pages first so your site starts converting calls immediately."
    },
    {
      question: "Can we show seasonal offers or emergency rates?",
      answer: "Yes, we include editable promo areas and emergency service CTAs. Perfect for AC tune-ups in spring and heating checks in fall."
    },
    {
      question: "Do you handle HVAC-specific SEO?",
      answer: "Absolutely. We include Local SEO, Google Business optimization, and keyword targeting specific to your area and services like 'emergency HVAC [city]' keywords."
    },
    {
      question: "Will it be mobile-optimized?",
      answer: "Yes—73% of HVAC customers search on mobile. Your site will be built for fast loading, easy calling, and instant booking from their phone."
    }
  ];

  const hvacChallenges = [
    {
      icon: "⏱️",
      title: "Emergency Response Urgency", 
      problem: "Customers are in a hurry when their heating or cooling fails",
      solution: "Instant emergency contact buttons and mobile-optimized calling"
    },
    {
      icon: "📱",
      title: "Mobile Search Dominance",
      problem: "73% of HVAC searches happen on phones during emergencies", 
      solution: "Mobile-first design with 1-click booking and calling"
    },
    {
      icon: "🌍",
      title: "Local Competition Saturation",
      problem: "Customers compare multiple HVAC companies in local search",
      solution: "Google Maps domination with Local SEO optimization"
    },
    {
      icon: "💎",
      title: "Trust & Credibility Building",
      problem: "Need instant trust signals for high-value HVAC investments",
      solution: "Real reviews, transparent pricing, and licensing information"
    }
  ];

  const hvacFeatures = [
    {
      icon: "🚒",
      title: "Emergency Contact Buttons",
      description: "Sticky mobile buttons to call now, book online, or text instantly"
    },
    {
      icon: "🏠", 
      title: "Service Area Map",
      description: "Shows coverage zone, estimated response times, and local badges"
    },
    {
      icon: "🔹",
      title: "Seasonal Specials Section",
      description: "Editable banners for AC tune-ups, heating checks, etc."
    },
    {
      icon: "🌜",
      title: "Google Reviews Integration", 
      description: "Pulls your latest Google reviews directly onto your homepage"
    },
    {
      icon: "💲",
      title: "Transparent Pricing Table",
      description: "Popular services with starting rates to set expectations"
    },
    {
      icon: "📅",
      title: "Online Booking Widget",
      description: "Let customers schedule appointments 24/7 from their phone"
    }
  ];

  const successMetrics = [
    {
      metric: "3.2x",
      description: "More HVAC leads",
      icon: "⬆️"
    },
    {
      metric: "40%",
      description: "Faster call response",
      icon: "⏳"
    },
    {
      metric: "2x",
      description: "Higher mobile conversion",
      icon: "📊"
    },
    {
      metric: "#1",
      description: "Emergency HVAC rankings",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-red-600 to-blue-700 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-600/50 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🌡️ Industry Expertise: HVAC Companies
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  HVAC Websites That <span className="text-blue-300">Bring the Heat</span> (and <span className="text-red-300">Cool New Leads</span>)
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Your customers search for fast, reliable HVAC service when they need it most. We design HVAC websites that make you the obvious choice—optimized for local SEO, mobile bookings, and 24/7 emergency calls.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <button 
                    data-open-modal
                    className="bg-white text-blue-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg border-2 border-white"
                  >
                    Get My HVAC Website Quote
                  </button>
                  <button 
                    data-open-modal
                    className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-center"
                  >
                    Schedule Free Consultation
                  </button>
                </div>

                <div className="mb-8">
                  <p className="text-blue-200 mb-4 font-semibold">Includes:</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✔️</span>
                      <span className="text-blue-100">Mobile-First Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✔️</span>
                      <span className="text-blue-100">Local SEO Optimized</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✔️</span>
                      <span className="text-blue-100">Emergency Call Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-8 shadow-2xl border-2 border-blue-100">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl text-white">
                    <span className="text-3xl">🌡️</span>
                    <div>
                      <h3 className="text-white text-xl font-bold">ELITE CLIMATE SOLUTIONS</h3>
                      <p className="text-blue-100 text-sm font-semibold">❄️ Heating & Cooling Experts 🔥</p>
                    </div>
                  </div>
                  
                  {/* Services */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        ❄️ AC Repair
                      </span>
                      <span className="font-bold text-blue-600">$129+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        🔥 Heating Repair
                      </span>
                      <span className="font-bold text-red-600">$139+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        🔧 System Install
                      </span>
                      <span className="font-bold text-green-600">$4,500+</span>
                    </div>
                  </div>

                  {/* Emergency Call Button */}
                  <div className="bg-gradient-to-r from-red-500 to-blue-500 text-white text-center py-4 rounded-xl mb-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">🌡️</span>
                      <div>
                        <div className="font-bold text-lg">24/7 Emergency Service</div>
                        <div className="text-blue-100 text-sm">Call (555) CLIMATE-1</div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews section */}
                  <div className="text-center bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="text-gray-700 font-semibold">4.9/5 Stars</div>
                    <div className="text-gray-600 text-sm">(127 Google Reviews)</div>
                    <div className="text-blue-600 text-sm font-medium mt-1">🌡️ Licensed HVAC Professionals</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  🔥 Heating Ready
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ❄️ Cooling Ready
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                We Understand HVAC Business Challenges
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Every HVAC business faces unique challenges from seasonal demand to emergency service calls. We've built websites for HVAC companies for years and know exactly what works.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hvacChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all h-full">
                  <div className="text-4xl mb-4 text-center">{challenge.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                    {challenge.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                        Problem: {challenge.problem}
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                        Solution: {challenge.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* New Mexico Case Study Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                🏤 New Mexico HVAC Pro Boosts Lead Flow by 3.2x
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how we helped High Desert Comfort Solutions dominate Albuquerque HVAC services with a mobile-first website that converts.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-4xl mx-auto">
            <SimpleAnimatedCard>
              <div className="bg-gradient-to-br from-blue-50 to-red-50 dark:from-blue-900/20 dark:to-red-900/20 rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">🌡️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">High Desert Comfort Solutions</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">Albuquerque, New Mexico • Licensed HVAC Contractor</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Success Story:</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Redesigned mobile-first HVAC website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Local SEO targeting Albuquerque and surrounding suburbs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      <span>Added clear service pricing and seasonal promotions</span>
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">220%</div>
                    <div className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                      <span>📌</span>
                      <span>Increase in Mobile Calls</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">#1</div>
                    <div className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                      <span>🌡️</span>
                      <span>Ranked for "AC repair Albuquerque"</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$12K</div>
                    <div className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                      <span>📊</span>
                      <span>Monthly Revenue Increase (Peak Summer)</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link 
                    href="/case-studies"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-red-700 transition-colors"
                  >
                    View Full Case Study →
                  </Link>
                </div>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Why HVAC Pros Choose Forte Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why HVAC Pros Choose Forte (And Why You Should Too)
              </h2>
              <div className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-300 space-y-4">
                <p>Most web design companies serve everyone. We specialize. We know HVAC customers are:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                    <div className="text-3xl mb-3">⏱️</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">In a hurry</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Need immediate HVAC service</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                    <div className="text-3xl mb-3">📱</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">On their phone</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">73% search on mobile</p>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-6">
                    <div className="text-3xl mb-3">🔍</div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Comparing multiple companies</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Shopping for best service</p>
                  </div>
                </div>
                <p>That means your site needs to load fast, show instant trust signals, and be easy to call or book—on the spot.</p>
              </div>
            </div>
          </SimpleScrollReveal>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                We build HVAC websites that:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⏱️</span>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Capture emergency calls instantly</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">24/7 contact buttons and emergency messaging</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🌍</span>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Dominate Google Maps with Local SEO</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Service area optimization and local rankings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💎</span>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Build trust with real reviews, transparent pricing, and licensing info</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Credibility elements that convert visitors</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Convert mobile users with 1-click booking/calling</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Mobile-first design that gets results</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HVAC Website Essentials Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                HVAC Website Essentials <span className="text-blue-600">(Built Into Every Project)</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Every HVAC website includes these conversion-focused features designed specifically for heating and cooling contractors.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hvacFeatures.map((feature, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center h-full flex flex-col">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">
                    {feature.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Forte vs. Typical HVAC Websites
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                See why HVAC companies choose Forte for their online presence.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <SimpleScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-6 bg-gray-100 dark:bg-gray-700">
                  <div className="font-semibold text-gray-900 dark:text-white">Feature</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-center">Typical HVAC Sites</div>
                  <div className="font-semibold text-blue-600 dark:text-blue-400 text-center">Forte HVAC Sites</div>
                </div>
                
                {comparisonFeatures.map((item, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 p-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-gray-900 dark:text-white font-medium">{item.feature}</div>
                    <div className="text-center flex justify-center">
                      {item.typical ? (
                        <InlineSVG name="check" className="h-5 w-5 text-green-500" />
                      ) : (
                        <InlineSVG name="x" className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div className="text-center flex justify-center">
                      {item.forte ? (
                        <InlineSVG name="check" className="h-5 w-5 text-green-500" />
                      ) : (
                        <InlineSVG name="x" className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-red-50 dark:from-blue-900/20 dark:to-red-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Real HVAC Website Success Story
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                See how one HVAC company transformed their business with a Forte website.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal delay={0.2}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Case Study
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Premier Climate Solutions
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">Fort Worth, TX • HVAC Company</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">The Challenge</h4>
                        <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                          <li>• Seasonal revenue fluctuations hurting cash flow</li>
                          <li>• Missing emergency calls due to poor mobile experience</li>
                          <li>• Competing with 45+ local HVAC companies</li>
                          <li>• No online booking for maintenance services</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Our Solution</h4>
                        <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                          <li>• Mobile-first design with prominent emergency contact</li>
                          <li>• Seasonal service pages that adapt to weather</li>
                          <li>• Local SEO optimization for "HVAC repair near me"</li>
                          <li>• Online maintenance scheduling system</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-8 lg:p-12 h-full">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-6">The Results (6 Months)</h4>
                      
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">165%</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Emergency Call Increase</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">89%</div>
                          <div className="text-sm text-green-700 dark:text-green-300">More Maintenance Bookings</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">220%</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Website Traffic</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">#1</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Local Search Ranking</div>
                        </div>
                      </div>
                      
                      <blockquote className="text-green-700 dark:text-green-300 italic text-sm">
                        "Our new website completely transformed our business. We went from struggling with seasonal dips to staying busy year-round. Emergency calls tripled and we're booked solid for maintenance."
                      </blockquote>
                      <cite className="text-green-600 dark:text-green-400 text-xs block mt-2">
                        — Mike Rodriguez, Owner
                      </cite>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted by HVAC Companies Across Texas
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Join the growing list of HVAC contractors that trust Forte with their digital presence.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <SimpleScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {clientCompanies.map((company, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-3">
                    <div className="flex justify-center mb-3">
                      {getCompanyLogo(company.name, 'hvac', "w-12 h-12")}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                      {company.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Forte Care™ Promotional Snippet */}
      <SimpleScrollReveal direction="up" delay={800}>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Like Regular Filter Changes and Tune-Ups
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You tell customers that regular HVAC maintenance prevents costly breakdowns, right? Your website needs the same ongoing care. Forte Care™ handles the digital "filter changes" – security updates, performance optimization, and fresh content – keeping your online presence running efficiently and attracting emergency calls year-round.
              </p>
              <Link
                href="/solutions/care"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <span>Keep Your Website Running Smooth</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      </SimpleScrollReveal>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                HVAC Website Questions & Answers
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Everything you need to know about HVAC website development.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <SimpleScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                </div>
              </SimpleScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Turn Up the Heat
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              If you're ready to stop relying on outdated sites and generic web companies, you're in the right place. Let Forte build your HVAC site the right way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                data-open-modal
                className="bg-white text-blue-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Get My HVAC Website
              </button>
              <Link 
                href="tel:8178736655"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-lg"
              >
                Call (817) 873-6655
              </Link>
            </div>
            
            <div className="mt-8 space-y-2">
              <div className="flex items-center justify-center gap-6 text-blue-200">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span>
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span>
                  <span>Mobile-Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400">✔️</span>
                  <span>Local SEO Included</span>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
