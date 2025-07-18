import { Metadata } from 'next';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import { InlineSVG } from '@/components/images/InlineSVG';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'HVAC Website Design & Development | Climate Ready',
  description: 'HVAC emergencies happen year-round. Your customers need a reliable website to reach you when their heating or cooling fails. We build HVAC websites that capture emergency calls, showcase seasonal services, and dominate local search.',
  keywords: 'HVAC website design, heating cooling websites, emergency HVAC websites, local HVAC SEO, HVAC lead generation',
  openGraph: {
    title: 'HVAC Website Design & Development | Climate Ready',
    description: 'HVAC emergencies happen year-round. Your customers need a reliable website to reach you when their heating or cooling fails. We build HVAC websites that capture emergency calls, showcase seasonal services, and dominate local search.',
    type: 'website',
  },
};

export default function HVACPage() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Elite Climate Solutions" },
    { name: "All Season HVAC Pro" },
    { name: "Metro Air Specialists" },
    { name: "Emergency Comfort Systems" },
    { name: "Premier Heating & Cooling" }
  ];

  // Comparison data
  const comparisonFeatures = [
    {
      feature: "Mobile-first for HVAC",
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
      feature: "Seasonal campaign setup",
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
      question: "How quickly can you get my HVAC website live?",
      answer: "Most HVAC websites are live within 7-10 business days. We prioritize emergency-ready features and seasonal service pages first, so your site starts converting calls immediately."
    },
    {
      question: "Do you understand the HVAC industry?",
      answer: "Absolutely. We've built websites for 12+ HVAC companies and understand seasonal demand cycles, emergency call patterns, and what builds trust with homeowners facing climate emergencies."
    },
    {
      question: "What makes your HVAC websites different?",
      answer: "We focus on seasonal optimization and emergency call conversion. While other designers build static websites, we build websites that adapt to heating/cooling seasons and dominate local search."
    },
    {
      question: "Do you handle ongoing updates and maintenance?",
      answer: "Yes! All HVAC websites include ongoing updates, security monitoring, and seasonal content changes. Perfect for promoting heating services in winter and cooling services in summer."
    }
  ];

  const hvacChallenges = [
    {
      icon: "🌡️",
      title: "Seasonal Business Cycles",
      problem: "Revenue peaks in extreme weather, drops in mild seasons",
      solution: "Seasonal service pages and year-round maintenance marketing"
    },
    {
      icon: "🚨",
      title: "Emergency Service Calls",
      problem: "Customers need immediate response when systems fail",
      solution: "24/7 emergency contact setup and mobile-first design"
    },
    {
      icon: "🏠",
      title: "High-Value Installations",
      problem: "Competing for $5,000+ system replacement jobs",
      solution: "Trust-building content and professional presentation"
    },
    {
      icon: "📍",
      title: "Local Competition",
      problem: "Competing with 40+ local HVAC companies",
      solution: "Local SEO optimization and service area domination"
    }
  ];

  const hvacFeatures = [
    {
      icon: "❄️",
      title: "Seasonal Service Pages",
      description: "Dynamic content that promotes heating in winter, cooling in summer"
    },
    {
      icon: "🚨",
      title: "24/7 Emergency Contact",
      description: "Prominent emergency service buttons that work on all devices"
    },
    {
      icon: "🗺️",
      title: "Service Area Mapping",
      description: "Clear coverage area with response time guarantees"
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "Clear service call fees and installation pricing"
    },
    {
      icon: "⭐",
      title: "Customer Review Showcase",
      description: "Google reviews and testimonials prominently displayed"
    },
    {
      icon: "📅",
      title: "Maintenance Scheduling",
      description: "Online booking for tune-ups and regular maintenance"
    }
  ];

  const successMetrics = [
    {
      metric: "58%",
      description: "Average increase in service calls",
      icon: "📞"
    },
    {
      metric: "72%",
      description: "More qualified leads from mobile",
      icon: "📱"
    },
    {
      metric: "2.8x",
      description: "Higher local search rankings",
      icon: "🎯"
    },
    {
      metric: "91%",
      description: "Client retention rate",
      icon: "🏆"
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
                  HVAC Websites That Convert <span className="text-blue-300">Emergency Calls</span> & <span className="text-red-300">Seasonal Services</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  When heating fails in winter or AC breaks in summer, customers search frantically on mobile. Your HVAC website needs to capture those emergency calls and build trust instantly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    href="/contact?industry=hvac"
                    className="bg-white text-blue-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg border-2 border-white"
                  >
                    Get My HVAC Website
                  </Link>
                  <Link 
                    href="/pricing"
                    className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-center"
                  >
                    View Pricing
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                  {successMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold mb-1">{metric.metric}</div>
                      <div className="text-blue-200">{metric.description}</div>
                    </div>
                  ))}
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

      {/* HVAC-Specific Features */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Everything Your HVAC Website Needs to <span className="text-blue-600">Convert Emergency Calls</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Every HVAC website we build includes these conversion-focused features designed specifically for the heating and cooling industry.
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
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">🌡️</span>
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
              Ready to Capture More Emergency Calls & Seasonal Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join successful HVAC companies who are staying busy year-round with professional websites that convert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?industry=hvac"
                className="bg-white text-blue-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Get My HVAC Website
              </Link>
              <Link 
                href="tel:8178736655"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-lg"
              >
                Call (817) 873-6655
              </Link>
            </div>
            
            <p className="text-sm text-blue-200 mt-4">
              💡 Free consultation • Live in 7-10 days • No long-term contracts
            </p>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
