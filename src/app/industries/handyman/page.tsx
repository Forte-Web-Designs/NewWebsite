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
  title: 'Handyman Website Design | Websites That Turn Searches Into Service Calls',
  description: 'Fast, mobile-ready handyman websites optimized to turn "fix-it" searches into real paying jobs. Mobile-first design with instant call & quote CTAs and local SEO.',
  keywords: 'handyman website design, handyman websites, local handyman SEO, mobile handyman sites, handyman lead generation, service call optimization',
  openGraph: {
    title: 'Handyman Website Design | Websites That Turn Searches Into Service Calls',
    description: 'Fast, mobile-ready handyman websites optimized to turn "fix-it" searches into real paying jobs. Mobile-first design with instant call & quote CTAs and local SEO.',
    type: 'website',
  },
};

export default function HandymanPage() {
  // Client companies for social proof
  const clientCompanies = [
    { name: "Red River Handyman" },
    { name: "All-Fix Home Services" },
    { name: "Reliable Repairs Plus" },
    { name: "Quick Fix Solutions" },
    { name: "Home Helper Pros" }
  ];

  // Comparison data - Forte vs Other Designers
  const comparisonFeatures = [
    {
      feature: "Built for Handyman Businesses",
      otherDesigners: false,
      forte: true
    },
    {
      feature: "Mobile-First Call Optimization",
      otherDesigners: false,
      forte: true
    },
    {
      feature: "Local SEO & Zip Targeting",
      otherDesigners: false,
      forte: true
    },
    {
      feature: "Trust-Building Layouts",
      otherDesigners: false,
      forte: true
    },
    {
      feature: "Click-to-Call / Text / Quote Forms",
      otherDesigners: false,
      forte: true
    },
    {
      feature: "Maintenance Edits Included",
      otherDesigners: false,
      forte: true
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Do I have to write the content?",
      answer: "Nope. We handle the copywriting, SEO, and layout. Just send your services, service area, and a few pictures if you have them."
    },
    {
      question: "What if I don't have a lot of reviews yet?",
      answer: "We'll build the site to grow your reviews by prompting users after jobs. We can also highlight testimonials and licenses."
    },
    {
      question: "Can I list multiple service areas?",
      answer: "Yes — we optimize your site for each city and zip code you serve for better Google visibility."
    },
    {
      question: "Do you handle ongoing updates?",
      answer: "Absolutely. All edits are included in your Forte Care™ plan."
    }
  ];

  const handymanChallenges = [
    {
      icon: "📱",
      title: "72% of Handyman Clients Search on Mobile",
      problem: "Clunky or unresponsive sites drive them away",
      solution: "Fast-loading, tap-to-call design with quote form and click-to-text support"
    },
    {
      icon: "🗺️",
      title: "You're Competing Against 30+ Local Handymen",
      problem: "Generic SEO won't rank you above local directories",
      solution: "Local SEO structure, Google Business optimization, zip code targeting"
    },
    {
      icon: "💸",
      title: "Trust is Everything",
      problem: "Customers are skeptical of flaky or sketchy contractors",
      solution: "Reviews, photos, licensing info, and before/after proof up front"
    },
    {
      icon: "📅",
      title: "They Want to Book Right Now",
      problem: "No contact form? No online booking? No job.",
      solution: "Instant quote request form + call button on every page"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <ScrollToTop />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-700 via-orange-600 to-amber-800 text-white py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <SimpleScrollReveal direction="left" delay={100}>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-amber-700/50 text-amber-200 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                  🛠️ Industry Expertise: Handyman Services
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Handyman Websites That Turn <span className="text-amber-300">Searches Into Service Calls</span>
                </h1>
                <p className="text-lg sm:text-xl text-amber-100 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We build websites specifically for handyman businesses — fast, mobile-ready, and optimized to turn "fix-it" searches into real paying jobs.
                </p>
                
                <div className="flex justify-center lg:justify-start mb-6 sm:mb-8">
                  <DarkButton href="/contact?industry=handyman" className="bg-amber-600 hover:bg-amber-700 w-full sm:w-auto">
                    Get My Handyman Website Quote
                  </DarkButton>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-amber-200">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">📱</span>
                    Mobile-First Design
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">🗺️</span>
                    Local SEO
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400">💬</span>
                    Instant Call & Quote CTAs
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="right" delay={200}>
              <div className="relative mt-8 lg:mt-0">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border-2 border-amber-100 max-w-lg mx-auto">
                  {/* Header */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl text-white">
                    <span className="text-2xl sm:text-3xl">🛠️</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-white text-lg sm:text-xl font-bold truncate">RED RIVER HANDYMAN</h3>
                      <p className="text-amber-100 text-xs sm:text-sm font-semibold">🏠 Home Repair Experts</p>
                    </div>
                  </div>
                  
                  {/* Services */}
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-amber-50 rounded-lg border-l-4 border-amber-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2 text-sm sm:text-base">
                        🔧 <span className="truncate">General Repairs</span>
                      </span>
                      <span className="font-bold text-amber-600 text-base sm:text-lg whitespace-nowrap">$75/hr</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2 text-sm sm:text-base">
                        🏠 <span className="truncate">Home Maintenance</span>
                      </span>
                      <span className="font-bold text-orange-600 text-base sm:text-lg whitespace-nowrap">$85/hr</span>
                    </div>
                    <div className="flex justify-between items-center p-2 sm:p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <span className="text-gray-700 font-medium flex items-center gap-2 text-sm sm:text-base">
                        🚿 <span className="truncate">Plumbing Fixes</span>
                      </span>
                      <span className="font-bold text-blue-600 text-base sm:text-lg whitespace-nowrap">$95/hr</span>
                    </div>
                  </div>

                  {/* Gallery Preview */}
                  <div className="mb-3 sm:mb-4 bg-gradient-to-r from-amber-100 to-orange-100 p-3 sm:p-4 rounded-lg">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-amber-200 rounded h-12 sm:h-16 flex items-center justify-center text-amber-700 font-bold text-xs">
                        🔨 Before/After
                      </div>
                      <div className="bg-orange-200 rounded h-12 sm:h-16 flex items-center justify-center text-orange-700 font-bold text-xs">
                        📝 Reviews
                      </div>
                    </div>
                  </div>

                  {/* Call button */}
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-3 sm:py-4 rounded-xl mb-3 sm:mb-4 shadow-lg transform hover:scale-105 transition-transform">
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <span className="text-xl sm:text-2xl">📞</span>
                      <div>
                        <div className="font-bold text-base sm:text-lg">Call (555) FIX-FAST</div>
                        <div className="text-amber-100 text-xs sm:text-sm">Free Estimates!</div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews section */}
                  <div className="text-center bg-yellow-50 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <span className="text-yellow-400 text-lg sm:text-xl">⭐⭐⭐⭐⭐</span>
                    </div>
                    <div className="text-gray-700 font-semibold text-sm sm:text-base">4.9/5 Stars</div>
                    <div className="text-gray-600 text-xs sm:text-sm">(89 Google Reviews)</div>
                    <div className="text-amber-600 text-xs sm:text-sm font-medium mt-1">🛠️ Licensed & Insured</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                  ✅ Same Day Service
                </div>
                <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                  🏆 15+ Years Experience
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Trusted by Leading Handyman Services
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Join successful handyman businesses already growing with Forte websites
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clientCompanies.map((company, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{company.name}</h3>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Handymen Need a Specialized Website — Not Just Any Web Designer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Most designers build generic sites. We build sites that bring in service requests. Your clients need help right now — they search "handyman near me" and expect fast answers, trust, and clarity.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {handymanChallenges.map((challenge, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 h-full shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{challenge.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {challenge.title}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-red-600 font-medium">📉 Problem:</span>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{challenge.problem}</p>
                    </div>
                    <div>
                      <span className="text-green-600 font-medium">✅ Forte Solution:</span>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{challenge.solution}</p>
                    </div>
                  </div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Essential Features for Every <span className="text-amber-600">Handyman Website</span> We Build
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                All Forte handyman websites are built to convert service searches into real jobs
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "📞", title: "Tap-to-Call + Instant Quote Buttons", desc: "One-tap calling and quote requests on every page" },
              { icon: "🗺️", title: "Zip Code / Service Area Targeting", desc: "Local SEO optimized for your specific service areas" },
              { icon: "📸", title: "Before/After Project Galleries", desc: "Showcase your best work to build trust and credibility" },
              { icon: "⭐", title: "Real Reviews from Satisfied Clients", desc: "Google Reviews integration and testimonial display" },
              { icon: "🔧", title: "Service List with Visual Examples", desc: "Clear service descriptions with pricing and examples" },
              { icon: "⚡", title: "Fast-Loading on 4G Mobile", desc: "Optimized for mobile users searching for quick fixes" },
              { icon: "🛡️", title: "Trust Badges: Insured, Licensed, Reviewed", desc: "Display credentials and certifications prominently" },
              { icon: "📱", title: "Online Form + Option to Text or Email", desc: "Multiple contact methods for customer convenience" }
            ].map((feature, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center h-full shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.desc}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                📊 Real Results Case Study
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Oklahoma Handyman Tripled Monthly Calls
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                How Red River Handyman transformed their business with a professional website
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-4xl mx-auto">
            <SimpleAnimatedCard>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      🛠️ Red River Handyman | Norman, OK
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Before: Basic site builder template with no call-to-action and only a single-page layout.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      After working with Forte:
                    </p>
                  </div>
                  <div className="bg-amber-100 dark:bg-amber-900/20 rounded-xl p-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-amber-600 mb-2">212%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">More Local Traffic</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">#1</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Ranking for "handyman in Norman OK"</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">3.3x</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Increase in Service Requests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">$4,500</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Added Monthly Recurring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">6</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Ongoing Monthly Clients</div>
                  </div>
                </div>

                <div className="text-center">
                  <Link 
                    href="/case-studies" 
                    className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
                  >
                    📈 Read Full Case Study →
                  </Link>
                </div>
              </div>
            </SimpleAnimatedCard>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Forte vs Other Web Designers
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                See why handyman professionals choose Forte for their websites
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-3 gap-4 p-6 bg-gray-50 dark:bg-gray-600">
                <div></div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-600 dark:text-gray-300">Other Designers</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-amber-600 dark:text-amber-400">Forte Web Designs</h3>
                </div>
              </div>
              
              {comparisonFeatures.map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-4 p-6 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
                  <div className="font-medium text-gray-900 dark:text-white">
                    {item.feature}
                  </div>
                  <div className="text-center">
                    {item.otherDesigners ? 
                      <span className="text-green-500 text-xl">✓</span> : 
                      <span className="text-red-500 text-xl">✗</span>
                    }
                  </div>
                  <div className="text-center">
                    {item.forte ? 
                      <span className="text-green-500 text-xl">✓</span> : 
                      <span className="text-red-500 text-xl">✗</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                Your Behind-the-Scenes Digital Handyman
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Your customers count on you to fix things they can't see or don't understand. Your website has the same behind-the-scenes needs. Forte Care™ acts as your digital handyman – fixing broken links, updating security, optimizing performance – handling all the technical maintenance so your site keeps bringing in service calls without you worrying about it.
              </p>
              <Link
                href="/solutions/care"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <span>Get Your Digital Handyman</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      </SimpleScrollReveal>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Common questions from handyman business owners
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                🧰 Ready to Book More Jobs From Your Website?
              </h2>
              <p className="text-xl mb-8 text-amber-100">
                Don't settle for a basic website. Get a handyman website built to bring in leads, build trust, and win jobs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact?industry=handyman"
                  className="bg-white text-amber-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                >
                  Get My Handyman Website Quote
                </Link>
                <Link 
                  href="/checkup?industry=handyman"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-amber-600 transition-colors text-lg"
                >
                  Free Website Audit for Handymen
                </Link>
              </div>
              
              <p className="text-sm text-amber-200 mt-4">
                💡 Free consultation • Live in 7-10 days
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
