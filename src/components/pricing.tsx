import { Icon } from '@/components/images/Icon';
import Link from 'next/link';
import DarkButton from './DarkButton';
import SimpleScrollReveal from './animations/SimpleScrollReveal';
import SimpleAnimatedCard from './animations/SimpleAnimatedCard';

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  isPopular?: boolean;
  ctaText: string;
  ctaMarginTop?: string;
  including: string[];
  addons: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'foundation',
    name: 'Forte Foundation™',
    price: '$200/month',
    subtitle: 'Perfect Starting Point • No Setup Fees',
    isPopular: true,
    ctaText: 'Lock In My Rate',
    including: [
      '5-Page Custom-Coded Website',
      'Domain + Premium Hosting',
      'Forte Care™ Included',
      'Mobile-Responsive & SEO-Ready',
      'Basic Analytics Setup',
      'Forte Guarantee™'
    ],
    addons: [
      'Forte SEO Essential™: +$300/month',
      'Forte PPC Starter™: +$400/month',
      'Forte Social Essential™: +$200/month'
    ]
  },
  {
    id: 'pro',
    name: 'Forte Pro™',
    price: '$350/month',
    subtitle: 'Best Value for Growth • Priority Support • Most Popular!',
    ctaText: 'Get Pro Access',
    ctaMarginTop: 'mt-20',
    including: [
      '10-Page Custom-Coded Website (2x more content)',
      'Domain + Premium Hosting',
      'Forte Care™ Plus Priority Support',
      'Advanced Google Analytics + Conversion Tracking',
      'Monthly Strategy Calls & Performance Reviews',
      'SEO-Optimized for Better Rankings',
      'Forte Guarantee™'
    ],
    addons: [
      'Forte SEO Growth™: +$500/month (vs $800 with Foundation)',
      'Forte PPC Growth™: +$650/month (vs $1,050 with Foundation)',
      'Forte Social Growth™: +$350/month (vs $550 with Foundation)'
    ]
  }
];

// Service-specific pricing plans
const servicePricingPlans: PricingPlan[] = [
  {
    id: 'seo-essential',
    name: 'Forte SEO Essential™',
    price: '+$300/month',
    subtitle: 'Requires Forte Foundation™ or Pro™',
    ctaText: 'Boost Rankings',
    including: [
      'Technical SEO Foundation',
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Monthly Forte SEO Reports™'
    ],
    addons: [
      'Content Creation: +$150/month',
      'Local SEO Boost: +$100/month',
      'Link Building: +$200/month'
    ]
  },
  {
    id: 'seo-growth',
    name: 'Forte SEO Growth™',
    price: '+$500/month',
    subtitle: 'Requires Forte Foundation™ or Pro™',
    isPopular: true,
    ctaText: 'Dominate Search',
    including: [
      'Everything in Forte SEO Essential™',
      '4 Optimized Blog Posts/Month',
      'Local SEO & Google Business Profile',
      'Competitor Analysis',
      'Advanced Forte SEO Reports™'
    ],
    addons: [
      'Extra Blog Posts: +$75/ea',
      'E-commerce SEO: +$200/month',
      'Video SEO: +$150/month'
    ]
  },
  {
    id: 'ppc-starter',
    name: 'Forte PPC Starter™',
    price: '+$400/month',
    subtitle: 'Requires Forte Foundation™ + Ad Budget',
    ctaText: 'Get Customers',
    including: [
      'Google Ads Campaign Setup',
      'Keyword Research & Strategy',
      'Ad Copy Creation & Testing',
      'Landing Page Optimization',
      'Weekly Forte PPC Reports™'
    ],
    addons: [
      'Facebook Ads: +$200/month',
      'Bing Ads: +$150/month',
      'Conversion Tracking: +$100/month'
    ]
  },
  {
    id: 'ppc-growth',
    name: 'Forte PPC Growth™',
    price: '+$650/month',
    subtitle: 'Requires Forte Pro™ + Ad Budget',
    isPopular: true,
    ctaText: 'Scale Revenue',
    including: [
      'Everything in Forte PPC Starter™',
      'Multi-Platform Campaigns',
      'Advanced Conversion Tracking',
      'A/B Testing & Optimization',
      'Advanced Forte PPC Reports™'
    ],
    addons: [
      'YouTube Ads: +$250/month',
      'Shopping Campaigns: +$200/month',
      'Remarketing Setup: +$150/month'
    ]
  },
  {
    id: 'social-essential',
    name: 'Forte Social Essential™',
    price: '+$200/month',
    subtitle: 'Requires Forte Foundation™ or Pro™',
    ctaText: 'Boost Engagement',
    including: [
      '12 Custom Posts/Month',
      'Platform Management (2 platforms)',
      'Content Calendar Planning',
      'Monthly Forte Social Reports™'
    ],
    addons: [
      'Extra Platform: +$100/month',
      'Stories/Reels: +$150/month',
      'Community Management: +$200/month'
    ]
  },
  {
    id: 'social-growth',
    name: 'Forte Social Growth™',
    price: '+$350/month',
    subtitle: 'Requires Forte Foundation™ or Pro™',
    isPopular: true,
    ctaText: 'Build Community',
    including: [
      '20 Custom Posts/Month',
      'Platform Management (3 platforms)',
      'Stories & Reels Creation',
      'Community Management',
      'Advanced Forte Social Reports™'
    ],
    addons: [
      'Paid Social Ads: +$300/month',
      'Influencer Outreach: +$250/month',
      'Video Content: +$200/month'
    ]
  }
];

