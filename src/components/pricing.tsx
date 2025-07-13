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
    subtitle: '12-Month Minimum',
    isPopular: true,
    ctaText: 'Start Building',
    including: [
      '5-Page Custom-Coded Website',
      'Domain + Premium Hosting',
      'Forte Care™ Included',
      'Mobile-Responsive & SEO-Ready',
      'Forte Guarantee™'
    ],
    addons: [
      'Forte SEO Essential™: +$300/mo',
      'Forte PPC Starter™: +$400/mo',
      'Forte Social Essential™: +$200/mo'
    ]
  },
  {
    id: 'pro',
    name: 'Forte Pro™',
    price: '$350/month',
    subtitle: '12-Month Minimum',
    ctaText: 'Go Premium',
    ctaMarginTop: 'mt-20',
    including: [
      '10-Page Custom-Coded Website',
      'Domain + Premium Hosting',
      'Enhanced Forte Care™ Included',
      'Google Analytics + Advanced SEO Setup',
      'Priority Support & Monthly Strategy Calls',
      'Forte Guarantee™'
    ],
    addons: [
      'Forte SEO Growth™: +$500/mo',
      'Forte PPC Growth™: +$650/mo',
      'Forte Social Growth™: +$350/mo'
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
      'Content Creation: +$150/mo',
      'Local SEO Boost: +$100/mo',
      'Link Building: +$200/mo'
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
      'E-commerce SEO: +$200/mo',
      'Video SEO: +$150/mo'
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
      'Facebook Ads: +$200/mo',
      'Bing Ads: +$150/mo',
      'Conversion Tracking: +$100/mo'
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
      'YouTube Ads: +$250/mo',
      'Shopping Campaigns: +$200/mo',
      'Remarketing Setup: +$150/mo'
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
      'Extra Platform: +$100/mo',
      'Stories/Reels: +$150/mo',
      'Community Management: +$200/mo'
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
      'Paid Social Ads: +$300/mo',
      'Influencer Outreach: +$250/mo',
      'Video Content: +$200/mo'
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

export function PricingPage({ serviceType }: { serviceType?: 'website' | 'seo' | 'ppc' | 'social' } = {}) {
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
      plansToShow = pricingPlans;
      headerTitle = 'Start Your Forte™ Ecosystem';
      headerSubtitle = 'Choose your foundation plan, then add services as your business grows.';
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
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
                Every Forte™ website comes with Forte Care™ included, plus you can add SEO, PPC, and Social Media services as your business grows.
              </p>
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
