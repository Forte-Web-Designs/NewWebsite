import { Metadata } from 'next';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import Link from 'next/link';
import LightButton from '@/components/LightButton';
import DarkButton from '@/components/DarkButton';
import { Icon } from '@/components/images/Icon';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Simple, Transparent Pricing — Built to Grow With You | Forte Web Designs',
  description: 'No setup fees. No surprises. Just clean websites and powerful marketing tools designed to grow your business.',
};

export default function Pricing() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-4 py-2 rounded-full mb-6">
                <Icon name="star" className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">Transparent Pricing</span>
              </div>
              
              <h1 className="font-roboto font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-900 dark:text-white mb-6">
                Simple, Transparent Pricing — Built to Grow With You
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                No setup fees. No surprises. Just clean websites and powerful marketing tools designed to grow your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <LightButton href="#website-plans">
                  🧱 Compare Website Plans
                </LightButton>
                <DarkButton href="/contact">
                  📞 Talk to an Expert
                </DarkButton>
              </div>
            </div>
          </div>
        </section>

        {/* Step 1: Start With Your Website */}
        <section id="website-plans" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 dark:text-white mb-4">
                🧱 Step 1: Start With Your Website
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Every Forte™ website is custom-coded from scratch, the old fashioned way. Just clean, fast, secure websites that are built to grow.
              </p>
            </div>

            {/* Website Plans */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
              {/* Forte Foundation */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">⭐</span>
                  <h3 className="font-roboto font-medium text-2xl text-gray-900 dark:text-white">
                    Forte Foundation™
                  </h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$200</span>
                    <span className="text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">(12-month minimum)</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">5-page custom-coded website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Mobile responsive & SEO-ready</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Domain + premium hosting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Basic analytics setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Forte Care™</strong> included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">100% Satisfaction Guarantee</span>
                  </li>
                </ul>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">📌 One-Time Payment Option:</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">$2,500</p>
                </div>
                
                <LightButton href="/contact" className="w-full">
                  Get Started with Foundation™
                </LightButton>
              </div>

              {/* Forte Pro */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-blue-500 dark:border-blue-400 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">💼</span>
                  <h3 className="font-roboto font-medium text-2xl text-gray-900 dark:text-white">
                    Forte Pro™
                  </h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$350</span>
                    <span className="text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">(12-month minimum)</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">10-page custom-coded website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Everything in Foundation plus:</span>
                  </li>
                  <li className="flex items-start gap-3 ml-6">
                    <span className="text-blue-500 mt-1">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Advanced analytics & conversion tracking</span>
                  </li>
                  <li className="flex items-start gap-3 ml-6">
                    <span className="text-blue-500 mt-1">→</span>
                    <span className="text-gray-700 dark:text-gray-300">Priority support response</span>
                  </li>
                  <li className="flex items-start gap-3 ml-6">
                    <span className="text-blue-500 mt-1">→</span>
                    <span className="text-gray-700 dark:text-gray-300">More layout/custom functionality options</span>
                  </li>
                </ul>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">📌 One-Time Payment Option:</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">$4,300</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">📌 Larger Projects: Custom quote based on scope</p>
                </div>
                
                <LightButton href="/contact" className="w-full">
                  Get Started with Pro™
                </LightButton>
              </div>
            </div>

            {/* One-Time Payment Cards */}
            <div className="max-w-4xl mx-auto mb-16">
              <h3 className="font-roboto font-medium text-xl text-gray-900 dark:text-white mb-8 text-center">
                💰 Prefer a One-Time Website Build?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
                If you'd rather own your site outright, we offer flat-fee website builds too.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-4">5-Page Site</h4>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$2,500–$3,500</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Perfect for small businesses</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-4">10-Page Site</h4>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">$4,000–$6,000</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Ideal for growing businesses</p>
                </div>
              </div>
              
              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                💬 <em>Hosting, updates, and Forte Care™ sold separately</em>
              </p>
            </div>

            {/* Forte Care Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🛠</span>
                <h3 className="font-roboto font-medium text-2xl text-gray-900 dark:text-white">
                  Forte Care™ (Included With Every Website Plan)
                </h3>
              </div>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Your website's pit crew — included with every monthly plan.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Unlimited content edits</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Hosting & uptime monitoring</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Monthly backups & performance checks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Speed optimization</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">SSL + security protection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Broken link fixes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">Monthly reports with growth insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Helper Section */}
        <div className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
                </span>e Which Plan You Need? 🤔
              </div>
              
              <h1 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-center text-gray-900 dark:text-white mb-6">
                Simple, Transparent Pricing — Built to Grow With You
              </h1>v className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                No setup fees. No surprises. Just clean websites and powerful marketing tools designed to grow your business.
              </p>    Just Starting Out?
                    </h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">4">
                <LightButton href="#website-plans">Compare Website Plans</LightButton>
                <Link p>
                  href="/contact"e="bg-primary-50 dark:bg-primary-900/30 rounded-lg p-4">
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >       Forte Foundation™
                  <span className="mr-2">📞</span>
                  Talk to an Experte="text-primary-600 dark:text-primary-400 text-sm">
                </Link> $200/month
              </div>  </div>
            </div>  </div>
          </div>  </div>
        </section>div>

        {/* Step 1: Start With Your Website */}
        <section id="website-plans" className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900">rimary-500 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">rm -translate-x-1/2">
            <div className="max-w-6xl mx-auto">-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  🧱 Step 1: Start With Your Website
                </h2>v className="text-center">
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                  Every Forte™ website is custom-coded from scratch, the old fashioned way. Just clean, fast, secure websites that are built to grow.
                </p>  Ready to Grow?
              </div></h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              <div className="grid lg:grid-cols-2 gap-8 mb-16">ne
                {/* Forte Foundation */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center mb-6">00 dark:text-primary-300 font-semibold text-lg">
                    <div className="text-4xl mb-4">⭐</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Forte Foundation™ext-primary-600 dark:text-primary-400 text-sm">
                    </h3>500-700/month
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      $200/month
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      12-month minimum
                    </p>blished Business */}
                  </div>ssName="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                  <ul className="space-y-3 mb-6">">🚀</div>
                    <li className="flex items-start">old text-gray-900 dark:text-white mb-3">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">5-page custom-coded website</span>
                    </li>assName="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    <li className="flex items-start">digital presence
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Mobile responsive & SEO-ready</span>
                    </li>v className="text-primary-700 dark:text-primary-300 font-semibold text-lg">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Domain + premium hosting</span>
                    </li>1,200-1,850/month
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Basic analytics setup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300"><strong>Forte Care™</strong> included</span>
                    </li>ame="bg-white dark:bg-gray-800 rounded-xl p-6">
                    <li className="flex items-start">text-gray-900 dark:text-white mb-4 text-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">100% Satisfaction Guarantee</span>
                    </li>sName="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                  </ul>className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                    <span className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</span>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6"> or Pro</span>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                      <div className="text-center">dden sm:block">→</span>
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">:text-left">
                          One-Time Payment Optionrimary-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</span>
                        </div>sName="text-gray-700 dark:text-gray-300">Add SEO if you want Google traffic</span>
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          $2,500e="text-gray-400 hidden sm:block">→</span>
                        </div>me="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                      </div>assName="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</span>
                    </div>className="text-gray-700 dark:text-gray-300">Add PPC/Social when ready</span>
                    <LightButton href="/contact" className="w-full">
                      Get Started with Foundation
                    </LightButton>
                  </div>
                </div>
        </div>
                {/* Forte Pro */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-primary-500 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">900/20 dark:to-blue-900/20">
                      Most Popularl mx-auto">
                    </span>text-2xl md:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
                  </div>otential ROI
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">💼</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Forte Pro™-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    </h3>sName="text-center">
                    <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                      $350/month"text-lg font-semibold text-gray-900 dark:text-white mb-2">Foundation™ ROI</h4>
                    </div>ssName="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">300% ROI</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">4">
                      12-month minimums 3x more leads within 60 days
                    </p>
                  </div>lassName="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <div className="text-xs text-green-700 dark:text-green-400">
                  <ul className="space-y-3 mb-6">ng> Local contractor went from 2 to 8 monthly leads
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">10-page custom-coded website</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Everything in Foundation plus:</span>
                    </li>sName="text-center">
                    <li className="flex items-start ml-4"> transform -translate-x-1/2">
                      <span className="text-blue-500 mr-2">→</span> py-1 rounded-full text-xs font-semibold">
                      <span className="text-gray-700 dark:text-gray-300">Advanced analytics & conversion tracking</span>
                    </li>n>
                    <li className="flex items-start ml-4">
                      <span className="text-blue-500 mr-2">→</span>
                      <span className="text-gray-700 dark:text-gray-300">Priority support response</span>
                    </li>assName="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">500% ROI</div>
                    <li className="flex items-start ml-4">:text-gray-400 mb-4">
                      <span className="text-blue-500 mr-2">→</span>tors
                      <span className="text-gray-700 dark:text-gray-300">More layout/custom functionality options</span>
                    </li>assName="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                  </ul>v className="text-xs text-green-700 dark:text-green-400">
                      <strong>Real Example:</strong> Service business increased revenue by $4,200/month
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          One-Time Payment Option
                        </div>e ROI */}
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">-200 dark:border-gray-700">
                          $4,300text-center">
                        </div>me="text-3xl mb-3">🚀</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">-2">Growth Bundle ROI</h4>
                          Larger Projects: Custom quote based on scoperk:text-green-400 mb-2">800% ROI</div>
                        </div>="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      </div>+ SEO = compound growth month over month
                    </div>
                    <LightButton href="/contact" className="w-full">ounded-lg p-3">
                      Get Started with Pros text-green-700 dark:text-green-400">
                    </LightButton> Example:</strong> HVAC company grew from $8K to $25K monthly revenue
                  </div>v>
                </div>v>
              </div>v>
              </div>
              {/* Forte Care Section */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🛠</div>xt-gray-400">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Forte Care™
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your website's pit crew — included with every monthly plan
                  </p>
                </div>mparison Table */}
                ssName="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">">
                    <div className="flex items-start">-bold text-gray-900 dark:text-white mb-4">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Unlimited content edits</span>
                    </div>="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    <div className="flex items-start">plan and find the perfect fit for your business.
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Hosting & uptime monitoring</span>
                    </div>
                    <div className="flex items-start">rounded-2xl shadow-xl overflow-hidden">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Monthly backups & performance checks</span>
                    </div>lassName="bg-gray-50 dark:bg-gray-700">
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>ld text-gray-900 dark:text-white">Features</th>
                      <span className="text-gray-700 dark:text-gray-300">Speed optimization</span>hite">Foundation™<br/><span className="text-sm font-normal text-gray-600 dark:text-gray-400">$200/month</span></th>
                    </div>className="text-center py-8 px-6 font-semibold text-gray-900 dark:text-white relative">
                  </div><div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="space-y-3">-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">POPULAR</span>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">SSL + security protection</span>>$350/month</span>
                    </div>div>
                    <div className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>bold text-gray-900 dark:text-white">Growth Bundle<br/><span className="text-sm font-normal text-gray-600 dark:text-gray-400">$500/month</span></th>
                      <span className="text-gray-700 dark:text-gray-300">Broken link fixes</span>
                    </div>
                    <div className="flex items-start">ay-200 dark:divide-gray-700">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Monthly reports with growth insights</span>
                    </div>className="py-4 px-6 text-center text-gray-600 dark:text-gray-400">5 Pages</td>
                  </div>d className="py-4 px-6 text-center text-green-600 dark:text-green-400 font-semibold">10 Pages</td>
                </div><td className="py-4 px-6 text-center text-gray-600 dark:text-gray-400">5 Pages + SEO</td>
              </div></tr>
            </div>  <tr className="bg-gray-50 dark:bg-gray-800">
          </div>      <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">Load Time Guarantee</td>
        </section>    <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">✓ &lt;2 seconds</td>
                      <td className="py-4 px-6 text-center text-green-600 dark:text-green-400">✓ &lt;2 seconds</td>
        {/* Forte Ecosystem Section */}-4 px-6 text-center text-green-600 dark:text-green-400">✓ &lt;2 seconds</td>
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 dark:text-white mb-6">
                🌐 What is the Forte Ecosystem™?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                The <strong>Forte Ecosystem™</strong> is our all-in-one business growth system.
                It starts with a custom website, then scales with SEO, Google Ads, and Social Media — all built to work together.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-8">
                <blockquote className="text-xl font-medium text-gray-900 dark:text-white italic">
                  "Build once. Grow continuously. Market smarter."
                </blockquote>
              </div>
              
              {/* Ecosystem Flow Diagram */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-lg">
                  <span className="text-blue-600 dark:text-blue-400">🌐</span>
                  <span className="font-medium text-gray-900 dark:text-white">Website</span>
                </div>
                <span className="text-gray-400 hidden sm:block">→</span>
                <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-lg">
                  <span className="text-green-600 dark:text-green-400">🔍</span>
                  <span className="font-medium text-gray-900 dark:text-white">SEO</span>
                </div>
                <span className="text-gray-400 hidden sm:block">→</span>
                <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-lg">
                  <span className="text-purple-600 dark:text-purple-400">🎯</span>
                  <span className="font-medium text-gray-900 dark:text-white">PPC</span>
                </div>
                <span className="text-gray-400 hidden sm:block">→</span>
                <div className="flex items-center gap-2 bg-pink-100 dark:bg-pink-900/30 px-4 py-2 rounded-lg">
                  <span className="text-pink-600 dark:text-pink-400">📱</span>
                  <span className="font-medium text-gray-900 dark:text-white">Social</span>
                </div>
                <span className="text-gray-400 hidden sm:block">→</span>
                <div className="flex items-center gap-2 bg-yellow-100 dark:bg-yellow-900/30 px-4 py-2 rounded-lg">
                  <span className="text-yellow-600 dark:text-yellow-400">📈</span>
                  <span className="font-medium text-gray-900 dark:text-white">Growth</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                The Forte Ecosystem™ – Designed to Scale With You
              </p>
            </div>
          </div>
        </section>

        {/* Step 2: Growth Services */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 dark:text-white mb-4">
                📈 Step 2: Add Growth Services Anytime
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Once your Forte website is live, you can add growth services at any time — or bundle them up front.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              {/* Forte SEO */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🔍</span>
                  <h3 className="font-roboto font-medium text-xl text-gray-900 dark:text-white">
                    Forte SEO™
                  </h3>
                </div>
                
                {/* Essential Plan */}
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-lg text-gray-900 dark:text-white">Essential</h4>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">$300/month</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Keyword research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">On-page SEO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Site optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Monthly SEO reports</span>
                    </li>
                  </ul>
                </div>
                
                {/* Growth Plan */}
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-lg text-gray-900 dark:text-white">Growth</h4>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">$500/month</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Everything in Essential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">4 optimized blog posts/month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Google Business Profile + Local SEO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Link building & competitor analysis</span>
                    </li>
                  </ul>
                </div>
                
                <LightButton href="/contact" className="w-full">
                  Add SEO Services
                </LightButton>
              </div>

              {/* Forte PPC */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🎯</span>
                  <h3 className="font-roboto font-medium text-xl text-gray-900 dark:text-white">
                    Forte PPC (Google Ads)
                  </h3>
                </div>
                
                {/* Starter Plan */}
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-lg text-gray-900 dark:text-white">Starter</h4>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">$400/month</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">+ Ad Budget</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Google Ads setup & targeting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Ad copywriting + testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Landing page optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Weekly PPC reports</span>
                    </li>
                  </ul>
                </div>
                
                {/* Growth Plan */}
                <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-lg text-gray-900 dark:text-white">Growth</h4>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">$650/month</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">+ Ad Budget</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Everything in Starter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Multi-platform ads (YouTube, Bing)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Advanced tracking & A/B testing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Strategy optimization reports</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    💡 Recommended ad spend: $1,000+/month
                  </p>
                </div>
                
                <LightButton href="/contact" className="w-full">
                  Add PPC Services
                </LightButton>
              </div>

              {/* Forte Social Media */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">📱</span>
                  <h3 className="font-roboto font-medium text-xl text-gray-900 dark:text-white">
                    Forte Social Media
                  </h3>
                </div>
                
                {/* Essential Plan */}
                <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-lg text-gray-900 dark:text-white">Essential</h4>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">$200/month</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">12 custom posts/month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Facebook + Instagram management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Monthly content calendar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Engagement monitoring</span>
                    </li>
                  </ul>
                </div>
                
                {/* Growth Plan */}
                <div className="mb-6 p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200 dark:border-pink-800">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-lg text-gray-900 dark:text-white">Growth</h4>
                    <span className="text-xl font-bold text-gray-900 dark:text-white">$350/month</span>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">20 posts/month + Stories/Reels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Google Business + LinkedIn</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Community management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Growth performance reports</span>
                    </li>
                  </ul>
                </div>
                
                <LightButton href="/contact" className="w-full">
                  Add Social Media
                </LightButton>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Service Package Bundles */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 dark:text-white mb-4">
                🎯 Full-Service Package Bundles
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Ready to go all-in? Our bundles combine everything you need for maximum growth at a discount.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
              {/* Starter Bundle */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">🚀</span>
                  <h3 className="font-roboto font-medium text-xl text-gray-900 dark:text-white">
                    Starter Bundle
                  </h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$650</span>
                    <span className="text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">Save $150/month</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Forte Foundation™ Website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Forte SEO™ Essential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Forte Social Media Essential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Forte Care™ included</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    💡 <strong>Perfect for:</strong> Small businesses ready to establish a complete online presence
                  </p>
                </div>
                
                <LightButton href="/contact" className="w-full">
                  Start with Starter Bundle
                </LightButton>
              </div>

              {/* Growth Bundle */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-2 border-blue-500 dark:border-blue-400 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Best Value
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">📈</span>
                  <h3 className="font-roboto font-medium text-xl text-gray-900 dark:text-white">
                    Growth Bundle
                  </h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$1,200</span>
                    <span className="text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">Save $300/month</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Forte Pro™ Website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Forte SEO™ Growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Forte PPC Starter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Forte Social Media Growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Priority support & strategy calls</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 <strong>Perfect for:</strong> Established businesses ready to scale and dominate their market
                  </p>
                </div>
                
                <LightButton href="/contact" className="w-full">
                  Start with Growth Bundle
                </LightButton>
              </div>

              {/* Enterprise Bundle */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">👑</span>
                  <h3 className="font-roboto font-medium text-xl text-gray-900 dark:text-white">
                    Enterprise Bundle
                  </h3>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$1,750</span>
                    <span className="text-gray-600 dark:text-gray-400">/month</span>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">Save $500/month</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-lg text-gray-900 dark:text-white mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Forte Pro™ Website (15+ pages)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Forte SEO™ Growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Forte PPC Growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Forte Social Media Growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">Weekly strategy calls</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <p className="text-sm text-purple-800 dark:text-purple-200">
                    💡 <strong>Perfect for:</strong> Large businesses or franchises requiring comprehensive marketing solutions
                  </p>
                </div>
                
                <LightButton href="/contact" className="w-full">
                  Start with Enterprise Bundle
                </LightButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900 dark:text-white mb-4">
                  💬 Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Got questions? We've got answers.
                </p>
              </div>
              
              <div className="space-y-6">
                {/* FAQ Item 1 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-3">
                    🤔 What's the difference between monthly plans and one-time builds?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Monthly plans include ongoing <strong>Forte Care™</strong> (hosting, updates, support) and are perfect for businesses that want a fully managed solution. One-time builds are for those who prefer to own their site outright, but hosting and updates are separate.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      💡 <strong>Most businesses choose monthly plans</strong> because they include everything needed to keep your site running perfectly.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 2 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-3">
                    ⏰ How long does it take to build my website?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    <strong>Foundation™:</strong> 2-3 weeks<br />
                    <strong>Pro™:</strong> 3-4 weeks<br />
                    <strong>Custom projects:</strong> 4-8 weeks depending on complexity
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      🚀 <strong>Rush delivery available</strong> for an additional fee if you need it faster.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 3 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-3">
                    🔒 Can I cancel my monthly plan anytime?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    All plans have a 12-month minimum commitment. After that, you can cancel with 30 days notice. We also offer a <strong>100% satisfaction guarantee</strong> during the first 30 days.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                    <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                      💡 <strong>Pro tip:</strong> Most clients stay with us for years because we become an extension of their team.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 4 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-3">
                    🎯 Do you work with my industry?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Yes! We work with all industries including healthcare, legal, construction, e-commerce, restaurants, professional services, and more. Every website is custom-built for your specific business needs.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <p className="text-purple-800 dark:text-purple-200 text-sm">
                      🏆 <strong>We've built 500+ websites</strong> across dozens of industries with proven results.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 5 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-3">
                    📈 What kind of results can I expect?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Results vary by industry and effort, but our clients typically see:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">2-5x increase in website traffic within 3 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">3-7x more leads from their website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">300-800% ROI on their marketing investment</span>
                    </li>
                  </ul>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <p className="text-green-800 dark:text-green-200 text-sm">
                      🎯 <strong>We track everything</strong> and provide monthly reports so you can see exactly how your investment is performing.
                    </p>
                  </div>
                </div>

                {/* FAQ Item 6 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
                  <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-3">
                    🛠 What happens if I need changes after my site is live?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    That's what <strong>Forte Care™</strong> is for! All monthly plans include unlimited content updates, design tweaks, and technical support. We handle everything so you can focus on running your business.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      ⚡ <strong>Response time:</strong> Most updates are completed within 24-48 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
                <div className="mb-8">
                  <h2 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                    Ready to Grow Your Business?
                  </h2>
                  <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8">
                    Join hundreds of businesses that trust Forte Web Designs to power their online growth. 
                    Let's build something amazing together.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="text-2xl font-bold mb-1">2-3 Weeks</div>
                    <div className="text-blue-100 text-sm">Average Build Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">🏆</div>
                    <div className="text-2xl font-bold mb-1">500+</div>
                    <div className="text-blue-100 text-sm">Websites Built</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2">📈</div>
                    <div className="text-2xl font-bold mb-1">300%</div>
                    <div className="text-blue-100 text-sm">Average ROI</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    <span className="mr-2">🚀</span>
                    Get Started Today
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    <span className="mr-2">📞</span>
                    Schedule a Call
                  </Link>
                </div>
                
                <div className="mt-8 pt-8 border-t border-blue-500">
                  <p className="text-blue-100 text-sm">
                    💡 <strong>Free Strategy Session:</strong> Not sure which plan is right for you? 
                    Book a free 15-minute consultation and we'll create a custom growth plan for your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}