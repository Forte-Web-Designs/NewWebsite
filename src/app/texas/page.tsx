import { Metadata } from 'next';
import Link from 'next/link';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import SimpleAnimatedCard from '@/components/animations/SimpleAnimatedCard';

export const metadata: Metadata = {
  title: 'Texas Web Design Services — Custom Websites & Growth Systems | Forte Web Designs',
  description: 'Forte Web Designs builds custom-coded websites and growth systems for Texas businesses. Serving Dallas, Fort Worth, Plano, Frisco, Arlington, and Irving. 100% USA-built. No templates — just results.',
  keywords: 'Texas web design, Dallas web design, Fort Worth web design, Plano web design, Frisco web design, Arlington web design, Irving web design, custom Texas websites, local Texas SEO',
  openGraph: {
    title: 'Texas Web Design Services — Custom Websites & Growth Systems | Forte Web Designs',
    description: 'Forte Web Designs builds custom-coded websites and growth systems for Texas businesses. 100% USA-built. No templates — just results.',
    type: 'website',
  },
};

export default function TexasPage() {
  const texasStats = [
    {
      icon: '👥',
      number: '30M+',
      label: 'Population'
    },
    {
      icon: '🏢',
      number: '2.8M+',
      label: 'Businesses'
    },
    {
      icon: '🌆',
      number: '25+',
      label: 'Metro Areas'
    },
    {
      icon: '💰',
      number: '#2',
      label: 'U.S. Economy'
    }
  ];

  const texasCities = [
    {
      name: 'Dallas',
      problem: 'Fortune 500s dominate search results with massive marketing budgets.',
      solution: 'Lightning-fast custom code + advanced local SEO that outranks template competitors.',
      impact: 'Stand toe-to-toe with corporate giants in Big D.',
      href: '/texas/dallas'
    },
    {
      name: 'Fort Worth',
      problem: 'Local businesses risk being overshadowed while balancing tradition with digital innovation.',
      solution: 'Authentic Texas branding + mobile-first design tailored to Fort Worth values.',
      impact: 'Capture more local trust while staying modern.',
      href: '/texas/fort-worth'
    },
    {
      name: 'Plano',
      problem: 'Competing against Fortune 500 marketing budgets in a corporate HQ hub.',
      solution: 'Enterprise-level custom websites with secure, scalable infrastructure.',
      impact: 'A professional digital presence that wins client confidence.',
      href: '/texas/plano'
    },
    {
      name: 'Frisco',
      problem: 'Explosive growth = new competitors launching every day.',
      solution: 'Fast-launching websites with built-in local SEO to dominate "new business" searches.',
      impact: 'Stay ahead of fresh competition in the fastest-growing city in the U.S.',
      href: '/texas/frisco'
    },
    {
      name: 'Arlington',
      problem: 'Sports capital businesses face massive traffic spikes during events.',
      solution: 'High-performance architecture + mobile-first optimization.',
      impact: 'Websites that scale under pressure, keeping leads flowing year-round.',
      href: '/texas/arlington'
    },
    {
      name: 'Irving',
      problem: 'Lost in the shuffle between Dallas and Fort Worth.',
      solution: 'Custom-coded local SEO + service-specific landing pages.',
      impact: 'Get noticed in a competitive in-between market.',
      href: '/texas/irving'
    }
  ];

  const whyForte = [
    {
      icon: '🏆',
      title: 'Local Market Knowledge',
      description: 'We\'re Texas-based. From Dallas competition to Fort Worth authenticity, we understand your market and build strategies that fit your reality.'
    },
    {
      icon: '⚡',
      title: 'Custom Code Performance',
      description: 'No WordPress. No Wix. No Squarespace. 100% hand-coded for speed, security, and top search rankings.'
    },
    {
      icon: '🎯',
      title: 'Texas-Sized Results',
      description: 'Websites that book more jobs, capture more leads, and grow your revenue — built specifically for Texas businesses.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-blue-900 to-red-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <SimpleScrollReveal direction="up" delay={100}>
              <div className="inline-flex items-center gap-2 bg-red-800/50 text-red-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🌟 Texas Web Design & Growth Systems
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Texas Web Design That Builds <span className="text-red-300">Local Market Leaders</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto">
                Every Texas market has unique challenges. From Dallas corporate giants to Fort Worth authenticity, Forte builds websites and growth systems designed to <strong>dominate local search, capture more leads, and scale your business with measurable results.</strong>
              </p>
              
              <div className="bg-blue-800/30 rounded-lg p-4 mb-8 max-w-3xl mx-auto">
                <p className="text-blue-100 font-semibold">
                  🚀 Proudly Texas-based. 100% USA-built. No WordPress templates — only fast, secure, custom-coded systems.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-red-700 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg"
                >
                  Get Free Texas Market Analysis →
                </Link>
                <Link
                  href="tel:8178736655"
                  className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-red-700 transition-colors text-center"
                >
                  Call (817) 873-6655
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Texas by the Numbers */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Texas by the Numbers
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {texasStats.map((stat, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 font-semibold">{stat.label}</div>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Major Texas Markets */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Major Texas Markets
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Each Texas city has distinct business challenges that require custom solutions, not generic template websites.
              </p>
            </div>
          </SimpleScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {texasCities.map((city, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{city.name}</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">Problem:</h4>
                      <p className="text-gray-600 dark:text-gray-400">{city.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Solution:</h4>
                      <p className="text-gray-600 dark:text-gray-400">{city.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-green-600 mb-2">Impact:</h4>
                      <p className="text-gray-600 dark:text-gray-400">{city.impact}</p>
                    </div>
                  </div>
                  
                  <Link
                    href={city.href}
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    See {city.name} Solutions →
                  </Link>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Texas Businesses Choose Forte */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Why Texas Businesses Choose Forte
              </h2>
            </div>
          </SimpleScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyForte.map((reason, index) => (
              <SimpleAnimatedCard key={index}>
                <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <div className="text-4xl mb-6">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </SimpleAnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Forte Care Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={100}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Forte Care™: Website Maintenance, Texas Style
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                You wouldn't skip regular maintenance on your truck — it keeps things running strong. Your website is the same. Forte Care™ provides <strong>ongoing updates, security, and performance tuning</strong> so your website never breaks down when business is on the line.
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Dominate Your Texas Market?
              </h2>
              <p className="text-xl mb-8 text-red-100 leading-relaxed">
                Whether you're competing with Dallas giants, growing fast in Frisco, or building trust in Fort Worth — Forte has a clear growth path for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/contact"
                  className="bg-white text-red-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-center shadow-lg"
                >
                  Get Free Texas Market Analysis →
                </Link>
                <Link
                  href="tel:8178736655"
                  className="border-2 border-white bg-transparent text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-red-600 transition-colors text-center"
                >
                  Call (817) 873-6655
                </Link>
              </div>
              
              <p className="text-red-100">
                Serving businesses across <strong>Dallas, Fort Worth, Plano, Frisco, Arlington, Irving, and beyond.</strong>
              </p>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
