import Image from 'next/image';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import LightButton from '@/components/LightButton';
import { SectionBackgroundAnimation } from '@/components/animations/BackgroundAnimation';

const data = [
  {
    title: "Introducing Forte Solutions™",
    description: "I believe small businesses deserve more than cookie-cutter websites. Forte Solutions™ is my complete ecosystem - combining strategy, handcrafted design, optimized performance, and long-term care into one seamless experience with personal attention you won't get from agencies."
  },
  {
    title: "Forte Growth™",
    description: "Our most popular all-in-one monthly plan. For $200/month, you get a custom-coded website, hosting, and Forte Care™ baked in - so your site stays fast, fresh, and fully supported as your business grows."
  },
  {
    title: "Forte Essential™",
    description: "A simpler, budget-friendly version of our custom-coded sites. Same clean code, just fewer pages and features - perfect for startups or local service providers."
  },
  {
    title: "Forte Pro™",
    description: "Our premium handcrafted website. Built for scalability, elite SEO performance, and lasting speed. Designed from the ground up to be a revenue-generating asset."
  },
  {
    title: "Forte SiteRefresh™",
    description: "Already have a site? We'll modernize your design, clean up code, and boost performance - without rebuilding from scratch."
  },
  {
    title: "Forte Guarantee™",
    description: "If you're not 100% satisfied with your design, we'll revise it until you are - or refund your payment. No risk, no pressure."
  },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      <SectionBackgroundAnimation />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className='max-w-3xl mx-auto text-center grid gap-6 sm:gap-8'>
            <div className="flex gap-2 justify-center items-center">
              <Image src="/images/shared/icons/star.svg" alt="" width={16} height={16} />
              <span className="text-[#8D9DFF] text-xs sm:text-sm md:text-base lg:text-xl font-normal">Complete Ecosystem</span>
            </div>
            <div>
              <h1 className="font-roboto font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-center text-black dark:text-[#FFFFFF]">
                {data[0].title}
              </h1>
            </div>
            <div>
              <p className="font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed text-center text-gray-700 dark:text-gray-300">
                {data[0].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Business Owners Choose Forte */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:gap-10 md:gap-12">
          <h2 className="font-inter-display font-medium text-2xl sm:text-3xl md:text-4xl leading-tight text-center text-black dark:text-[#FFFFFF]">
            Why Business Owners Choose Forte
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center max-w-6xl mx-auto">
            <div className="p-4 sm:p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#0C0C0C]">
              <h3 className="font-inter font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center dark:text-[#EEEEEE] text-[black]">
                Strategic design that converts visitors to customers
              </h3>
            </div>

            <div className="p-4 sm:p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#0C0C0C]">
              <h3 className="font-inter font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center dark:text-[#EEEEEE] text-[black]">
                Lightning-fast performance and ironclad security
              </h3>
            </div>

            <div className="p-4 sm:p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#0C0C0C]">
              <h3 className="font-inter font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-tight text-center dark:text-[#EEEEEE] text-[black]">
                Friendly, U.S.-based support you can actually talk to
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Explore the Forte Solutions Lineup */}
      <section className="pt-16 px-2 sm:px-6 lg:px-8">
        <div className="container mx-auto xxl:px-8 sm:px-6 lg:px-8 px-4 grid gap-[48px]">
          <div className="">
            <h2 className="font-inter-display font-medium sm:text-[38px] text-[26px] leading-[30px] sm:leading-[38px] tracking-normal align-middle  text-gray-900 dark:text-white ">
              Explore the Forte Solutions™ Lineup
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 bg-gray-50  rounded-xl dark:border-[#101010]   dark:bg-[#101010]  px-5 py-6 md:p-14 ">

            <div className="flex items-center justify-center lg:order-2">
              <OptimizedImage src="/images/services/logo-solutions.svg" alt="logo" width={230} priority height={285.58} className="lg:w-[446.44px] lg:h-[593px]" />
            </div>
            {/* Left Column - Service Details */}
            <div className="md:order-1 space-y-8 md:mt-0 p-[20px] sm:px-[40px] sm:py-[60px] grid gap-[24px]">
              {data.slice(1).map((item, index) => (
                <div key={index} className='grid gap-[13px] p-6 rounded-lg border border-[#DCDCDC] bg-white shadow-sm dark:border-[#323232] dark:bg-[#141414]'>
                  <h3 className="font-inter font-medium sm:text-[26px] text-[18px] leading-[24px] sm:leading-[32px] tracking-normal align-middle dark:text-[#EEEEEE] text-black">{item.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 font-inter font-normal text-[14px] sm:text-[18px] leading-[18px] sm:leading-[22px] tracking-normal align-middle">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Let's Make Your Website a Growth Tool */}
      <section className=" lg:container mx-auto  px-0 sm:px-0 lg:px-8 ">
        <div className='lg:container mx-auto  my-36 p-[10px] relative border border-[#5C5C5C] rounded-2xl   md:mx-auto'>

          {/* Left SEO Growth Animation */}
          <div className="absolute -top-[92px] left-0 z-10 md862:hidden block">
            <div className="w-[122px] h-[122px] relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/40 via-blue-600/50 to-purple-600/40 animate-pulse shadow-lg"></div>
              <div className="relative z-10 text-center bg-white/95 dark:bg-gray-800/95 rounded-full p-4 shadow-lg backdrop-blur-sm">
                <div className="text-2xl mb-1">📈</div>
                <div className="text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Growth</div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-[70px] -left-[59px] z-10 md862:block hidden">
            <div className="w-[250px] h-[198px] relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-blue-600/40 to-purple-600/30 animate-pulse shadow-2xl"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-400/20 to-indigo-500/30 animate-pulse delay-300"></div>
              <div className="relative z-10 text-center bg-white/90 dark:bg-gray-800/90 rounded-full p-6 shadow-xl backdrop-blur-sm">
                <div className="text-4xl mb-2">📈</div>
                <div className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Growth</div>
              </div>
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-500"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
            </div>
          </div>
          <div className="container mx-auto ">
            <div
              className="rounded-2xl px-8 pt-16 pb-[52px] md:px-[180px] text-center relative bg-[url('/images/services/bg-growth.png')] bg-cover bg-center md:overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #581c87 100%)'
              }}
            >
              <div className="relative z-10 grid gap-[40px]">
                <div className="grid gap-[12px]">
                  <h2 className="font-inter-display font-medium sm:text-[38px] text-[26px] leading-[30px] sm:leading-[38px] tracking-normal text-center align-middle text-white">
                    Let&apos;s Make Your Website a Growth Tool
                  </h2>

                  <p className="text-gray-200  max-w-3xl mx-auto font-inter font-normal text-[14px] sm:text-[18px] leading-[18px] sm:leading-[22px] tracking-normal text-center align-middle">
                    Most companies think of their website just as a pretty business card. With a Forte website, every element is optimized specifically to support and grow your business.
                  </p>
                </div>

                <div className="flex justify-center  flex-row">
                  <LightButton href="/pricing">Explore Plans</LightButton>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right SEO Growth Animation */}
          <div className="absolute -bottom-12 right-0 z-10 md862:hidden block">
            <div className="w-[119px] h-[119px] relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-purple-500/40 via-indigo-600/50 to-blue-600/40 animate-pulse shadow-lg"></div>
              <div className="relative z-10 text-center bg-white/95 dark:bg-gray-800/95 rounded-full p-4 shadow-lg backdrop-blur-sm">
                <div className="text-2xl mb-1">📊</div>
                <div className="text-xs font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Analytics</div>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-12 -right-[4.5rem] z-10 md862:block hidden">
            <div className="w-[198px] h-[198px] relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-purple-500/30 via-indigo-600/40 to-blue-600/30 animate-pulse shadow-2xl"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-400/20 to-blue-500/30 animate-pulse delay-500"></div>
              <div className="relative z-10 text-center bg-white/90 dark:bg-gray-800/90 rounded-full p-6 shadow-xl backdrop-blur-sm">
                <div className="text-4xl mb-2">📊</div>
                <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Analytics</div>
              </div>
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-700"></div>
              <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-1200"></div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
