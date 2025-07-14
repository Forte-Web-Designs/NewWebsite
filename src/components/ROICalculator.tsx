"use client";

import { useState, useEffect } from 'react';
import { Icon } from '@/components/images/Icon';
import SimpleScrollReveal from './animations/SimpleScrollReveal';
import DarkButton from './DarkButton';

interface ROICalculation {
  currentCosts: number;
  forteCosts: number;
  monthlySavings: number;
  trafficIncrease: number;
  conversionIncrease: number;
  revenueIncrease: number;
  monthlyROI: number;
  yearlyROI: number;
  paybackPeriod: number;
}

interface BusinessInputs {
  businessType: string;
  currentWebsiteCost: number;
  currentMarketingCost: number;
  monthlyRevenue: number;
  currentTraffic: number;
  currentConversionRate: number;
  fortePackage: string;
}

const businessTypes = [
  { value: 'restaurant', label: 'Restaurant/Food Service', trafficMultiplier: 2.2, conversionMultiplier: 1.8 },
  { value: 'contractor', label: 'Home Services/Contractor', trafficMultiplier: 2.5, conversionMultiplier: 2.1 },
  { value: 'healthcare', label: 'Healthcare/Dental', trafficMultiplier: 1.9, conversionMultiplier: 1.7 },
  { value: 'professional', label: 'Professional Services', trafficMultiplier: 2.1, conversionMultiplier: 1.9 },
  { value: 'retail', label: 'Retail/E-commerce', trafficMultiplier: 2.3, conversionMultiplier: 2.0 },
  { value: 'automotive', label: 'Automotive Services', trafficMultiplier: 2.4, conversionMultiplier: 1.8 },
  { value: 'other', label: 'Other Business Type', trafficMultiplier: 2.0, conversionMultiplier: 1.8 }
];

const fortePackages = [
  { value: 'foundation', label: 'Forte Foundation™', cost: 200 },
  { value: 'growth', label: 'Forte Growth™ (Foundation + SEO)', cost: 500 },
  { value: 'brand-boost', label: 'Forte Brand Boost™ (Foundation + SEO + Social)', cost: 700 },
  { value: 'dominate', label: 'Forte Dominate™ (Full Ecosystem)', cost: 1200 },
  { value: 'pro', label: 'Forte Pro™', cost: 350 },
  { value: 'pro-seo', label: 'Forte Pro™ + SEO Growth', cost: 850 }
];

