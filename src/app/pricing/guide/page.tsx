"use client";

import { useState } from 'react';
import Link from 'next/link';
import LightButton from '@/components/LightButton';
import DarkButton from '@/components/DarkButton';
import ROICalculator from '@/components/ROICalculator';

interface BusinessScenario {
  id: string;
  title: string;
  description: string;
  businessType: string;
  goals: string[];
  recommendation: {
    plan: string;
    monthlyTotal: string;
    breakdown: string[];
    reasoning: string;
  };
  nextSteps: string[];
}

const businessScenarios: BusinessScenario[] = [
  {
    id: 'startup',
    title: 'Brand New Business',
    description: "You're just starting out and need a professional online presence",
    businessType: 'Startup/New Business',
    goals: [
      'Get online quickly',
      'Look professional',
      'Keep costs manageable',
      'Room to grow later'
    ],
    recommendation: {
      plan: 'Forte Foundation™',
      monthlyTotal: '$200/month',
      breakdown: [
        'Forte Foundation™: $200/month',
        'Includes: 5-page website + Forte Care™'
      ],
      reasoning: 'Perfect starting point with everything you need to establish credibility online. Forte Care™ keeps your site maintained while you focus on growing your business.'
    },
    nextSteps: [
      'Start with Foundation to get online',
      'Add Forte SEO™ in 3-6 months when ready for growth',
      'Consider Forte Social™ when you have content to share'
    ]
  },
  {
    id: 'local-service',
    title: 'Local Service Business',
    description: "You serve customers in your area and need to be found on Google",
    businessType: 'Local Service (Plumber, Dentist, Lawyer, etc.)',
    goals: [
      'Show up when people search locally',
      'Get phone calls and appointments',
      'Beat local competitors',
      'Build trust with reviews'
    ],
    recommendation: {
      plan: 'Foundation + SEO Essential™',
      monthlyTotal: '$500/month',
      breakdown: [
        'Forte Foundation™: $200/month',
        'Forte SEO Essential™: +$300/month'
      ],
      reasoning: 'Local businesses NEED to be found on Google. SEO Essential gets you ranking for local searches while your website converts visitors into customers.'
    },
    nextSteps: [
      'Start with Foundation + SEO Essential™',
      'Add Forte Social™ (+$200/month) for community engagement',
      'Consider PPC during busy seasons'
    ]
  },
  {
    id: 'ecommerce',
    title: 'Online Store/E-commerce',
    description: "You sell products online and need traffic + conversions",
    businessType: 'E-commerce/Retail',
    goals: [
      'Drive traffic to product pages',
      'Increase online sales',
      'Compete with big retailers',
      'Build brand awareness'
    ],
    recommendation: {
      plan: 'Pro + SEO Growth™ + PPC Growth™',
      monthlyTotal: '$1,500/month',
      breakdown: [
        'Forte Pro™: $350/month',
        'Forte SEO Growth™: +$500/month',
        'Forte PPC Growth™: +$650/month'
      ],
      reasoning: 'E-commerce needs maximum visibility. Pro gives you more pages for products, SEO Growth includes content marketing, and PPC drives immediate sales.'
    },
    nextSteps: [
      'Start with Pro + SEO Growth™ ($850/month)',
      'Add PPC Growth™ once SEO momentum builds',
      'Social Growth™ for product showcasing'
    ]
  },
  {
    id: 'professional',
    title: 'Professional Services',
    description: "You're a consultant, agency, or professional who needs credibility",
    businessType: 'Consultant/Agency/Professional',
    goals: [
      'Demonstrate expertise',
      'Generate quality leads',
      'Build thought leadership',
      'Professional presentation'
    ],
    recommendation: {
      plan: 'Pro + SEO Growth™ + Social Essential™',
      monthlyTotal: '$1,050/month',
      breakdown: [
        'Forte Pro™: $350/month',
        'Forte SEO Growth™: +$500/month',
        'Forte Social Essential™: +$200/month'
      ],
      reasoning: 'Professionals need comprehensive digital presence. Pro handles complex services, SEO Growth includes content marketing for thought leadership, and Social builds authority.'
    },
    nextSteps: [
      'Start with Pro + SEO Essential™ ($650/month)',
      'Upgrade to SEO Growth™ for content marketing',
      'Add Social for thought leadership content'
    ]
  },
  {
    id: 'restaurant',
    title: 'Restaurant/Food Service',
    description: "You need local customers to find you and see your menu/atmosphere",
    businessType: 'Restaurant/Food Service',
    goals: [
      'Local customers find you easily',
      'Showcase menu and atmosphere',
      'Build community following',
      'Drive foot traffic'
    ],
    recommendation: {
      plan: 'Foundation + SEO Essential™ + Social Growth™',
      monthlyTotal: '$850/month',
      breakdown: [
        'Forte Foundation™: $200/month',
        'Forte SEO Essential™: +$300/month',
        'Forte Social Growth™: +$350/month'
      ],
      reasoning: 'Restaurants thrive on local SEO and social engagement. Essential SEO gets you found locally, while Social Growth showcases your food and builds community.'
    },
    nextSteps: [
      'Start with Foundation + SEO Essential™ ($500/month)',
      'Add Social Growth™ for food photography and engagement',
      'Consider PPC for special events or promotions'
    ]
  },
  {
    id: 'established',
    title: 'Established Business Scaling',
    description: "You're successful but want to dominate your market online",
    businessType: 'Established Business Ready to Scale',
    goals: [
      'Dominate market share',
      'Maximum online visibility',
      'Professional brand presence',
      'Comprehensive digital strategy'
    ],
    recommendation: {
      plan: 'Full Forte™ Ecosystem',
      monthlyTotal: '$1,850/month',
      breakdown: [
        'Forte Pro™: $350/month',
        'Forte SEO Growth™: +$500/month',
        'Forte PPC Growth™: +$650/month',
        'Forte Social Growth™: +$350/month'
      ],
      reasoning: 'Market leaders need comprehensive presence. Every channel working together amplifies results and creates competitive advantages that are hard to replicate.'
    },
    nextSteps: [
      'Implement Pro + SEO Growth™ first ($850/month)',
      'Add PPC Growth™ for immediate traffic',
      'Complete with Social Growth™ for total market presence'
    ]
  }
];

