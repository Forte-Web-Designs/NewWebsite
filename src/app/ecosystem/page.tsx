import { useState } from "react";
import { Metadata } from "next";
import { Icon } from "@/components/images/Icon";
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";
import FAQSection from "@/components/FAQSection";
import { CONTACT_INFO } from "@/constants/contact";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is the Forte Ecosystem™?",
    answer: "A bundled Growth System — website, SEO, scaling features, and social media — all managed by one expert team."
  },
  {
    question: "Can I start small?",
    answer: "Yes. Begin with Foundation and add layers as your business grows."
  },
  {
    question: "Why a 12-month minimum?",
    answer: "Growth strategies like SEO and ads require consistency to deliver measurable results."
  },
  {
    question: "What results should I expect?",
    answer: "Realistic improvements in rankings, steady traffic growth, and more qualified leads — not overnight promises."
  }
];

export const metadata: Metadata = {
  title: "Forte Ecosystem™ | Complete Digital Growth System",
  description: "The Forte Ecosystem™ combines web design, SEO, PPC, social media, and support into one integrated system. One team, one strategy, faster results.",
};

export default function ForteEcosystemPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZG90cyBmaWxsPSIjMjU2M2ViIiBmaWxsLW9wYWNpdHk9IjAuMDUiIGN4PSI0IiBjeT0iNCIgcj0iMSIvPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm sm:text-base md:text-lg font-medium mb-4 sm:mb-6">
            <Icon name="star" className="h-4 w-4 sm:h-5 sm:w-5" />
            The Complete System
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
            The Forte Ecosystem™ — Your Complete Growth System
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
            One team. One system. Every digital growth layer your business needs — working together seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <LightButton href="/contact" className="text-lg px-8 py-4">
              Start My Ecosystem
            </LightButton>
            <DarkButton href="/checkup" className="text-lg px-8 py-4">
              Book Free Growth Snapshot
            </DarkButton>
          </div>

          {/* Visual Integration Mockup */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Foundation — Your Website</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📈</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Growth — SEO & PPC</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Scaling — Pro Features</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Ecosystem Complete — Social Media</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                  All components work together seamlessly, managed by one expert team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Layers Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Growth System Layers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Four integrated layers that work together to build, grow, and scale your business online.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🏗️</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Foundation — Your Website</h3>
              <ul className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-2">
                <li>• Custom-coded, lightning-fast site</li>
                <li>• Hosting, SSL, analytics setup</li>
                <li>• Mobile-first design</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">📈</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Growth — SEO & PPC</h3>
              <ul className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-2">
                <li>• Full SEO strategy & optimization</li>
                <li>• Google Ads management</li>
                <li>• Local SEO + directory listings</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">⚡</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Scaling — Pro Features</h3>
              <ul className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-2">
                <li>• Unlimited content updates</li>
                <li>• Advanced analytics + A/B testing</li>
                <li>• Dedicated account manager</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">📱</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Ecosystem Complete — Social Media</h3>
              <ul className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-2">
                <li>• Posting + engagement</li>
                <li>• Custom graphics + campaigns</li>
                <li>• Social media advertising</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why the Ecosystem Matters - Comparison */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Why the Ecosystem Matters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Stop juggling multiple vendors who don't communicate. Get everything coordinated by one expert team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Old Way */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-800 rounded-full mb-4">
                  <span className="text-2xl">😤</span>
                </div>
                <h3 className="text-2xl font-bold text-red-800 dark:text-red-300">The Old Way</h3>
              </div>
              
              <ul className="space-y-4 text-red-700 dark:text-red-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Multiple vendors with conflicting strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Higher costs across scattered contracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>No accountability, slower results</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>You become the project manager</span>
                </li>
              </ul>
            </div>
            
            {/* Forte Way */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">The Forte Way</h3>
              </div>
              
              <ul className="space-y-4 text-green-700 dark:text-green-300">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>One coordinated team, unified system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Lower bundled cost vs separate vendors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Clear reporting + accountability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Faster results from integrated strategy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - Component Table */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              What's Included in Each Component
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Every piece of the ecosystem is built to work together seamlessly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Forte Foundation */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🏗️</span>
                <div>
                  <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300">Forte Foundation™ (Website)</h3>
                </div>
              </div>
              
              <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                <li className="flex items-center gap-3">
                  <span>⚡</span>
                  <span>Custom-coded (no WordPress)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📱</span>
                  <span>Mobile-first + SSL security</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📊</span>
                  <span>Analytics & performance tracking</span>
                </li>
              </ul>
            </div>
            
            {/* Forte Pro */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">⚡</span>
                <div>
                  <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300">Forte Pro™ (Scaling Layer)</h3>
                </div>
              </div>
              
              <ul className="space-y-3 text-purple-700 dark:text-purple-300">
                <li className="flex items-center gap-3">
                  <span>🔄</span>
                  <span>Unlimited content updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📈</span>
                  <span>Advanced analytics + A/B testing</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>👤</span>
                  <span>Priority support + dedicated account manager</span>
                </li>
              </ul>
            </div>
            
            {/* Forte SEO/PPC */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📈</span>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">Forte SEO™ & PPC (Growth Layer)</h3>
              </div>
              
              <ul className="space-y-3 text-green-700 dark:text-green-300">
                <li className="flex items-center gap-3">
                  <span>🔍</span>
                  <span>Keyword research + content optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🔗</span>
                  <span>Local SEO + link building</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>💰</span>
                  <span>Google Ads setup + management</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📊</span>
                  <span>Monthly reports + lead tracking</span>
                </li>
              </ul>
            </div>
            
            {/* Forte Social */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📱</span>
                <h3 className="text-2xl font-bold text-orange-800 dark:text-orange-300">Forte Social™ (Ecosystem Layer)</h3>
              </div>
              
              <ul className="space-y-3 text-orange-700 dark:text-orange-300">
                <li className="flex items-center gap-3">
                  <span>🎨</span>
                  <span>Custom graphics + content calendar</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📱</span>
                  <span>Multi-platform posting & engagement</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🎯</span>
                  <span>Social ad campaigns</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📊</span>
                  <span>Performance reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Forte Ecosystem Journey - Pricing Ladder */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Ecosystem Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A step-by-step visual of how to build your complete Growth System.
            </p>
          </div>
          
          <div className="relative">
            {/* Journey Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-blue-200 dark:border-blue-700">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Foundation</h3>
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Launch with custom website
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-green-200 dark:border-green-700">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Growth</h3>
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Add SEO & PPC to drive traffic
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-purple-200 dark:border-purple-700">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Scaling</h3>
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Unlock Pro Features & analytics
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-orange-200 dark:border-orange-700">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Ecosystem</h3>
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Complete system with Social Media
                </p>
              </div>
            </div>
            
            {/* Journey Arrow */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 pointer-events-none">
              <div className="flex items-center justify-between px-12">
                <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Bundles */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Pricing & Bundles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Realistic pricing tiers with bundle highlights showing your savings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Bundle */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2">Starter Bundle — $450/mo</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Save $50 vs separate</p>
              </div>
              
              <div className="space-y-3 text-left text-blue-700 dark:text-blue-300 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Foundation + Pro</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Basic SEO setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Save $50 vs separate</span>
                </div>
              </div>
              
              <LightButton href="/contact" className="w-full">
                Start Starter Bundle
              </LightButton>
            </div>
            
            {/* Growth Bundle */}
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-700 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              
              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">Growth Bundle — $750/mo</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Save $100 vs separate</p>
              </div>
              
              <div className="space-y-3 text-left text-green-700 dark:text-green-300 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Everything in Starter</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Full SEO optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Google Ads management</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Local SEO + directory listings</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Save $100 vs separate</span>
                </div>
              </div>
              
              <LightButton href="/contact" className="w-full">
                Start Growth Bundle
              </LightButton>
            </div>
            
            {/* Dominate Bundle */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300 mb-2">Dominate Bundle — $950/mo</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Save $150 vs separate</p>
              </div>
              
              <div className="space-y-3 text-left text-purple-700 dark:text-purple-300 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Everything in Growth</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Forte Social™ management</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Social media ad campaigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Save $150 vs separate</span>
                </div>
              </div>
              
              <LightButton href="/contact" className="w-full">
                Start Dominate Bundle
              </LightButton>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All plans include Forte Care™ support & security. 12-month commitment required for reliable results.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need to know about the Forte Ecosystem™
            </p>
          </div>
          
          <FAQSection faqData={faqData} />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Stop Juggling Vendors. Start Growing with One Complete System.
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Stop wasting time with scattered services and unclear results. With Forte Web Designs, everything works together - beautifully.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <LightButton href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              Start My Ecosystem
            </LightButton>
            <DarkButton href="/checkup" className="border-2 border-white/30 text-lg px-8 py-4">
              Book a Free Strategy Call
            </DarkButton>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
            <span>📞 {CONTACT_INFO.phone}</span>
            <span className="hidden sm:block">•</span>
            <a href={CONTACT_INFO.emailHref} className="hover:underline">
              📧 {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