// Ecosystem Package Bundles - Complete Solutions
const ecosystemPackages: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Forte Starter™',
    price: '$200/month',
    subtitle: 'Perfect for New Businesses • No Setup Fees',
    ctaText: 'Get Started Today',
    including: [
      'Forte Foundation™ Website (5 pages)',
      'Domain + Premium Hosting',
      'Forte Care™ Support Included',
      'Mobile-Responsive & SEO-Ready',
      'Forte Guarantee™'
    ],
    addons: [
      'Add SEO: +$300/month',
      'Add PPC: +$400/month',
      'Add Social: +$200/month'
    ]
  },
  {
    id: 'growth',
    name: 'Forte Growth™',
    price: '$500/month',
    subtitle: 'Most Popular Choice • Save $100/mo',
    isPopular: true,
    ctaText: 'Start Growing',
    including: [
      'Forte Foundation™ Website (5 pages)',
      'Forte SEO Essential™ Package',
      'Technical SEO + On-Page Optimization',
      'Monthly SEO Reports & Strategy',
      'Forte Care™ Support Included'
    ],
    addons: [
      'Upgrade to Pro Site: +$150/month',
      'Add PPC: +$400/month',
      'Add Social: +$200/month'
    ]
  },
  {
    id: 'brand-boost',
    name: 'Forte Brand Boost™',
    price: '$700/month',
    subtitle: 'Complete Brand Presence • Save $200/mo',
    ctaText: 'Build Brand',
    including: [
      'Forte Foundation™ Website (5 pages)',
      'Forte SEO Essential™ Package',
      'Forte Social Essential™ (2 platforms)',
      '12 Custom Posts + Content Calendar',
      'Unified Brand Strategy'
    ],
    addons: [
      'Upgrade to Pro Site: +$150/month',
      'Add PPC: +$400/month',
      'Upgrade to SEO Growth: +$200/month'
    ]
  },
  {
    id: 'dominate',
    name: 'Forte Dominate™',
    price: '$1,200/month',
    subtitle: 'Full Digital Ecosystem • Save $400/mo',
    ctaText: 'Dominate Market',
    ctaMarginTop: 'mt-8',
    including: [
      'Forte Pro™ Website (10 pages)',
      'Forte SEO Growth™ (4 blog posts/mo)',
      'Forte PPC Starter™ Campaign',
      'Forte Social Essential™ Management',
      'Complete Forte Ecosystem™'
    ],
    addons: [
      'Upgrade PPC to Growth: +$250/month',
      'Upgrade Social to Growth: +$150/month',
      'Add Extra Services as Needed'
    ]
  }
];

interface FeatureListProps {
  title: string;
  items: string[];
  className?: string;
}

