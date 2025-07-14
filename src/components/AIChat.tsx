"use client";

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '', email: '', phone: '', company: '', message: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen, isMinimized]);

  // Initialize chat with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: '1',
        type: 'bot',
        content: "👋 Hi! I'm here to help with questions about Forte Web Designs. What would you like to know?",
        timestamp: new Date()
      }]);
    }
  }, [messages.length]);

  // Improved response system with better fallbacks
  const getSmartResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // Pricing questions
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('pricing') || msg.includes('expensive') || msg.includes('cheap')) {
      return "💰 Our websites start at $200/month with $0 down. This includes:\n\n• Custom 5-page website\n• Hosting & security\n• Unlimited edits\n• Mobile optimization\n• SEO setup\n\nSEO services start at $300/month. Want a custom quote?";
    }

    // Timeline/process questions
    if (msg.includes('how long') || msg.includes('timeline') || msg.includes('process') || msg.includes('method') || msg.includes('time') || msg.includes('quick') || msg.includes('fast')) {
      return "⏱️ Our typical timeline is 2-4 weeks:\n\n• Week 1: Design & content\n• Week 2-3: Development\n• Week 4: Testing & launch\n\nWe keep you involved every step with unlimited revisions!";
    }

    // Services questions
    if (msg.includes('service') || msg.includes('what do you do') || msg.includes('help') || msg.includes('offer')) {
      return "🚀 We help businesses grow online with:\n\n• Custom website design\n• SEO (get found on Google)\n• Google Ads management\n• Social media marketing\n• Website maintenance\n\nWhich service interests you most?";
    }

    // SEO questions
    if (msg.includes('seo') || msg.includes('google') || msg.includes('ranking') || msg.includes('search') || msg.includes('found online')) {
      return "📈 Our SEO gets real results! We focus on:\n\n• Local search optimization\n• Google My Business\n• Keyword research\n• Content optimization\n• Monthly reporting\n\nMost clients see improvements in 2-3 months. Ready to get found?";
    }

    // Contact/meeting questions
    if (msg.includes('talk') || msg.includes('call') || msg.includes('meet') || msg.includes('consultation') || msg.includes('discuss')) {
      return "📞 I'd love to connect you with Seth! He offers free 15-minute strategy calls to discuss your needs. No pressure, just possibilities. Would you like me to help you schedule a call?";
    }

    // General business questions
    if (msg.includes('business') || msg.includes('grow') || msg.includes('more customers') || msg.includes('sales')) {
      return "🌟 We help businesses like yours get more customers online! Whether you need a new website, better Google rankings, or more leads, we have solutions that work. What's your biggest challenge right now?";
    }

    // Website questions
    if (msg.includes('website') || msg.includes('site') || msg.includes('web') || msg.includes('design') || msg.includes('redesign')) {
      return "🎨 Every website we build is custom-coded (no templates!) for:\n\n• Lightning-fast loading\n• Mobile-first design\n• SEO optimization\n• Security & reliability\n• Easy updates\n\nWant to see examples of our work?";
    }

    // Location questions
    if (msg.includes('location') || msg.includes('where') || msg.includes('local') || msg.includes('area')) {
      return "🏠 We're based in Texas but work with businesses nationwide! All communication is remote-friendly through calls, emails, and screen shares. Distance is no problem!";
    }

    // Simple greetings
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg === 'good morning' || msg === 'good afternoon') {
      return "👋 Hello! Great to meet you! I'm here to answer questions about Forte Web Designs. Are you looking for a new website, SEO help, or something else?";
    }

    // Thank you responses
    if (msg.includes('thank') || msg.includes('thanks')) {
      return "😊 You're very welcome! Is there anything else I can help you with today?";
    }

    // Default helpful response
    return "🤔 I'd love to help! I can answer questions about:\n\n• Website design & pricing\n• SEO services\n• Our process & timeline\n• Scheduling a call with Seth\n\nWhat would you like to know more about?";
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getSmartResponse(userMessage.content),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/chat-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...contactForm,
          chatHistory: messages,
          timestamp: new Date().toISOString(),
          source: 'AI Chat Widget'
        }),
      });

      if (response.ok) {
        const successMessage: Message = {
          id: Date.now().toString(),
          type: 'bot',
          content: "✅ Perfect! I've sent your information to Seth. He'll get back to you within 24 hours. Thanks for your interest!",
          timestamp: new Date()
        };

        setMessages(prev => [...prev, successMessage]);
        setShowContactForm(false);
        setContactForm({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: "❌ Sorry, there was an issue. Please call (817) 873-6655 or email seth@fortewebdesigns.com",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const openContactForm = () => {
    setShowContactForm(true);
    const contactMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: "Great! Please fill out this quick form and Seth will get back to you soon:",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, contactMessage]);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && !isMinimized && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={closeChat}
        />
      )}

      {/* Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-20 right-6 z-50">
          <button
            onClick={toggleChat}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
            aria-label="Open chat"
          >
            <div className="relative">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </button>
        </div>
      )}

      {/* Minimized Chat */}
      {isOpen && isMinimized && (
        <div className="fixed bottom-20 right-6 z-50">
          <button
            onClick={() => setIsMinimized(false)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg px-4 py-3 shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            aria-label="Restore chat"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm font-medium">Chat</span>
            {messages.length > 1 && (
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            )}
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && !isMinimized && (
        <div className="fixed bottom-32 right-6 z-50 w-96 h-[500px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] lg:w-96 lg:h-[500px] 
                        sm:fixed sm:inset-4 sm:w-auto sm:h-auto sm:max-w-none sm:max-h-[calc(100vh-2rem)] sm:bottom-4
                        bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-xl flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Forte Assistant</h3>
                <p className="text-xs text-blue-100">Here to help!</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={minimizeChat}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                aria-label="Minimize chat"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <button
                onClick={closeChat}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                aria-label="Close chat"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line leading-relaxed">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Form */}
            {showContactForm && (
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <form onSubmit={handleContactSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name*"
                    value={contactForm.name}
                    onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address*"
                    value={contactForm.email}
                    onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                  <textarea
                    placeholder="Tell us about your project..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-20 resize-none"
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-semibold transition-colors"
                    >
                      Send Message
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0 bg-white dark:bg-gray-900">
            <div className="flex gap-2 mb-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                disabled={isTyping}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-3 rounded-lg transition-colors flex-shrink-0"
                aria-label="Send message"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setInputValue("What's your pricing?")}
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                💰 Pricing
              </button>
              <button
                onClick={() => setInputValue("How long does it take?")}
                className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                ⏱️ Timeline
              </button>
              <button
                onClick={openContactForm}
                className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
              >
                📞 Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [conversationStage, setConversationStage] = useState<'initial' | 'gathering_info' | 'providing_solution'>('initial');
  const [userContext, setUserContext] = useState<{
    industry?: string;
    problem?: string;
    businessSize?: string;
    currentWebsite?: boolean;
  }>({});
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '', email: '', phone: '', company: '', message: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Small delay to ensure the chat window is rendered
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Handle mobile keyboard visibility
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      // On mobile, when keyboard opens, adjust scroll behavior
      if (window.innerHeight < 500 && inputRef.current) {
        setTimeout(() => {
          inputRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }, 100);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 1024) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  // Initialize chat with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: '1',
        type: 'bot',
        content: "👋 Hi! I'm here to help you learn about Forte Web Designs. I can answer questions about our services, pricing, or process. What would you like to know?",
        timestamp: new Date()
      }]);
    }
  }, [messages.length]);

  // Smart response system based on keywords
  const getSmartResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // Industry-specific responses
    if (msg.includes('restaurant') || msg.includes('food') || msg.includes('menu')) {
      return "🍽️ Perfect! We've helped restaurants like yours increase online orders by 40%+. Our restaurant websites include:\n\n• Online menu integration\n• Order system compatibility\n• Local SEO for 'near me' searches\n• Mobile-first design (80% of restaurant searches are mobile)\n• Google My Business optimization\n\nStarting at $200/month. Want to see examples of restaurant sites we've built?";
    }

    if (msg.includes('hvac') || msg.includes('plumber') || msg.includes('contractor') || msg.includes('electrician')) {
      return "🔧 Excellent! Home service businesses see incredible results with our approach. We've helped contractors get:\n\n• 60% more service calls within 3 months\n• Top 3 Google rankings for local searches\n• Mobile-optimized booking forms\n• Before/after photo galleries\n• Customer review integration\n\nStarting at $200/month + SEO at $300/month. Ready to dominate your local market?";
    }

    if (msg.includes('lawyer') || msg.includes('attorney') || msg.includes('legal') || msg.includes('law firm')) {
      return "⚖️ Law firms need trust and authority online. Our legal websites feature:\n\n• Professional, trustworthy design\n• Practice area optimization\n• Client testimonial systems\n• Secure contact forms\n• Local bar association compliance\n• Content that ranks for legal searches\n\nStarting at $200/month. Want to see how we've helped other attorneys?";
    }

    if (msg.includes('dentist') || msg.includes('dental') || msg.includes('orthodont') || msg.includes('medical') || msg.includes('doctor')) {
      return "🦷 Healthcare websites need special attention! Our medical/dental sites include:\n\n• HIPAA-compliant contact forms\n• Online appointment booking\n• Patient education content\n• Insurance information display\n• Before/after galleries\n• Local medical SEO\n\nStarting at $200/month. Ready to attract more patients?";
    }

    if (msg.includes('retail') || msg.includes('shop') || msg.includes('store') || msg.includes('boutique') || msg.includes('ecommerce')) {
      return "🛍️ Retail businesses thrive with our e-commerce solutions! We include:\n\n• Product catalog optimization\n• Shopping cart integration\n• Inventory management\n• Payment processing setup\n• Local + online SEO\n• Social media integration\n\nStarting at $200/month + e-commerce features. Want to boost online sales?";
    }

    // Pricing questions
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('pricing')) {
      return "💰 Our Forte Foundation™ websites start at $200/month with $0 down. This includes a custom-coded 5-page website, hosting, security, and unlimited edits. For growing businesses, we also offer SEO packages starting at $300/month. Would you like me to connect you with Seth for a custom quote?";
    }

    // Business problem-focused responses
    if (msg.includes('not getting calls') || msg.includes('no leads') || msg.includes('phone not ringing')) {
      return "📞 The 'phone not ringing' problem is fixable! Here's usually what's happening:\n\n• You're not showing up in local searches\n• Your website doesn't build trust\n• No clear call-to-action\n• Mobile experience is poor\n\nWe fix this with local SEO + conversion-focused design. Most clients see more calls within 30 days. Want a free audit?";
    }

    if (msg.includes('competitor') || msg.includes('competition') || msg.includes('ranking higher')) {
      return "🥇 Tired of competitors outranking you? Our competitive analysis shows:\n\n• What keywords they're winning\n• Their website weaknesses\n• Content gaps you can exploit\n• Local SEO opportunities\n\nWe've helped clients outrank competitors 85% of the time. Ready to take the #1 spot?";
    }

    if (msg.includes('outdated website') || msg.includes('old site') || msg.includes('website looks bad') || msg.includes('redesign')) {
      return "🔄 An outdated website is costing you customers daily! Signs you need a refresh:\n\n• Built more than 3 years ago\n• Not mobile-friendly\n• Slow loading times\n• Doesn't represent your brand\n\nWe rebuild from scratch - no templates, just custom code. Starting at $200/month. Ready for a modern upgrade?";
    }

    if (msg.includes('social media') || msg.includes('facebook') || msg.includes('instagram') || msg.includes('posting')) {
      return "📱 Social media driving you crazy? We handle the complete strategy:\n\n• Content calendar creation\n• Professional post design\n• Engagement management\n• Lead generation campaigns\n• Monthly analytics reports\n\nStarting at $300/month. Want to see what consistent posting can do?";
    }

    // Educational and insight-driven responses
    if (msg.includes('roi') || msg.includes('return on investment') || msg.includes('worth it')) {
      return "📊 Great question! Here's the typical ROI our clients see:\n\n• Month 1-2: Website converting 40% better\n• Month 3-4: 60% increase in organic traffic\n• Month 6+: 200-300% increase in qualified leads\n• Average: $3-5 return for every $1 invested\n\nExample: $500/month investment → $1,500-2,500 in new revenue. Want specific projections for your business?";
    }

    if (msg.includes('google ads') || msg.includes('ppc') || msg.includes('paid ads') || msg.includes('advertising')) {
      return "🎯 Google Ads can be a goldmine OR money pit. We ensure profitability:\n\n• Keyword research targeting buyers (not browsers)\n• Landing pages that convert\n• Negative keyword lists to avoid waste\n• A/B testing everything\n• Weekly optimization\n\nTypical results: $1 ad spend → $3-4 revenue. Starting at $500 setup + 15% management fee. Ready to profit from ads?";
    }

    if (msg.includes('mobile') || msg.includes('phone') || msg.includes('smartphone') || msg.includes('tablet')) {
      return "📱 Mobile is EVERYTHING now! 73% of your customers will visit on mobile first:\n\n• Google prioritizes mobile-friendly sites\n• Slow mobile = instant bounce\n• Touch-friendly buttons essential\n• Local searches happen on mobile\n\nOur sites load in under 1 second on mobile. Want to see the difference proper mobile optimization makes?";
    }

    if (msg.includes('local seo') || msg.includes('local search') || msg.includes('near me') || msg.includes('google maps')) {
      return "📍 'Near me' searches grew 900% in 2 years! Local SEO includes:\n\n• Google My Business optimization\n• Local citation building\n• Review management strategy\n• Location-specific content\n• Schema markup for rich snippets\n\nWe get 87% of clients into the top 3 local results. Ready to dominate your area?";
    }

    if (msg.includes('content') || msg.includes('blog') || msg.includes('writing') || msg.includes('articles')) {
      return "✍️ Content is your 24/7 salesperson! Our content strategy:\n\n• Answer questions your customers ask\n• Target keywords with buying intent\n• Establish you as the local expert\n• Feed Google's algorithm\n• Convert visitors into leads\n\nContent-driven sites get 67% more leads. Want a content strategy that actually drives business?";
    }

    // Technical and business insight responses
    if (msg.includes('speed') || msg.includes('loading') || msg.includes('fast') || msg.includes('slow')) {
      return "⚡ Website speed = money! Here's why:\n\n• 1 second delay = 7% fewer conversions\n• Google ranks faster sites higher\n• Mobile users expect instant loading\n• Slow sites lose 40% of visitors\n\nOur hand-coded sites load in under 1 second. That's 3-5x faster than WordPress. Want to see the speed difference?";
    }

    // Interactive conversation starters
    if (msg.includes('budget') || msg.includes('afford') || msg.includes('expensive')) {
      return "💡 Let's talk about investment vs. cost! Most businesses think:\n\n❌ 'I can't afford a website'\n✅ 'I can't afford NOT to have a website'\n\nA $200/month investment typically generates $1,000+ in new business monthly. That's a 400% return!\n\nWhat's your monthly revenue goal? Let's see how a website fits your budget.";
    }

    if (msg.includes('diy') || msg.includes('myself') || msg.includes('build my own') || msg.includes('wix') || msg.includes('squarespace')) {
      return "🛠️ DIY platforms seem tempting, but here's what business owners discover:\n\n• Takes 40+ hours to build properly\n• Limited customization options\n• Poor mobile performance\n• Weak SEO capabilities\n• No ongoing support\n\nYour time is worth $50-100/hour. That's $2,000-4,000 in opportunity cost! Our $200/month includes everything + your time back. What's your time worth?";
    }

    if (msg.includes('results') || msg.includes('guarantee') || msg.includes('promise') || msg.includes('success')) {
      return "🎯 Results matter most! Here's what we track:\n\n• Website traffic increases\n• Lead form submissions\n• Phone call volume\n• Google ranking improvements\n• Conversion rate optimization\n\nWe provide monthly reports showing exactly how your investment performs. Most clients see measurable results within 30-60 days.\n\nWhat specific result would make this investment worthwhile for you?";
    }

    if (msg.includes('competition') || msg.includes('differentiate') || msg.includes('stand out') || msg.includes('unique')) {
      return "🌟 Standing out in a crowded market is tough! Our differentiation strategy:\n\n• Identify what competitors are missing\n• Highlight your unique strengths\n• Create compelling value propositions\n• Target underserved customer segments\n• Optimize for keywords competitors ignore\n\nWhat makes your business different from competitors? Let's amplify that online!";
    }

    // Services questions
    if (msg.includes('service') || msg.includes('what do you do') || msg.includes('offerings')) {
      return "🚀 We specialize in:\n\n• Custom hand-coded websites (no templates!)\n• SEO to get you found on Google\n• Google Ads management\n• Social media marketing\n• Website maintenance & security\n\nAll designed to help your business grow. Which service interests you most?";
    }

    // Process/timeline questions
    if (msg.includes('process') || msg.includes('how long') || msg.includes('timeline') || msg.includes('method')) {
      return "⚡ Our Forte Method™ takes 2-4 weeks:\n\n1. 🔍 Foundations (1-2 days)\n2. 🧠 Refine (3-5 days) \n3. 💻 Build (1-2 weeks)\n4. 🚀 Launch (1-2 days)\n5. 🔧 Grow (ongoing)\n\nWe keep you involved every step and provide unlimited revisions. Want to get started?";
    }

    // SEO questions
    if (msg.includes('seo') || msg.includes('google') || msg.includes('ranking') || msg.includes('found online')) {
      return "📈 Our SEO gets real results! We focus on local SEO and keywords that actually bring customers - not just traffic. Most clients see improvements in 2-3 months. We handle everything: keyword research, content optimization, technical SEO, and monthly reporting. Ready to dominate your local market?";
    }

    // Website questions
    if (msg.includes('website') || msg.includes('web design') || msg.includes('site')) {
      return "🎨 Every Forte website is hand-coded from scratch - no templates or page builders! This means:\n\n• Lightning-fast loading (under 1 second)\n• Rock-solid security (no databases to hack)\n• Mobile-optimized design\n• SEO-ready structure\n• Unlimited edits included\n\nWant to see examples of our work?";
    }

    // Contact/consultation questions
    if (msg.includes('talk') || msg.includes('call') || msg.includes('meet') || msg.includes('consultation')) {
      return "📞 I'd love to connect you with Seth! He offers free 15-minute strategy calls to discuss your specific needs. No pressure, just possibilities. Would you like me to help you schedule a call?";
    }

    // Location questions
    if (msg.includes('location') || msg.includes('where') || msg.includes('local')) {
      return "🏠 Forte Web Designs is based in Texas, but we work with businesses across the US. All communication is remote-friendly - calls, emails, and screen shares. We've helped businesses from coast to coast grow online!";
    }

    // Examples/portfolio questions
    if (msg.includes('example') || msg.includes('portfolio') || msg.includes('work') || msg.includes('case study')) {
      return "🎯 We've helped 25+ businesses grow with custom websites and digital marketing. From HVAC companies to boutiques, restaurants to professional services. Each project is unique and built for results. Want to see specific examples or hear about results we've achieved?";
    }

    // General business questions
    if (msg.includes('help') || msg.includes('grow') || msg.includes('business')) {
      return "🌟 We help businesses like yours get found online and convert visitors into customers. Whether you're just starting out or ready to scale, we have solutions that fit. What's your biggest challenge right now - getting found online, converting visitors, or something else?";
    }

    // Default response for unclear questions with intelligent follow-up
    if (conversationStage === 'initial') {
      setConversationStage('gathering_info');
      return "🤔 That's a great question! I want to give you the most helpful answer. Let me learn a bit about your business:\n\n• What industry are you in? (restaurant, HVAC, legal, retail, etc.)\n• What's your biggest challenge right now?\n• Do you currently have a website?\n\nThis helps me provide specific advice for your situation!";
    }

    // Follow-up based on gathered context
    if (conversationStage === 'gathering_info' && !userContext.industry) {
      // Try to detect industry from the message
      const industries = ['restaurant', 'hvac', 'legal', 'dental', 'retail', 'contractor'];
      const detectedIndustry = industries.find(industry => msg.includes(industry));
      
      if (detectedIndustry) {
        setUserContext(prev => ({ ...prev, industry: detectedIndustry }));
        setConversationStage('providing_solution');
        return `Perfect! ${detectedIndustry} businesses have unique online needs. Based on what you've told me, here's what typically works best:\n\n[Customized response would go here based on industry]\n\nWould you like specific examples of how we've helped other ${detectedIndustry} businesses?`;
      }
    }

    return "🤔 That's a great question! I want to make sure I give you the most helpful answer. Could you tell me more about what you're looking for? I can help with:\n\n• Pricing and packages\n• Our web design process\n• SEO and marketing services\n• Examples of our work\n• Scheduling a call with Seth\n\nWhat interests you most?";
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getSmartResponse(userMessage.content),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/chat-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...contactForm,
          chatHistory: messages,
          timestamp: new Date().toISOString(),
          source: 'AI Chat Widget'
        }),
      });

      if (response.ok) {
        const successMessage: Message = {
          id: Date.now().toString(),
          type: 'bot',
          content: "✅ Perfect! I've sent your information to Seth. He'll get back to you within 24 hours (usually much sooner). Thanks for your interest in Forte Web Designs!",
          timestamp: new Date()
        };

        setMessages(prev => [...prev, successMessage]);
        setShowContactForm(false);
        setContactForm({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: "❌ Sorry, there was an issue sending your message. Please try calling (817) 873-6655 directly or email seth@fortewebdesigns.com",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const openContactForm = () => {
    setShowContactForm(true);
    const contactMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: "Great! Please fill out this quick form and Seth will get back to you soon:",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, contactMessage]);
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden ai-chat-mobile-overlay"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Chat Button */}
      <div className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-45">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-3 lg:p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
          >
            <div className="relative">
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </button>
        )}        {/* Chat Window */}
        {isOpen && (
          <div 
            ref={chatWindowRef}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 
                          fixed inset-x-4 bottom-4 top-16 z-50
                          lg:relative lg:inset-auto lg:w-96 lg:h-[500px] lg:max-w-[calc(100vw-2rem)] lg:max-h-[calc(100vh-2rem)]
                          flex flex-col mobile-chat-window
                          lg:bottom-auto lg:top-auto lg:left-auto lg:right-auto
                          overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-xl flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Forte Assistant</h3>
                  <p className="text-xs text-blue-100">Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              {showContactForm && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name*"
                      value={contactForm.name}
                      onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address*"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      required
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={contactForm.company}
                      onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                    <textarea
                      placeholder="Tell us about your project..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 h-20 resize-none"
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm font-semibold transition-colors"
                      >
                        Send Message
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowContactForm(false)}
                        className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0 pb-safe bg-white dark:bg-gray-900">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about pricing, services, or anything..."
                  className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isTyping}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white p-3 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Send message"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              
              {/* Quick Actions */}
              <div className="flex gap-2 mt-3 flex-wrap">
                <button
                  onClick={() => setInputValue("What's your pricing?")}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  💰 Pricing
                </button>
                <button
                  onClick={() => setInputValue("How long does a website take?")}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  ⏱️ Timeline
                </button>
                <button
                  onClick={() => setInputValue("I'm a restaurant owner")}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  🍽️ Restaurant
                </button>
                <button
                  onClick={() => setInputValue("I'm not getting enough calls")}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  📞 Need Leads
                </button>
                <button
                  onClick={() => setInputValue("What kind of ROI can I expect?")}
                  className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  📊 ROI Info
                </button>
                <button
                  onClick={openContactForm}
                  className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                >
                  📞 Contact Seth
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AIChat;
