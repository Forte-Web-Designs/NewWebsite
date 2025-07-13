import { Metadata } from 'next';
import { Icon } from "@/components/images/Icon";
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Professional web development and digital services offered by Forte.',
};

const cardsData = [
  {
    title: "Custom Website Design & Builds",
    desc: "We hand-code every site from scratch—no builders or templates. This means faster load times, better SEO, and a unique online presence for your business.",
    linkText: "See how we build",
    href: "/services/webDesign",
  },
  {
    title: "Forte Care™ Maintenance Plan",
    desc: "Unlimited edits, priority support, ongoing optimization, and peace of mind—our signature plan ensures your site keeps performing long after launch.",
    linkText: "Learn About Forte Care",
    href: "/solutions/care",
  },
  {
    title: "SEO Setup & Optimization",
    desc: "We take care of the technical SEO that actually matters—structure, tags, speed, and keyword targeting—so your site ranks and brings in traffic.",
    linkText: "Boost My Visibility",
    href: "/services/seo",
  },
  {
    title: "Google PPC Ads",
    desc: "We craft and manage Google Ads campaigns that target the right people at the right time—boosting your traffic and maximizing ROI.",
    linkText: "Boost My Traffic",
    href: "/services/ads",
  },
  {
    title: "Website Audits & Reviews",
    desc: "Not sure how your site is doing? We'll run a full performance and SEO audit—and give you a clear, actionable improvement plan.",
    linkText: "Run a Free Audit",
    href: "/solutions/seotool",
  },
  {
    title: "Social Media Marketing",
    desc: "From strategy to content, we help you show up consistently, connect with your audience, and turn likes into leads.",
    linkText: "Boost My Socials",
    href: "/services/socialMedia",
  },
];

export default function ServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex gap-2 mb-5 md:justify-center md:mb-8">
              <Image src="/images/shared/icons/star.svg" alt="" width={16} height={16} />
              <span className="text-[#8D9DFF] text-md font-normal md:text-lg  md:text-blue-400">Solutions That Drive Growth</span>
            </div>
            <h1 className="sm:text-4xl  sm:w-[60%] w-[75%]  tracking-tight text-gray-900 dark:text-white md:text-5xl md:mx-auto md:text-center text-start">
              What We Can Do for Your Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 md:text-center text-start">
              Whether you need a fast launch or a fully custom build, Forte Web Designs delivers. Every service we offer is crafted to help your business grow online—with faster sites, better visibility, and real-world results.
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

    </>
  );
}
