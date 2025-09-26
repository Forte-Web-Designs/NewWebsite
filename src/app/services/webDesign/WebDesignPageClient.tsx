'use client';

import { useState } from 'react';
import { Icon } from '@/components/images/Icon';
import Link from 'next/link';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';
import { BackgroundImage } from '@/components/images/BackgroundImage';
import LightButton from '@/components/LightButton';
import DarkButton from '@/components/DarkButton';
import IndustryLeadCTA from '@/components/IndustryLeadCTA';

// Pricing Toggle Component
interface PricingToggleProps {
  isMonthly: boolean;
  onToggle: (monthly: boolean) => void;
}

function PricingToggle({ isMonthly, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8 px-4 sm:px-0">
      <span className={`text-base sm:text-lg font-medium ${isMonthly ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
        Monthly
      </span>
      <button
        onClick={() => onToggle(!isMonthly)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          isMonthly ? 'bg-green-600' : 'bg-gray-600'
        }`}
        aria-label={`Switch to ${isMonthly ? 'one-time' : 'monthly'} pricing`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isMonthly ? 'translate-x-1' : 'translate-x-6'
          }`}
        />
      </button>
      <span className={`text-base sm:text-lg font-medium ${!isMonthly ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>
        One-Time
      </span>
    </div>
  );
}

export default function WebDesignPageClient() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<'foundation' | 'pro'>('foundation');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 overflow-hidden">
        <BackgroundImage
          src="/images/ai-business-abstract-bg.webp"
          alt="Custom Website Design"
          className="absolute inset-0 opacity-20 dark:opacity-10"
          priority={true}
        >
          <div></div>
        </BackgroundImage>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SimpleScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                <Icon name="star" className="w-4 h-4 text-blue-600" />
                <span>Forte Web Designs</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
                Custom Website Design – Built for Speed, Security & Growth
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
                Hand-coded websites that outperform templates every time. No WordPress, no page builders – just clean, fast, secure websites built from scratch for real business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8 px-4 sm:px-0">
                <Link href="/contact">
                  <DarkButton className="w-full sm:w-auto">Start Your Project</DarkButton>
                </Link>
                <Link href="/pricing" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold py-3 px-6 text-center">
                  View All Pricing
                </Link>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>💡 Pro Tip:</strong> Every Forte website is built to integrate seamlessly with SEO, PPC, and social media marketing as your business grows.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Why Forte vs Competitors Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <SimpleScrollReveal direction="up" delay={300}>
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-4 sm:px-0">
                Why Forte Outperforms Page Builders Every Time
              </h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="text-left py-4 sm:py-6 px-3 sm:px-6 font-bold text-gray-900 dark:text-white text-sm sm:text-lg">Feature</th>
                      <th className="text-center py-4 sm:py-6 px-3 sm:px-6 font-bold text-green-600 dark:text-green-400 text-sm sm:text-lg">Forte Website</th>
                      <th className="text-center py-4 sm:py-6 px-3 sm:px-6 font-bold text-red-600 dark:text-red-400 text-sm sm:text-lg">Page Builders</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Speed</td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl sm:text-2xl">⚡</span>
                          <span className="text-green-600 dark:text-green-400 font-semibold text-xs sm:text-base">Lightning-fast</span>
                        </div>
                      </td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl sm:text-2xl">🐢</span>
                          <span className="text-red-600 dark:text-red-400 font-semibold text-xs sm:text-base">Slower due to bloat</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                      <td className="py-4 sm:py-6 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Security</td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl sm:text-2xl">🔐</span>
                          <span className="text-green-600 dark:text-green-400 font-semibold text-xs sm:text-base">No plugins, no vulnerabilities</span>
                        </div>
                      </td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl sm:text-2xl">🚨</span>
                          <span className="text-red-600 dark:text-red-400 font-semibold text-xs sm:text-base">Prone to hacks/updates</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">SEO-Ready</td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-green-500 text-lg sm:text-xl">✅</span>
                          <span className="text-green-600 dark:text-green-400 font-semibold text-xs sm:text-base">Clean code, structured markup</span>
                        </div>
                      </td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl sm:text-2xl">⚠️</span>
                          <span className="text-red-600 dark:text-red-400 font-semibold text-xs sm:text-base">Often messy & unoptimized</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                      <td className="py-4 sm:py-6 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Customization</td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl sm:text-2xl">🧱</span>
                          <span className="text-green-600 dark:text-green-400 font-semibold text-xs sm:text-base">Full control over every pixel</span>
                        </div>
                      </td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xl sm:text-2xl">🚧</span>
                          <span className="text-red-600 dark:text-red-400 font-semibold text-xs sm:text-base">Template-restricted</span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Ownership</td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-green-500 text-lg sm:text-xl">✅</span>
                          <span className="text-green-600 dark:text-green-400 font-semibold text-xs sm:text-base">Fully yours</span>
                        </div>
                      </td>
                      <td className="py-4 sm:py-6 px-3 sm:px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-red-500 text-lg sm:text-xl">🚫</span>
                          <span className="text-red-600 dark:text-red-400 font-semibold text-xs sm:text-base">Platform-locked</span>
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
            <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Website Packages
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8">
                <strong>Monthly Plans:</strong> 12-month minimum commitment, then month-to-month. Includes Forte Care™ support, hosting, and unlimited updates.<br/>
                <strong>One-Time Plans:</strong> Pay once and own your website. Forte Care™ available as optional maintenance service.
              </p>
              
              {/* Pricing Toggle */}
              <PricingToggle isMonthly={isMonthly} onToggle={setIsMonthly} />
            </div>

            {/* Desktop: Show both columns side by side */}
            <div className="hidden md:block bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px]">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="text-left py-4 sm:py-6 px-3 sm:px-6 font-bold text-gray-900 dark:text-white text-sm sm:text-lg">Feature</th>
                      <th className="text-center py-4 sm:py-6 px-3 sm:px-6 font-bold text-gray-900 dark:text-white text-sm sm:text-lg">
                        Foundation<br/>
                        <span className="text-green-600 dark:text-green-400 text-lg sm:text-2xl font-bold">
                          {isMonthly ? '$2,500 + $200/mo' : '$4,500'}
                        </span><br/>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {isMonthly ? 'setup + monthly' : 'one-time'}
                        </span>
                      </th>
                      <th className="text-center py-4 sm:py-6 px-3 sm:px-6 font-bold text-gray-900 dark:text-white text-sm sm:text-lg">
                        Pro ⭐<br/>
                        <span className="text-green-600 dark:text-green-400 text-lg sm:text-2xl font-bold">
                          {isMonthly ? '$4,500 + $350/mo' : '$7,500'}
                        </span><br/>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {isMonthly ? 'setup + monthly' : 'one-time'}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Pages Included</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-semibold text-gray-900 dark:text-white text-sm sm:text-base">5 pages</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center font-semibold text-gray-900 dark:text-white text-sm sm:text-base">10 pages</td>
                    </tr>
                    <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Hosting + Domain</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-green-500 text-lg sm:text-xl">✅</span>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-green-500 text-lg sm:text-xl">✅</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Mobile-Responsive Design</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-green-500 text-lg sm:text-xl">✅</span>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-green-500 text-lg sm:text-xl">✅</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">SEO-Ready Foundation</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-green-500 text-lg sm:text-xl">✅</span>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-green-500 text-lg sm:text-xl">✅</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Basic Analytics</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-green-500 text-lg sm:text-xl">✅</span>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-green-500 text-lg sm:text-xl">✅</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Conversion Tracking</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-red-500 text-lg sm:text-xl">❌</span>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-green-500 text-lg sm:text-xl">✅</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Priority Support</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-red-500 text-lg sm:text-xl">❌</span>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-green-500 text-lg sm:text-xl">✅</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                      <td className="py-3 sm:py-4 px-3 sm:px-6 font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Forte Care™ Included</td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <span className="text-green-500 text-lg sm:text-xl">✅</span>
                      </td>
                      <td className="py-3 sm:py-4 px-3 sm:px-6 text-center">
                        <div className="flex flex-col items-center">
                          <span className="text-green-500 text-lg sm:text-xl">✅</span>
                          <span className="text-xs text-gray-600 dark:text-gray-400">(with faster response times)</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-700">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center">
                    <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors inline-block w-full text-sm sm:text-base">
                      Start My Foundation
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/contact" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors inline-block w-full text-sm sm:text-base">
                      Start My Pro Website
                    </Link>
                  </div>
                </div>
                <div className="text-center">                <Link href="/pricing" className="text-green-600 dark:text-green-400 hover:underline font-semibold text-sm sm:text-base">
                  View Complete Growth System Pricing
                </Link>
                </div>
              </div>
            </div>

            {/* Mobile: Show selected plan card format */}
            <div className="md:hidden space-y-4">
              {/* Plan Selection Tabs */}
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setSelectedPlan('foundation')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    selectedPlan === 'foundation'
                      ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Foundation
                </button>
                <button
                  onClick={() => setSelectedPlan('pro')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                    selectedPlan === 'pro'
                      ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  Pro ⭐
                </button>
              </div>

              {/* Selected Plan Details */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedPlan === 'foundation' ? 'Forte Foundation™' : 'Forte Pro™'}
                    {selectedPlan === 'pro' && ' ⭐'}
                  </h3>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                    {selectedPlan === 'foundation' 
                      ? (isMonthly ? '$2,500 + $200/mo' : '$4,500')
                      : (isMonthly ? '$4,500 + $350/mo' : '$7,500')
                    }
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {isMonthly ? 'setup + monthly' : 'one-time'}
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-medium text-gray-900 dark:text-white">Pages Included</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {selectedPlan === 'foundation' ? '5 pages' : '10 pages'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-medium text-gray-900 dark:text-white">Hosting + Domain</span>
                    <span className="text-green-500 text-xl">✅</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-medium text-gray-900 dark:text-white">Mobile-Responsive Design</span>
                    <span className="text-green-500 text-xl">✅</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-medium text-gray-900 dark:text-white">SEO-Ready Foundation</span>
                    <span className="text-green-500 text-xl">✅</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-medium text-gray-900 dark:text-white">Basic Analytics</span>
                    <span className="text-green-500 text-xl">✅</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-medium text-gray-900 dark:text-white">Conversion Tracking</span>
                    <span className={selectedPlan === 'foundation' ? 'text-red-500 text-xl' : 'text-green-500 text-xl'}>
                      {selectedPlan === 'foundation' ? '❌' : '✅'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700">
                    <span className="font-medium text-gray-900 dark:text-white">Priority Support</span>
                    <span className={selectedPlan === 'foundation' ? 'text-red-500 text-xl' : 'text-green-500 text-xl'}>
                      {selectedPlan === 'foundation' ? '❌' : '✅'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium text-gray-900 dark:text-white">Forte Care™ Included</span>
                    <div className="text-right">
                      <span className="text-green-500 text-xl">✅</span>
                      {selectedPlan === 'pro' && (
                        <div className="text-xs text-gray-600 dark:text-gray-400">(faster response)</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Link 
                    href="/contact" 
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block w-full"
                  >
                    Start My {selectedPlan === 'foundation' ? 'Foundation' : 'Pro'} Website
                  </Link>
                </div>
              </div>
              
              {/* Compare All Plans Link */}
              <div className="text-center">
                <Link href="/pricing" className="text-green-600 dark:text-green-400 hover:underline font-semibold">
                  View Complete Growth System Pricing
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Built for SEO Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto">
          <SimpleScrollReveal direction="up" delay={700}>
            <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                A Beautiful Website Isn't Enough - It Needs to Be Found
              </h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="mb-6 sm:mb-8">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Icon name="search" className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
                  Every Forte website is coded with search visibility in mind - clean structure, fast load times, and mobile optimization. 
                  It's not just about how it looks, but how it performs on Google.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                <p className="text-base sm:text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3 sm:mb-4">
                  Want to attract more traffic and rank higher? Our SEO services plug directly into your Forte site.
                </p>
                <Link href="/services/seo" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 sm:px-6 rounded-lg transition-colors inline-block text-sm sm:text-base">
                  Add Growth Layer: Automation & AI
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Forte Care™ Promotional Snippet */}
      <SimpleScrollReveal direction="up" delay={700}>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700 max-w-4xl mx-auto mt-12 mb-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏠</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Like Home Maintenance, But For Your Website
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You wouldn't buy a house and never maintain it, right? Your website needs the same attention. Forte Care™ handles the digital upkeep – security updates, performance optimization, and content changes – so your website stays in peak condition and continues attracting customers.
              </p>
              <Link
                href="/solutions/care"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <span>Explore Forte Care™</span>
                <span className="text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>
      </SimpleScrollReveal>

      {/* Forte Care Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <SimpleScrollReveal direction="up" delay={800}>
            <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Forte Care™: Professional Website Maintenance
              </h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center mb-6 sm:mb-8 max-w-3xl mx-auto">
                We don't just build your website - we maintain it like a high-performance machine. Forte Care™ ensures your site stays fast, secure, and optimized.
              </p>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 text-center">
                Included With Forte Care™:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg flex-shrink-0">
                    <span className="text-xl sm:text-2xl">✏️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">• Unlimited content edits</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Keep your content fresh and current</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg flex-shrink-0">
                    <span className="text-xl sm:text-2xl">🖥️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">• Hosting + uptime monitoring</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Premium hosting with 24/7 monitoring</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg flex-shrink-0">
                    <span className="text-xl sm:text-2xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">• Speed & performance optimization</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Continuous performance monitoring</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg flex-shrink-0">
                    <span className="text-xl sm:text-2xl">🔒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">• SSL & security updates</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Keep your site secure and up-to-date</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg flex-shrink-0">
                    <span className="text-xl sm:text-2xl">💾</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">• Monthly site backups</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Your data is always protected</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg flex-shrink-0">
                    <span className="text-xl sm:text-2xl">🔗</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">• Broken link scans</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Maintain a professional user experience</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg flex-shrink-0">
                    <span className="text-xl sm:text-2xl">📈</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">• Growth recommendations</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Regular insights and recommendations</p>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-4 sm:p-6">
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  <strong>Monthly Plans:</strong> Forte Care™ is included at no additional cost.<br/>
                  <strong>One-Time Plans:</strong> Forte Care™ available as optional maintenance service.
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
            <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Part of the Forte Ecosystem™ - Built to Grow With You
              </h2>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center mb-8 sm:mb-12 max-w-3xl mx-auto">
                Your Forte website is just the beginning. As your business grows, you can easily layer in:
              </p>
              
              {/* Timeline-style graphic */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-8 sm:mb-12">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-500 text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    <span className="text-lg sm:text-2xl">🌐</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base">Website</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">Your foundation for growth</p>
                </div>
                
                <div className="hidden md:block text-gray-400">
                  <Icon name="arrow-right" className="w-8 h-8" />
                </div>
                <div className="md:hidden text-gray-400">
                  <span className="text-3xl">⬇️</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
                    <Icon name="search" className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Forte SEO™</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Get found on Google</p>
                </div>
                
                <div className="hidden md:block text-gray-400">
                  <Icon name="arrow-right" className="w-8 h-8" />
                </div>
                <div className="md:hidden text-gray-400">
                  <span className="text-3xl">⬇️</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Forte PPC™</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Drive leads fast with Google Ads</p>
                </div>
                
                <div className="hidden md:block text-gray-400">
                  <Icon name="arrow-right" className="w-8 h-8" />
                </div>
                <div className="md:hidden text-gray-400">
                  <span className="text-3xl">⬇️</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
                    <Icon name="users" className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Forte Social™</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Stay top of mind on social media</p>
                </div>
                
                <div className="hidden md:block text-gray-400">
                  <Icon name="arrow-right" className="w-8 h-8" />
                </div>
                <div className="md:hidden text-gray-400">
                  <span className="text-3xl">⬇️</span>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Growth</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Scale your business</p>
                </div>
              </div>
              
              <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                <p className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-4">
                  Every Forte website is designed to scale - no rebuild needed when you're ready to grow.
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
            <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Small Businesses. Big Results.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon name="star" className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <blockquote className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center italic mb-4 sm:mb-6">
                  "We went from invisible online to booked out within a month. Best investment we made."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">- Maria Santos, Santos Family Restaurant</div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl">📈</span>
                  </div>
                </div>
                <blockquote className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-center italic mb-4 sm:mb-6">
                  "Forte built a site that actually converts. We're seeing 2x the leads - and they update everything fast."
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">- Mike Chen, Elite Home Services</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <Link href="/case-studies" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base">
                View More Success Stories
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-800">
        <div className="container max-w-7xl mx-auto text-center">
          <SimpleScrollReveal direction="up" delay={1100}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-0">
              Let's Build a Site That Actually Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
              We build more than websites. We build your digital foundation for long-term growth. Whether you're just starting or scaling fast - we're ready when you are.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-4 sm:px-0">
              <div className="flex items-center gap-2 text-white">
                <span className="text-base sm:text-lg">📞</span>
                <span className="text-base sm:text-lg font-semibold">Call us: (817) 873-6655</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-base sm:text-lg">📧</span>
                <a href="mailto:seth@fortewebdesigns.com" className="text-base sm:text-lg font-semibold hover:text-blue-200 transition-colors">
                  Email: seth@fortewebdesigns.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base">
                Contact Us
              </Link>
              <Link href="/pricing" className="border border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors text-sm sm:text-base">
                Compare Plans
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Industry-specific CTA functionality */}
      <IndustryLeadCTA 
        industry="web-design"
        formName="Web Design Inquiry"
        title="Let's Build Your Custom Website Right"
        subtitle="Tell us about your business and we'll get back to you within 1 business day. No pressure - just real help from a team that builds custom, high-performance websites."
        mobileCtaText="Ready to get a custom website?"
        mobileCtaSubtext="Get your web design quote today"
        mobileBgGradient="bg-gradient-to-r from-blue-600 to-indigo-600"
      />
    </div>
  );
}
