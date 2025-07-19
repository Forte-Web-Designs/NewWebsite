'use client';

import { useState } from 'react';
import { Icon } from '@/components/images/Icon';
import Link from 'next/link';
import DarkButton from './DarkButton';
import SimpleScrollReveal from './animations/SimpleScrollReveal';
import SimpleAnimatedCard from './animations/SimpleAnimatedCard';

// Main website plans with detailed features for comparison
const mainPlans = [
  {
    id: 'foundation',
    name: 'Forte Foundation™',
    monthlyPrice: '$200',
    oneTimePrice: '$2,500',
    subtitle: 'Perfect Starting Point',
    ctaText: 'Choose Foundation',
    features: {
      'Pages Included': '5 pages',
      'Hosting + Domain': '✅',
      'Mobile-Responsive Design': '✅',
      'SEO-Ready Foundation': '✅',
      'Basic Analytics': '✅',
      'Conversion Tracking': '❌',
      'Priority Support': '❌',
      'Forte Care™ Included': '✅'
    }
  },
  {
    id: 'pro',
    name: 'Forte Pro™',
    monthlyPrice: '$350',
    oneTimePrice: '$4,300',
    subtitle: 'Most Popular Choice',
    isPopular: true,
    ctaText: 'Choose Pro',
    features: {
      'Pages Included': '10 pages',
      'Hosting + Domain': '✅',
      'Mobile-Responsive Design': '✅',
      'SEO-Ready Foundation': '✅',
      'Basic Analytics': '✅',
      'Conversion Tracking': '✅',
      'Priority Support': '✅',
      'Forte Care™ Included': '✅ (with faster response times)'
    }
  }
];

// Add-on services
const addonServices = [
  {
    id: 'seo',
    name: 'Forte SEO™',
    monthlyPrice: '$300',
    oneTimePrice: '$3,600',
    subtitle: 'Boost Your Rankings',
    description: 'Professional SEO that gets results',
    features: [
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Technical SEO Audit',
      'Local SEO Setup',
      'Monthly SEO Reports',
      'Competitor Analysis',
      'Content Optimization',
      'Link Building'
    ],
    icon: '🔍'
  },
  {
    id: 'ppc',
    name: 'Forte PPC™',
    monthlyPrice: '$400',
    oneTimePrice: '$4,800',
    subtitle: 'Drive Immediate Traffic',
    description: 'Google Ads that convert',
    features: [
      'Campaign Setup & Management',
      'Ad Copy Creation',
      'Landing Page Optimization',
      'Keyword Research',
      'Weekly Performance Reports',
      'Bid Management',
      'A/B Testing',
      'Conversion Tracking'
    ],
    icon: '🎯'
  },
  {
    id: 'social',
    name: 'Forte Social™',
    monthlyPrice: '$200',
    oneTimePrice: '$2,400',
    subtitle: 'Build Your Community',
    description: 'Social media that engages',
    features: [
      '12 Custom Posts/Month',
      'Platform Management',
      'Content Calendar',
      'Monthly Analytics',
      'Hashtag Strategy',
      'Community Engagement',
      'Story Creation',
      'Performance Tracking'
    ],
    icon: '📱'
  }
];

// Bundled packages
const bundledPlans = [
  {
    id: 'starter',
    name: 'Forte Starter™',
    monthlyPrice: '$450',
    oneTimePrice: '$5,400',
    originalMonthlyPrice: '$500',
    originalOneTimePrice: '$6,000',
    subtitle: 'Website + SEO',
    description: 'Perfect for getting found online',
    includes: ['Foundation Website', 'SEO Essential'],
    ctaText: 'Start Growing',
    savings: '$50/mo'
  },
  {
    id: 'growth',
    name: 'Forte Growth™',
    monthlyPrice: '$750',
    oneTimePrice: '$9,000',
    originalMonthlyPrice: '$900',
    originalOneTimePrice: '$10,800',
    subtitle: 'Website + SEO + PPC',
    description: 'Drive traffic and convert visitors',
    includes: ['Foundation Website', 'SEO Essential', 'PPC Starter'],
    ctaText: 'Accelerate Growth',
    savings: '$150/mo',
    isPopular: true
  },
  {
    id: 'dominate',
    name: 'Forte Dominate™',
    monthlyPrice: '$950',
    oneTimePrice: '$11,400',
    originalMonthlyPrice: '$1,150',
    originalOneTimePrice: '$13,800',
    subtitle: 'Complete Digital Presence',
    description: 'Everything you need to succeed',
    includes: ['Pro Website', 'SEO Growth', 'PPC Growth', 'Social Essential'],
    ctaText: 'Dominate Your Market',
    savings: '$200/mo'
  }
];

