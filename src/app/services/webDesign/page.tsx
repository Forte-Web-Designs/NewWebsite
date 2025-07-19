import { Icon } from '@/components/images/Icon';
import Link from 'next/link';
import { Metadata } from 'next';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import { BackgroundImage } from '@/components/images/BackgroundImage';
import LightButton from '@/components/LightButton';
import DarkButton from '@/components/DarkButton';
import { PricingPage } from '@/components/pricing';

export const metadata: Metadata = {
  title: "Custom Website Design – Built for Speed, Security & Growth | Forte Web Designs",
  description:
    "Hand-coded websites that outperform templates every time. No WordPress, no page builders – just clean, fast, secure websites built from scratch for real business growth.",
};

export default function WebsiteDesignPage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto text-center">
            <SimpleScrollReveal direction="up" delay={200}>
              <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full mb-6 border border-blue-200 dark:border-blue-700">
                <Icon name="star" className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Custom Website Design – Built for Speed, Security & Growth
                </span>
              </div>
            
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-roboto leading-tight dark:text-white mb-6 max-w-5xl mx-auto">
                Hand-Coded Websites That <span className="text-blue-600 dark:text-blue-400">Outperform Templates</span> Every Time
              </h1>
              
              <p className="text-xl sm:text-2xl font-normal text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                No page builders. No WordPress. Just clean, fast, secure websites built from scratch for real business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <LightButton href="/contact">Get a Quote</LightButton>
                <Link
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors px-6 py-3 rounded-lg text-lg font-semibold"
                  href="/pricing"
                >
                  Compare Website Plans
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Why Your Website Matters Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={300}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Your Website Is More Than Just a Digital Brochure
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  In 2025, customers judge your business based on how your website looks, loads, and functions. 
                  A slow, clunky, outdated site is like handing them a broken business card.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  With Forte Web Designs, you get a high-performance website that:
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <Icon name="zap" className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Loads instantly</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Lightning-fast performance that keeps visitors engaged</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <Icon name="smartphone" className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Looks great on every device</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Perfect display from mobile to desktop</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <Icon name="trending-up" className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Converts more visitors into customers</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Optimized for turning visitors into customers</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <Icon name="shield" className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Stays secure with no plugins or backdoors</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">No vulnerable plugins or security risks</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg">
                      <Icon name="users" className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✅ Scales easily as your business grows</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Easily scales as your needs expand</p>
                    </div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* What Makes Our Websites Different */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={400}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  We Don't Use WordPress. We Hand-Code Everything.
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Why? Because you deserve better than bloated templates and hackable plugins.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="text-left py-6 px-6 font-bold text-gray-900 dark:text-white text-lg">Feature</th>
                        <th className="text-center py-6 px-6 font-bold text-green-600 dark:text-green-400 text-lg">Forte Website</th>
                        <th className="text-center py-6 px-6 font-bold text-red-600 dark:text-red-400 text-lg">Page Builders (Wix, WordPress, etc.)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Speed</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl">⚡</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Lightning-fast</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl">🐢</span>
                            <span className="text-red-600 dark:text-red-400 font-semibold">Slower due to bloat</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Security</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl">🔐</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">No plugins, no vulnerabilities</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl">🚨</span>
                            <span className="text-red-600 dark:text-red-400 font-semibold">Prone to hacks/updates</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">SEO-Ready</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">✅</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Clean code, structured markup</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl">⚠️</span>
                            <span className="text-red-600 dark:text-red-400 font-semibold">Often messy & unoptimized</span>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Customization</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl">🧱</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Full control over every pixel</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-2xl">🚧</span>
                            <span className="text-red-600 dark:text-red-400 font-semibold">Template-restricted</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-6 px-6 font-semibold text-gray-900 dark:text-white">Ownership</td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-green-500 text-xl">✅</span>
                            <span className="text-green-600 dark:text-green-400 font-semibold">Fully yours</span>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-red-500 text-xl">🚫</span>
                            <span className="text-red-600 dark:text-red-400 font-semibold">Platform-locked</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Website Packages Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={500}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Website Packages
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
                  <strong>Monthly Plans:</strong> 12-month minimum commitment, then month-to-month. Includes Forte Care™ support, hosting, and unlimited updates.<br/>
                  <strong>One-Time Plans:</strong> Pay once and own your website. Forte Care™ available as optional maintenance service.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th className="text-left py-6 px-6 font-bold text-gray-900 dark:text-white text-lg">Feature</th>
                        <th className="text-center py-6 px-6 font-bold text-gray-900 dark:text-white text-lg">
                          Foundation<br/>
                          <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">$200/mo</span><br/>
                          <span className="text-xs text-gray-500 dark:text-gray-400">12-month minimum</span>
                        </th>
                        <th className="text-center py-6 px-6 font-bold text-gray-900 dark:text-white text-lg">
                          Pro ⭐<br/>
                          <span className="text-blue-600 dark:text-blue-400 text-2xl font-bold">$350/mo</span><br/>
                          <span className="text-xs text-gray-500 dark:text-gray-400">12-month minimum</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Pages Included</td>
                        <td className="py-4 px-6 text-center font-semibold text-gray-900 dark:text-white">5 pages</td>
                        <td className="py-4 px-6 text-center font-semibold text-gray-900 dark:text-white">10 pages</td>
                      </tr>
                      <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Hosting + Domain</td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-green-500 text-xl">✅</span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-green-500 text-xl">✅</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Mobile-Responsive Design</td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-green-500 text-xl">✅</span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-green-500 text-xl">✅</span>
                        </td>
                      </tr>
                      <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">SEO-Ready Foundation</td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-green-500 text-xl">✅</span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-green-500 text-xl">✅</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Basic Analytics</td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-green-500 text-xl">✅</span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-green-500 text-xl">✅</span>
                        </td>
                      </tr>
                      <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Conversion Tracking</td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-red-500 text-xl">❌</span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-green-500 text-xl">✅</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Priority Support</td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-red-500 text-xl">❌</span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-green-500 text-xl">✅</span>
                        </td>
                      </tr>
                      <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">Forte Care™ Included</td>
                        <td className="py-4 px-6 text-center">
                          <span className="text-green-500 text-xl">✅</span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex flex-col items-center">
                            <span className="text-green-500 text-xl">✅</span>
                            <span className="text-xs text-gray-600 dark:text-gray-400">(with faster response times)</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-700">
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block w-full">
                        Choose Foundation
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block w-full">
                        Choose Pro
                      </Link>
                    </div>
                  </div>
                  <div className="text-center">
                    <Link href="/pricing" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                      View Complete Pricing Details & One-Time Options
                    </Link>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Payment Options Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={600}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Choose How You Pay: Monthly or One-Time
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                  We offer flexible payment options depending on how you want to invest in your business
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon name="calendar" className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Monthly Plan</h3>
                    <p className="text-gray-600 dark:text-gray-400">No big upfront cost, includes Forte Care™</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">12-month commitment, then month-to-month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Includes Forte Care™ maintenance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Premium hosting included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Unlimited content updates</span>
                    </li>
                  </ul>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$200-$350</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">per month</div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon name="credit-card" className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">One-Time Payment</h3>
                    <p className="text-gray-600 dark:text-gray-400">Own your site outright, optional support available</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Full ownership of your website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">No ongoing commitments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Optional Forte Care™ available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Add hosting as needed</span>
                    </li>
                  </ul>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">$2,500-$4,300</div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">one-time investment</div>
                  </div>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Built for SEO Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={700}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  A Beautiful Website Isn't Enough — It Needs to Be Found
                </h2>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                <div className="mb-8">
                  <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Icon name="search" className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                    Every Forte website is coded with search visibility in mind — clean structure, fast load times, and mobile optimization. 
                    It's not just about how it looks, but how it performs on Google.
                  </p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-8">
                  <p className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                    Want to attract more traffic and rank higher? Our SEO services plug directly into your Forte site.
                  </p>
                  <Link href="/services/seo" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block">
                    [ Learn More About SEO ]
                  </Link>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Forte Care Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={800}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Included With Every Monthly Website Plan: Forte Care™
                </h2>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-8 max-w-3xl mx-auto">
                  We don't just build your website — we maintain it like a high-performance machine. Forte Care™ ensures your site stays fast, secure, and optimized.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Included With Forte Care™:
                </h3>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <Icon name="edit" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">• Unlimited content edits</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Keep your content fresh and current</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <Icon name="server" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">• Hosting + uptime monitoring</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Premium hosting with 24/7 monitoring</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <Icon name="zap" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">• Speed & performance optimization</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Continuous performance monitoring</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <Icon name="shield" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">• SSL & security updates</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Keep your site secure and up-to-date</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <Icon name="hard-drive" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">• Monthly site backups</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Your data is always protected</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <Icon name="link" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">• Broken link scans</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Maintain a professional user experience</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                      <Icon name="trending-up" className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">• Growth recommendations</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Regular insights and recommendations</p>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <strong>Note:</strong> Forte Care™ is included with all monthly plans. Available as an add-on for one-time builds.
                  </p>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Forte Ecosystem Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={900}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Part of the Forte Ecosystem™ — Built to Grow With You
                </h2>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
                <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
                  Your Forte website is just the beginning. As your business grows, you can easily layer in:
                </p>
                
                {/* Timeline-style graphic */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
                      <Icon name="globe" className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Website</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Your foundation for growth</p>
                  </div>
                  
                  <div className="hidden md:block text-gray-400">
                    <Icon name="arrow-right" className="w-8 h-8" />
                  </div>
                  <div className="md:hidden text-gray-400">
                    <Icon name="arrow-down" className="w-8 h-8" />
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
                      <Icon name="search" className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">[ Forte SEO™ ]</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Get found on Google</p>
                  </div>
                  
                  <div className="hidden md:block text-gray-400">
                    <Icon name="arrow-right" className="w-8 h-8" />
                  </div>
                  <div className="md:hidden text-gray-400">
                    <Icon name="arrow-down" className="w-8 h-8" />
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
                      <Icon name="target" className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">[ Forte PPC™ ]</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Drive leads fast with Google Ads</p>
                  </div>
                  
                  <div className="hidden md:block text-gray-400">
                    <Icon name="arrow-right" className="w-8 h-8" />
                  </div>
                  <div className="md:hidden text-gray-400">
                    <Icon name="arrow-down" className="w-8 h-8" />
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
                      <Icon name="users" className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">[ Forte Social™ ]</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Stay top of mind on social media</p>
                  </div>
                  
                  <div className="hidden md:block text-gray-400">
                    <Icon name="arrow-right" className="w-8 h-8" />
                  </div>
                  <div className="md:hidden text-gray-400">
                    <Icon name="arrow-down" className="w-8 h-8" />
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
                      <Icon name="trending-up" className="w-8 h-8" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Growth</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Scale your business</p>
                  </div>
                </div>
                
                <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                  <p className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                    Every Forte website is designed to scale — no rebuild needed when you're ready to grow.
                  </p>
                  <Link href="/ecosystem" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors inline-block">
                    Explore the Forte Ecosystem™
                  </Link>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Client Success Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container max-w-7xl mx-auto">
            <SimpleScrollReveal direction="up" delay={1000}>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Small Businesses. Big Results.
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon name="star" className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 text-center italic mb-6">
                    "We went from invisible online to booked out within a month. Best investment we made."
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">— Maria Santos, Santos Family Restaurant</div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-6">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon name="trending-up" className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 text-center italic mb-6">
                    "Forte built a site that actually converts. We're seeing 3x the leads — and they update everything fast."
                  </blockquote>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">— Mike Chen, Elite Home Services</div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12">
                <Link href="/case-studies" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  [ View More Success Stories ]
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-800">
          <div className="container max-w-7xl mx-auto text-center">
            <SimpleScrollReveal direction="up" delay={1100}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Build a Site That Actually Works
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                We build more than websites. We build your digital foundation for long-term growth. Whether you're just starting or scaling fast — we're ready when you are.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-white">
                  <Icon name="phone" className="w-5 h-5" />
                  <span className="text-lg font-semibold">📞 Call us: (817) 873-6655</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Icon name="mail" className="w-5 h-5" />
                  <a href="mailto:seth@fortewebdesigns.com" className="text-lg font-semibold hover:text-blue-200 transition-colors">
                    📧 Email: seth@fortewebdesigns.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors">
                  Contact Us
                </Link>
                <Link href="/pricing" className="border border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors">
                  [ Compare Plans ]
                </Link>
              </div>
            </SimpleScrollReveal>
          </div>
        </section>

      </div>
    </div>
  );
}
