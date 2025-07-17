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
  title: 'Landscaper Website Design & Development | Seasonal Marketing Ready',
  description: 'Landscaping is seasonal. Your website needs to work year-round to capture spring projects and maintain winter leads. We build landscaper websites that showcase beautiful work and book more projects.',
  keywords: 'landscaper website design, landscaping websites, lawn care websites, landscape design websites, seasonal marketing',
  openGraph: {
    title: 'Landscaper Website Design & Development | Seasonal Marketing Ready',
    description: 'Landscaping is seasonal. Your website needs to work year-round to capture spring projects and maintain winter leads. We build landscaper websites that showcase beautiful work and book more projects.',
    type: 'website',
  },
};

export default function LandscapersPage() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Elite Landscape Design" },
    { name: "Green Valley Lawn Care" },
    { name: "Premier Outdoor Solutions" },
    { name: "Seasonal Landscape Pros" },
    { name: "Nature's Touch Landscaping" }
  ];

  // Comparison data
  const comparisonFeatures = [
    {
      feature: "Seasonal service optimization",
      typical: false,
      forte: true
    },
    {
      feature: "Before/after photo galleries",
      typical: false,
      forte: true
    },
    {
      feature: "Quote request forms",
      typical: false,
      forte: true
    },
    {
      feature: "Ongoing edits included",
      typical: false,
      forte: true
    },
    {
      feature: "Local SEO optimization",
      typical: false,
      forte: true
    },
    {
      feature: "Mobile-responsive design",
      typical: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly can you get my landscaper website live?",
      answer: "Most landscaper websites are live within 7-10 business days. We prioritize seasonal service pages and portfolio galleries first, so your site starts attracting clients immediately."
    },
    {
      question: "Do you understand the landscaping industry?",
      answer: "Absolutely. We've built websites for 12+ landscaping companies and understand seasonal marketing, project showcasing, and what builds trust with homeowners for outdoor investments."
    },
    {
      question: "What makes your landscaper websites different?",
      answer: "We focus on visual storytelling and seasonal service optimization. While other designers build basic websites, we build websites that showcase your work beautifully and convert visitors into high-value projects."
    },
    {
      question: "Do you handle ongoing updates and maintenance?",
      answer: "Yes! All landscaper websites include ongoing updates, security monitoring, and content changes. Perfect for updating seasonal services and adding new project photos."
    }
  ];

  const landscaperChallenges = [
    {
      icon: "🌱",
      title: "Seasonal Business Cycles",
      problem: "Revenue varies dramatically between seasons",
      solution: "Year-round marketing with seasonal service pages"
    },
    {
      icon: "📸",
      title: "Showcasing Visual Work",
      problem: "Landscaping is visual - customers need to see results",
      solution: "Professional photo galleries and before/after showcases"
    },
    {
      icon: "💰",
      title: "High-Value Projects",
      problem: "Competing for $5,000+ landscaping projects",
      solution: "Trust-building content and professional presentation"
    },
    {
      icon: "📱",
      title: "Mobile Browsing",
      problem: "Homeowners browse landscaping ideas on mobile",
      solution: "Mobile-optimized galleries and easy quote requests"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-green-700/50 text-green-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  🌿 Industry Expertise: Landscaping
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Landscaper Websites That Turn Browsers Into <span className="text-green-300">High-Value Project Customers</span>
                </h1>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  Landscaping is visual and seasonal. Your website needs to showcase beautiful transformations and capture leads year-round. We build landscaper websites that sell premium projects and maintain steady revenue.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <DarkButton href="/contact?industry=landscaping" className="bg-orange-600 hover:bg-orange-700">
                    Get My Landscaper Website Quote
                  </DarkButton>
                  <LightButton href="/checkup?industry=landscaping">
                    Free Landscaping Website Audit
                  </LightButton>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-green-200">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Visual Project Galleries
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Seasonal Service Pages
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    Quote Request Forms
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-2xl border-2 border-green-100">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6 p-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl text-white">
                    <span className="text-3xl">🌿</span>
                    <div>
                      <h3 className="text-white text-xl font-bold">ELITE LANDSCAPING</h3>
                      <p className="text-green-100 text-sm font-semibold">✨ Transform Your Outdoor Space ✨</p>
                    </div>
                  </div>
                  
                  {/* Services */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        🌳 <span>Landscape Design</span>
                      </span>
                      <span className="font-bold text-green-600 text-lg">$2,500+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        💧 <span>Irrigation Install</span>
                      </span>
                      <span className="font-bold text-blue-600 text-lg">$3,200+</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2">
                        🏗️ <span>Hardscaping</span>
                      </span>
                      <span className="font-bold text-orange-600 text-lg">$5,000+</span>
                    </div>
                  </div>

                  {/* Portfolio Preview */}
                  <div className="mb-4 bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-green-200 rounded h-16 flex items-center justify-center text-green-700 font-bold text-xs">
                        🏡 Before/After
                      </div>
                      <div className="bg-emerald-200 rounded h-16 flex items-center justify-center text-emerald-700 font-bold text-xs">
                        🌺 Gallery
                      </div>
                    </div>
                  </div>

                  {/* Call button */}
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-4 rounded-xl mb-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-2xl">📞</span>
                      <div>
                        <div className="font-bold text-lg">Call (555) LANDSCAPE</div>
                        <div className="text-green-100 text-sm">Free Consultation!</div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews section */}
                  <div className="text-center bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="text-gray-700 font-semibold">4.8/5 Stars</div>
                    <div className="text-gray-600 text-sm">(156 Google Reviews)</div>
                    <div className="text-green-600 text-sm font-medium mt-1">🌿 Licensed & Insured</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  ✅ Free Estimates
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  🌱 20+ Years Exp
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
                We Understand Landscaper Challenges
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Every landscaping business faces unique challenges. We've built websites for landscapers for years and know exactly what works.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {landscaperChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-4">{challenge.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-sm text-red-600 dark:text-red-400 mb-3 font-medium">
                    Problem: {challenge.problem}
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">
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
                Trusted by Leading Landscapers
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Join successful landscaping companies already growing with Forte websites
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clientCompanies.map((company, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon name="star" className="w-6 h-6 text-green-600 dark:text-green-400" />
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
                Forte vs. Typical Landscaper Websites
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See why landscapers choose Forte over generic website builders
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
                  <h3 className="font-semibold text-green-600 dark:text-green-400">Forte Websites</h3>
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
                Common questions from landscaping business owners
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Grow Your Landscaping Business?
              </h2>
              <p className="text-xl mb-8 text-green-100">
                Join successful landscapers who are booking more projects with professional websites
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact?industry=landscapers"
                  className="bg-white text-green-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                >
                  Get My Landscaper Website
                </Link>
                <Link 
                  href="tel:8178736655"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors text-lg"
                >
                  Call (817) 873-6655
                </Link>
              </div>
              
              <p className="text-sm text-green-200 mt-4">
                💡 Free consultation • Live in 7-10 days • No long-term contracts
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
