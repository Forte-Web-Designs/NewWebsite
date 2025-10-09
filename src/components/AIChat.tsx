'use client';
import { useState, useEffect } from 'react';

type Message = {
  type: 'bot' | 'user';
  text: string;
};

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: 'bot', text: "Hi! I'm Sophia 👋 I help business owners like you grow with custom websites and AI automation. We're booking out fast—but I've got you covered. What's your biggest challenge right now?" }
  ]);

  // Track screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const quickQuestions = [
    { q: "What makes you different?", a: "We're 100% USA-based and hand-code every project—no templates, no outsourcing. Our clients see an average 40% increase in conversions within 90 days. We've helped 50+ businesses transform their digital presence. Ready to join them? Let's talk about your growth goals!" },
    { q: "How much does a website cost?", a: "Investment starts at $3,000 for websites that actually convert. Here's the thing: our clients typically see 3-5x ROI in the first year. We're booking out 4 weeks ahead, but I can get you on the schedule this week if you're ready to move forward. Want to lock in your spot?" },
    { q: "Do you offer AI automation?", a: "YES! 🚀 We've automated workflows that save our clients 20+ hours per week. Imagine having AI handle your repetitive tasks while you focus on growth. We just helped a client save $50K/year in labor costs. This is exactly what's giving businesses the competitive edge right now. Want to see what we can automate for you?" },
    { q: "How fast can we start?", a: "Great question! We can start in as little as 48 hours for qualified projects. Most builds are completed in 4-6 weeks—faster than industry average. The sooner we start, the sooner you're generating results. I have 2 consultation slots open this week. Can I reserve one for you?" },
    { q: "What results do clients see?", a: "Our clients typically see: 40% higher conversion rates, 3-5x ROI in year one, and 20+ hours saved weekly with automation. One client went from 2 leads/month to 30+ in 90 days. Another increased revenue by $120K in 6 months. These results are possible when you have a system built for YOUR business. Ready to get started?" }
  ];

  const handleQuestionClick = (question: string, answer: string) => {
    setMessages([
      ...messages,
      { type: 'user', text: question },
      { type: 'bot', text: answer }
    ]);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 md:right-20 z-50 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700" style={{maxWidth:'calc(100vw - 3rem)'}}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex justify-between items-center rounded-t-2xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
              <div>
                <div className="text-white font-semibold text-sm">Sophia</div>
                <div className="text-white/80 text-xs">Client Success</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 rounded p-1 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-4 h-96 overflow-y-auto bg-gray-50 dark:bg-gray-900 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg p-3 ${
                  msg.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-2 mt-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">Quick Questions:</p>
                {quickQuestions.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuestionClick(item.q, item.a)}
                    className="w-full text-left px-3 py-2 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-lg text-sm transition-colors"
                  >
                    {item.q}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Ready to grow? <a href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">Book your free consultation →</a>
            </p>
          </div>
        </div>
      )}
      <div className="fixed bottom-6 right-6 md:bottom-6 md:right-20 z-40" style={{ width: '48px', height: '48px' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center relative group"
          style={{ width: '48px', height: '48px', minWidth: '48px', minHeight: '48px' }}
          aria-label="Chat with Sophia"
        >
          {!isOpen && (
            <span
              className="absolute bg-green-500 rounded-full border-2 border-white animate-pulse"
              style={{
                width: isMobile ? '8px' : '12px',
                height: isMobile ? '8px' : '12px',
                top: '-2px',
                right: '-2px',
                display: 'block',
                aspectRatio: '1',
                flex: 'none'
              }}
            ></span>
          )}
          <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </>
  );
}
