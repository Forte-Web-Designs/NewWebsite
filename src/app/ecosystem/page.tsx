import { useState } from "react";
import { Metadata } from "next";
import { Icon } from "@/components/images/Icon";
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";
import FAQSection from "@/components/FAQSection";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is the Forte Ecosystem™?",
    answer: "The Forte Ecosystem™ is our complete digital presence solution where everything works together seamlessly. Instead of juggling multiple vendors for your website, SEO, PPC, and social media, you get one expert team managing all components as an integrated system for better results and lower total costs."
  },
  {
    question: "Can I start with just a website and add more later?",
    answer: "Absolutely! Most clients start with Forte Foundation™ website design package ($200/month) and add services as they grow. You can upgrade to include SEO, PPC, or social media management at any time. Our ecosystem is designed to scale with your business needs."
  },
  {
    question: "What's the difference between Foundation and Pro website design packages?",
    answer: "Foundation includes your custom-coded website, basic analytics, and standard support. Pro adds advanced analytics, priority support, unlimited content updates, conversion optimization, and a dedicated account manager for $100/month more."
  },
  {
    question: "Do you offer one-time websites?",
    answer: "Yes! We offer one-time builds: 5 pages for $2,500 or 10 pages for $4,300. However, most clients prefer our monthly plans because they include ongoing optimization, updates, security, and support that keep your site performing at its best."
  },
  {
    question: "Why do monthly plans have a 12-month minimum?",
    answer: "Real results in SEO, PPC, and digital marketing take time. The 12-month commitment allows us to implement proven strategies, track performance, and optimize for meaningful growth rather than quick fixes. This ensures you get the ROI you're investing in."
  },
  {
    question: "Do I need to manage any of the marketing pieces?",
    answer: "Nope! That's the beauty of the Forte Ecosystem™. We handle everything - from website updates and SEO optimization to PPC campaign management and social media posting. You just focus on running your business while we handle all the digital marketing."
  },
  {
    question: "What's included in Forte Care™?",
    answer: "Forte Care™ includes 24/7 website monitoring, security updates, performance optimization, backup management, uptime monitoring, and technical support. It's included with all our monthly plans to ensure your digital presence stays secure and fast."
  },
  {
    question: "What results should I expect?",
    answer: "Results vary by industry and competition, but most clients see improved website speed (under 2 seconds), better search rankings within 3-6 months, increased organic traffic, and more qualified leads. We provide monthly reports showing your specific metrics and ROI."
  }
];

