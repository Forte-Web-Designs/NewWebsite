import SimpleScrollReveal from './animations/SimpleScrollReveal';
import { OptimizedImage } from '@/components/images/OptimizedImage';
import LightButton from './LightButton';

export default function MeetSethSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="text-center space-y-8">
              
              {/* Professional Headshot */}
              <div className="relative group mx-auto w-fit">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-80 animate-pulse"></div>
                <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                  <OptimizedImage 
                    src="/images/about/headshot.jpg" 
                    alt="Seth - Founder & Lead Developer of Forte Web Designs"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                    priority
                  />
                  {/* Professional Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg border-2 border-white/20">
                    Founder
                  </div>
                </div>
              </div>
              
              {/* Professional Title */}
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Meet Seth
                </h2>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  Founder & Lead Developer
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
              </div>
              
              {/* Trust Stats */}
              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">100%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">USA Based</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">100%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Custom Code</div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-3 border border-gray-200 dark:border-gray-700 shadow-sm">
                  <div className="text-lg font-bold text-gray-900 dark:text-white">100%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Customer First</div>
                </div>
              </div>
              
              {/* Personal Story */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Why I Started Forte Web Designs
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-left leading-relaxed">
                  You know what really got to me? Seeing so many amazing business owners getting stuck with websites that just... didn't work for them. Sure, they looked pretty in the demo, but then reality hit - slow loading times, constant updates breaking things, and when something went wrong? Good luck getting help!
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-left leading-relaxed mt-4">
                  I started Forte Web Designs because I believe you deserve better. Way better. I build websites the old-school way - by hand, line by line - so they're lightning fast, rock solid, and actually grow your business.
                </p>
              </div>
              
              <LightButton href="/contact">
                Work Directly With Seth
              </LightButton>
            </div>
          </SimpleScrollReveal>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <SimpleScrollReveal direction="up" delay={200}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column - Photo and Stats */}
              <div className="text-center space-y-8">
                
                {/* Professional Headshot */}
                <div className="relative group mx-auto w-fit">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-80 animate-pulse"></div>
                  <div className="relative w-64 h-64">
                    <OptimizedImage 
                      src="/images/about/headshot.jpg" 
                      alt="Seth - Founder & Lead Developer of Forte Web Designs"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
                      priority
                    />
                    {/* Professional Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-3 py-1.5 rounded-full shadow-lg border-2 border-white/20">
                      Founder
                    </div>
                  </div>
                </div>
                
                {/* Professional Title */}
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                    Meet Seth
                  </h2>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                    Founder & Lead Developer
                  </p>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
                </div>
                
                {/* Trust Stats */}
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">USA Based</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Custom Code</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Customer First</div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Personal Story */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Why I Started Forte Web Designs
                  </h3>
                  
                  <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      You know what really got to me? Seeing so many amazing business owners getting stuck with websites that just... didn't work for them. Sure, they looked pretty in the demo, but then reality hit - slow loading times, constant updates breaking things, and when something went wrong? Good luck getting help!
                    </p>
                    
                    <p>
                      I started Forte Web Designs because I believe you deserve better. Way better. I build websites the old-school way - by hand, line by line - so they're lightning fast, rock solid, and actually grow your business.
                    </p>
                    
                    <p>
                      No bloated plugins, no surprise crashes, no "sorry, that'll be an extra $200" fees. Whether you go with our Forte Foundation™ website design package to get started or create something completely custom with Forte Pro™ website design package, you're getting a partner who genuinely cares about your success.
                    </p>
                  </div>
                </div>
                
                {/* Value Props */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">When You Work With Me:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-400">You work directly with me - no account managers or middlemen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-400">Personal attention and genuine care about your success</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-400">Hand-coded websites built for speed and reliability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-600 dark:text-gray-400">Same day response to all questions and concerns</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <LightButton href="/contact" className="flex-1">
                    Work Directly With Seth
                  </LightButton>
                  <LightButton href="/about" className="flex-1 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
                    Learn More About Me
                  </LightButton>
                </div>
              </div>
            </div>
          </SimpleScrollReveal>
        </div>
      </div>
    </section>
  );
}
