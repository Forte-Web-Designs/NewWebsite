import { Metadata } from 'next';
import { Icon } from "@/components/images/Icon";
import Link from 'next/link';
import Image from 'next/image';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Professional web development and digital services offered by Forte.',
};

const cardsData = [
  {
    title: "Websites That Actually Make You Money",
    desc: "Forget pretty websites that don't convert. We hand-code lightning-fast sites that turn visitors into customers. No templates, no page builders, just pure performance.",
    linkText: "Show Me How",
    href: "/services/webDesign",
  },
  {
    title: "Your Website's Personal Bodyguard",
    desc: "While you sleep, we're monitoring your site 24/7. Unlimited edits, instant fixes, and constant optimization. Think of us as your website's insurance policy.",
    linkText: "Protect My Investment",
    href: "/solutions/care",
  },
  {
    title: "Get Found by Customers Who Want to Buy",
    desc: "Stop being invisible on Google. Our SEO gets you found by people who are actively searching for what you sell. More traffic = more customers = more money.",
    linkText: "Dominate Google",
    href: "/services/seo",
  },
  {
    title: "Google Ads That Actually Work",
    desc: "Tired of burning money on ads that don't convert? We create campaigns that bring you qualified leads who are ready to buy, not just tire-kickers.",
    linkText: "Stop Wasting Ad Money",
    href: "/services/ads",
  },
  {
    title: "Find Out What's Killing Your Conversions",
    desc: "Your website might look good, but is it making you money? Our free audit reveals exactly what's costing you customers (and how to fix it).",
    linkText: "Get My Free Audit",
    href: "/solutions/seotool",
  },
  {
    title: "Social Media That Actually Sells",
    desc: "Stop posting into the void. We create social media content that builds real relationships and drives actual sales, not just vanity metrics.",
    linkText: "Turn Likes Into Sales",
    href: "/services/socialMedia",
  },
];

export default function ServicePage() {
  return (
    <div className="relative">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex gap-2 mb-5 md:justify-center md:mb-8">
              <Image src="/images/shared/icons/star.svg" alt="" width={16} height={16} />
              <span className="text-[#8D9DFF] text-md font-normal md:text-lg  md:text-blue-400">Solutions That Drive Growth</span>
            </div>
            <h1 className="sm:text-4xl  sm:w-[60%] w-[75%]  tracking-tight text-gray-900 dark:text-white md:text-5xl md:mx-auto md:text-center text-start">
              Stop Throwing Money at Marketing That Doesn't Work
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 md:text-center text-start">
              Tired of "marketing experts" who disappear with your money? We're different. Every service we offer is designed to bring you real customers and measurable results. No fluff, no false promises, just growth.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-40  md:px-10 sm:px-6 lg:px-0">
        <div className='container mx-auto xxl:px-8 sm:px-6 lg:px-8 px-4'>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 gap-5 ">
            {cardsData.map((card, index) => (
              <div key={index} className="space-y-3 md:pt-8 pt-6 pe-3 p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414]">
                <h3 className="sm:text-3xl text-2xl text-gray-900 dark:text-white  ">{card.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 md:py-4 py-3">{card.desc}</p>
                <Link href={card.href} className="text-lg flex items-center  gap-3 text-primary-700 dark:text-blue-200  hover:underline">
                  {card.linkText}

                  <Icon
                    name="rightarrow"
                    alt="right arrow icon"
                    className="w-[7px] h-[12px] "
                  />

                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
