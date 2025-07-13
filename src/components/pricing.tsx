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
    id: 'essential',
    name: 'Forte Essential™ Plan',
    price: '$2,000',
    subtitle: '+ $50/mo hosting & support',
    ctaText: 'Launch Fast',
    including: [
      'Up to 5 Custom-Coded Pages',
      'Mobile-Responsive & SEO-Ready',
      'Domain + Hosting Setup',
      'Forte Guarantee™'
    ],
    addons: [
      'Forte Care™: $150/mo',
      'Extra Pages: $100/ea',
      'Blog Setup: $250'
    ]
  },
  {
    id: 'growth',
    name: 'Forte Growth™ Plan',
    price: '$200/month',
    subtitle: '$0 Down | 12-Month Minimum',
    isPopular: true,
    ctaText: 'Get Started',
    including: [
      '5 Page Custom-Coded Site',
      'Domain + Hosting Setup',
      'Forte Care™ Included',
      'Lifetime Technical Support',
      'Forte Guarantee™'
    ],
    addons: [
      'Extra Pages: $100/ea',
      'Blog Setup: $250'
    ]
  },
  {
    id: 'pro',
    name: 'Forte Pro™ Plan',
    price: '$5,000',
    subtitle: '+ $50/mo hosting',
    ctaText: 'Build Custom',
    ctaMarginTop: 'mt-20',
    including: [
      '10 Page Custom-Coded Site',
      'Premium Hosting',
      '1 Year of Forte Care™ Included',
      'Google Analytics Setup',
      'SEO Optimization + VIP Support',
      'Forte Guarantee™'
    ],
    addons: [
      'Extra Pages: $100/ea',
      'Blog Setup: $250'
    ]
  }
];

// Service-specific pricing plans
const servicePricingPlans: PricingPlan[] = [
  {
    id: 'seo-essential',
    name: 'SEO Essential™',
    price: '$400/month',
    subtitle: '3-Month Minimum',
    ctaText: 'Start Ranking',
    including: [
      'Technical SEO Foundation',
      'Keyword Research & Strategy',
      'On-Page Optimization',
      'Monthly Progress Reports'
    ],
    addons: [
      'Content Creation: $150/mo',
      'Local SEO Boost: $100/mo',
      'Link Building: $200/mo'
    ]
  },
  {
    id: 'seo-growth',
    name: 'SEO Growth™',
    price: '$750/month',
    subtitle: '6-Month Minimum',
    isPopular: true,
    ctaText: 'Dominate Search',
    including: [
      'Everything in SEO Essential™',
      '4 Optimized Blog Posts/Month',
      'Local SEO & Google Business Profile',
      'Competitor Analysis',
      'Link Building Campaign'
    ],
    addons: [
      'Extra Blog Posts: $75/ea',
      'Social Media SEO: $150/mo',
      'E-commerce SEO: $200/mo'
    ]
  },
  {
    id: 'ppc-starter',
    name: 'PPC Starter™',
    price: '$500/month',
    subtitle: '+ Ad Spend Budget',
    ctaText: 'Get Customers',
    including: [
      'Google Ads Campaign Setup',
      'Keyword Research & Strategy',
      'Ad Copy Creation & Testing',
      'Landing Page Optimization',
      'Weekly Performance Reports'
    ],
    addons: [
      'Facebook Ads: $200/mo',
      'Bing Ads: $150/mo',
      'Conversion Tracking: $100/mo'
    ]
  },
  {
    id: 'ppc-growth',
    name: 'PPC Growth™',
    price: '$900/month',
    subtitle: '+ Ad Spend Budget',
    isPopular: true,
    ctaText: 'Scale Revenue',
    including: [
      'Everything in PPC Starter™',
      'Multi-Platform Campaigns',
      'Advanced Conversion Tracking',
      'A/B Testing & Optimization',
      'Detailed ROI Analysis'
    ],
    addons: [
      'YouTube Ads: $250/mo',
      'Shopping Campaigns: $200/mo',
      'Remarketing Setup: $150/mo'
    ]
  },
  {
    id: 'social-essential',
    name: 'Social Media Essential™',
    price: '$300/month',
    subtitle: 'Website Clients Only',
    ctaText: 'Boost Engagement',
    including: [
      '12 Custom Posts/Month',
      'Platform Management (2 platforms)',
      'Content Calendar Planning',
      'Basic Analytics & Reporting'
    ],
    addons: [
      'Extra Platform: $100/mo',
      'Stories/Reels: $150/mo',
      'Community Management: $200/mo'
    ]
  },
  {
    id: 'social-growth',
    name: 'Social Media Growth™',
    price: '$500/month',
    subtitle: 'Website Clients Only',
    isPopular: true,
    ctaText: 'Build Community',
    including: [
      '20 Custom Posts/Month',
      'Platform Management (3 platforms)',
      'Stories & Reels Creation',
      'Community Management',
      'Detailed Growth Analytics'
    ],
    addons: [
      'Paid Social Ads: $300/mo',
      'Influencer Outreach: $250/mo',
      'Video Content: $200/mo'
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
      headerTitle = 'SEO Plans That Get Results';
      headerSubtitle = 'Choose the SEO strategy that fits your business goals and budget.';
      break;
    case 'ppc':
      plansToShow = servicePricingPlans.filter(plan => plan.id.includes('ppc'));
      headerTitle = 'PPC Plans That Convert';
      headerSubtitle = 'Get in front of customers ready to buy with our managed advertising plans.';
      break;
    case 'social':
      plansToShow = servicePricingPlans.filter(plan => plan.id.includes('social'));
      headerTitle = 'Social Media Plans That Engage';
      headerSubtitle = 'Build your community and turn followers into customers.';
      break;
    default:
      plansToShow = pricingPlans;
      headerTitle = 'Choose the Plan That Works for You';
      headerSubtitle = 'All of Our Plans Are Strategically Designed to Fit Your Needs.';
  }

  // Desktop order: As provided
  const desktopOrder = plansToShow;
  
  // Mobile order: Popular first if available, otherwise same order
  const popularPlan = plansToShow.find(plan => plan.isPopular);
  const mobileOrder = popularPlan 
    ? [popularPlan, ...plansToShow.filter(plan => !plan.isPopular)]
    : plansToShow;

  const includedFeatures = serviceType === 'website' || !serviceType ? [
    'Hand-Coded Website – built from scratch, no page builders or templates',
    'Responsive Design – optimized for all devices and screen sizes',
    'High-Speed Performance – 98–100 Google PageSpeed scores',
    'Security First – no WordPress, no plugins, no vulnerabilities',
    'SEO-Ready – structured for visibility and rankings',
    'Human Support – when you call, you talk to the developer (not a bot)'
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
                We offer three smart paths to launch your new website—tailored to how you prefer to build, grow, and scale your business.
              </p>
            )}
          </div>
        </SimpleScrollReveal>

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
                  Forte Care™: The Secret to Long-Term ROI
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                  Most websites go live and get forgotten. With Forte Care™, yours stays fresh, fast, and always working for your business. 
                  You'll get unlimited edits, analytics monitoring, performance checks, and ongoing optimization—all handled by us.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl mb-2">📈</div>
                    <p className="text-gray-700 dark:text-gray-300">Get regular site improvements without lifting a finger</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🛠</div>
                    <p className="text-gray-700 dark:text-gray-300">Receive unlimited content edits and updates</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🚨</div>
                    <p className="text-gray-700 dark:text-gray-300">Have a direct line to support when it matters most</p>
                  </div>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Whether you're launching something new or leveling up an existing site, we're here to make sure your investment keeps paying off—month after month.
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
