"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@/components/images/Icon";
import LightButton from "@/components/LightButton";
import DarkButton from "@/components/DarkButton";
import SimpleScrollReveal from "@/components/animations/SimpleScrollReveal";
import { BackgroundImage } from "@/components/images/BackgroundImage";
import IndustryLeadCTA from '@/components/IndustryLeadCTA';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What's included in Forte Care™?",
    answer: "Forte Care™ includes unlimited content updates, security monitoring, performance optimization, monthly backups, broken link checks, uptime monitoring, and technical support. Think of it as professional maintenance for your digital storefront."
  },
  {
    question: "How quickly do you make updates?",
    answer: "Most content updates are completed within 24-48 hours. Emergency fixes (like broken functionality) are handled within 4 hours during business days. You'll have a direct line to our support team."
  },
  {
    question: "Can I make my own updates too?",
    answer: "Absolutely! Your website is yours - you can make updates anytime. Forte Care™ is there for when you need professional help, want to ensure something is done right, or simply don't have time to handle updates yourself."
  },
  {
    question: "What if my website breaks?",
    answer: "That's exactly what Forte Care™ prevents! We monitor your site 24/7 for issues, maintain security updates, and keep backups. If something does go wrong, we fix it fast - usually before you even notice there was a problem."
  },
  {
    question: "Is Forte Care™ required?",
    answer: "For monthly website plans, Forte Care™ is included. For one-time website purchases, it's optional but highly recommended. Just like you wouldn't buy a house and never maintain it, your website needs ongoing care to perform its best."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, Forte Care™ can be cancelled with 30 days notice. However, most clients find it invaluable once they experience worry-free website ownership and the peace of mind that comes with professional maintenance."
  }
];

export default function ForteCare() {
  const [isMobile, setIsMobile] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 overflow-hidden">
        <BackgroundImage
          src="/images/ai-business-abstract-bg.webp"
          alt="Forte Care Website Maintenance"
          className="absolute inset-0 opacity-20 dark:opacity-10"
          priority={true}
        >
          <div></div>
        </BackgroundImage>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SimpleScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                <Icon name="star" className="w-4 h-4 text-green-600" />
                <span>Forte Care™</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Like Home Maintenance, But For Your Website
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                You wouldn't buy a house and never maintain it. Your website needs the same attention. Forte Care™ handles the digital upkeep so your website stays in peak condition.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact">
                  <DarkButton className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white border-green-600">
                    Start Forte Care™
                  </DarkButton>
                </Link>
                <Link href="#pricing" className="text-green-600 dark:text-green-400 hover:underline font-semibold py-3 px-6 text-center">
                  View Pricing
                </Link>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 max-w-2xl mx-auto">
                <p className="text-sm text-green-800 dark:text-green-200">
                  <strong>💡 Included with all monthly website plans</strong> • Available as add-on for one-time purchases
                </p>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <SimpleScrollReveal direction="up" delay={300}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                What's Included with Forte Care™
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Professional website maintenance that keeps your digital storefront running perfectly
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Content Updates */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✏️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Unlimited Content Updates</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Need to change your hours, add new services, or update contact info? We handle all content changes quickly and professionally.
                </p>
              </div>

              {/* Security & Monitoring */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Security & Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  24/7 uptime monitoring, security updates, SSL certificates, and protection against threats. Your site stays secure and online.
                </p>
              </div>

              {/* Performance Optimization */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Speed Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Continuous performance monitoring and optimization to keep your site loading fast and ranking well on Google.
                </p>
              </div>

              {/* Backups & Recovery */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💾</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Backups & Recovery</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Monthly automated backups ensure your website data is always protected. If something goes wrong, we can restore everything quickly.
                </p>
              </div>

              {/* Link & Health Checks */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Health Monitoring</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Regular broken link scans, form testing, and functionality checks ensure your website provides a perfect user experience.
                </p>
              </div>

              {/* Growth Recommendations */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Growth Recommendations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Monthly insights on how to improve your website's performance, user experience, and ability to generate more leads.
                </p>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container max-w-7xl mx-auto">
          <SimpleScrollReveal direction="up" delay={500}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Forte Care™ Pricing
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Professional website maintenance that keeps your business running smoothly
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Essential Care */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Essential Care</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Basic maintenance and security</p>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$150</div>
                  <div className="text-gray-500 dark:text-gray-400 mb-1">/month</div>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Security monitoring & updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Monthly backups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Uptime monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">2 content updates/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
                
                <LightButton href="/contact" className="w-full">Start Essential Care</LightButton>
              </div>

              {/* Professional Care */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-green-500 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional Care</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Complete maintenance + optimization</p>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$300</div>
                  <div className="text-gray-500 dark:text-gray-400 mb-1">/month</div>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Everything in Essential</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Unlimited content updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Performance optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Monthly health reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Priority phone support</span>
                  </li>
                </ul>
                
                <DarkButton href="/contact" className="w-full bg-green-600 hover:bg-green-700 text-white border-green-600">Start Professional Care</DarkButton>
              </div>

              {/* Enterprise Care */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Enterprise Care</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">White-glove service + consulting</p>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$500</div>
                  <div className="text-gray-500 dark:text-gray-400 mb-1">/month</div>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Everything in Professional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Weekly performance reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Growth strategy consulting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Priority emergency support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                </ul>
                
                <LightButton href="/contact" className="w-full">Contact for Enterprise</LightButton>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-4xl mx-auto">
          <SimpleScrollReveal direction="up" delay={700}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <Icon
                      name="down-arrow"
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-green-600 dark:bg-green-800">
        <div className="container max-w-7xl mx-auto text-center">
          <SimpleScrollReveal direction="up" delay={800}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Worry-Free Website Ownership?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Join hundreds of business owners who sleep better knowing their website is professionally maintained and always performing at its best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <LightButton className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100">
                  Start Forte Care™ Today
                </LightButton>
              </Link>
              <Link href="/pricing" className="text-green-100 hover:text-white font-semibold py-3 px-6 text-center border-2 border-green-400 rounded-lg hover:border-green-300 transition-colors">
                View All Growth System Pricing
              </Link>
            </div>
          </SimpleScrollReveal>
        </div>
      </section>

      {/* Industry Lead CTA */}
      <IndustryLeadCTA 
        industry="forte-care"
        formName="Forte Care Inquiry"
        title="Ready for Worry-Free Website Ownership?"
        subtitle="Join hundreds of business owners who sleep better knowing their website is professionally maintained and always performing at its best."
        mobileCtaText="Ready for Forte Care™?"
        mobileCtaSubtext="Professional website maintenance"
        mobileBgGradient="bg-gradient-to-r from-green-600 to-emerald-600"
      />
    </div>
  );
}
