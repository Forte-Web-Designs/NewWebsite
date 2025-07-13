import LightButton from "@/components/LightButton";
import { Icon } from "@/components/images/Icon";
import { OptimizedImage } from "@/components/images/OptimizedImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads That Actually Work",
  description:
    "Professional Google Ads management that gets results. We help small businesses get found and grow with targeted PPC campaigns.",
};

export default function GooglePPCAdsPage() {
  return (
    <section className="container max-w-7xl mx-auto flex flex-col md:items-center items-start px-5 py-16 md:pt-28 md:pb-56">
      <span className="sm:text-2xl text-xs font-normal font-roboto flex items-center sm:gap-2 gap-1 text-primary-1000">
        <Icon name="star" className="sm:h-6 sm:w-6 h-[14px] w-[14px]" />
        Hey there! 👋
      </span>
      <h1 className="md:text-[62px] text-[36px] max-w-[794px] font-medium font-roboto mt-5 w-[90%] max-[767px]:leading-[40px] dark:text-secondary-1000 md:text-center">
        Google Ads That Actually Get You Customers
      </h1>
      <p className="md:text-[18px] text-[14px] font-normal font-inter dark:text-primary-1050 text-primary-1400 lg:w-[794px] md:w-[740px] w-full md:mt-6 mt-5 md:text-center md:leading-[22px] leading-4">
        Want to get in front of customers who are ready to buy? Our Google Ads
        get you found fast, so you can focus on serving great customers instead
        of waiting for them to find you.
      </p>

      <div className="flex flex-col md:items-center md:pt-[14rem] md:pb-[10rem] lg:pt-[17rem] lg:pb-[14rem] pt-24 pb-24">
        <div className="w-full flex flex-col lg:mb-12 md:mb-9 mb-6">
          <h2 className="md:text-[38px] text-[26px] font-medium font-inter dark:text-secondary-1000 max-[767px]:leading-[30px]">
            Why Our Google Ads Actually Work
          </h2>
          <p className="md:text-[18px] text-[14px] font-normal font-inter dark:text-primary-1050 md:max-w-[794px] max-w-[95%] sm:mt-6 mt-4 text-primary-1400 md:leading-[22px] leading-4">
            We don't just throw money at Google and hope for the best. We create
            smart, targeted campaigns that turn clicks into customers while
            keeping your budget happy.
          </p>
        </div>

        <div className="md:grid md:grid-cols-2 flex flex-col-reverse dark:bg-primary-1150 rounded-[20px] md:gap-5 gap-3 bg-secondary-1350 mt-1">
          <div className="flex flex-col md:gap-14 sm:gap-5 gap-4 lg:p-[60px] md:p-10 sm:p-8 p-5 pr-0">
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black">
                1. We Get to Know Your Business
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal font-inter dark:text-primary-1050 md:leading-[22px] text-primary-1400 md:mt-3 mt-2 leading-[18px] max-[767px]:w-[90%]">
                First things first - we learn about your goals, your customers,
                and what success looks like for you. Then we build a strategy that
                actually fits your budget.
              </p>
            </div>
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black">
                2. Smart Targeting That Works
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal font-inter dark:text-primary-1050 md:leading-[22px] text-primary-1400 md:mt-3 mt-2 leading-[18px] max-[767px]:w-[90%]">
                We find the keywords your customers are actually using and target
                the right people at the right time. No wasted clicks on people who
                aren't ready to buy.
              </p>
            </div>
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black">
                3. Ads That Actually Convert
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal font-inter text-primary-1400 dark:text-primary-1050 md:leading-[22px] md:mt-3 mt-2 leading-[18px] max-[767px]:w-[90%]">
                We write clear, compelling ads that speak to your customers'
                needs and get them to take action. No fluff, just results.
              </p>
            </div>
            <div>
              <h2 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050 text-black">
                4. Constant Optimization
              </h2>
              <p className="md:text-[18px] text-[14px] font-normal font-inter text-primary-1400 dark:text-primary-1050 md:leading-[22px] md:mt-3 mt-2 leading-[18px] max-[767px]:w-[90%]">
                We watch your campaigns like a hawk, testing and tweaking to make
                sure every dollar works harder. You'll see exactly what's working
                and what's not.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center md:p-0 p-5 relative">
            <div>
              <OptimizedImage
                src="/images/services/ppc-start.png"
                className="dark:hidden block"
                width={472}
                height={460}
                alt="Descriptive text"
              />
              <OptimizedImage
                src="/images/services/ppc-start-dark.png"
                className="dark:block hidden"
                width={472}
                height={460}
                alt="Descriptive text"
              />
            </div>
            <div className="absolute top-0 w-full h-full md:flex flex-col justify-between hidden">
              <div className="flex justify-end min-[1400px]:-mr-20 min-[1280px]:-mr-8 -mr-5 rounded-[11px] md:h-[200px] sm:h-[160px] h-[85px] md:-mt-7 -mt-6">
                <OptimizedImage
                  src="/images/services/Frame_1410088839.png"
                  className=" md:w-[280px] md:h-[171px] sm:w-[200px] sm:h-[160px] w-[140px] h-[85px] shadow-[-10px_10px_30px_0px_rgba(0,0,0,0.3)] rounded-lg dark:block hidden"
                  width={280}
                  height={171}
                  alt="Descriptive text"
                />
                <OptimizedImage
                  src="/images/services/Frame_1410088839-light.png"
                  className="md:w-[280px] md:h-[171px] sm:w-[200px] sm:h-[160px] w-[140px] h-[85px] shadow-[-10px_10px_30px_0px_rgba(0,0,0,0.3)] rounded-lg dark:hidden block"
                  width={280}
                  height={171}
                  alt="Descriptive text"
                />
              </div>
              <div className="md:-ml-20 md:-mb-28 -ml-7 -mb-6 rounded-[11px] md:h-[220px] sm:h-[160px] h-[85px]">
                <OptimizedImage
                  src="/images/services/Frame_1410088838.png"
                  className="md:w-[280px] md:h-[171px] sm:w-[200px] sm:h-[160px] w-[140px] h-[85px] shadow-[-10px_10px_30px_0px_rgba(0,0,0,0.3)] rounded-lg dark:block hidden"
                  width={280}
                  height={171}
                  alt="Descriptive text"
                />
                <OptimizedImage
                  src="/images/services/Frame_1410088838-light.png"
                  className="md:w-[280px] md:h-[171px] sm:w-[200px] sm:h-[160px] w-[140px] h-[85px] shadow-[-10px_10px_30px_0px_rgba(0,0,0,0.3)] rounded-lg dark:hidden block"
                  width={280}
                  height={171}
                  alt="Descriptive text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:gap-5 gap-3 md:pb-20 sm:py-12">
        <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] lg:px-[100px] md:px-[50px] md:py-[68px] px-4 py-10 rounded-2xl gap-6 flex flex-col justify-center items-center text-center">
          <div
            className="
                border 
                border-transparent 
                p-[1px] 
                bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] 
                bg-origin-border
                rounded-[90px]
                md:w-[120px] md:h-[120px] w-[80px] h-[80px] flex justify-center items-center
            "
          >
            <div className="p-2">
              <Icon name="dollar" className="md:w-[34px] md:h-9 w-7 h-6" />
            </div>
          </div>

          <div>
            <h3 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050">
              ROI That Makes Sense
            </h3>
            <p className="md:text-[18px] text-[14px] md:leading-[22px] leading-[18px] font-normal font-inter dark:text-primary-1050 text-primary-1400 md:mt-3 mt-2">
              Every campaign is built to turn ad spend into actual revenue. We
              track what matters and optimize for real business results.
            </p>
          </div>
        </div>
        <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] lg:px-[100px] md:px-[50px] md:py-[68px] px-4 py-10 rounded-2xl gap-6 flex flex-col justify-center items-center text-center">
          <div
            className="
                border 
                border-transparent 
                p-[1px] 
                bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] 
                bg-origin-border
                rounded-[90px]
                md:w-[120px] md:h-[120px] w-[80px] h-[80px] flex justify-center items-center
            "
          >
            <div className="p-2">
              <Icon name="calendar" className="md:w-[34px] md:h-9 w-7 h-6" />
            </div>
          </div>

          <div>
            <h3 className="md:text-[26px] text-[18px] font-medium font-inter dark:text-secondary-1050">
              Always Getting Better
            </h3>
            <p className="md:text-[18px] text-[14px] md:leading-[22px] leading-[18px] font-normal font-inter dark:text-primary-1050 text-primary-1400 md:mt-3 mt-2">
              We're constantly testing, learning, and improving your campaigns.
              What worked last month might not work next month - we stay on top
              of it all.
            </p>
          </div>
        </div>
      </div>

      <div className="md:mt-0 mt-5 md:mb-0 mb-2 flex justify-center w-full">
        <LightButton href="/contact">
          Let's Talk About Your Goals
        </LightButton>
      </div>
    </section>
  );
}