export default function ROICalculator({ className = "" }: { className?: string }) {
  const [inputs, setInputs] = useState<BusinessInputs>({
    businessType: '',
    currentWebsiteCost: 0,
    currentMarketingCost: 0,
    monthlyRevenue: 0,
    currentTraffic: 0,
    currentConversionRate: 0,
    fortePackage: ''
  });

  const [calculation, setCalculation] = useState<ROICalculation | null>(null);
  const [showResults, setShowResults] = useState(false);

  const calculateROI = () => {
    if (!inputs.businessType || !inputs.fortePackage || inputs.monthlyRevenue <= 0) return;

    const businessType = businessTypes.find(bt => bt.value === inputs.businessType);
    const fortePackage = fortePackages.find(fp => fp.value === inputs.fortePackage);
    
    if (!businessType || !fortePackage) return;

    // Calculate current costs
    const currentCosts = inputs.currentWebsiteCost + inputs.currentMarketingCost;
    const forteCosts = fortePackage.cost;
    const monthlySavings = currentCosts - forteCosts;

    // Calculate traffic and conversion improvements
    const trafficIncrease = inputs.currentTraffic * (businessType.trafficMultiplier - 1);
    const newConversionRate = inputs.currentConversionRate * businessType.conversionMultiplier;
    const conversionIncrease = (newConversionRate - inputs.currentConversionRate) / 100;

    // Calculate revenue impact
    const additionalConversions = (inputs.currentTraffic + trafficIncrease) * conversionIncrease;
    const averageOrderValue = inputs.monthlyRevenue / (inputs.currentTraffic * (inputs.currentConversionRate / 100));
    const revenueIncrease = additionalConversions * averageOrderValue;

    // Calculate ROI
    const totalMonthlyGain = revenueIncrease + monthlySavings;
    const monthlyROI = ((totalMonthlyGain - forteCosts) / forteCosts) * 100;
    const yearlyROI = monthlyROI * 12;
    const paybackPeriod = forteCosts / Math.max(totalMonthlyGain, 1);

    const newCalculation: ROICalculation = {
      currentCosts,
      forteCosts,
      monthlySavings,
      trafficIncrease,
      conversionIncrease: conversionIncrease * 100,
      revenueIncrease,
      monthlyROI,
      yearlyROI,
      paybackPeriod
    };

    setCalculation(newCalculation);
    setShowResults(true);
  };

  const handleInputChange = (field: keyof BusinessInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
    setShowResults(false);
  };

  return (
    <section className={`py-16 md:py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SimpleScrollReveal direction="up" delay={200}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ROI Calculator: See Your Potential Return
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Calculate how much you could save and earn with Forte™. Most businesses see 180% ROI within 6 months.
            </p>
          </div>
        </SimpleScrollReveal>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <SimpleScrollReveal direction="left" delay={300}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Your Business Details
                </h3>
                
                <div className="space-y-6">
                  {/* Business Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Business Type
                    </label>
                    <select
                      value={inputs.businessType}
                      onChange={(e) => handleInputChange('businessType', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select your business type</option>
                      {businessTypes.map(type => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Current Costs */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Current Website Cost/Month
                      </label>
                      <input
                        type="number"
                        value={inputs.currentWebsiteCost || ''}
                        onChange={(e) => handleInputChange('currentWebsiteCost', parseInt(e.target.value) || 0)}
                        placeholder="e.g., 150"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Current Marketing Cost/Month
                      </label>
                      <input
                        type="number"
                        value={inputs.currentMarketingCost || ''}
                        onChange={(e) => handleInputChange('currentMarketingCost', parseInt(e.target.value) || 0)}
                        placeholder="e.g., 800"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Revenue & Traffic */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Monthly Revenue
                      </label>
                      <input
                        type="number"
                        value={inputs.monthlyRevenue || ''}
                        onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value) || 0)}
                        placeholder="e.g., 25000"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Monthly Website Visitors
                      </label>
                      <input
                        type="number"
                        value={inputs.currentTraffic || ''}
                        onChange={(e) => handleInputChange('currentTraffic', parseInt(e.target.value) || 0)}
                        placeholder="e.g., 500"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Conversion Rate & Package */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Current Conversion Rate %
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={inputs.currentConversionRate || ''}
                        onChange={(e) => handleInputChange('currentConversionRate', parseFloat(e.target.value) || 0)}
                        placeholder="e.g., 2.5"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Forte™ Package
                      </label>
                      <select
                        value={inputs.fortePackage}
                        onChange={(e) => handleInputChange('fortePackage', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a package</option>
                        {fortePackages.map(pkg => (
                          <option key={pkg.value} value={pkg.value}>
                            {pkg.label} (${pkg.cost}/month)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <DarkButton 
                    onClick={calculateROI}
                    className="w-full"
                    disabled={!inputs.businessType || !inputs.fortePackage || inputs.monthlyRevenue <= 0}
                  >
                    Calculate My ROI
                  </DarkButton>
                </div>
              </div>
            </SimpleScrollReveal>

            {/* Results Section */}
            <SimpleScrollReveal direction="right" delay={400}>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                {!showResults ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">📊</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Your ROI Report
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Fill out the form to see your personalized ROI calculation
                    </p>
                  </div>
                ) : calculation ? (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Your ROI Projection
                    </h3>
                    
                    <div className="space-y-6">
                      {/* Cost Comparison */}
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Monthly Cost Comparison
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Current Costs:</span>
                            <span className="font-medium text-red-600">${calculation.currentCosts}/month</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Forte™ Costs:</span>
                            <span className="font-medium text-blue-600">${calculation.forteCosts}/month</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-semibold text-gray-900 dark:text-white">Monthly Savings:</span>
                            <span className="font-bold text-green-600">
                              {calculation.monthlySavings >= 0 ? '+' : ''}${calculation.monthlySavings}/month
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Performance Improvements */}
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Expected Performance Boost
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Additional Traffic:</span>
                            <span className="font-medium text-green-600">+{Math.round(calculation.trafficIncrease)} visitors/month</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Conversion Improvement:</span>
                            <span className="font-medium text-green-600">+{calculation.conversionIncrease.toFixed(1)}%</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-semibold text-gray-900 dark:text-white">Revenue Increase:</span>
                            <span className="font-bold text-green-600">+${Math.round(calculation.revenueIncrease)}/month</span>
                          </div>
                        </div>
                      </div>

                      {/* ROI Summary */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Return on Investment
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Monthly ROI:</span>
                            <span className="font-medium text-blue-600">{calculation.monthlyROI.toFixed(0)}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Annual ROI:</span>
                            <span className="font-medium text-blue-600">{calculation.yearlyROI.toFixed(0)}%</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-semibold text-gray-900 dark:text-white">Payback Period:</span>
                            <span className="font-bold text-blue-600">{calculation.paybackPeriod.toFixed(1)} months</span>
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="text-center pt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          Ready to start seeing these results?
                        </p>
                        <a 
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                        >
                          Get Started Today
                          <Icon name="arrow-right" className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </SimpleScrollReveal>
          </div>
        </div>

        {/* Disclaimer */}
        <SimpleScrollReveal direction="up" delay={600}>
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              * ROI calculations are estimates based on industry averages and typical Forte™ client results. 
              Actual results may vary based on industry, competition, and implementation factors.
            </p>
          </div>
        </SimpleScrollReveal>
      </div>
    </section>
  );
}
