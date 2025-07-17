import { Metadata } from 'next';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';
import DarkButton from '@/components/DarkButton';
import LightButton from '@/components/LightButton';
import ScrollToTop from '@/components/ScrollToTop';

export const metadata: Metadata = {
  title: 'Construction Company Website Design | Project-Ready Marketing',
  description: 'Construction projects start with trust. Your website needs to showcase completed work and build confidence for six-figure projects. We build construction websites that win more bids.',
  keywords: 'construction website design, contractor websites, construction company websites, construction marketing, project showcase',
  openGraph: {
    title: 'Construction Company Website Design | Project-Ready Marketing',
    description: 'Construction projects start with trust. Your website needs to showcase completed work and build confidence for six-figure projects. We build construction websites that win more bids.',
    type: 'website',
  },
};

export default function ConstructionPage() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Premier Construction Group" },
    { name: "Solid Foundation Builders" },
    { name: "Metro Commercial Contractors" },
    { name: "Elite Building Solutions" },
    { name: "Professional Construction Co" }
  ];

  // Comparison data
  const comparisonFeatures = [
    {
      feature: "Project portfolio showcase",
      typical: false,
      forte: true
    },
    {
      feature: "Bid request optimization",
      typical: false,
      forte: true
    },
    {
      feature: "Safety & licensing display",
      typical: false,
      forte: true
    },
    {
      feature: "Ongoing edits included",
      typical: false,
      forte: true
    },
    {
      feature: "Mobile-responsive design",
      typical: false,
      forte: true
    },
    {
      feature: "Local SEO optimization",
      typical: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can you get my construction website live?",
      answer: "Most construction websites are live within 7-10 business days. We prioritize project portfolios and contact forms first, so your site starts generating leads immediately."
    },
    {
      question: "Do you understand the construction industry?",
      answer: "Absolutely. We've built websites for 18+ construction companies and understand project showcasing, bid processes, and what builds trust for high-value construction projects."
    },
    {
      question: "What makes your construction websites different?",
      answer: "We focus on trust-building and project showcasing. While other designers build basic websites, we build websites that demonstrate your expertise and win more construction bids."
    },
    {
      question: "Do you handle ongoing updates and maintenance?",
      answer: "Yes! All construction websites include ongoing updates, security monitoring, and content changes. Perfect for adding new project photos and updating services."
    }
  ];

  const constructionChallenges = [
    {
      icon: "🏗️",
      title: "High-Value Projects",
      problem: "Competing for $50,000+ construction contracts",
      solution: "Professional presentation that builds trust"
    },
    {
      icon: "📸",
      title: "Showcasing Complex Work",
      problem: "Construction projects are complex and visual",
      solution: "Professional project galleries and case studies"
    },
    {
      icon: "🤝",
      title: "Building Trust",
      problem: "Clients need confidence for major investments",
      solution: "Licensing, insurance, and testimonial display"
    },
    {
      icon: "📱",
      title: "Mobile Decision Making",
      problem: "Project managers browse on mobile devices",
      solution: "Mobile-optimized portfolios and contact forms"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-700 via-orange-600 to-red-700 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-600/50 text-orange-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🏗️ Industry Expertise: Construction
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Construction Websites That Turn Prospects Into <span className="text-orange-300">High-Value Project Clients</span>
                </h1>
                <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                  Construction projects start with trust. Your website needs to showcase completed work and build confidence for six-figure investments. We build construction websites that win more bids and grow your business.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <DarkButton href="/contact?industry=construction" className="bg-blue-600 hover:bg-blue-700">
                    Get My Construction Website Quote
                  </DarkButton>
                  <LightButton href="/checkup?industry=construction">
                    Free Construction Website Audit
                  </LightButton>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-orange-200">
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    Project Portfolio Showcase
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    Bid-Ready Contact Forms
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-400">✓</span>
                    Trust Building Elements
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border-2 border-orange-100">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl text-white">
                    <span className="text-3xl">🏗️</span>
                    <div>
                      <h3 className="text-white text-xl font-bold">PREMIER CONSTRUCTION</h3>
                      <p className="text-orange-100 text-sm font-semibold">🏆 Building Excellence Since 1995 🏆</p>
                    </div>
                  </div>
                  
                  {/* Services */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        🏠 <span>Custom Homes</span>
                      </span>
                      <span className="font-bold text-blue-600 text-lg">$350K+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        🏢 <span>Commercial Build</span>
                      </span>
                      <span className="font-bold text-green-600 text-lg">$500K+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        🛁 <span>Renovations</span>
                      </span>
                      <span className="font-bold text-purple-600 text-lg">$75K+</span>
                    </div>
                  </div>

                  {/* Portfolio Preview */}
                  <div className="mb-4 bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-orange-200 rounded h-16 flex items-center justify-center text-orange-700 font-bold text-xs">
                        🏘️ Recent Projects
                      </div>
                      <div className="bg-red-200 rounded h-16 flex items-center justify-center text-red-700 font-bold text-xs">
                        📋 Testimonials
                      </div>
                    </div>
                  </div>

                  {/* Call button */}
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-4 rounded-xl mb-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">📞</span>
                      <div>
                        <div className="font-bold text-lg">Call (555) BUILD-IT</div>
                        <div className="text-orange-100 text-sm">Free Project Estimate!</div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews section */}
                  <div className="text-center bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="text-gray-700 font-semibold">4.9/5 Stars</div>
                    <div className="text-gray-600 text-sm">(89 Google Reviews)</div>
                    <div className="text-orange-600 text-sm font-medium mt-1">🏗️ Licensed & Bonded</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  ✅ 28+ Years Experience
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  🛡️ 2-Year Warranty
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
                We Understand Construction Challenges
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Every construction company faces unique challenges. We've built websites for contractors for years and know exactly what wins bids.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-4">{challenge.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-red-600 dark:text-red-400 mb-3 font-medium">
                    Problem: {challenge.problem}
                  </p>
                  <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                    Our Solution: {challenge.solution}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Trusted by Leading Construction Companies
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Join successful construction companies already winning more bids with Forte websites
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clientCompanies.map((company, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="star" className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {company.name}
                  </h3>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Forte vs. Typical Construction Websites
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See why construction companies choose Forte over generic website builders
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 dark:bg-gray-600">
                <div></div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-600 dark:text-gray-300">Typical Websites</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-orange-600 dark:text-orange-400">Forte Websites</h3>
                </div>
              </div>
              
              {comparisonFeatures.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-4 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {item.feature}
                  </div>
                  <div className="text-center">
                    <span className="text-red-500">✗</span>
                  </div>
                  <div className="text-center">
                    <span className="text-green-500">✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Common questions from construction business owners
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <SimpleAnimatedCard key={index}>
                <details className="bg-white dark:bg-gray-700 rounded-lg shadow-md group">
                  <summary className="p-6 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 rounded-lg transition-colors">
                    {faq.question}
                  </summary>
                  <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </details>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Win More Construction Projects?
              </h2>
              <p className="text-xl mb-8 text-orange-100">
                Join successful construction companies who are winning more bids with professional websites
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact?industry=construction"
                  className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                >
                  Get My Construction Website
                </Link>
                <Link 
                  href="tel:8178736655"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-orange-600 transition-colors text-lg"
                >
                  Call (817) 873-6655
                </Link>
              </div>
              
              <p className="text-sm text-orange-200 mt-4">
                💡 Free consultation • Live in 7-10 days • No long-term contracts
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
