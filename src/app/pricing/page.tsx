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
            Predictable Monthly Plans. No Surprises.
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Choose from transparent monthly plans or get a one-time website build. All prices include everything you see - no hidden fees, no surprise charges, no contracts.
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
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
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
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
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
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
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
                  <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</span>
                    <span className="text-gray-700 dark:text-gray-300">Pick Foundation or Pro</span>
                  </div>
                  <span className="text-gray-400 hidden sm:block">→</span>
                  <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</span>
                    <span className="text-gray-700 dark:text-gray-300">Add SEO if you want Google traffic</span>
                  </div>
                  <span className="text-gray-400 hidden sm:block">→</span>
                  <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</span>
                    <span className="text-gray-700 dark:text-gray-300">Add PPC/Social when ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PricingPage />
        
        {/* ROI Snippets */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              See Your Potential ROI
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Foundation ROI */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-3xl mb-3">🌱</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Foundation™ ROI</h4>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">300% ROI</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Average client sees 3x more leads within 60 days
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <div className="text-xs text-green-700 dark:text-green-400">
                      <strong>Real Example:</strong> Local contractor went from 2 to 8 monthly leads
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pro ROI */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-primary-500">
                <div className="text-center">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      HIGHEST ROI
                    </span>
                  </div>
                  <div className="text-3xl mb-3">📈</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pro™ ROI</h4>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">500% ROI</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    More pages = more opportunities to convert visitors
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <div className="text-xs text-green-700 dark:text-green-400">
                      <strong>Real Example:</strong> Service business increased revenue by $4,200/month
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Growth Bundle ROI */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-3xl mb-3">🚀</div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Growth Bundle ROI</h4>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">800% ROI</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Website + SEO = compound growth month over month
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <div className="text-xs text-green-700 dark:text-green-400">
                      <strong>Real Example:</strong> HVAC company grew from $8K to $25K monthly revenue
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                *ROI calculations based on average client performance over 12 months
              </p>
            </div>
          </div>
        </div>
        
        {/* Feature Comparison Table */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Compare Our Plans Side-by-Side
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                See exactly what's included with each plan and find the perfect fit for your business.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">Features</th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white">Foundation™<br/><span className="text-sm font-normal text-gray-600 dark:text-gray-400">$200/month</span></th>
                      <th className="text-center py-8 px-6 font-semibold text-gray-900 dark:text-white relative">
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                          <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">POPULAR</span>
                        </div>
                        <div className="mt-3">
                          Pro™<br/><span className="text-sm font-normal text-gray-600 dark:text-gray-400">$350/month</span>
                        </div>
                      </th>
                      <th className="text-center py-4 px-6 font-semibold text-gray-900 dark:text-white">Growth Bundle<br/><span className="text-sm font-normal text-gray-600 dark:text-gray-400">$500/month</span></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Website Pages</td>
                      <td className="py-4 px-6 text-center text-gray-600 dark:text-gray-400">5 Pages</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400 font-semibold">10 Pages</td>
                      <td className="py-4 px-6 text-center text-gray-600 dark:text-gray-400">5 Pages + SEO</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Load Time Guarantee</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">✓ &lt;2 seconds</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">✓ &lt;2 seconds</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">✓ &lt;2 seconds</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">SEO Foundation</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">✓ Built-in</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">✓ Enhanced</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">✓ + Monthly Optimization</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Google Analytics Setup</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">✓ Basic</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">✓ Advanced + Conversion Tracking</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">✓ Advanced + Monthly Reports</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Content Strategy & Blog Posts</td>
                      <td className="py-4 px-6 text-center text-gray-400 dark:text-gray-600">Add-on Available</td>
                      <td className="py-4 px-6 text-center text-gray-400 dark:text-gray-600">Add-on Available</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">✓ 4 Posts/Month</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Support Level</td>
                      <td className="py-4 px-6 text-center text-gray-600 dark:text-gray-400">Email Support</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">Priority Email Support</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">Priority Support + Monthly Calls</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Setup Timeline</td>
                      <td className="py-4 px-6 text-center text-gray-600 dark:text-gray-400">2-3 weeks</td>
                      <td className="py-4 px-6 text-center text-gray-600 dark:text-gray-400">3-4 weeks</td>
                      <td className="py-4 px-6 text-center text-gray-600 dark:text-gray-400">3-4 weeks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Value Demonstrations */}
            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
                Real Results from Real Clients
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">SC</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Summit Consulting</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Foundation™ Plan</p>
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-400 text-sm italic mb-4">
                    "ROI was immediate. First month with the new site, we booked $15,000 in new consulting contracts. Best $200/month I've ever spent."
                  </blockquote>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">750%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">First Month ROI</div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-primary-500">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">AD</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Alpine Dental</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pro™ Plan</p>
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-400 text-sm italic mb-4">
                    "Website pays for itself. We're getting 3-4 new patient calls per week now. The advanced analytics show exactly where patients come from."
                  </blockquote>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">$28k</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">Additional Revenue/Quarter</div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">ML</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Modern Landscapes</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Growth Bundle</p>
                  </div>
                  <blockquote className="text-gray-600 dark:text-gray-400 text-sm italic mb-4">
                    "The SEO content is incredible. We rank #1 for 'landscaping near me' and book $50k+ projects monthly through the website."
                  </blockquote>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">1200%</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">Annual ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* ROI Calculator Section */}
        <ROICalculator />
        
        {/* Forte Ecosystem Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/30 px-4 py-2 rounded-full mb-6">
                <span className="text-2xl">🌐</span>
                <span className="font-semibold text-primary-700 dark:text-primary-300">The Complete System</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                The Forte Ecosystem™: Your Entire Digital Presence, Handled
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                You're not just getting a website. You're stepping into a powerful, done-for-you system that's built to grow with you.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
              <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-8 text-center">
                "At Forte, we don't stop at launch. We become your behind-the-scenes digital team."
              </blockquote>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      We start with <strong>Forte Foundation™</strong>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Your fast, secure, hand-coded website designed to convert visitors into customers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Then we evolve into <strong>Forte Pro™</strong>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Full-service support, analytics, and unlimited updates to keep things sharp.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 dark:text-primary-400 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      We drive traffic through <strong>SEO</strong> and <strong>PPC</strong> strategies
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Built into your plan, aligned with your goals. No searching around. No tech headaches. Just one unified system.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 rounded-xl border border-primary-200 dark:border-primary-800">
                <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Whether you're a startup or a scaling business, Forte adapts with you.</strong>
                </p>
                <p className="text-center text-gray-600 dark:text-gray-400">
                  We build, optimize, and manage it all — so you can stay focused on your business.
                </p>
              </div>
            </div>

            {/* Visual Flow */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Foundation</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Fast, secure website that converts</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Pro</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Premium support & analytics</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">SEO / PPC</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Targeted traffic & lead generation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔧</span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Ongoing Support</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Continuous optimization & growth</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Ready to experience the complete Forte ecosystem?
              </p>
              <Link href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold text-lg">
                Start Your Journey with Forte →
              </Link>
            </div>
          </div>
        </div>
        
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

        {/* FAQ Accordion Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  💰 What's included in the monthly pricing?
                </summary>
                <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                  <p>Everything you see listed! No hidden fees, no surprise charges. Monthly plans include hosting, security, updates, monitoring, and unlimited content changes. You get a dedicated team, not just a website.</p>
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  🤔 Monthly vs One-Time: Which should I choose?
                </summary>
                <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                  <p><strong>Choose Monthly if:</strong> You want ongoing support, regular updates, and plan to grow your online presence.</p>
                  <p className="mt-2"><strong>Choose One-Time if:</strong> You prefer to own everything outright and handle your own maintenance/updates.</p>
                  <p className="mt-2 text-sm text-blue-600 dark:text-blue-400"><strong>Our recommendation:</strong> 90% of clients prefer monthly for the peace of mind and growth support.</p>
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  📈 How quickly will I see results?
                </summary>
                <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                  <p><strong>Website:</strong> Live within 2-3 weeks with immediate improved user experience.</p>
                  <p className="mt-2"><strong>SEO:</strong> Initial improvements in 6-12 weeks, full results in 3-6 months.</p>
                  <p className="mt-2"><strong>PPC:</strong> Traffic starts immediately, optimization improves over 4-8 weeks.</p>
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  🔒 What if I want to cancel?
                </summary>
                <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                  <p>No long-term contracts required. Cancel anytime with 30 days notice. If you have a one-time website, you keep everything. If you have a monthly plan, we'll help transition your site to your own hosting if needed.</p>
                </div>
              </details>

              {/* FAQ Item 5 */}
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  🛠️ What kind of support do I get?
                </summary>
                <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                  <p>Same-day response guaranteed during business hours. Email, phone, and text support. Our Forte Care™ includes unlimited content updates, security monitoring, performance optimization, and technical support.</p>
                </div>
              </details>

              {/* FAQ Item 6 */}
              <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <summary className="p-6 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-xl transition-colors">
                  📞 Can I talk to someone before deciding?
                </summary>
                <div className="px-6 pb-6 text-gray-700 dark:text-gray-300">
                  <p>Absolutely! Call <strong>(817) 873-6655</strong> or schedule a free consultation. We'll review your current situation and recommend the best plan for your specific needs and budget.</p>
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* Sticky CTA Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Growing?
            </h3>
            <p className="text-lg mb-8 text-primary-100">
              Join 25+ businesses already growing with Forte. Same-day response guaranteed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Get Started Today
              </Link>
              <Link 
                href="tel:8178736655" 
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-700 transition-colors text-lg"
              >
                Call (817) 873-6655
              </Link>
            </div>
            
            <p className="text-sm text-primary-200 mt-4">
              💡 Not sure which plan? <Link href="/pricing/which-plan" className="underline hover:no-underline">Take our 2-minute quiz</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
