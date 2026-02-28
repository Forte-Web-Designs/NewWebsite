import { Metadata } from 'next';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { Icon } from '@/components/images/Icon';

export const metadata: Metadata = {
  title: 'Modern Bungalow Case Study | Home Goods E-commerce Automation | Forte Web Designs',
  description: 'How we automated order processing and QuickBooks sync for Modern Bungalow home goods retailer, saving 20+ hours per week and achieving 100% order accuracy while maintaining exceptional customer service.',
  openGraph: {
    title: 'Modern Bungalow Case Study - E-commerce Automation Success',
    description: 'Automated order processing system for premium home goods retailer with Shopify-QuickBooks integration.',
    images: ['/images/case-studies/modern-bungalow-logo.png'],
  },
};

export default function ModernBungalowCaseStudy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Breadcrumb */}
      <section className="py-6 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-blue-600 dark:hover:text-blue-400">Case Studies</Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">Modern Bungalow</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal direction="up">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                Case Study
              </span>
              <h1 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
                Modern Bungalow
              </h1>
              <p className="text-xl lg:text-2xl text-emerald-100 mb-8">
                Automated E-commerce Order Processing & Accounting Sync
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Icon name="clock" className="w-5 h-5" />
                  <span>8 weeks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="services" className="w-5 h-5" />
                  <span>E-commerce</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="check" className="w-5 h-5" />
                  <span>20+ hrs/week saved</span>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Video Walkthrough */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Video Walkthrough
              </h2>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <video
                  controls
                  className="w-full"
                  poster="/images/case-studies/modern-bungalow-logo.png"
                >
                  <source src="/video-walkthroughs/Automating Customer Communication for E-Commerce Success.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                The Challenge
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Modern Bungalow, a premium home goods and furniture retailer specializing in contemporary design, was experiencing rapid growth through their Shopify store. However, their success was creating operational bottlenecks-every order required manual data entry into QuickBooks, customer communications were handled individually, and order fulfillment workflows were completely manual processes consuming entire workdays.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                The native Shopify-QuickBooks integration wasn't suited for their sophisticated business model-it created duplicate entries, couldn't handle their custom pricing structures for trade customers, and failed to sync properly during high-volume sales periods. With their focus on quality home furnishings and exceptional customer experience, their team was spending 20+ hours per week on repetitive administrative tasks instead of growing the business and serving customers.
              </p>
            </SimpleScrollReveal>

            <SimpleScrollReveal direction="up" delay={100}>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Client Feedback
              </h2>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 border-2 border-emerald-200 dark:border-emerald-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                      <Icon name="quote" className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 italic">
                      "Seth is super responsive and very proactive with communication throughout the stages of the project. He's super knowledgeable about automations, n8n, scripting and webhooks. He's very good at thinking through the logic of how to best automate a process, and then executing on that vision. Definitely will work with him again."
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        Modern Bungalow
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="star" className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Key Features
              </h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="check" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Intelligent Order Sync
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Real-time order synchronization from Shopify to QuickBooks with automatic tax allocation, fee calculation, and proper revenue recognition-handling complex scenarios that native integrations miss.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="services" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Automated Email Workflows
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Context-aware email automation that sends personalized order confirmations, shipping updates, and follow-up sequences based on customer behavior and order history.
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <Icon name="puzzle" className="w-6 h-6 text-white" style={{filter: 'brightness(0) invert(1)'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Multi-Channel Inventory Management
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Centralized inventory tracking that prevents overselling across Shopify, wholesale channels, and in-person sales with instant updates and low-stock alerts.
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                Results & Impact
              </h2>
            </SimpleScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                    95%
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Reduction in manual data entry
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                    20+ hrs
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Per week saved on order processing
                  </p>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                    100%
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Order accuracy with zero duplicates
                  </p>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-12">
                How It Works
              </h2>
            </SimpleScrollReveal>

            <div className="space-y-8">
              <SimpleScrollReveal direction="up" delay={0}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        Order Capture & Validation
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        When a customer places an order on Shopify, the system immediately validates payment, checks inventory availability, and initiates the automated workflow-all within seconds of order placement.
                      </p>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={100}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        Smart Accounting Sync
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Order data is intelligently processed and synced to QuickBooks with proper chart of account mapping, tax allocation, and fee calculations. The system handles complex scenarios like partial refunds, exchanges, and multi-item discounts that native integrations can't manage.
                      </p>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>

              <SimpleScrollReveal direction="up" delay={200}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        Automated Customer Communication
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Personalized email workflows trigger automatically based on order status, customer history, and product type. From order confirmation to shipping notifications to post-purchase follow-ups-all handled without manual intervention.
                      </p>
                    </div>
                  </div>
                </div>
              </SimpleScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SimpleScrollReveal direction="up">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-8 lg:p-12 border border-emerald-200 dark:border-emerald-800">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
                  The Business Impact
                </h3>
                <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 text-center leading-relaxed">
                  This automation system transformed Modern Bungalow's operations, allowing them to maintain their commitment to exceptional customer service while scaling efficiently. The team went from spending entire days on manual order processing to having everything handled automatically-freeing them to focus on curating beautiful home goods, building customer relationships, and expanding their contemporary furniture collection. The system now processes hundreds of orders weekly with zero manual intervention while maintaining the attention to detail their brand is known for.
                </p>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SimpleScrollReveal direction="up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Automate Your E-commerce Operations?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              See how we can build a custom automation solution for your Shopify store.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 hover:bg-gray-50 rounded-lg font-semibold transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              Schedule a Consultation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </SimpleScrollReveal>
        </div>
      </section>
    </div>
  );
}
