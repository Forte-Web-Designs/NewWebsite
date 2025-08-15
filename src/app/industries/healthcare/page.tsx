import { Metadata } from 'next';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import ScrollToTop from '@/components/ScrollToTop';
import IndustryLeadCTA from '@/components/IndustryLeadCTA';

export const metadata: Metadata = {
  title: 'Professional Healthcare Website Design | Medical Websites That Build Trust & Increase Appointments | Nationwide from DFW | Forte Web Designs',
  description: 'HIPAA-aware professional medical websites for doctors, dentists, and clinics. DFW-based team serving healthcare providers nationwide. Build patient trust, increase appointments, and comply with regulations with lightning-fast, appointment-ready professional healthcare websites.',
  keywords: 'professional healthcare website design, medical websites, doctor websites, HIPAA compliant websites, patient portal development, professional healthcare SEO, medical practice websites, dental websites nationwide',
  openGraph: {
    title: 'Professional Healthcare Website Design | Medical Websites That Build Trust & Increase Appointments | Nationwide from DFW',
    description: 'HIPAA-aware professional medical websites for doctors, dentists, and clinics. DFW-based team serving healthcare providers nationwide.',
    type: 'website',
  },
};

export default function HealthcarePage() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Rio Verde Pediatrics" },
    { name: "Southwest Family Medicine" },
    { name: "Desert Dental Associates" },
    { name: "Mountain View Cardiology" },
    { name: "Central Plains Orthopedics" }
  ];

  // Comparison data - Forte vs Template Builders vs Local Ad Agencies
  const comparisonFeatures = [
    {
      feature: "Designed for Healthcare",
      templateBuilders: false,
      localAgencies: false,
      forte: true
    },
    {
      feature: "HIPAA-Aware Setup",
      templateBuilders: false,
      localAgencies: false,
      forte: true
    },
    {
      feature: "Appointment Integration",
      templateBuilders: false,
      localAgencies: true,
      forte: true
    },
    {
      feature: "Provider Pages + Bios",
      templateBuilders: false,
      localAgencies: "basic",
      forte: true
    },
    {
      feature: "Local SEO Built In",
      templateBuilders: false,
      localAgencies: false,
      forte: true
    },
    {
      feature: "Secure Forms + SSL",
      templateBuilders: false,
      localAgencies: true,
      forte: true
    },
    {
      feature: "ADA-Friendly Formatting",
      templateBuilders: false,
      localAgencies: false,
      forte: true
    },
    {
      feature: "Ongoing Support",
      templateBuilders: false,
      localAgencies: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can you launch my site?",
      answer: "2–4 weeks on average. Rush services available for urgent launches or rebrands."
    },
    {
      question: "Do you integrate with my scheduling system or EHR?",
      answer: "Yes. We can embed or link to most third-party booking systems or intake portals (Kareo, SimplePractice, Zocdoc, etc.)."
    },
    {
      question: "Do I need to worry about HIPAA compliance?",
      answer: "We don't store PHI, but we help you set up secure practices (forms, privacy notices, SSL, etc.) and guide you to stay HIPAA-aware."
    },
    {
      question: "Can I edit content myself later?",
      answer: "We offer monthly support options that include unlimited edits, or you can opt for one-time builds with your own admin access."
    }
  ];

  const healthcareChallenges = [
    {
      icon: "📲",
      title: "Patient Booking Experience",
      problem: "Confusing interfaces drive patients away",
      solution: "Clean layouts, intuitive navigation, and mobile-optimized appointment forms"
    },
    {
      icon: "🔒",
      title: "Compliance and Security",
      problem: "HIPAA violations, data vulnerabilities, or unsecured contact forms",
      solution: "Hardened security, SSL, HIPAA-conscious form integrations (we'll guide your practice manager on safe data flows)"
    },
    {
      icon: "📍",
      title: "Local Discovery",
      problem: "Patients search for doctors and dentists near them",
      solution: "Local SEO, city-specific landing pages, and optimized Google Business profiles"
    },
    {
      icon: "🧾",
      title: "Insurance + Credentials",
      problem: "Missing trust signals and critical info",
      solution: "Display accepted insurances, provider credentials, affiliations, and patient testimonials up front"
    }
  ];

  const healthcareIncludes = [
    {
      icon: "📱",
      title: "Mobile-first responsive design",
      description: "Optimized for patients booking on their phones"
    },
    {
      icon: "📞",
      title: "Click-to-call and online scheduling integration",
      description: "Make it easy for patients to book appointments"
    },
    {
      icon: "🏥",
      title: "Dedicated Services & Conditions pages",
      description: "Clear information about what you treat"
    },
    {
      icon: "👨‍⚕️",
      title: "Provider bios + photo layout",
      description: "Build trust with professional profiles"
    },
    {
      icon: "💳",
      title: "Insurance + payment info sections",
      description: "Transparent billing and accepted insurances"
    },
    {
      icon: "⭐",
      title: "Review embedding (Google, Healthgrades, Zocdoc)",
      description: "Showcase patient satisfaction"
    },
    {
      icon: "♿",
      title: "ADA-compliant formatting options",
      description: "Accessible to all patients"
    },
    {
      icon: "📚",
      title: "Optional patient education content",
      description: "Pre/post care instructions and health info"
    },
    {
      icon: "🔐",
      title: "Secure contact + inquiry forms",
      description: "HIPAA-aware patient communication"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 via-blue-600 to-teal-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <SimpleScrollReveal>
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-teal-600/50 rounded-full text-teal-200 text-sm font-medium border border-teal-400/20">
                  🩺 Industry Expertise: Healthcare
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Medical Websites That Build Trust, Increase Appointments, and Comply with Regulations
                </h1>

                {/* Subheading */}
                <p className="text-xl text-teal-100 leading-relaxed">
                  Your website should reflect the same professionalism as your practice. At Forte, we build lightning-fast, HIPAA-conscious websites for doctors, dentists, specialists, and clinics that build trust instantly and make it easy for patients to take action.
                </p>

                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">✅</span>
                    <span className="text-teal-200">HIPAA-Aware</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">📲</span>
                    <span className="text-teal-200">Appointment-Ready</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">📍</span>
                    <span className="text-teal-200">Local SEO Optimized</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact?industry=healthcare"
                    className="bg-white text-teal-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg"
                  >
                    Get My Healthcare Website Quote →
                  </Link>
                  <Link 
                    href="/pricing"
                    className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-teal-700 transition-colors text-center"
                  >
                    Free Website Audit for Healthcare Providers →
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center space-x-6 text-teal-200 text-sm pt-4">
                  <span>⚡ 2-4 week launches</span>
                  <span>🔒 HIPAA-conscious setup</span>
                  <span>📞 Same-day response</span>
                </div>
              </div>
            </SimpleScrollReveal>

            {/* Right Column - Website Mockup */}
            <SimpleScrollReveal delay={200}>
              <div className="relative">
                {/* Main mockup container */}
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  
                  {/* Header */}
                  <div className="bg-gradient-to-r from-teal-600 to-blue-600 px-6 py-4 border-b border-teal-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg text-white">RIO VERDE PEDIATRICS</h3>
                        <p className="text-sm text-teal-100">🩺 Caring for Kids Since 2015 👨‍⚕️</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-teal-100">Call Now</p>
                        <p className="font-semibold text-white">(555) PEDIATRIC</p>
                      </div>
                    </div>
                  </div>

                  {/* Hero section */}
                  <div className="px-6 py-8 bg-gradient-to-br from-teal-50 to-blue-50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Trusted Pediatric Care in Santa Fe
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Same-day appointments • Evening hours • Insurance accepted
                    </p>
                    
                    {/* Emergency call button */}
                    <div className="bg-gradient-to-r from-red-500 to-teal-500 text-white p-4 rounded-lg mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl mr-2">🌡️</span>
                          <strong>Child Feeling Sick?</strong>
                        </div>
                        <div className="text-right">
                          <p className="text-teal-100 text-sm">Emergency Line</p>
                          <p className="font-bold">(555) 911-KIDS</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick appointment button */}
                    <button className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold mb-4 hover:bg-teal-700 transition-colors">
                      📅 Schedule Appointment Online
                    </button>
                  </div>

                  {/* Services grid */}
                  <div className="px-6 py-4 grid grid-cols-3 gap-2 bg-white border-t">
                    <div className="text-center py-2">
                      <div className="text-2xl mb-1">👶</div>
                      <div className="text-xs text-gray-600">Newborn Care</div>
                    </div>
                    <div className="text-center py-2">
                      <div className="text-2xl mb-1">💉</div>
                      <div className="text-xs text-gray-600">Vaccinations</div>
                    </div>
                    <div className="text-center py-2">
                      <div className="text-2xl mb-1">🏥</div>
                      <div className="text-xs text-gray-600">Well Visits</div>
                    </div>
                  </div>

                  {/* Reviews section */}
                  <div className="px-6 py-4 bg-teal-50 border-t">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="font-semibold text-teal-700">4.9/5</span>
                      </div>
                      <div className="text-teal-600 text-xs">
                        Board Certified • HIPAA Compliant
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating indicators */}
                <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
                  🔒 HIPAA Ready
                </div>
                <div className="absolute -bottom-3 -left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-bounce">
                  📲 Mobile Optimized
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Medical Practices Need Industry-Specific Websites */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                🩺 Why Medical Practices Need Industry-Specific Websites
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Unlike generic agencies, we build sites specifically for healthcare professionals. Here's why that matters:
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthcareChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{challenge.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        {challenge.title}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-red-500 text-sm">📉 Problem:</span>
                          <p className="text-gray-700 dark:text-gray-300 text-sm ml-6">
                            {challenge.problem}
                          </p>
                        </div>
                        <div>
                          <span className="text-green-500 text-sm">✅ Our Solution:</span>
                          <p className="text-gray-700 dark:text-gray-300 text-sm ml-6">
                            {challenge.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* What Every Healthcare Website Includes */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                🏥 What Every Healthcare Website Includes
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                All Forte healthcare websites come with:
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthcareIncludes.map((feature, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 dark:bg-teal-900/40 rounded-full text-teal-800 dark:text-teal-200 text-sm font-medium mb-6">
                🧪 Real Results: Pediatric Clinic in New Mexico Increases Patient Bookings by 3.4x
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                📍 Rio Verde Pediatrics | Santa Fe, NM
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                Before working with Forte, Rio Verde Pediatrics had a DIY site with poor mobile performance and no appointment integration.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SimpleAnimatedCard>
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📈</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">3.4x</div>
                      <div className="text-gray-700 dark:text-gray-300">Increase in Appointment Form Submissions</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600">+68%</div>
                      <div className="text-gray-700 dark:text-gray-300">New Patient Calls Within 90 Days</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600">Top 3</div>
                      <div className="text-gray-700 dark:text-gray-300">Google Ranking for "pediatrician Santa Fe"</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                      <span className="text-2xl">♿</span>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-600">-47%</div>
                      <div className="text-gray-700 dark:text-gray-300">ADA improvements lowered bounce rate by 47%</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link 
                    href="#"
                    className="border-2 border-teal-600 text-teal-600 bg-transparent font-bold py-3 px-6 rounded-lg hover:bg-teal-600 hover:text-white transition-colors text-center inline-block"
                  >
                    📈 Read Full Case Study →
                  </Link>
                </div>
              </div>
            </SimpleAnimatedCard>

            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🩺</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Rio Verde Pediatrics
                  </h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p>📍 Santa Fe, New Mexico</p>
                    <p>👨‍⚕️ Pediatric Practice</p>
                    <p>⏱️ 90-Day Results</p>
                  </div>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100">Before</div>
                        <div className="text-red-600">DIY website</div>
                        <div className="text-red-600">Poor mobile UX</div>
                        <div className="text-red-600">No appointments</div>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-gray-100">After</div>
                        <div className="text-green-600">Professional design</div>
                        <div className="text-green-600">Mobile-optimized</div>
                        <div className="text-green-600">Online booking</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                🩺 Why Forte vs. Local Marketing Agencies or DIY Builders?
              </h2>
            </div>
          </SimpleScrollReveal>

          <SimpleAnimatedCard>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">Template Builders</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600 dark:text-gray-400">Local Ad Agencies</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-teal-600 dark:text-teal-400">Forte Web Designs</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className="border-t border-gray-200 dark:border-gray-600">
                      <td className="px-6 py-4 text-gray-900 dark:text-gray-100 font-medium">{item.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {item.templateBuilders ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-red-500">✗</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.localAgencies === true ? (
                          <span className="text-green-500">✓</span>
                        ) : item.localAgencies === "basic" ? (
                          <span className="text-yellow-500">✓ (often basic)</span>
                        ) : (
                          <span className="text-red-500">✗</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.forte ? (
                          <span className="text-green-500">✓</span>
                        ) : (
                          <span className="text-red-500">✗</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SimpleAnimatedCard>
        </div>
      </section>

      {/* Forte Care™ Promotional Snippet */}
      <SimpleScrollReveal direction="up" delay={800}>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <span className="text-2xl">🩺</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Your Website's Digital Health Plan
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Just like you recommend preventive care to keep patients healthy, your website needs ongoing digital wellness checks. Forte Care™ provides comprehensive monitoring – security scans, performance diagnostics, and HIPAA compliance reviews – ensuring your online presence stays healthy and continues attracting new patients.
              </p>
              <Link
                href="/solutions/care"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <span>Schedule Your Website Checkup</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      </SimpleScrollReveal>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                🧠 Frequently Asked Questions
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <SimpleAnimatedCard key={index}>
                <details className="bg-white dark:bg-gray-900 rounded-lg p-6 group shadow-lg">
                  <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 group-open:mb-4">
                    {faq.question}
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SimpleScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🏥 Ready to Build Trust and Increase Bookings?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Join the medical professionals who trust Forte to help them serve more patients and simplify their digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact?industry=healthcare"
                className="bg-white text-teal-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg"
              >
                Get My Healthcare Website Quote →
              </Link>
              <Link 
                href="/pricing"
                className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-teal-600 transition-colors text-center"
              >
                Free Medical Website Audit →
              </Link>
            </div>
            <p className="mt-6 text-teal-200">
              📞 (817) 873-6655 • Same day response guaranteed
            </p>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Industry-specific CTA functionality */}
      <IndustryLeadCTA 
        industry="healthcare"
        formName="Healthcare Inquiry"
        title="Let's Build Your Healthcare Website Right"
        subtitle="Tell us about your medical practice and we'll get back to you within 1 business day. No pressure - just HIPAA-compliant solutions from a team that understands healthcare."
        mobileCtaText="Ready to increase appointments?"
        mobileCtaSubtext="Get your healthcare website today"
        mobileBgGradient="bg-gradient-to-r from-teal-600 to-blue-600"
      />
    </div>
  );
}