// Expanded FAQ data
const faqData = [
  {
    question: 'What payment options do you offer?',
    answer: 'We offer flexible monthly plans with a 12-month minimum commitment, then month-to-month, or one-time payment options. Monthly plans include Forte Care™ support, hosting, and unlimited updates. One-time payments start at $2,500-$4,300 with optional maintenance plans.'
  },
  {
    question: 'Can I pay a one-time fee for my website instead of monthly?',
    answer: 'Absolutely! You can choose between monthly plans or a one-time payment. Our 5-page custom website is $2,500 one-time. Our 10-page site is $4,300 one-time. You own the site fully and can add support or hosting as needed. This is perfect for businesses that prefer to pay once and own their website outright.'
  },
  {
    question: 'What\'s included in Forte Care™?',
    answer: 'Forte Care™ includes unlimited content updates, security monitoring, speed optimization, monthly reports, technical support, and regular backups. It ensures your website stays fast, secure, and optimized for growth. Note: Forte Care™ is included in all monthly plans. For one-time sites, it\'s available as an optional maintenance plan.'
  },
  {
    question: 'Why do monthly plans require a 12-month commitment?',
    answer: 'The 12-month commitment allows us to provide premium hosting, Forte Care™ support, and unlimited updates at a lower monthly rate. After your initial 12 months, your plan automatically becomes month-to-month with no long-term commitment. This structure ensures we can deliver consistent, high-quality service while keeping costs affordable.'
  },
  {
    question: 'What is the Forte Ecosystem™?',
    answer: 'The Forte Ecosystem™ is our integrated approach to digital marketing. Start with a website, then add SEO, Google Ads, and Social Media as your business grows. Each service works together to maximize your online presence and results.'
  },
  {
    question: 'Can I switch between monthly and one-time pricing?',
    answer: 'Yes! You can start with monthly (12-month minimum) and switch to one-time payment later with credit for payments made. You can also upgrade or downgrade plans anytime to match your business needs. Monthly plans require a 12-month commitment initially, then become month-to-month.'
  },
  {
    question: 'Do you offer custom websites?',
    answer: 'Yes! All our websites are custom-coded from scratch using modern technologies. No templates, no WordPress, no plugins - just clean, fast, secure code tailored to your business needs.'
  },
  {
    question: 'What if I need more pages?',
    answer: 'Foundation includes 5 pages, Pro includes 10 pages. Additional pages are $50/page one-time setup. We can discuss custom page structures during our consultation.'
  },
  {
    question: 'How long does it take to build my website?',
    answer: 'Most websites are completed within 2-3 weeks. Complex projects may take 4-6 weeks. We provide a detailed timeline during our initial consultation and keep you updated throughout the process.'
  },
  {
    question: 'Do you provide hosting?',
    answer: 'Yes! Premium hosting is included with all monthly plans. We use enterprise-grade hosting with 99.9% uptime guarantee, SSL certificates, and daily backups.'
  },
  {
    question: 'What makes Forte different from other agencies?',
    answer: 'We focus on results-driven websites that grow with your business. Our Forte Ecosystem™ integrates website, SEO, PPC, and social media for maximum impact. Plus, everything is custom-coded for superior performance and security.'
  },
  {
    question: 'Can I add services later?',
    answer: 'Absolutely! The Forte Ecosystem™ is designed to grow with your business. Start with just a website, then add SEO when you\'re ready to rank higher, PPC when you need more traffic, and Social Media when you want to build community.'
  }
];

// Pricing toggle component
interface PricingToggleProps {
  isMonthly: boolean;
  onToggle: (monthly: boolean) => void;
}

