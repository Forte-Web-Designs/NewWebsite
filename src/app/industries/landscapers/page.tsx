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
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <SimpleScrollReveal direction="left" delay={100}>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
                  <Icon name="star" className="w-4 h-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">Landscaper Specialists</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Landscaper Websites That 
                  <span className="text-green-600 dark:text-green-400"> Grow Your Business</span>
                </h1>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Stop losing projects to competitors with better websites. Get a landscaper website that showcases your beautiful work, captures seasonal leads, and books high-value projects year-round.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <DarkButton href="/contact?industry=landscapers" className="text-center">
                    Get My Landscaper Website
                  </DarkButton>
                  <LightButton href="/checkup" className="text-center">
                    Free Website Checkup
                  </LightButton>
                </div>
                
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex items-center gap-2">
                    <Icon name="star" className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Live in 7-10 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="star" className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">Seasonal optimization included</span>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
            
            {/* Right Content - Image */}
            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-emerald-200 dark:from-gray-700 dark:to-gray-600">
                  <OptimizedImage
                    src="/images/industries/landscaper-website-design.jpg"
                    alt="Professional landscaper website design showcase"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                  />
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
