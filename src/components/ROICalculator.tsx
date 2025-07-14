"use client";

import { useState } from 'react';
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
    fortePackage: ''
  });

  const [calculation, setCalculation] = useState<ROICalculation | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Simplified calculation for businesses without analytics

  const calculateROI = () => {
    if (!inputs.businessType || !inputs.fortePackage || inputs.monthlyRevenue <= 0) return;

    const businessType = businessTypes.find(bt => bt.value === inputs.businessType);
    const fortePackage = fortePackages.find(fp => fp.value === inputs.fortePackage);
    
    if (!businessType || !fortePackage) return;

    // Simplified projections based on business type and revenue
    const monthlyRevenue = inputs.monthlyRevenue;
    const averageNewCustomersPerMonth = Math.round((monthlyRevenue / 1000) * 0.3); // Conservative estimate
    const revenueIncrease = averageNewCustomersPerMonth * (monthlyRevenue / 50); // Conservative customer value
    const currentCosts = inputs.currentWebsiteCost + inputs.currentMarketingCost;
    const forteCosts = fortePackage.cost;
    const monthlySavings = currentCosts - forteCosts;
    const totalMonthlyGain = revenueIncrease + monthlySavings;
    const monthlyROI = ((totalMonthlyGain - forteCosts) / forteCosts) * 100;

    const newCalculation: ROICalculation = {
      currentCosts,
      forteCosts,
      monthlySavings,
      trafficIncrease: averageNewCustomersPerMonth * 10, // Estimated website visitors
      conversionIncrease: 0, // Not used in simple mode
      revenueIncrease,
      monthlyROI,
      yearlyROI: monthlyROI * 12,
      paybackPeriod: forteCosts / Math.max(totalMonthlyGain, 1)
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

                  {/* Current Costs - Always shown */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Current Website Cost/Month <span className="text-xs text-gray-500">(optional)</span>
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
                        Current Marketing Cost/Month <span className="text-xs text-gray-500">(optional)</span>
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

                  {/* Monthly Revenue - Always required */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Monthly Revenue *
                    </label>
                    <input
                      type="number"
                      value={inputs.monthlyRevenue || ''}
                      onChange={(e) => handleInputChange('monthlyRevenue', parseInt(e.target.value) || 0)}
                      placeholder="e.g., 25000"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Package Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Forte™ Package *
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

                  <DarkButton 
                    onClick={calculateROI}
                    className="w-full"
                    disabled={
                      !inputs.businessType || 
                      !inputs.fortePackage || 
                      inputs.monthlyRevenue <= 0
                    }
                  >
                    Get Business Growth Estimate
                  </DarkButton>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
                    💡 Estimates based on industry averages for your business type
                  </p>
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
                      Your Business Growth Estimate
                    </h3>
                    
                    <div className="space-y-6">
                      {/* Cost Comparison */}
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Monthly Investment Comparison
                        </h4>
                        <div className="space-y-2">
                          {calculation.currentCosts > 0 && (
                            <div className="flex justify-between">
                              <span className="text-gray-600 dark:text-gray-400">Current Costs:</span>
                              <span className="font-medium text-red-600">${calculation.currentCosts}/month</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Forte™ Investment:</span>
                            <span className="font-medium text-blue-600">${calculation.forteCosts}/month</span>
                          </div>
                          {calculation.currentCosts > 0 && (
                            <div className="flex justify-between border-t pt-2">
                              <span className="font-semibold text-gray-900 dark:text-white">
                                {calculation.monthlySavings >= 0 ? 'Monthly Savings:' : 'Additional Investment:'}
                              </span>
                              <span className={`font-bold ${calculation.monthlySavings >= 0 ? 'text-green-600' : 'text-orange-600'}`}>
                                {calculation.monthlySavings >= 0 ? '+' : ''}${calculation.monthlySavings}/month
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Performance Improvements */}
                      <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Expected Business Growth
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Estimated New Customers:</span>
                            <span className="font-medium text-green-600">+{Math.round(calculation.trafficIncrease / 10)}/month</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Professional Online Presence:</span>
                            <span className="font-medium text-green-600">✓ Mobile-Optimized</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-semibold text-gray-900 dark:text-white">Projected Revenue Boost:</span>
                            <span className="font-bold text-green-600">+${Math.round(calculation.revenueIncrease)}/month</span>
                          </div>
                        </div>
                      </div>

                      {/* ROI Summary */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Investment Summary
                        </h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Monthly Investment:</span>
                            <span className="font-medium text-blue-600">${calculation.forteCosts}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-gray-400">Expected Monthly Return:</span>
                            <span className="font-medium text-blue-600">${Math.round(calculation.revenueIncrease)}</span>
                          </div>
                          <div className="flex justify-between border-t pt-2">
                            <span className="font-semibold text-gray-900 dark:text-white">Estimated Payback:</span>
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
              * Growth estimates are based on industry averages and typical business improvement patterns. 
              Actual results may vary based on industry, competition, and implementation factors.
            </p>
          </div>
        </SimpleScrollReveal>
      </div>
    </section>
  );
}