function PricingToggle({ isMonthly, onToggle }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span className={`text-lg font-medium ${isMonthly ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}>
        Monthly
      </span>
      <button
        onClick={() => onToggle(!isMonthly)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
          isMonthly ? 'bg-blue-600' : 'bg-gray-600'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isMonthly ? 'translate-x-1' : 'translate-x-6'
          }`}
        />
      </button>
      <span className={`text-lg font-medium ${!isMonthly ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}>
        One-Time
      </span>
    </div>
  );
}

// Comparison table component
function ComparisonTable({ isMonthly, selectedPlan, onPlanSelect }: { 
  isMonthly: boolean; 
  selectedPlan: 'foundation' | 'pro';
  onPlanSelect: (plan: 'foundation' | 'pro') => void;
}) {
  const features = [
    'Pages Included',
    'Hosting + Domain',
    'Mobile-Responsive Design',
    'SEO-Ready Foundation',
    'Basic Analytics',
    'Conversion Tracking',
    'Priority Support',
    'Forte Care™ Included'
  ];

  return (
    <>
      {/* Desktop: Show both columns side by side */}
      <div className="hidden md:block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Plan Comparison
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-6 px-4 font-semibold text-gray-900 dark:text-white">Feature</th>
                <th className="text-center py-6 px-4 font-semibold text-gray-900 dark:text-white">
                  <div className="flex flex-col items-center">
                    <div className="font-bold text-lg">Foundation</div>
                    <div className="text-blue-600 dark:text-blue-400 font-bold text-xl mt-1">
                      {isMonthly ? '$200/mo' : '$2,500'}
                    </div>
                    {isMonthly && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        12-month minimum
                      </div>
                    )}
                  </div>
                </th>
                <th className="text-center py-6 px-4 font-semibold text-blue-600 dark:text-blue-400">
                  <div className="flex flex-col items-center">
                    <div className="font-bold text-lg">Pro ⭐</div>
                    <div className="text-blue-600 dark:text-blue-400 font-bold text-xl mt-1">
                      {isMonthly ? '$350/mo' : '$4,300'}
                    </div>
                    {isMonthly && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        12-month minimum
                      </div>
                    )}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="py-4 px-4 text-gray-700 dark:text-gray-300 font-medium">{feature}</td>
                  <td className="py-4 px-4 text-center">
                    <span className={`${
                      mainPlans[0].features[feature as keyof typeof mainPlans[0]['features']] === '❌' 
                        ? 'text-red-500' 
                        : 'text-green-500'
                    }`}>
                      {mainPlans[0].features[feature as keyof typeof mainPlans[0]['features']]}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`${
                      mainPlans[1].features[feature as keyof typeof mainPlans[1]['features']] === '❌' 
                        ? 'text-red-500' 
                        : 'text-green-500'
                    }`}>
                      {mainPlans[1].features[feature as keyof typeof mainPlans[1]['features']]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/contact" className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
            Choose Foundation
          </Link>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
            Choose Pro
          </Link>
        </div>
      </div>

      {/* Mobile: Show selected plan card format */}
      <div className="md:hidden space-y-4">
        {/* Plan Selection Tabs */}
        <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => onPlanSelect('foundation')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedPlan === 'foundation'
                ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            Foundation
          </button>
          <button
            onClick={() => onPlanSelect('pro')}
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
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {selectedPlan === 'foundation' 
                ? (isMonthly ? '$200/mo' : '$2,500')
                : (isMonthly ? '$350/mo' : '$4,300')
              }
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {isMonthly ? '12-month minimum' : 'one-time'}
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
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block w-full"
            >
              Choose {selectedPlan === 'foundation' ? 'Foundation' : 'Pro'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

// Ecosystem timeline component
function EcosystemTimeline() {
  const stages = [
    {
      stage: 1,
      title: 'Foundation',
      description: 'Start with a professional website',
      price: '$200/mo',
      color: 'bg-blue-500'
    },
    {
      stage: 2,
      title: 'Growth',
      description: 'Add SEO to get found online',
      price: '+$300/mo',
      color: 'bg-green-500'
    },
    {
      stage: 3,
      title: 'Scale',
      description: 'Drive traffic with PPC ads',
      price: '+$400/mo',
      color: 'bg-purple-500'
    },
    {
      stage: 4,
      title: 'Dominate',
      description: 'Build community with social media',
      price: '+$200/mo',
      color: 'bg-pink-500'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        The Forte Ecosystem™ Journey
      </h3>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
        Start with a foundation and grow at your own pace. Each stage builds upon the last, creating a comprehensive digital ecosystem that drives results.
      </p>
      
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        {stages.map((stage, index) => (
          <div key={index} className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
              <div className={`w-12 h-12 ${stage.color} rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4`}>
                {stage.stage}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{stage.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{stage.description}</p>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{stage.price}</div>
            </div>
            {index < stages.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[8px] border-l-gray-600 dark:border-l-gray-400 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <strong>Total Investment:</strong> Foundation → Growth → Scale → Dominate = $1,100/month for complete digital domination<br />
          <span className="text-xs">*Monthly plans require 12-month minimum commitment, then month-to-month</span>
        </p>
        <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
          Start Your Journey
        </Link>
      </div>
    </div>
  );
}

// Add-on services grid
function AddOnServicesGrid({ isMonthly }: { isMonthly: boolean }) {
  return (
    <div className="mb-16">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Add-On Services
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
        Enhance your Forte Foundation™ or Pro™ website with these specialized services designed to drive traffic and grow your business.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {addonServices.map((service, index) => (
          <div key={service.id} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {isMonthly ? service.monthlyPrice : service.oneTimePrice}
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                  {isMonthly ? '/month' : 'one-time'}
                </span>
              </div>
              {isMonthly && (
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  12-month minimum
                </div>
              )}
            </div>
            
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <Link href="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
              Add {service.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// Bundled plans section
function BundledPlansSection({ isMonthly }: { isMonthly: boolean }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {bundledPlans.map((plan, index) => (
        <div key={plan.id} className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 ${
          plan.isPopular ? 'border-blue-500 relative' : 'border-gray-200 dark:border-gray-700'
        }`}>
          {plan.isPopular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            </div>
          )}
          
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h4>
              <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-semibold">
                Save {plan.savings}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{plan.description}</p>
            
            <div className="mb-4">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {isMonthly ? plan.monthlyPrice : plan.oneTimePrice}
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                  {isMonthly ? '/month' : 'one-time'}
                </span>
              </div>
              {isMonthly && (
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  12-month minimum commitment
                </div>
              )}
              <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                {isMonthly ? plan.originalMonthlyPrice : plan.originalOneTimePrice}
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Includes:</h5>
            <ul className="space-y-2">
              {plan.includes.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Link href="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center">
            {plan.ctaText}
          </Link>
        </div>
      ))}
    </div>
  );
}

