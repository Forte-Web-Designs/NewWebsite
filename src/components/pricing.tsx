import { Icon } from '@/components/images/Icon';
import Link from 'next/link';
import DarkButton from './DarkButton';

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
      'Manage Delivery Logs',
      'Real Time Clinic,s Inventory Tracking',
      'Receive Sample Requests',
      'Real-Time Stock Alerts'
    ],
    addons: [
      'Forte Care™: $125/mo',
      'Extra Pages: $100/ea',
      'Upgrade to Custom Site (discounted)'
    ]
  },
  {
    id: 'growth',
    name: 'Forte Growth™ Plan',
    price: '$200',
    subtitle: '',
    isPopular: true,
    ctaText: 'Get Started',
    including: [
      '5 Page Custom-Coded Site',
      'Hosting & .com Domain',
      'Forte Care™ (Unlimited Edits, Hosting, Support)',
      'Life-time Support',
      'Forte Guarantee™'
    ],
    addons: [
      'Add Blog: +$250(one time)',
      'Extra Pages: $100/ea'
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
      'Forte Guarantee™',
      'Real-Time Stock Alerts'
    ],
    addons: [
      'Forte Care™: +$125/mo',
      'Add Blog: +$250(one time)',
      'Upgrade to Custom Site (discounted)'
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
  const baseCardClasses = "gap-[24px] sm:gap-[48px] grid rounded-xl sm:p-10 sm:pr-6 pr-10 pl-10 pt-10 pb-20 border border-gray-300 bg-[#FFFFFF] dark:border dark:border-[#353535] hover:shadow-[0_4px_40px_0_#203FFC] cursor-pointer w-full";

  // Only add different classes
  const cardClasses = `${baseCardClasses} ${plan.id === 'growth'
    ? "z-10 relative dark:bg-[#101010]"
    : "dark:bg-black relative"
    }`;

  // Base title classes
  const baseTitleClasses = "font-inter-display font-normal text-[24px] tracking-[-0.24px] text-start align-middle text-black dark:text-white";
  const titleClasses = `${baseTitleClasses} ${plan.id === 'pro' ? "md:leading-[90%]" : "leading-[100%]"
    }`;

  // Base price classes
  const basePriceClasses = "font-inter-display font-semibold text-[38px] leading-[38px] tracking-[-0.24px] text-start align-middle text-black dark:text-white";
  const priceClasses = `${basePriceClasses} ${plan.id === 'pro' ? "lg:leading-[100%]" : ""
    }`;

  return (
    <div className={cardClasses}>
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
            <DarkButton>
              {plan.ctaText}
            </DarkButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PricingPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 mx-auto md:w-[full] w-fit">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