export const metadata: Metadata = {
  title: "Forte Ecosystem™ - Complete Digital Presence Solution",
  description: "Your entire digital presence, handled. From lightning-fast websites to SEO, PPC, and social media - one team, one system, unlimited growth.",
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
            The Forte Ecosystem™
            <br />
            <span className="text-blue-600">Your Entire Digital Presence, Handled</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 sm:mb-10 max-w-4xl mx-auto leading-relaxed">
            One expert team. One powerful system. Everything you need to build, grow, and scale online — without juggling vendors or chasing down results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <LightButton href="/contact" className="text-lg px-8 py-4">
              Start My Ecosystem
            </LightButton>
            <DarkButton href="/checkup" className="text-lg px-8 py-4">
              Get Free Website Analysis
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
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Foundation</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📈</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">SEO/PPC</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Social Media</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Pro Features</p>
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

      {/* How It Works - 4 Steps */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              How the Ecosystem Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Start small, grow smart. Add services as your business scales — everything integrates perfectly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Foundation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Start with a lightning-fast, custom-coded website that converts visitors into customers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Pro Features</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Upgrade to advanced analytics, priority support, and conversion optimization tools.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">SEO & PPC</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Add search engine optimization and Google Ads to drive targeted traffic and leads.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl font-bold text-white">4</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">Social Media</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Complete the ecosystem with professional social media management and engagement.
              </p>
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
                  <span>Multiple vendors who don't talk to each other</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Conflicting strategies and mixed messages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>You become the project manager for everything</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Higher total costs from multiple contracts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">❌</span>
                  <span>Slower results and unclear accountability</span>
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
                  <span>One team managing everything in coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Unified strategy across all digital channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>You focus on your business, we handle the tech</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Bundle pricing saves money vs separate vendors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✅</span>
                  <span>Faster results with clear monthly reporting</span>
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
                  <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300">Forte Foundation™</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Website Design Package</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-blue-700 dark:text-blue-300">
                <li className="flex items-center gap-3">
                  <span>⚡</span>
                  <span>Custom-coded website (no WordPress)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📱</span>
                  <span>Mobile-first responsive design</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🔒</span>
                  <span>SSL certificate and security monitoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📊</span>
                  <span>Google Analytics and tracking setup</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🌐</span>
                  <span>Domain management and hosting</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>💬</span>
                  <span>Basic support and monthly check-ins</span>
                </li>
              </ul>
            </div>
            
            {/* Forte Pro */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">⚡</span>
                <div>
                  <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300">Forte Pro™</h3>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Website Design Package</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-purple-700 dark:text-purple-300">
                <li className="flex items-center gap-3">
                  <span>🎯</span>
                  <span>Advanced conversion optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📈</span>
                  <span>Enhanced analytics and reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🔄</span>
                  <span>Unlimited content updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>⚡</span>
                  <span>Priority support and response</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>👤</span>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🧪</span>
                  <span>A/B testing and optimization</span>
                </li>
              </ul>
            </div>
            
            {/* Forte SEO/PPC */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📈</span>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300">Forte SEO™ & PPC</h3>
              </div>
              
              <ul className="space-y-3 text-green-700 dark:text-green-300">
                <li className="flex items-center gap-3">
                  <span>🔍</span>
                  <span>Keyword research and strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📝</span>
                  <span>Content optimization and creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🔗</span>
                  <span>Link building and local SEO</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>💰</span>
                  <span>Google Ads management and optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📊</span>
                  <span>Monthly ranking and traffic reports</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🎯</span>
                  <span>Lead tracking and conversion analysis</span>
                </li>
              </ul>
            </div>
            
            {/* Forte Social */}
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">📱</span>
                <h3 className="text-2xl font-bold text-orange-800 dark:text-orange-300">Forte Social™</h3>
              </div>
              
              <ul className="space-y-3 text-orange-700 dark:text-orange-300">
                <li className="flex items-center gap-3">
                  <span>📅</span>
                  <span>Content calendar and strategy</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🎨</span>
                  <span>Custom graphics and post design</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📱</span>
                  <span>Multi-platform management</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>💬</span>
                  <span>Community management and responses</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>📊</span>
                  <span>Engagement analytics and reporting</span>
                </li>
                <li className="flex items-center gap-3">
                  <span>🎯</span>
                  <span>Social media advertising campaigns</span>
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
              Your Forte Ecosystem™ Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Start where you are, grow when you're ready. Every step builds on the last.
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
                  <p className="text-3xl font-bold text-blue-600 mb-2">$200</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Lightning-fast website with hosting, security, and basic analytics
                </p>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-purple-200 dark:border-purple-700">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">+ Pro Features</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">$300</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per month total</p>
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Advanced analytics, unlimited updates, and priority support
                </p>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-green-200 dark:border-green-700">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">+ SEO & PPC</h3>
                  <p className="text-3xl font-bold text-green-600 mb-2">$800</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per month total</p>
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Search optimization and Google Ads to drive targeted traffic
                </p>
              </div>
              
              {/* Step 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-2 border-orange-200 dark:border-orange-700">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">+ Social Media</h3>
                  <p className="text-3xl font-bold text-orange-600 mb-2">$1,100</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">per month total</p>
                </div>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                  Complete ecosystem with social media management and engagement
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

      {/* Bundle Pricing */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Save Money with Ecosystem Bundles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get everything you need at a lower total cost than separate services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Bundle */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-2">Starter Bundle</h3>
                <p className="text-4xl font-bold text-blue-600 mb-2">$450</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">per month</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Save $50/month vs separate</p>
              </div>
              
              <div className="space-y-3 text-left text-blue-700 dark:text-blue-300 mb-8">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Forte Foundation™</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Forte Pro™</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Basic SEO optimization</span>
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
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">Growth Bundle</h3>
                <p className="text-4xl font-bold text-green-600 mb-2">$750</p>
                <p className="text-sm text-green-600 dark:text-green-400">per month</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Save $100/month vs separate</p>
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
                  <span>Local SEO & directory listings</span>
                </div>
              </div>
              
              <LightButton href="/contact" className="w-full">
                Start Growth Bundle
              </LightButton>
            </div>
            
            {/* Dominate Bundle */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-300 mb-2">Dominate Bundle</h3>
                <p className="text-4xl font-bold text-purple-600 mb-2">$950</p>
                <p className="text-sm text-purple-600 dark:text-purple-400">per month</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Save $150/month vs separate</p>
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
                  <span>Social media advertising</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Complete ecosystem integration</span>
                </div>
              </div>
              
              <LightButton href="/contact" className="w-full">
                Start Dominate Bundle
              </LightButton>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              All plans include Forte Care™ security and support. 12-month commitment required for results you can count on.
            </p>
            <DarkButton href="/contact">
              Schedule Your Ecosystem Strategy Call
            </DarkButton>
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
            Skip the Juggling Act. Get One Team That Does It All.
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Stop wasting time with scattered services and unclear results. With Forte Web Designs, everything works together — beautifully.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <LightButton href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              Start My Ecosystem
            </LightButton>
            <DarkButton href="/checkup" className="border-2 border-white/30 text-lg px-8 py-4">
              Get a Free Strategy Call
            </DarkButton>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
            <span>📞 (817) 873-6655</span>
            <span className="hidden sm:block">•</span>
            <a href="mailto:seth@fortewebdesigns.com" className="hover:underline">
              📧 seth@fortewebdesigns.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