function FeatureList({ title, items, className = '' }: FeatureListProps) {
  return (
    <div className={`grid gap-[16px] ${className}`}>
      <div className="grid gap-[padding/4xl]">
        <h5 className="font-inter font-bold text-base leading-none tracking-normal dark:text-white">
          {title}
        </h5>
      </div>
      {items.map((item, index) => (
        <div key={index} className="flex gap-[6px]">
          <Icon
            name="star-icon"
            alt="star-icon"
            className="w-[18px] h-[18px]"
          />
          <p className="font-inter font-normal text-sm leading-5 tracking-normal">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

interface PricingCardProps {
  plan: PricingPlan;
}

function PricingCard({ plan }: PricingCardProps) {
  // Base classes that are common to all cards
  const baseCardClasses = "gap-[24px] sm:gap-[48px] grid rounded-xl sm:p-10 sm:pr-6 pr-10 pl-10 pt-10 pb-20 border border-gray-300 bg-[#FFFFFF] dark:border dark:border-[#353535] cursor-pointer w-full transition-all duration-300";

  // Only add different classes
  const cardClasses = `${baseCardClasses} ${plan.id === 'growth'
    ? "z-10 relative dark:bg-[#101010]"
    : "dark:bg-black relative"
    }`;

  // Determine hover effect based on plan
  const hoverEffect = plan.isPopular ? 'scale' : 'lift';

  // Base title classes
  const baseTitleClasses = "font-inter-display font-normal text-[24px] tracking-[-0.24px] text-start align-middle text-black dark:text-white";
  const titleClasses = `${baseTitleClasses} ${plan.id === 'pro' ? "md:leading-[90%]" : "leading-[100%]"
    }`;

  // Base price classes
  const basePriceClasses = "font-inter-display font-semibold text-[38px] leading-[38px] tracking-[-0.24px] text-start align-middle text-black dark:text-white";
  const priceClasses = `${basePriceClasses} ${plan.id === 'pro' ? "lg:leading-[100%]" : ""
    }`;

  return (
    <SimpleAnimatedCard 
      hoverEffect={hoverEffect} 
      className={cardClasses}
    >
      {plan.isPopular && (
        <div className="absolute top-[-20px] left-0 w-full h-[40px] gap-1.5 pt-[8px] pr-[16px] pl-[16px] bg-[#203FFC] rounded-tl-[10px] rounded-tr-[10px] z-0 flex justify-start align-middle">
          <span>
            <Icon
              name="yellow-star"
              alt="yellow-star"
              className="w-[18px] h-[18px]"
            />
          </span>
          <p className="font-inter font-normal text-[14px] leading-[20px] tracking-normal text-[#FFFFFF]">
            Popular
          </p>
        </div>
      )}

      <div className={`grid gap-[12px] justify-start items-start`}>
        <p className={titleClasses}>
          {plan.name}
        </p>
        <h3 className={priceClasses}>
          {plan.price}
        </h3>
      </div>

      {plan.subtitle && (
        <p className="text-black font-inter-display font-normal leading-none tracking-[-0.24px] align-middle dark:text-white">
          {plan.subtitle}
        </p>
      )}

      {plan.id === 'growth' && (
        <div className="flex items-center h-[16px]">
          <hr className='dark:border-[0.1px] dark:border-[#2D2C2C] w-full' />
        </div>
      )}

      {/* Desktop View - Always visible */}
      <div className="hidden sm:block">
        <FeatureList title="Including" items={plan.including} />
        <FeatureList title="Add-ons" items={plan.addons} className="mt-6" />
      </div>

      {/* Mobile View - Collapsible */}
      <div className="sm:hidden">
        <details className="group">
          <div className="mt-4 space-y-6">
            <FeatureList title="Including" items={plan.including} />
            <FeatureList title="Add-ons" items={plan.addons} />
          </div>
          <summary className="list-none mt-5 flex justify-center cursor-pointer absolute bottom-4 right-4">
            <div className="flex gap-[7px]">
              <span className="group-open:hidden flex align-middle items-center text-[#B2BDFF] font-inter font-normal not-italic text-[14.73px] leading-[18px] tracking-normal">
                View Details{' '}
                <Icon
                  name="down"
                  alt="down arrow icon"
                  className="w-[10px] h-[20px] ml-1"
                />
              </span>
              <span className="hidden group-open:flex align-middle items-center text-[#B2BDFF] font-inter font-normal not-italic text-[14.73px] leading-[18px] tracking-normal">
                Hide Details{' '}
                <Icon
                  name="up"
                  alt="up arrow icon"
                  className="w-[10px] h-[20px] ml-1"
                />
              </span>
            </div>
          </summary>
        </details>
      </div>

      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row">
        <div className={`flex  justify-center sm:justify-start mt-5 ${plan.ctaMarginTop || ''}`}>
          <Link href="/contact" prefetch={true}>
            <DarkButton className="group-hover:scale-105 transition-transform duration-300">
              {plan.ctaText}
            </DarkButton>
          </Link>
        </div>
      </div>
    </SimpleAnimatedCard>
  );
}

export function PricingPage({ serviceType, showEcosystem }: { serviceType?: 'website' | 'seo' | 'ppc' | 'social', showEcosystem?: boolean } = {}) {
  // Determine which plans to show based on service type
  let plansToShow: PricingPlan[];
  let headerTitle: string;
  let headerSubtitle: string;
  
  switch (serviceType) {
    case 'seo':
      plansToShow = servicePricingPlans.filter(plan => plan.id.includes('seo'));
      headerTitle = 'Forte SEO™ Add-On Plans';
      headerSubtitle = 'Boost your Forte Foundation™ or Pro™ website with professional SEO that actually gets results.';
      break;
    case 'ppc':
      plansToShow = servicePricingPlans.filter(plan => plan.id.includes('ppc'));
      headerTitle = 'Forte PPC™ Add-On Plans';
      headerSubtitle = 'Drive immediate traffic to your Forte website with managed Google Ads that convert.';
      break;
    case 'social':
      plansToShow = servicePricingPlans.filter(plan => plan.id.includes('social'));
      headerTitle = 'Forte Social™ Add-On Plans';
      headerSubtitle = 'Extend your Forte website presence to social media and build a loyal community.';
      break;
    default:
      // Show ecosystem packages if requested, otherwise show individual plans
      plansToShow = showEcosystem ? ecosystemPackages : pricingPlans;
      headerTitle = showEcosystem ? 'Complete Forte™ Ecosystem Packages' : 'Start Your Forte™ Ecosystem';
      headerSubtitle = showEcosystem 
        ? 'Choose a complete solution that grows with your business. Each package includes everything you need to succeed online.'
        : 'Choose your foundation plan, then add services as your business grows.';
  }

  // Desktop order: As provided
  const desktopOrder = plansToShow;
  
  // Mobile order: Popular first if available, otherwise same order
  const popularPlan = plansToShow.find(plan => plan.isPopular);
  const mobileOrder = popularPlan 
    ? [popularPlan, ...plansToShow.filter(plan => !plan.isPopular)]
    : plansToShow;

  const includedFeatures = serviceType === 'website' || !serviceType ? [
    'Hand-Coded Website – built from scratch with the Forte™ methodology',
    'Forte Care™ Included – ongoing maintenance, updates, and optimization',
    'Responsive Design – optimized for all devices and screen sizes',
    'High-Speed Performance – 98–100 Google PageSpeed scores guaranteed',
    'Security First – no WordPress, no plugins, no vulnerabilities',
    'SEO-Ready Foundation – structured for visibility and ready for Forte SEO™ add-ons'
  ] : undefined;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <SimpleScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {headerTitle}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {headerSubtitle}
            </p>
            {!serviceType && (
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4 mb-6">
                Every Forte™ website comes with Forte Care™ included, plus you can add SEO, PPC, and Social Media services as your business grows.
              </p>
            )}
            {!serviceType && (
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 max-w-2xl mx-auto mb-6">
                <p className="text-sm text-green-700 dark:text-green-300">
                  🏢 <strong>Perfect for Small Businesses:</strong> Start at just $200/month and add services when you're ready to grow. No huge upfront costs!
                </p>
              </div>
            )}
            {!serviceType && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Trusted by 25+ local businesses</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>100% client retention rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>100% satisfaction guarantee</span>
                </div>
              </div>
            )}
          </div>
        </SimpleScrollReveal>

        {/* Ecosystem Requirement Section - Only show for service plans */}
        {serviceType && serviceType !== 'website' && (
          <SimpleScrollReveal direction="up" delay={400}>
            <div className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  🏗️ Built on Your Forte™ Foundation
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  All Forte™ add-on services require an active Forte Foundation™ or Forte Pro™ website plan. 
                  This ensures seamless integration, consistent branding, and maximum results from every service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                    <span className="text-2xl">🌐</span>
                    <span className="text-gray-700 dark:text-gray-300">Forte Foundation™ ($200/mo)</span>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-xl">+</span>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3">
                    <span className="text-2xl">
                      {serviceType === 'seo' ? '🔍' : serviceType === 'ppc' ? '🎯' : '📱'}
                    </span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {serviceType === 'seo' ? 'Forte SEO™' : 
                       serviceType === 'ppc' ? 'Forte PPC™' : 
                       'Forte Social™'} Add-on
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Don't have a Forte™ website yet? <Link href="/pricing" className="text-blue-600 dark:text-blue-400 hover:underline">Start with a foundation plan →</Link>
                </p>
              </div>
            </div>
          </SimpleScrollReveal>
        )}

        {/* Pro vs Foundation Value Comparison - Only show for website plans */}
        {(!serviceType || serviceType === 'website') && (
          <SimpleScrollReveal direction="up" delay={350}>
            <div className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  💡 Why 78% of Our Clients Choose Forte Pro™
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  For just $150 more per month, you get significantly more value and save money on add-ons.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Foundation Column */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Forte Foundation™ - $200/mo
                    </h3>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">📄</span>
                        <span className="text-gray-700 dark:text-gray-300">5 pages</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">📞</span>
                        <span className="text-gray-700 dark:text-gray-300">Email support only</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500">📊</span>
                        <span className="text-gray-700 dark:text-gray-300">Basic analytics</span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 pt-2 border-t">
                        <strong>Total with SEO + PPC:</strong> $900/month
                      </div>
                    </div>
                  </div>

                  {/* Pro Column */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl p-6 border-2 border-blue-500 relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        SAVE $250/mo
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Forte Pro™ - $350/mo
                    </h3>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">📄</span>
                        <span className="text-gray-700 dark:text-gray-300"><strong>10 pages</strong> (2x more content)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">📞</span>
                        <span className="text-gray-700 dark:text-gray-300"><strong>Priority phone support</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">📊</span>
                        <span className="text-gray-700 dark:text-gray-300"><strong>Advanced analytics + conversion tracking</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">🎯</span>
                        <span className="text-gray-700 dark:text-gray-300"><strong>Monthly strategy calls</strong></span>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 pt-2 border-t">
                        <strong>Total with SEO + PPC:</strong> $1,500/month<br/>
                        <span className="text-green-600 font-semibold">Save $250/month vs Foundation!</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    💰 <strong>Smart Money Tip:</strong> If you plan to add SEO or PPC within 6 months, 
                    Pro saves you $3,000+ annually while giving you more content and better support from day one.
                  </p>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
        )}

        {/* What's Included With Every Plan - Only show for website plans */}
        {includedFeatures && (
          <SimpleScrollReveal direction="up" delay={400}>
            <div className="mb-16 bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                What's Included With Every Plan
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon
                      name="star-icon"
                      alt="checkmark"
                      className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                    />
                    <p className="text-gray-700 dark:text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </SimpleScrollReveal>
        )}

        {/* Desktop Grid */}
        <div className="hidden lg:grid xl:grid-cols-3 lg:grid-cols-2 gap-8 mx-auto md:w-[full] w-fit mb-16">
          {desktopOrder.map((plan, index) => (
            <SimpleScrollReveal key={plan.id} direction="up" delay={200 + (index * 200)}>
              <PricingCard plan={plan} />
            </SimpleScrollReveal>
          ))}
        </div>
        
        {/* Mobile Grid */}
        <div className="grid lg:hidden xl:grid-cols-3 lg:grid-cols-2 gap-8 mx-auto md:w-[full] w-fit mb-16">
          {mobileOrder.map((plan, index) => (
            <SimpleScrollReveal key={plan.id} direction="up" delay={200 + (index * 200)}>
              <PricingCard plan={plan} />
            </SimpleScrollReveal>
          ))}
        </div>
        
        {/* Quick Testimonials for Social Proof - Only show for website plans */}
        {(!serviceType || serviceType === 'website') && (
          <SimpleScrollReveal direction="up" delay={800}>
            <div className="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                What Our Clients Say
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "The $500/month we spend on Foundation + SEO has easily paid for itself. We're booked every weekend now."
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900 dark:text-white">Maria Santos</div>
                    <div className="text-gray-600 dark:text-gray-400">Santos Family Restaurant</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "Forte's $350 Pro plan not only saved me money but brought in 3x more leads than my old developer."
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900 dark:text-white">Mike Chen</div>
                    <div className="text-gray-600 dark:text-gray-400">Elite Home Services</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "40+ new patients in the first 90 days. Best investment we've made for our practice."
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900 dark:text-white">Dr. Sarah Mitchell</div>
                    <div className="text-gray-600 dark:text-gray-400">Riverside Dental Group</div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link href="/case-studies" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                  View All Success Stories →
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        )}

        {/* Forte Care™ Section - Only show for website plans */}
        {(!serviceType || serviceType === 'website') && (
          <SimpleScrollReveal direction="up" delay={600}>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Forte Care™ Is Included With Every Plan
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Your Forte™ website isn't just built and forgotten. Forte Care™ ensures your site stays fast, secure, and optimized while providing the foundation for our SEO, PPC, and Social Media services to work effectively.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🛡️</div>
                    <p className="text-gray-700 dark:text-gray-300">Continuous security monitoring and performance optimization</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🔧</div>
                    <p className="text-gray-700 dark:text-gray-300">Unlimited content updates and technical support</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">📊</div>
                    <p className="text-gray-700 dark:text-gray-300">Monthly reports and recommendations for growth</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  When you're ready to add Forte SEO™, Forte PPC™, or Forte Social™, your maintained website foundation ensures maximum results from every service.
                </p>

                <Link href="/solutions/care" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                  Learn more about Forte Care™ →
                </Link>
              </div>
            </div>
          </SimpleScrollReveal>
        )}
        
      </div>
    </section>
  );
}
