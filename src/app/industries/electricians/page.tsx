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
  title: 'Electrician Website Design That Powers Up Lead Generation',
  description: 'Mobile-first electrician websites that convert emergency calls into customers. We don\'t build just "pretty" websites. We build high-converting electrician websites that capture every service call, showcase safety credentials, and dominate local search.',
  keywords: 'electrician website design, electrical contractor websites, emergency electrician SEO, local electrician marketing, electrical lead generation',
  openGraph: {
    title: 'Electrician Website Design That Powers Up Lead Generation',
    description: 'Mobile-first electrician websites that convert emergency calls into customers. We don\'t build just "pretty" websites. We build high-converting electrician websites that capture every service call, showcase safety credentials, and dominate local search.',
    type: 'website',
  },
};

export default function ElectriciansPage() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Precision Power Techs", location: "Austin" },
    { name: "Reliable Electric Solutions", location: "Dallas" },
    { name: "Master Volt Specialists", location: "Houston" },
    { name: "Emergency Power Pros", location: "San Antonio" },
    { name: "Elite Electrical Services", location: "Fort Worth" }
  ];

  // Comparison data
  const comparisonFeatures = [
    {
      feature: "Emergency Call Optimization",
      typical: false,
      forte: true
    },
    {
      feature: "Mobile-First Design",
      typical: false,
      forte: true
    },
    {
      feature: "SEO Built-In",
      typical: false,
      forte: true
    },
    {
      feature: "Safety Credential Display",
      typical: false,
      forte: true
    },
    {
      feature: "Service Area Targeting",
      typical: false,
      forte: true
    },
    {
      feature: "Ongoing Updates Included",
      typical: false,
      forte: true
    },
    {
      feature: "Lead Generation Focus",
      typical: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How fast can my electrician website go live?",
      answer: "Most electrician websites are live within 7-10 business days. We prioritize emergency service optimization and safety credential display first, ensuring your site starts converting calls from day one."
    },
    {
      question: "Do you specialize in electrical contractor websites?",
      answer: "Yes! We've built websites for 18+ electrical contractors and understand emergency response patterns, licensing requirements, and what builds trust with homeowners facing electrical emergencies."
    },
    {
      question: "What makes your electrician websites convert better?",
      answer: "We focus on mobile-first emergency call optimization, safety-first messaging, and local search domination. While other designers build basic websites, we build conversion-focused websites that turn website visitors into paying customers."
    },
    {
      question: "Will my website work on mobile devices?",
      answer: "Absolutely! 73% of electrical service searches happen on mobile. Our electrician websites are built mobile-first with emergency contact buttons, clear pricing, and fast-loading service pages."
    },
    {
      question: "Can I update my services and pricing?",
      answer: "Yes! All electrician websites include ongoing updates, content changes, and pricing adjustments. Perfect for seasonal services, new certifications, or service area expansions."
    },
    {
      question: "Do you handle local SEO for electrical contractors?",
      answer: "Every electrician website includes local SEO optimization for your service area. We optimize for emergency electrical services, panel upgrades, and other high-value electrical work in your city."
    }
  ];

  const electricianChallenges = [
    {
      icon: "⚡",
      title: "Emergency Service Calls",
      problem: "Customers need immediate response for power outages and electrical hazards",
      solution: "Mobile-optimized emergency contact and 24/7 service messaging"
    },
    {
      icon: "🛡️",
      title: "Safety & Licensing Trust",
      problem: "Homeowners worry about electrical safety and contractor legitimacy",
      solution: "Prominent license display, insurance proof, and safety certifications"
    },
    {
      icon: "💰",
      title: "High-Value Project Competition",
      problem: "Competing for $3,500+ panel upgrades and whole-home electrical work",
      solution: "Professional presentation with project portfolios and transparent pricing"
    },
    {
      icon: "📍",
      title: "Local Search Competition",
      problem: "Competing with 40+ electrical contractors in local search results",
      solution: "Local SEO optimization and service area domination strategies"
    }
  ];

  const electricianFeatures = [
    {
      icon: "⚡",
      title: "Emergency Service Button",
      description: "Prominent 24/7 emergency contact for power outages and electrical hazards"
    },
    {
      icon: "🛡️",
      title: "License & Insurance Display",
      description: "Licensed electrician credentials and insurance proof prominently featured"
    },
    {
      icon: "💰",
      title: "Transparent Service Pricing",
      description: "Clear service call fees, panel upgrade costs, and electrical repair pricing"
    },
    {
      icon: "📍",
      title: "Service Area Coverage",
      description: "Interactive service area maps with emergency response time guarantees"
    },
    {
      icon: "⭐",
      title: "Customer Safety Reviews",
      description: "Google reviews and safety testimonials from satisfied homeowners"
    },
    {
      icon: "📋",
      title: "Online Estimate Forms",
      description: "Easy electrical project quotes and safety inspection scheduling"
    },
    {
      icon: "🏠",
      title: "Project Portfolio Gallery",
      description: "Before/after photos of panel upgrades, rewiring, and electrical installations"
    },
    {
      icon: "📞",
      title: "Click-to-Call Optimization",
      description: "Mobile-optimized phone numbers that convert website visitors into calls"
    }
  ];

  const successMetrics = [
    {
      metric: "59%",
      description: "More mobile leads",
      icon: "📱"
    },
    {
      metric: "73%",
      description: "Increase in service calls",
      icon: "📞"
    },
    {
      metric: "2.8x",
      description: "Higher local rankings",
      icon: "🎯"
    },
    {
      metric: "94%",
      description: "Client satisfaction rate",
      icon: "🏆"
    }
  ];

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-700 via-blue-600 to-slate-700 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-sky-600/50 text-sky-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  ⚡ Specializing in Electrical Contractor Websites
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Electrician Websites That <span className="text-sky-300">Power Up</span> Your Lead Generation
                </h1>
                <p className="text-xl text-sky-100 mb-8 leading-relaxed">
                  We don't build just "pretty" websites. We build high-converting, mobile-first electrician websites that capture every emergency service call, showcase safety credentials, and dominate local search for electrical contractors.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    href="/contact?industry=electrician"
                    className="bg-white text-sky-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg border-2 border-white"
                  >
                    Get My Electrician Website
                  </Link>
                  <Link 
                    href="/pricing"
                    className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-sky-700 transition-colors text-center"
                  >
                    View Pricing
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                  {successMetrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold mb-1">{metric.metric}</div>
                      <div className="text-sky-200">{metric.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-8 shadow-2xl border-2 border-sky-100">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl text-white">
                    <span className="text-3xl">⚡</span>
                    <div>
                      <h3 className="text-white text-xl font-bold">POWERMAX ELECTRIC CO</h3>
                      <p className="text-sky-100 text-sm font-semibold">🛡️ Licensed & Insured ⚡</p>
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
                    <div className="text-sky-600 text-sm font-medium mt-1">⚡ Master Electrician Licensed</div>
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

      {/* Case Study Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Real Results from Austin Electrical Contractors
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                See how we helped Precision Power Techs dominate Austin electrical services with a mobile-first website that converts.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-4xl mx-auto">
            <SimpleAnimatedCard>
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-white">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Precision Power Techs</h3>
                    <p className="text-sky-600 dark:text-sky-400 font-semibold">Austin, Texas • Licensed Electrical Contractor</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                  "Our old website wasn't mobile-friendly and we were losing emergency service calls to competitors. Forte built us a conversion-focused website that captures every lead and showcases our 15+ years of electrical expertise."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-sky-600 dark:text-sky-400 mb-2">59%</div>
                    <div className="text-gray-600 dark:text-gray-400">More Mobile Leads</div>
                    <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">in 60 days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$9,200</div>
                    <div className="text-gray-600 dark:text-gray-400">Additional Monthly Revenue</div>
                    <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">from new projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">#1</div>
                    <div className="text-gray-600 dark:text-gray-400">Google Ranking</div>
                    <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">"Austin electrician"</div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="text-sky-500">⚡</span>
                    What We Delivered for Precision Power Techs:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Mobile-optimized emergency contact</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Master electrician license display</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Local Austin SEO optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Panel upgrade project gallery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Transparent electrical pricing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Online electrical estimate forms</span>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Electrician-Specific Features */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Everything Your Electrician Website Needs to <span className="text-sky-600">Convert Emergency Calls</span>
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
                  <div className="font-semibold text-sky-600 dark:text-sky-400 text-center">Forte Electrician Sites</div>
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20">
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
                      <div className="inline-flex items-center gap-2 bg-sky-100 dark:bg-sky-900/40 text-sky-800 dark:text-sky-200 px-3 py-1 rounded-full text-sm font-medium mb-4">
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
                    <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/40 rounded-full flex items-center justify-center mx-auto mb-3">
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

      {/* Forte Care™ Promotional Snippet */}
      <SimpleScrollReveal direction="up" delay={800}>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Don't Let Loose Connections Hurt Your Business
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                As an electrician, you know that loose connections cause problems down the line. Your website has connections too – to search engines, security systems, and performance tools. Forte Care™ keeps all your digital connections tight and secure, preventing costly downtime and ensuring emergency calls always reach you.
              </p>
              <Link
                href="/solutions/care"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <span>Secure Your Digital Connections</span>
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-sky-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Power Up Your Lead Generation & Capture More Service Calls?
            </h2>
            <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
              Join successful electrical contractors across Texas who trust Forte with mobile-first websites that convert emergency calls into paying customers. Professional results you can count on.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?industry=electrician"
                className="bg-white text-sky-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg shadow-lg"
              >
                Get My Electrician Website
              </Link>
              <Link 
                href="tel:8178736655"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-sky-700 transition-colors text-lg"
              >
                Call (817) 873-6655
              </Link>
            </div>
            
            <p className="text-sm text-sky-200 mt-4">
              💡 Free consultation • Live in 7-10 days
            </p>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
