
import { Metadata } from 'next';
import { PricingPage } from "@/components/pricing";
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';
import ROICalculator from '@/components/ROICalculator';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Explore our transparent pricing options and packages designed to fit businesses of all sizes.',
};

export default function Pricing() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section - Mobile Optimized */}
        <div className="text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          {/* Urgency Banner */}
          <div className="mb-6">
            <div className="inline-block rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 text-sm font-semibold shadow-lg">
              🚀 No Setup Fees - Start Next Week
            </div>
          </div>
          
          <h2 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-center mb-6">
            Choose Your Growth Plan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4">
            Start with a Forte Foundation™ website, then add services as your business grows. Clear, predictable monthly pricing with no surprises.
          </p>
          
          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
              <span>✓</span>
              <span className="text-sm font-medium">Same Day Response Guaranteed</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <span>📞</span>
              <span className="text-sm font-medium">(817) 873-6655</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing/which-plan" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
              Not sure which plan? Get personalized recommendations →
            </Link>
          </div>
        </div>

        {/* Decision Helper Section */}
        <div className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
                Not Sure Which Plan You Need? 🤔
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Just Starting */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🌱</div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Just Starting Out?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      New business or replacing an old website
                    </p>
                    <div className="bg-primary-50 dark:bg-primary-900/30 rounded-lg p-4">
                      <div className="text-primary-700 dark:text-primary-300 font-semibold text-lg">
                        Forte Foundation™
                      </div>
                      <div className="text-primary-600 dark:text-primary-400 text-sm">
                        $200/month
                      </div>
                    </div>
                  </div>
                </div>

                {/* Growing Business */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-primary-500 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-4">📈</div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Ready to Grow?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Need more pages or want to get found online
                    </p>
                    <div className="bg-primary-50 dark:bg-primary-900/30 rounded-lg p-4">
                      <div className="text-primary-700 dark:text-primary-300 font-semibold text-lg">
                        Foundation + SEO
                      </div>
                      <div className="text-primary-600 dark:text-primary-400 text-sm">
                        $500-700/month
                      </div>
                    </div>
                  </div>
                </div>

                {/* Established Business */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Scale Everything?
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                      Dominate your market with full digital presence
                    </p>
                    <div className="bg-primary-50 dark:bg-primary-900/30 rounded-lg p-4">
                      <div className="text-primary-700 dark:text-primary-300 font-semibold text-lg">
                        Pro + All Services
                      </div>
                      <div className="text-primary-600 dark:text-primary-400 text-sm">
                        $1,200-1,850/month
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Decision Flow */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  Quick Decision Flow:
                </h4>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold">1</span>
                    <span className="text-gray-700 dark:text-gray-300">Pick Foundation or Pro</span>
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold">2</span>
                    <span className="text-gray-700 dark:text-gray-300">Add SEO if you want Google traffic</span>
                  </div>
                  <span className="text-gray-400">→</span>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold">3</span>
                    <span className="text-gray-700 dark:text-gray-300">Add PPC/Social when ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PricingPage />
        
        {/* ROI Calculator Section */}
        <ROICalculator />
        
        {/* Additional Help Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Need Help Choosing?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  📋 Take Our Business Quiz
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Answer a few questions about your business and get a personalized plan recommendation.
                </p>
                <Link href="/pricing/which-plan" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                  Get My Recommendation →
                </Link>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  💬 Talk to an Expert
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Schedule a quick call to discuss your specific needs and get custom pricing.
                </p>
                <Link href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                  Schedule a Call →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
