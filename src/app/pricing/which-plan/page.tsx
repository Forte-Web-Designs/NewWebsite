"use client";

import { useState } from 'react';
import Link from 'next/link';
import LightButton from '@/components/LightButton';
import DarkButton from '@/components/DarkButton';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';
import SimpleScrollReveal from '@/components/animations/SimpleScrollReveal';

interface BusinessInfo {
  stage: string;
  revenue: string;
  goals: string[];
  currentWebsite: string;
  digitalMarketing: string;
  budget: string;
}

interface Recommendation {
  plan: string;
  monthlyTotal: string;
  breakdown: string[];
  reasoning: string;
  nextSteps: string[];
}

export default function WhichPlanPage() {
  const [step, setStep] = useState(1);
  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    stage: '',
    revenue: '',
    goals: [],
    currentWebsite: '',
    digitalMarketing: '',
    budget: ''
  });
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleStageSelect = (stage: string) => {
    setBusinessInfo({ ...businessInfo, stage });
    setStep(2);
  };

  const handleRevenueSelect = (revenue: string) => {
    setBusinessInfo({ ...businessInfo, revenue });
    setStep(3);
  };

  const handleGoalsSelect = (goal: string) => {
    const currentGoals = businessInfo.goals;
    const updatedGoals = currentGoals.includes(goal)
      ? currentGoals.filter(g => g !== goal)
      : [...currentGoals, goal];
    setBusinessInfo({ ...businessInfo, goals: updatedGoals });
  };

  const handleWebsiteSelect = (website: string) => {
    setBusinessInfo({ ...businessInfo, currentWebsite: website });
    setStep(5);
  };

  const handleMarketingSelect = (marketing: string) => {
    setBusinessInfo({ ...businessInfo, digitalMarketing: marketing });
    setStep(6);
  };

  const handleBudgetSelect = (budget: string) => {
    setBusinessInfo({ ...businessInfo, budget });
    generateRecommendation({ ...businessInfo, budget });
  };

  const generateRecommendation = (info: BusinessInfo) => {
    // Logic to generate recommendation based on answers
    let rec: Recommendation;

    if (info.stage === 'startup' || info.revenue === 'under-10k') {
      rec = {
        plan: 'Forte Foundation™',
        monthlyTotal: '$200/month',
        breakdown: [
          'Forte Foundation™: $200/month',
          'Includes: 5-page professional website + Forte Care™'
        ],
        reasoning: 'Perfect starting point for new businesses. Get online professionally while keeping costs manageable.',
        nextSteps: [
          'Start with Foundation to establish your online presence',
          'Add Forte SEO™ in 3-6 months when ready for growth',
          'Consider Forte Social™ when you have content to share regularly'
        ]
      };
    } else if (info.goals.includes('get-found-online') || info.goals.includes('increase-traffic')) {
      if (info.budget === 'under-500' || info.revenue === '10k-25k') {
        rec = {
          plan: 'Foundation + SEO Growth',
          monthlyTotal: '$500/month',
          breakdown: [
            'Forte Foundation™: $200/month',
            'Forte SEO™: $300/month',
            'Total savings vs. separate: $50/month'
          ],
          reasoning: 'Combines professional website with SEO to help customers find you online. Perfect balance of growth and budget.',
          nextSteps: [
            'Launch with this combination for maximum visibility',
            'Track Google rankings and organic traffic growth',
            'Add PPC or Social when ready to accelerate growth'
          ]
        };
      } else {
        rec = {
          plan: 'Foundation + SEO + Social',
          monthlyTotal: '$700/month',
          breakdown: [
            'Forte Foundation™: $200/month',
            'Forte SEO™: $300/month',
            'Forte Social™: $250/month',
            'Total savings vs. separate: $50/month'
          ],
          reasoning: 'Complete digital presence with website, search visibility, and social media engagement.',
          nextSteps: [
            'Launch all three services for comprehensive online presence',
            'Focus on content creation and customer engagement',
            'Add PPC advertising when ready to scale faster'
          ]
        };
      }
    } else if (info.goals.includes('dominate-market') || info.budget === 'over-1000') {
      rec = {
        plan: 'Forte Dominate™ (Full Ecosystem)',
        monthlyTotal: '$1,200/month',
        breakdown: [
          'Complete Forte™ Ecosystem',
          'Website + SEO + PPC + Social + Care™',
          'Everything you need to dominate your market'
        ],
        reasoning: 'Complete digital dominance package. When you\'re ready to go all-in on growth.',
        nextSteps: [
          'Launch full ecosystem for maximum market impact',
          'Expect rapid growth across all digital channels',
          'Focus on scaling operations to handle increased demand'
        ]
      };
    } else if (info.goals.includes('professional-website')) {
      if (info.currentWebsite === 'outdated' || info.currentWebsite === 'none') {
        rec = {
          plan: 'Forte Pro™',
          monthlyTotal: '$350/month',
          breakdown: [
            'Forte Pro™: $350/month',
            'Includes: Unlimited pages + advanced features + Forte Care™'
          ],
          reasoning: 'Professional website with unlimited pages and advanced features. Perfect for established businesses.',
          nextSteps: [
            'Upgrade to Pro for unlimited growth potential',
            'Add SEO services when ready for online visibility',
            'Consider PPC for immediate traffic boost'
          ]
        };
      } else {
        rec = {
          plan: 'Forte Foundation™',
          monthlyTotal: '$200/month',
          breakdown: [
            'Forte Foundation™: $200/month',
            'Includes: 5-page website refresh + ongoing maintenance'
          ],
          reasoning: 'Cost-effective refresh of your existing site with modern design and mobile optimization.',
          nextSteps: [
            'Start with Foundation refresh',
            'Upgrade to Pro if you need more pages later',
            'Add marketing services based on your growth goals'
          ]
        };
      }
    } else {
      // Default recommendation
      rec = {
        plan: 'Foundation + SEO Growth',
        monthlyTotal: '$500/month',
        breakdown: [
          'Forte Foundation™: $200/month',
          'Forte SEO™: $300/month'
        ],
        reasoning: 'Balanced approach combining professional website with search engine visibility.',
        nextSteps: [
          'Start with this proven combination',
          'Add social media or PPC as your business grows',
          'Scale up based on results and budget'
        ]
      };
    }

    setRecommendation(rec);
    setStep(7);
  };

  const resetQuiz = () => {
    setStep(1);
    setBusinessInfo({
      stage: '',
      revenue: '',
      goals: [],
      currentWebsite: '',
      digitalMarketing: '',
      budget: ''
    });
    setRecommendation(null);
  };

  return (
    <div className="relative min-h-screen">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <SimpleScrollReveal>
            <h1 className="font-roboto font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-center mb-6">
              Which Plan Is Right for Your Business?
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Answer a few quick questions to get a personalized recommendation based on your business goals and budget.
            </p>
          </SimpleScrollReveal>
        </div>

        {/* Quiz Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <SimpleScrollReveal>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Question {Math.min(step, 6)} of 6</span>
                  <span>{Math.round((Math.min(step, 6) / 6) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(Math.min(step, 6) / 6) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Step 1: Business Stage */}
              {step === 1 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    What stage is your business in?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { id: 'startup', title: 'Brand New Business', desc: 'Just starting out or launching soon' },
                      { id: 'established', title: 'Established Business', desc: 'Been in business for a while' },
                      { id: 'growing', title: 'Growing Business', desc: 'Ready to scale and expand' },
                      { id: 'mature', title: 'Mature Business', desc: 'Well-established, looking to optimize' }
                    ].map(option => (
                      <button
                        key={option.id}
                        onClick={() => handleStageSelect(option.id)}
                        className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors text-left"
                      >
                        <div className="font-semibold text-gray-900 dark:text-white mb-2">{option.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Revenue */}
              {step === 2 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    What's your approximate monthly revenue?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { id: 'under-10k', title: 'Under $10k/month', desc: 'Getting started or small local business' },
                      { id: '10k-25k', title: '$10k - $25k/month', desc: 'Growing steadily with regular customers' },
                      { id: '25k-50k', title: '$25k - $50k/month', desc: 'Well-established with strong customer base' },
                      { id: 'over-50k', title: 'Over $50k/month', desc: 'Large business ready for aggressive growth' }
                    ].map(option => (
                      <button
                        key={option.id}
                        onClick={() => handleRevenueSelect(option.id)}
                        className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors text-left"
                      >
                        <div className="font-semibold text-gray-900 dark:text-white mb-2">{option.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Goals */}
              {step === 3 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    What are your main goals? (Select all that apply)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      { id: 'professional-website', title: 'Professional Website', desc: 'Look credible and trustworthy online' },
                      { id: 'get-found-online', title: 'Get Found on Google', desc: 'Show up when people search for my services' },
                      { id: 'increase-traffic', title: 'Increase Website Traffic', desc: 'Get more visitors to my website' },
                      { id: 'generate-leads', title: 'Generate More Leads', desc: 'Get more potential customers contacting me' },
                      { id: 'social-presence', title: 'Social Media Presence', desc: 'Build and maintain social media accounts' },
                      { id: 'dominate-market', title: 'Dominate My Market', desc: 'Be the #1 choice in my industry/area' }
                    ].map(option => (
                      <button
                        key={option.id}
                        onClick={() => handleGoalsSelect(option.id)}
                        className={`p-6 border rounded-lg transition-colors text-left ${
                          businessInfo.goals.includes(option.id)
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                            : 'border-gray-200 dark:border-gray-600 hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                        }`}
                      >
                        <div className="font-semibold text-gray-900 dark:text-white mb-2">{option.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                  <div className="text-center">
                    <DarkButton 
                      onClick={() => setStep(4)}
                      disabled={businessInfo.goals.length === 0}
                    >
                      Continue ({businessInfo.goals.length} selected)
                    </DarkButton>
                  </div>
                </div>
              )}

              {/* Step 4: Current Website */}
              {step === 4 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    What's your current website situation?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { id: 'none', title: 'No Website', desc: 'Starting from scratch' },
                      { id: 'outdated', title: 'Outdated Website', desc: 'Have one but it needs major updates' },
                      { id: 'basic', title: 'Basic Website', desc: 'Simple site that works but could be better' },
                      { id: 'good', title: 'Good Website', desc: 'Professional site that just needs optimization' }
                    ].map(option => (
                      <button
                        key={option.id}
                        onClick={() => handleWebsiteSelect(option.id)}
                        className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors text-left"
                      >
                        <div className="font-semibold text-gray-900 dark:text-white mb-2">{option.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Digital Marketing */}
              {step === 5 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    What's your current digital marketing situation?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { id: 'none', title: 'No Digital Marketing', desc: 'Rely mainly on word-of-mouth and referrals' },
                      { id: 'some-social', title: 'Some Social Media', desc: 'Post occasionally on Facebook/Instagram' },
                      { id: 'active-marketing', title: 'Active Marketing', desc: 'Doing SEO, ads, or social media regularly' },
                      { id: 'comprehensive', title: 'Comprehensive Strategy', desc: 'Multiple channels and tracking results' }
                    ].map(option => (
                      <button
                        key={option.id}
                        onClick={() => handleMarketingSelect(option.id)}
                        className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors text-left"
                      >
                        <div className="font-semibold text-gray-900 dark:text-white mb-2">{option.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 6: Budget */}
              {step === 6 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    What's your monthly budget for digital marketing?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { id: 'under-300', title: 'Under $300/month', desc: 'Just starting out, need basics covered' },
                      { id: '300-500', title: '$300 - $500/month', desc: 'Ready for website + one marketing service' },
                      { id: '500-1000', title: '$500 - $1,000/month', desc: 'Want comprehensive online presence' },
                      { id: 'over-1000', title: 'Over $1,000/month', desc: 'Ready to dominate my market online' }
                    ].map(option => (
                      <button
                        key={option.id}
                        onClick={() => handleBudgetSelect(option.id)}
                        className="p-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors text-left"
                      >
                        <div className="font-semibold text-gray-900 dark:text-white mb-2">{option.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 7: Results */}
              {step === 7 && recommendation && (
                <div>
                  <div className="text-center mb-8">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Perfect! Here's Your Recommended Plan
                    </h3>
                  </div>

                  <div className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8 mb-8">
                    <div className="text-center mb-6">
                      <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                        {recommendation.plan}
                      </h4>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {recommendation.monthlyTotal}
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">What's Included:</h5>
                      <ul className="space-y-2">
                        {recommendation.breakdown.map((item, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-400">• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Why This Plan:</h5>
                      <p className="text-gray-600 dark:text-gray-400">{recommendation.reasoning}</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Your Growth Path:</h5>
                      <ol className="space-y-2">
                        {recommendation.nextSteps.map((step, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-400">
                            {index + 1}. {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <DarkButton className="w-full sm:w-auto">
                        Get Started with This Plan
                      </DarkButton>
                    </Link>
                    <Link href="/pricing">
                      <LightButton className="w-full sm:w-auto">
                        View All Pricing Options
                      </LightButton>
                    </Link>
                    <button
                      onClick={resetQuiz}
                      className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
                    >
                      Take Quiz Again
                    </button>
                  </div>
                </div>
              )}

              {/* Back Button */}
              {step > 1 && step < 7 && (
                <div className="mt-8 text-center">
                  <button
                    onClick={() => setStep(step - 1)}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    ← Back to Previous Question
                  </button>
                </div>
              )}
            </div>
          </SimpleScrollReveal>
        </div>

        {/* Additional Help Section */}
        <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <SimpleScrollReveal>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Still Have Questions?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                No problem! I'm here to help you find the perfect solution for your business.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    📞 Schedule a Free Consultation
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Let's talk about your business goals and find the perfect plan together.
                  </p>
                  <Link href="/contact" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                    Book Your Call →
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    💰 Try the ROI Calculator
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    See exactly how much you could save and earn with Forte™.
                  </p>
                  <Link href="/pricing#roi-calculator" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">
                    Calculate Your ROI →
                  </Link>
                </div>
              </div>
            </SimpleScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
