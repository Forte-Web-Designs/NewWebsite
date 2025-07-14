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
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
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

    // Pricing questions
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('pricing')) {
      return "💰 Our Forte Foundation™ websites start at $200/month with $0 down. This includes a custom-coded 5-page website, hosting, security, and unlimited edits. For growing businesses, we also offer SEO packages starting at $300/month. Would you like me to connect you with Seth for a custom quote?";
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

    // Default response for unclear questions
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