// FAQ accordion component
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
              <div className="w-5 h-5 text-gray-500 dark:text-gray-400">
                {openIndex === index ? '−' : '+'}
              </div>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Main pricing page component
export function PricingPage() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<'foundation' | 'pro'>('foundation');

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SimpleScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Start Your Forte™ Ecosystem
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Choose your foundation plan, then add services as your business grows.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 max-w-3xl mx-auto mb-8 border border-blue-200 dark:border-blue-700">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Monthly Plans:</strong> 12-month minimum commitment, then month-to-month. Includes Forte Care™ support, hosting, and unlimited updates.<br />
                <strong>One-Time Plans:</strong> Pay once and own your website. Forte Care™ available as optional maintenance service.
              </p>
            </div>
            
            {/* Pricing Toggle */}
            <PricingToggle isMonthly={isMonthly} onToggle={setIsMonthly} />
          </div>
        </SimpleScrollReveal>

        {/* Side-by-Side Comparison Table */}
        <SimpleScrollReveal direction="up" delay={400}>
          <div className="mb-16">
            <ComparisonTable 
              isMonthly={isMonthly} 
              selectedPlan={selectedPlan} 
              onPlanSelect={setSelectedPlan}
            />
          </div>
        </SimpleScrollReveal>

        {/* One-Time Pricing Table - Only show when one-time is selected */}
        {!isMonthly && (
          <SimpleScrollReveal direction="up" delay={500}>
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  💳 One-Time Website Options (Own Your Site Outright)
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
                  Prefer to pay once and own your website? We offer flat-rate one-time builds with no ongoing commitments.
                </p>
                
                {/* Desktop Table */}
                <div className="hidden sm:block overflow-x-auto">
                  <table className="w-full max-w-4xl mx-auto">
                    <thead>
                      <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                        <th className="text-left py-4 px-6 font-bold text-gray-900 dark:text-white text-lg">Website Package</th>
                        <th className="text-center py-4 px-6 font-bold text-blue-600 dark:text-blue-400 text-lg">One-Time Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="py-6 px-6">
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white text-lg">5-Page Custom Website</div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">Perfect for small businesses and startups</div>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">$2,500</div>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="py-6 px-6">
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white text-lg">10-Page Custom Website</div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">Ideal for established businesses with more content</div>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">$4,300</div>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="py-6 px-6">
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white text-lg">Custom / Large Websites</div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">Enterprise solutions with complex requirements</div>
                          </div>
                        </td>
                        <td className="py-6 px-6 text-center">
                          <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">Custom Quote</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card Layout */}
                <div className="sm:hidden space-y-4">
                  <div className="bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">5-Page Custom Website</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Perfect for small businesses and startups</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$2,500</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">10-Page Custom Website</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Ideal for established businesses with more content</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">$4,300</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">Custom / Large Websites</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Enterprise solutions with complex requirements</p>
                      </div>
                      <div className="text-right ml-4">
                        <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                          Custom Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-center text-gray-700 dark:text-gray-300">
                    <strong>Note:</strong> Forte Care™ and hosting can be added as optional services for one-time websites.
                  </p>
                </div>
                
                <div className="mt-8 text-center">
                  <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                    Get Your One-Time Quote
                  </Link>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
        )}

        {/* One-Time Pricing Table - Only show when One-Time is selected */}
        {!isMonthly && (
          <SimpleScrollReveal direction="up" delay={500}>
            <div className="mb-16 bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                💳 One-Time Website Options (Own Your Site Outright)
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8 max-w-3xl mx-auto">
                Prefer to pay once and own your website? We offer flat-rate one-time builds:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white">Website</th>
                      <th className="text-right py-4 px-6 font-semibold text-gray-900 dark:text-white">One-Time Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-4 px-6 text-gray-700 dark:text-gray-300">5-Page Custom Website</td>
                      <td className="py-4 px-6 text-right text-xl font-bold text-blue-600 dark:text-blue-400">$2,500</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-4 px-6 text-gray-700 dark:text-gray-300">10-Page Custom Website</td>
                      <td className="py-4 px-6 text-right text-xl font-bold text-blue-600 dark:text-blue-400">$4,300</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-gray-700 dark:text-gray-300">Custom / Large Websites</td>
                      <td className="py-4 px-6 text-right text-lg font-semibold text-purple-600 dark:text-purple-400">
                        <Link href="/contact" className="hover:underline">Custom Quote</Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="text-center mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg max-w-2xl mx-auto">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Note:</strong> Forte Care™ and hosting can be added as optional services for one-time websites.
                </p>
              </div>
              
              <div className="text-center mt-6">
                <Link href="/contact" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  Get One-Time Pricing Quote
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        )}

        {/* Forte Ecosystem Timeline */}
        <SimpleScrollReveal direction="up" delay={600}>
          <div className="mb-16">
            <EcosystemTimeline />
          </div>
        </SimpleScrollReveal>

        {/* Add-On Services Grid */}
        <SimpleScrollReveal direction="up" delay={800}>
          <AddOnServicesGrid isMonthly={isMonthly} />
        </SimpleScrollReveal>

        {/* Bundled Plans */}
        <SimpleScrollReveal direction="up" delay={1000}>
          <div className="mb-16">
            {/* Bundle Section Header */}
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                💰 Money-Saving Bundle Packages
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Combine services and save big! Each bundle is designed to meet you where you're at — whether you're launching, scaling, or dominating your local market.
              </p>
            </div>
            
            <BundledPlansSection isMonthly={isMonthly} />
          </div>
        </SimpleScrollReveal>

        {/* FAQ Section */}
        <SimpleScrollReveal direction="up" delay={1200}>
          <div className="mb-16">
            <FAQAccordion />
          </div>
        </SimpleScrollReveal>

        {/* Final CTA */}
        <SimpleScrollReveal direction="up" delay={1400}>
          <div className="text-center bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Start Your Digital Journey?
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their online presence with the Forte Ecosystem™. Let's discuss which plan is right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                Get Started Today
              </Link>
              <Link href="/case-studies" className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-8 rounded-lg transition-colors">
                View Success Stories
              </Link>
            </div>
          </div>
        </SimpleScrollReveal>
        
      </div>
    </section>
  );
}

export default PricingPage;
