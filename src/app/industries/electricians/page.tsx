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
  title: 'Electrician Website Design & Development | Power Ready',
  description: 'Electrical emergencies require immediate response. Your customers need a reliable website to reach you when power fails or safety issues arise. We build electrician websites that capture emergency calls, showcase safety credentials, and dominate local search.',
  keywords: 'electrician website design, electrical websites, emergency electrician websites, local electrician SEO, electrical lead generation',
  openGraph: {
    title: 'Electrician Website Design & Development | Power Ready',
    description: 'Electrical emergencies require immediate response. Your customers need a reliable website to reach you when power fails or safety issues arise. We build electrician websites that capture emergency calls, showcase safety credentials, and dominate local search.',
    type: 'website',
  },
};

export default function ElectriciansPage() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Elite Electrical Solutions" },
    { name: "PowerMax Electric Co" },
    { name: "Metro Wire Specialists" },
    { name: "Emergency Power Pros" },
    { name: "Premier Electrical Services" }
  ];

  // Comparison data
  const comparisonFeatures = [
    {
      feature: "Mobile-first for electricians",
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
      feature: "Safety certification display",
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
      question: "How quickly can you get my electrician website live?",
      answer: "Most electrician websites are live within 7-10 business days. We prioritize emergency-ready features and safety certifications first, so your site starts converting calls immediately."
    },
    {
      question: "Do you understand the electrical industry?",
      answer: "Absolutely. We've built websites for 14+ electrical companies and understand emergency call patterns, safety requirements, and what builds trust with homeowners facing electrical issues."
    },
    {
      question: "What makes your electrician websites different?",
      answer: "We focus on safety-first messaging and emergency call conversion. While other designers build basic websites, we build websites that emphasize safety credentials and dominate local search for electrical services."
    },
    {
      question: "Do you handle ongoing updates and maintenance?",
      answer: "Yes! All electrician websites include ongoing updates, security monitoring, and content changes. Perfect for adding new services or updating safety certifications."
    }
  ];

  const electricianChallenges = [
    {
      icon: "⚡",
      title: "Emergency Electrical Issues",
      problem: "Power outages and electrical failures require immediate response",
      solution: "24/7 emergency contact setup and mobile-first design"
    },
    {
      icon: "🛡️",
      title: "Safety & Trust Concerns",
      problem: "Customers worry about electrical safety and contractor credibility",
      solution: "Prominent safety certifications and licensing displays"
    },
    {
      icon: "🏠",
      title: "High-Value Projects",
      problem: "Competing for $3,000+ panel upgrades and whole-home rewiring",
      solution: "Professional presentation and project portfolio showcase"
    },
    {
      icon: "📍",
      title: "Local Competition",
      problem: "Competing with 35+ local electricians in search results",
      solution: "Local SEO optimization and service area domination"
    }
  ];

  const electricianFeatures = [
    {
      icon: "🚨",
      title: "24/7 Emergency Contact",
      description: "Prominent emergency service buttons for power outages and electrical hazards"
    },
    {
      icon: "🛡️",
      title: "Safety Certifications",
      description: "Licensed, bonded, and insured credentials prominently displayed"
    },
    {
      icon: "🗺️",
      title: "Service Area Mapping",
      description: "Clear coverage area with emergency response time guarantees"
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "Clear service call fees and project pricing estimates"
    },
    {
      icon: "⭐",
      title: "Customer Review Showcase",
      description: "Google reviews and safety testimonials prominently featured"
    },
    {
      icon: "📋",
      title: "Free Estimate Forms",
      description: "Online forms for project quotes and electrical inspections"
    }
  ];

  const successMetrics = [
    {
      metric: "62%",
      description: "Average increase in service calls",
      icon: "📞"
    },
    {
      metric: "78%",
      description: "More qualified leads from mobile",
      icon: "📱"
    },
    {
      metric: "2.6x",
      description: "Higher local search rankings",
      icon: "🎯"
    },
    {
      metric: "93%",
      description: "Client retention rate",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 via-orange-600 to-yellow-700 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-600/50 text-yellow-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  ⚡ Industry Expertise: Licensed Electricians
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Electrician Websites That Convert <span className="text-yellow-300">Emergency Calls</span> & <span className="text-yellow-300">Build Trust</span>
                </h1>
                <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
                  When power fails or electrical hazards arise, customers search frantically for licensed electricians. Your website needs to capture those emergency calls while showcasing your safety credentials and expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    href="/contact?industry=electrician"
                    className="bg-white text-yellow-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg border-2 border-white"
                  >
                    Get My Electrician Website
                  </Link>
                  <Link 
                    href="/pricing"
                    className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-yellow-700 transition-colors text-center"
                  >
                    View Pricing
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                  {successMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold mb-1">{metric.metric}</div>
                      <div className="text-yellow-200">{metric.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-8 shadow-2xl border-2 border-yellow-100">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl text-white">
                    <span className="text-3xl">⚡</span>
                    <div>
                      <h3 className="text-white text-xl font-bold">POWERMAX ELECTRIC CO</h3>
                      <p className="text-yellow-100 text-sm font-semibold">🛡️ Licensed & Insured ⚡</p>
                    </div>
                  </div>
                  
                  {/* Services */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        🚨 Emergency Repair
                      </span>
                      <span className="font-bold text-red-600">$149+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        🔌 Outlet Installation
                      </span>
                      <span className="font-bold text-blue-600">$89+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        📋 Panel Upgrade
                      </span>
                      <span className="font-bold text-green-600">$2,800+</span>
                    </div>
                  </div>

                  {/* Emergency Call Button */}
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-4 rounded-xl mb-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <div className="font-bold text-lg">24/7 Emergency Service</div>
                        <div className="text-orange-100 text-sm">Call (555) POWER-ON</div>
                      </div>
                    </div>
                  </div>

                  {/* Safety & Reviews section */}
                  <div className="text-center bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="text-gray-700 font-semibold">4.9/5 Stars</div>
                    <div className="text-gray-600 text-sm">(143 Google Reviews)</div>
                    <div className="text-yellow-600 text-sm font-medium mt-1">⚡ Master Electrician Licensed</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  🚨 Emergency Ready
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  🛡️ Safety First
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
                We Understand Electrician Business Challenges
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Every electrical business faces unique challenges from safety concerns to emergency response needs. We've built websites for electricians for years and know exactly what works.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {electricianChallenges.map((challenge, index) => (
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

      {/* Electrician-Specific Features */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Everything Your Electrician Website Needs to <span className="text-yellow-600">Convert Emergency Calls</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Every electrician website we build includes these conversion-focused features designed specifically for the electrical services industry.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {electricianFeatures.map((feature, index) => (
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
                Forte vs. Typical Electrician Websites
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                See why electricians choose Forte for their online presence.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <SimpleScrollReveal delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-3 gap-4 p-6 bg-gray-100 dark:bg-gray-700">
                  <div className="font-semibold text-gray-900 dark:text-white">Feature</div>
                  <div className="font-semibold text-gray-900 dark:text-white text-center">Typical Electrician Sites</div>
                  <div className="font-semibold text-yellow-600 dark:text-yellow-400 text-center">Forte Electrician Sites</div>
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Real Electrician Website Success Story
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                See how one electrical company transformed their business with a Forte website.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal delay={0.2}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Case Study
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Elite Electrical Solutions
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">Dallas, TX • Licensed Electrician</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">The Challenge</h4>
                        <ul className="text-red-700 dark:text-red-300 text-sm space-y-1">
                          <li>• Customers choosing unlicensed "cheap" competitors</li>
                          <li>• Missing emergency calls due to poor mobile experience</li>
                          <li>• Competing with 35+ local electricians</li>
                          <li>• Difficulty showcasing safety credentials online</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Our Solution</h4>
                        <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                          <li>• Mobile-first design with prominent emergency contact</li>
                          <li>• Safety certifications and licensing prominently displayed</li>
                          <li>• Local SEO optimization for "electrician near me"</li>
                          <li>• Trust-building elements and customer testimonials</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-8 lg:p-12 h-full">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-6">The Results (4 Months)</h4>
                      
                      <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">148%</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Emergency Call Increase</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">92%</div>
                          <div className="text-sm text-green-700 dark:text-green-300">More Project Quotes</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">195%</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Website Traffic</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-600 dark:text-green-400">#2</div>
                          <div className="text-sm text-green-700 dark:text-green-300">Local Search Ranking</div>
                        </div>
                      </div>
                      
                      <blockquote className="text-green-700 dark:text-green-300 italic text-sm">
                        "Our new website completely changed our business. Customers now call us first because they trust our credentials are real. Emergency calls almost doubled and we're booking bigger projects."
                      </blockquote>
                      <cite className="text-green-600 dark:text-green-400 text-xs block mt-2">
                        — Tom Martinez, Master Electrician
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
                Trusted by Licensed Electricians Across Texas
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Join the growing list of electrical contractors that trust Forte with their digital presence.
              </p>
            </div>
          </SimpleScrollReveal>
          
          <SimpleScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {clientCompanies.map((company, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-3">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/40 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-xl">⚡</span>
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
                Electrician Website Questions & Answers
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Everything you need to know about electrician website development.
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Capture More Emergency Calls & Build Customer Trust?
            </h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Join successful electricians who are staying busy year-round with professional websites that emphasize safety and convert visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?industry=electrician"
                className="bg-white text-yellow-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Get My Electrician Website
              </Link>
              <Link 
                href="tel:8178736655"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-yellow-700 transition-colors text-lg"
              >
                Call (817) 873-6655
              </Link>
            </div>
            
            <p className="text-sm text-yellow-200 mt-4">
              💡 Free consultation • Live in 7-10 days • No long-term contracts
            </p>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
