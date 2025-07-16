import { Icon } from "@/components/images/Icon";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Forte Method™: Our Process, Your Results | Forte Web Designs",
  description: "Discover the Forte Method™ - our proven 5-step system that delivers fast, secure, and high-converting websites. No fluff, no gimmicks, just results.",
  keywords: ["web design process", "website development", "Forte Method", "custom websites", "high-performance websites"],
};

export default function SocialMediaManagement() {
  // Helper function for client examples
  const getClientExample = (index: number) => {
    const examples = [
      "Mike's HVAC discovered 3 competitor advantages that shaped their messaging strategy",
      "Bella's Boutique refined their homepage 4 times before finding the perfect customer flow", 
      "TechCorp's hand-coded site loads in 1.2 seconds vs their old WordPress at 8+ seconds",
      "Sunrise Veterinary went live with perfect mobile optimization and booking integration",
      "Local law firm added 2 new practice areas after seeing monthly SEO keyword opportunities"
    ];
    return examples[index] || "Client saw immediate improvements in user engagement";
  };

  const forteMethodItems = [
    {
      title: "🔍 1. Foundations",
      description:
        "Clarity → Faster Results\nWe start with a deep discovery session to align your brand, audience, and goals. No fluff—just clarity that drives focused execution.",
      icon: "/images/home/foundation.svg",
    },
    {
      title: "🧠 2. Refine",
      description:
        "Feedback → On-Brand Accuracy\nWe turn insights into direction with collaborative design mockups and wireframes. Your feedback shapes the final product before we ever write a line of code.",
      icon: "/images/home/refine.svg",
    },
    {
      title: "💻 3. Build",
      description:
        "Clean Code → Speed & Security\nEvery site is hand-coded line by line. No bloated builders, no plugins. Just fast, secure, search-optimized performance from the start.",
      icon: "/images/home/tailor.svg",
    },
    {
      title: "🚀 4. Launch",
      description:
        "Optimized Setup → Ready for Traffic\nWe deploy your site with all the essentials: SEO-ready structure, mobile optimization, and analytics tools set to track what matters most.",
      icon: "/images/home/elevate.svg",
    },
    {
      title: "🔧 5. Grow",
      description:
        "Ongoing Support → Compounding ROI\nWith Forte Care™, your site stays updated, secure, and optimized. And when you're ready to scale with SEO, ads, or social—we've already laid the groundwork for it to work.",
      icon: "/images/home/elevate.svg",
    },
  ];

  return (
    <section className="container max-w-7xl mx-auto flex flex-col md:items-center items-start px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
      {/* Hero Section - Mobile Optimized */}
      <div className="grid gap-6 sm:gap-8 justify-center items-center text-center w-full">
        <span className="text-xs sm:text-base md:text-xl font-normal leading-tight flex items-center justify-center gap-1 sm:gap-2 text-primary-1000">
          <Icon name="star" className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6" />
          We Keep It Simple. And Powerful.
        </span>
        <h1 className="font-roboto font-medium text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-center text-black dark:text-secondary-1000 max-w-4xl mx-auto">
          The Forte Method™: Our Process, Your Results
        </h1>
        <p className="font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed text-center text-[#626262] dark:text-primary-1050 max-w-3xl mx-auto px-4">
          At Forte Web Designs, we don't believe in overcomplicating things. No
          fluff. No gimmicks. Just a clear, proven system that delivers fast,
          secure, and high-converting websites—every time. Here's what makes our
          process different:
        </p>
      </div>

      {/* Performance Section - Mobile Optimized */}
      <div className="flex flex-col md:items-center py-16 sm:py-20 lg:py-28 w-full">
        <div className="w-full flex flex-col md:items-center text-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          <h2 className="font-inter-display font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black dark:text-[#FFFFFF]">
            Speed Comes First
          </h2>
          <p className="max-w-3xl font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed text-[#626262] dark:text-primary-1050 px-4">
            Your site's speed and user experience directly affect your traffic,
            SEO, and conversion rates. That's why we build sites that load in
            under a second, deliver lightning-fast speed, and give your visitors an
            effortless experience.
          </p>
        </div>

        {/* Speed Cards - Mobile First Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 sm:gap-6">
          <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] py-8 sm:py-12 md:py-16 rounded-2xl gap-4 sm:gap-6 flex flex-col justify-center items-center text-center">
            <div className="border border-transparent p-[1px] bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] bg-origin-border rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center">
              <div className="p-2">
                <Icon name="users" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight font-medium font-inter dark:text-secondary-1050 mb-2">
                Faster load times
              </p>
              <Icon name="equals" className="w-3 h-2 sm:w-4 sm:h-3" />
              <p className="text-sm sm:text-base md:text-lg leading-tight font-normal font-inter dark:text-primary-1050 mt-2">
                higher conversions.
              </p>
            </div>
          </div>

          <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] py-8 sm:py-12 md:py-16 rounded-2xl gap-4 sm:gap-6 flex flex-col justify-center items-center text-center">
            <div className="border border-transparent p-[1px] bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] bg-origin-border rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center">
              <div className="p-2">
                <Icon name="code" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight font-medium font-inter dark:text-secondary-1050 mb-2">
                Clean code
              </p>
              <Icon name="equals" className="w-3 h-2 sm:w-4 sm:h-3" />
              <p className="text-sm sm:text-base md:text-lg leading-tight font-normal font-inter dark:text-primary-1050 mt-2">
                Better search rankings.
              </p>
            </div>
          </div>

          <div className="dark:bg-[linear-gradient(180deg,#101010_0%,rgba(16,16,16,0)_100%)] bg-[linear-gradient(180deg,#f4f4f4_0%,#f4f4f4_100%)] py-8 sm:py-12 md:py-16 rounded-2xl gap-4 sm:gap-6 flex flex-col justify-center items-center text-center md:col-span-2 lg:col-span-1">
            <div className="border border-transparent p-[1px] bg-[linear-gradient(136.13deg,#565656_16.43%,#000000_49.99%)] bg-origin-border rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex justify-center items-center">
              <div className="p-2">
                <Icon name="click" className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
              </div>
            </div>

            <div className="flex flex-col items-center text-center px-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight font-medium font-inter dark:text-secondary-1050 mb-2">
                Better UX
              </p>
              <Icon name="equals" className="w-3 h-2 sm:w-4 sm:h-3" />
              <p className="text-sm sm:text-base md:text-lg leading-tight font-normal font-inter dark:text-primary-1050 mt-2">
                Customers who stick around.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* $0 Down Offer Section - Mobile Optimized */}
      <div className="flex flex-col w-full justify-center items-center text-center py-12 sm:py-16">
        <div className="mb-6 sm:mb-8 lg:mb-12">
          {/* Animated Method Circle - Same style as SEO Growth */}
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 relative flex items-center justify-center mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-blue-600/40 to-purple-600/30 animate-pulse shadow-2xl"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-400/20 to-indigo-500/30 animate-pulse delay-300"></div>
            <div className="relative z-10 text-center bg-white/90 dark:bg-gray-800/90 rounded-full p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl backdrop-blur-sm">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 sm:mb-3 md:mb-4">🚀</div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Method
              </div>
            </div>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 rounded-full animate-bounce delay-500"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-indigo-400 rounded-full animate-bounce delay-700"></div>
          </div>
        </div>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-inter bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4 sm:mb-6"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our $0 Down Offer
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium font-inter dark:text-secondary-1050 max-w-4xl mx-auto px-4">
          We make getting started easy. You can launch with a 5-page
          custom-built site for $0 down and $200/month (12-month minimum). Need
          more pages or custom features? We'll price it out based on scope—fair
          and simple.
        </p>
      </div>

      {/* What You Get Section - Mobile Optimized */}
      <div className="py-16 sm:py-20 lg:py-28 flex flex-col md:items-center w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold md:font-bold font-inter dark:text-secondary-1000 leading-tight text-center mb-12 sm:mb-16">
          What You Get With Every Site
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full">
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050">
              Design That Fits:
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-[#B4B4B4] text-[#626262]">
              Every website we build is fully custom-coded from the ground up,
              no templates.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050">
              Rock-Solid Security:
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-[#B4B4B4] text-[#626262]">
              Our static sites don't use databases—so there's nothing to hack.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050">
              SEO-Ready:
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-[#B4B4B4] text-[#626262]">
              Titles, tags, structure—all dialed in to help you rank.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050">
              Unlimited Edits:
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-[#B4B4B4] text-[#626262]">
              Need a tweak? We've got you, no ticket system required.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050">
              Lifetime Support:
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-[#B4B4B4] text-[#626262]">
              You get us—not a robot and U.S. based.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium font-inter dark:text-secondary-1050">
              Satisfaction Guarantee:
            </h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed font-normal font-inter dark:text-[#B4B4B4] text-[#626262]">
              If we cant design something you love, we'll make it right. Period.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Method Steps with Client Examples */}
      <div className="w-full py-16 sm:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="font-inter-display font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black dark:text-[#FFFFFF] mb-4">
            The Forte Method™: Step-by-Step Process
          </h2>
          <p className="max-w-3xl mx-auto font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed text-[#626262] dark:text-primary-1050 px-4">
            Our proprietary 5-step system ensures every site we launch is fast, secure, and conversion-optimized with real client examples.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {forteMethodItems.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500 text-white rounded-full font-bold text-lg mb-3">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                
                <div className="md:col-span-2">
                  <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line">
                    {item.description}
                  </p>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-1">
                          Real Client Example:
                        </h4>
                        <p className="text-sm text-green-600 dark:text-green-300">
                          {getClientExample(index)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Expectations Section */}
      <div className="w-full py-16 sm:py-20 lg:py-28">
        <div className="text-center mb-12">
          <h2 className="font-inter-display font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black dark:text-[#FFFFFF] mb-4">
            What to Expect: Your Timeline
          </h2>
          <p className="max-w-3xl mx-auto font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed text-[#626262] dark:text-primary-1050 px-4">
            Clear milestones and realistic timeframes - no surprises, no delays.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Week 1 */}
            <div className="relative flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Week 1: Discovery & Strategy</h3>
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">Days 1-7</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Deep dive into your business, competitors, and target audience. Define goals, messaging, and project scope.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Deliverable:</strong> Project roadmap, content strategy, and design direction
                  </p>
                </div>
              </div>
            </div>

            {/* Week 2-3 */}
            <div className="relative flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Weeks 2-3: Design & Refine</h3>
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">Days 8-21</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Create wireframes and visual designs. Multiple revision rounds to perfect the look and user experience.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Deliverable:</strong> Final approved design mockups and user flow
                  </p>
                </div>
              </div>
            </div>

            {/* Week 3-4 */}
            <div className="relative flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Weeks 3-4: Development</h3>
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">Days 15-28</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Hand-code your website with clean, optimized code. Mobile-responsive, fast-loading, and SEO-ready.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Deliverable:</strong> Fully functional website ready for your review
                  </p>
                </div>
              </div>
            </div>

            {/* Week 4+ */}
            <div className="relative flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div className="flex-1 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 shadow-lg border border-green-200 dark:border-green-700">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Launch & Beyond</h3>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">Week 4+</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  Go live with full analytics setup, performance monitoring, and Forte Care™ ongoing support.
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Ongoing:</strong> Unlimited updates, security monitoring, and performance optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real Client Examples Section */}
      <div className="w-full py-16 sm:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="font-inter-display font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black dark:text-[#FFFFFF] mb-4">
            The Forte Method™ in Action
          </h2>
          <p className="max-w-3xl mx-auto font-inter font-normal text-sm sm:text-base md:text-lg leading-relaxed text-[#626262] dark:text-primary-1050 px-4">
            See how our systematic approach delivers consistent results across different industries.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          {/* Client Example 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">TC</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">TechCorp Consulting</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">B2B Technology Consulting</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">Challenge:</h4>
                <p className="text-sm text-red-600 dark:text-red-300">
                  WordPress site crashed during a major client presentation. Lost 3 enterprise deals worth $250k.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">Forte Method Solution:</h4>
                <ul className="text-sm text-blue-600 dark:text-blue-300 space-y-1">
                  <li>• <strong>Discovery:</strong> Identified need for enterprise-grade reliability</li>
                  <li>• <strong>Design:</strong> Professional, trust-building layout</li>
                  <li>• <strong>Build:</strong> Hand-coded for 99.9% uptime</li>
                  <li>• <strong>Launch:</strong> Stress-tested for high traffic</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">Results (6 months):</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">Zero</div>
                    <div className="text-green-700 dark:text-green-300">Downtime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">$400k</div>
                    <div className="text-green-700 dark:text-green-300">New Deals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Example 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SV</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sunrise Veterinary</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Animal Hospital</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">Challenge:</h4>
                <p className="text-sm text-red-600 dark:text-red-300">
                  Old website took 12 seconds to load. Pet owners were going to competitors instead of waiting.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-400 mb-2">Forte Method Solution:</h4>
                <ul className="text-sm text-blue-600 dark:text-blue-300 space-y-1">
                  <li>• <strong>Discovery:</strong> Mobile-first approach for busy pet owners</li>
                  <li>• <strong>Design:</strong> Easy appointment booking prominent</li>
                  <li>• <strong>Build:</strong> Optimized for speed and mobile usage</li>
                  <li>• <strong>Launch:</strong> 1.3-second load time achieved</li>
                </ul>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-700 dark:text-green-400 mb-2">Results (4 months):</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">185%</div>
                    <div className="text-green-700 dark:text-green-300">More Bookings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">1.3s</div>
                    <div className="text-green-700 dark:text-green-300">Load Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to Experience the Forte Method™?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Join businesses who chose reliability, speed, and results over templates and shortcuts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold cursor-pointer">
                Start My Project
              </button>
              <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}