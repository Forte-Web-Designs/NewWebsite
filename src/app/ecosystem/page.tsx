import { Metadata } from "next";
import { PricingPage } from "@/components/pricing";
import DarkButton from "@/components/DarkButton";
import LightButton from "@/components/LightButton";

export const metadata: Metadata = {
  title: "Forte Ecosystem™ - Complete Digital Presence Solution",
  description: "Your entire digital presence, handled. From lightning-fast websites to SEO, PPC, and social media - one team, one system, unlimited growth.",
};

export default function ForteEcosystemPage() {
  const ecosystemBenefits = [
    {
      icon: "🏗️",
      title: "Foundation",
      description: "Fast, secure website that converts",
      details: "Hand-coded websites that load in under 2 seconds"
    },
    {
      icon: "🚀", 
      title: "Pro",
      description: "Premium support & analytics",
      details: "Dedicated account manager and priority support"
    },
    {
      icon: "📈",
      title: "SEO / PPC",
      description: "Targeted traffic & lead generation", 
      details: "Strategic campaigns that bring qualified leads"
    },
    {
      icon: "🔧",
      title: "Ongoing Support",
      description: "Continuous optimization & growth",
      details: "24/7 monitoring and unlimited updates"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex gap-2 mb-4 sm:mb-6 md:mb-8 justify-center">
              <span className="text-4xl">🌐</span>
              <span className="text-[#8D9DFF] text-xs sm:text-sm md:text-base lg:text-lg font-normal">
                The Complete System
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-4 sm:mb-6">
              The Forte Ecosystem™: Your Entire Digital Presence, Handled
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              You're not just getting a website. You're stepping into a powerful, done-for-you system that's built to grow with you.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <p className="text-lg italic text-blue-800 dark:text-blue-200 font-medium">
                "At Forte, we don't stop at launch. We become your behind-the-scenes digital team."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              How The Ecosystem Works
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    We start with Forte Foundation™
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your fast, secure, hand-coded website designed to convert visitors into customers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Then we evolve into Forte Pro™
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Full-service support, analytics, and unlimited updates to keep things sharp.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    We drive traffic through SEO and PPC strategies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Built into your plan, aligned with your goals. No searching around. No tech headaches. Just one unified system.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Whether you're a startup or a scaling business, Forte adapts with you.
              </p>
              <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                We build, optimize, and manage it all — so you can stay focused on your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Components */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Complete Digital Ecosystem Components
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystemBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {benefit.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {benefit.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why One-Stop Shop Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose a One-Stop Digital Shop?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-red-600 mb-4">❌ The Old Way (Multiple Vendors)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Website guy doesn't talk to SEO guy</li>
                  <li>• PPC ads send traffic to slow pages</li>
                  <li>• Nobody takes responsibility for results</li>
                  <li>• Higher costs, slower results</li>
                  <li>• Constant vendor management headaches</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-semibold text-green-600 mb-4">✅ The Forte Way (One Team)</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Everything designed to work together</li>
                  <li>• PPC ads → optimized landing pages</li>
                  <li>• One team accountable for your success</li>
                  <li>• Better results, lower total cost</li>
                  <li>• Single point of contact and support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <PricingPage showEcosystem={true} />

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Simplify Your Digital Presence?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop juggling multiple vendors. Get everything you need from one expert team that makes it all work together seamlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DarkButton href="/contact">
                Start Your Ecosystem Today
              </DarkButton>
              <LightButton href="/checkup">
                Get Free Website Analysis
              </LightButton>
            </div>
            
            <p className="text-sm text-gray-400 mt-6">
              📞 (817) 873-6655 • Same day response guaranteed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