export default function PricingGuide() {
  const [selectedScenario, setSelectedScenario] = useState<string>('local-service');
  const [showCalculator, setShowCalculator] = useState(false);

  const currentScenario = businessScenarios.find(s => s.id === selectedScenario);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Which Forte™ Plan Is Right for Your Business?
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto mb-8">
            Let's find the perfect combination of services to grow your business. 
            Choose your situation below for a personalized recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <LightButton>View All Plans</LightButton>
            </Link>
            <button 
              onClick={() => setShowCalculator(!showCalculator)}
              className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-lg font-semibold transition-all duration-200"
            >
              {showCalculator ? 'Hide Calculator' : 'Quick Calculator'}
            </button>
          </div>
        </div>
      </section>

      {/* Business Scenario Selector */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            What Best Describes Your Business?
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {businessScenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setSelectedScenario(scenario.id)}
                className={`p-6 rounded-xl border-2 text-left transition-all duration-200 ${
                  selectedScenario === scenario.id
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-300'
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {scenario.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {scenario.description}
                </p>
              </button>
            ))}
          </div>

          {/* Selected Scenario Details */}
          {currentScenario && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left Column - Scenario Details */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {currentScenario.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    <strong>Business Type:</strong> {currentScenario.businessType}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Your Goals:
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {currentScenario.goals.map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-green-500 mt-1">✓</span>
                        <span className="text-gray-600 dark:text-gray-400">{goal}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Recommended Growth Path:
                  </h4>
                  <ol className="space-y-2">
                    {currentScenario.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Right Column - Recommendation */}
                <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/30 dark:to-blue-900/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Recommendation
                  </h4>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                        {currentScenario.recommendation.plan}
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">
                        {currentScenario.recommendation.monthlyTotal}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {currentScenario.recommendation.breakdown.map((item, index) => (
                      <div key={index} className="text-sm text-gray-600 dark:text-gray-400">
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6">
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Why This Works:</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {currentScenario.recommendation.reasoning}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link href="/contact">
                      <DarkButton className="w-full text-center">
                        Get Started with This Plan
                      </DarkButton>
                    </Link>
                    <Link href="/pricing">
                      <button className="w-full py-3 px-6 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                        Compare All Plans
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Inline Calculator Section */}
      {showCalculator && (
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Business Growth Calculator
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Get a personalized estimate of how Forte™ could impact your business growth and ROI.
              </p>
            </div>
            <ROICalculator />
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Still Not Sure? Let's Talk!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Every business is unique. If none of these scenarios fit perfectly, 
            let's have a quick conversation about your specific needs.
          </p>
          <Link href="/contact">
            <DarkButton>Get a Custom Recommendation</DarkButton>
          </Link>
        </div>
      </section>
    </div>
  );
}
