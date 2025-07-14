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
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '', email: '', phone: '', company: '', message: ''
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize chat with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: '1',
        type: 'bot',
        content: "Hey there! 👋 I'm Seth from Forte Web Designs. I help small businesses get more customers online with websites that actually work.\n\nWhat brings you here today? Looking to grow your business online?",
        timestamp: new Date()
      }]);
    }
  }, [messages.length]);

  // Sales-focused response system
  const getSmartResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    // Pricing questions
    if (msg.includes('price') || msg.includes('cost') || msg.includes('how much') || msg.includes('pricing') || msg.includes('expensive') || msg.includes('cheap') || msg.includes('affordable')) {
      return "Great question! 💰 Here's the thing - most of my clients actually SAVE money by working with me.\n\nWebsites start at just $200/month (no upfront costs) and include everything:\n• Custom website that loads lightning fast\n• Hosting, security, and maintenance\n• Unlimited changes whenever you need them\n• Mobile optimization\n• SEO setup to get found on Google\n\nMost agencies charge $5k+ upfront. I keep it simple and affordable. Want to chat about what would work for your business?";
    }

    // Timeline/process questions  
    if (msg.includes('how long') || msg.includes('timeline') || msg.includes('process') || msg.includes('method') || msg.includes('time') || msg.includes('quick') || msg.includes('fast') || msg.includes('when')) {
      return "I know you're probably eager to get started! ⚡\n\nHere's my typical timeline:\n• Week 1: We chat about your vision and I design mockups\n• Week 2-3: I build your custom website\n• Week 4: We test everything and launch\n\nThe best part? You're involved every step of the way with unlimited revisions until it's perfect.\n\nReady to get the ball rolling?";
    }

    // Services questions
    if (msg.includes('service') || msg.includes('what do you do') || msg.includes('help') || msg.includes('offer') || msg.includes('seo') || msg.includes('google') || msg.includes('ranking')) {
      return "I'm basically your one-stop shop for getting more customers online! 🎯\n\nHere's how I help businesses like yours:\n• Custom websites that convert visitors into customers\n• SEO to get you found on Google (my specialty!)\n• Google Ads to bring in leads fast\n• Social media management\n• Ongoing support so you never feel stuck\n\nMost of my clients see more leads within the first month. What's your biggest challenge right now - getting found online or converting visitors?";
    }

    // ROI/Results questions
    if (msg.includes('results') || msg.includes('roi') || msg.includes('return') || msg.includes('worth it') || msg.includes('work') || msg.includes('effective')) {
      return "Love that you're asking about results! 📈 That's exactly how I think.\n\nHere's what my clients typically see:\n• 40-60% more website traffic in 3 months\n• 2-3x more leads from their website\n• Better Google rankings (often page 1)\n• Faster loading sites that keep visitors around\n\nOne client went from 5 leads/month to 25+ leads/month in just 4 months. Another doubled their revenue in 6 months.\n\nThe key? Websites that actually work for your business goals, not just look pretty. Want to see how this could work for you?";
    }

    // Contact/meeting questions
    if (msg.includes('talk') || msg.includes('call') || msg.includes('meet') || msg.includes('consultation') || msg.includes('discuss') || msg.includes('schedule')) {
      return "I'd love to chat! 📞 Here's the deal - I offer a free 15-minute strategy call where we'll:\n\n• Talk about your business goals\n• Identify what's holding you back online\n• Map out a plan to get you more customers\n• See if we're a good fit to work together\n\nNo pressure, no sales pitch - just honest advice from someone who's helped 100+ businesses grow online.\n\nClick the 'Contact Us' button below to get in touch!";
    }

    // Business growth questions
    if (msg.includes('business') || msg.includes('grow') || msg.includes('more customers') || msg.includes('sales') || msg.includes('leads') || msg.includes('traffic')) {
      return "Now we're talking! 🚀 Growing your business online is exactly what I do.\n\nMost small businesses struggle because:\n• Their website doesn't show up on Google\n• Visitors leave without calling or buying\n• They're not sure what's working and what isn't\n\nI fix all of that. My websites are built to:\n• Get found on Google (SEO built-in)\n• Convert visitors into customers\n• Give you clear data on what's working\n\nWhat's your biggest frustration with your current online presence?";
    }

    // Website questions
    if (msg.includes('website') || msg.includes('site') || msg.includes('web') || msg.includes('design') || msg.includes('redesign') || msg.includes('new site')) {
      return "Perfect! 🎨 Here's why my websites are different:\n\n• 100% custom-coded (no cheap templates)\n• Lightning fast (Google loves this)\n• Mobile-first design\n• Built-in SEO optimization\n• Easy for you to update\n\nBut here's the real difference - I don't just build pretty websites. I build websites that get you customers.\n\nEvery element is designed to guide visitors toward calling you, buying from you, or filling out your contact form.\n\nWant to see some examples of websites that are actually working for my clients?";
    }

    // Location/local questions
    if (msg.includes('location') || msg.includes('where') || msg.includes('local') || msg.includes('area') || msg.includes('texas')) {
      return "I'm based in Texas but work with businesses nationwide! 🏠\n\nHonestly, some of my best clients are hundreds of miles away. Everything happens through video calls, screen shares, and email.\n\nThe beauty of web design? Distance doesn't matter. Results do.\n\nPlus, I specialize in local SEO, so whether you're in Texas, New York, or anywhere in between, I can help you dominate your local market.\n\nWhere's your business located?";
    }

    // Competitor/comparison questions
    if (msg.includes('different') || msg.includes('better') || msg.includes('why you') || msg.includes('competitors') || msg.includes('other') || msg.includes('comparison')) {
      return "Great question! 🤔 Here's what makes me different:\n\nMost web designers:\n• Charge $5k+ upfront\n• Use templates\n• Disappear after launch\n• Don't understand marketing\n\nMe?\n• $0 down, affordable monthly payments\n• 100% custom-coded websites\n• Ongoing support and unlimited changes\n• 10+ years of marketing experience\n\nI'm not just a designer - I'm a business owner who understands what it takes to get customers online.\n\nWant to see the difference this makes?";
    }

    // Simple greetings
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey') || msg === 'good morning' || msg === 'good afternoon') {
      return "Hey! 👋 Great to meet you! \n\nI'm Seth, and I help small businesses get more customers through websites that actually work.\n\nWhat's your business? Are you looking to get more leads, improve your online presence, or maybe starting something new?";
    }

    // Thank you responses
    if (msg.includes('thank') || msg.includes('thanks')) {
      return "You're so welcome! 😊 \n\nThat's what I'm here for - helping awesome business owners like you succeed online.\n\nAnything else I can help you with? Or ready to chat about how we can grow your business together?";
    }

    // Default helpful response
    return "I love chatting with business owners! 💬\n\nI can help you with:\n• Getting more customers from your website\n• Ranking higher on Google\n• Building a website that actually converts\n• Growing your business online\n\nWhat's your biggest challenge right now? Or what questions do you have about growing online?";
  };

  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageContent.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
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
        content: "❌ Sorry, there was an issue sending your message. Please call (817) 873-6655 or email seth@fortewebdesigns.com and I'll get back to you right away!",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const openContactForm = () => {
    window.location.href = '/contact';
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

      {/* Chat Button - Optimized sizing and spacing */}
      {!isOpen && (
        <div className="fixed bottom-16 right-4 lg:bottom-4 lg:right-20 z-45">
          <button
            onClick={toggleChat}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-3 lg:p-4 shadow-2xl transition-all duration-300 hover:scale-105 group"
            aria-label="Open chat"
          >
            <div className="relative">
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div className="absolute -top-0.5 -right-0.5 lg:-top-1 lg:-right-1 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </button>
        </div>
      )}

      {/* Minimized Chat - Optimized sizing */}
      {isOpen && isMinimized && (
        <div className="fixed bottom-16 right-4 lg:bottom-4 lg:right-20 z-45">
          <button
            onClick={() => setIsMinimized(false)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg px-3 py-2 lg:px-4 lg:py-3 shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            aria-label="Restore chat"
          >
            <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-xs lg:text-sm font-medium">Chat</span>
            {messages.length > 1 && (
              <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full"></div>
            )}
          </button>
        </div>
      )}

      {/* Chat Window - Optimized positioning and mobile sizing */}
      {isOpen && !isMinimized && (
        <div className="fixed bottom-4 right-4 left-4 top-20 z-45 lg:bottom-20 lg:right-20 lg:left-auto lg:top-auto lg:w-96 lg:h-[520px] 
                        bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 lg:p-4 rounded-t-xl flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm lg:text-base">Chat with Seth</h3>
                <p className="text-xs text-blue-100">Here to help grow your business! 🚀</p>
              </div>
            </div>
            <div className="flex items-center gap-1 lg:gap-2">
              <button
                onClick={minimizeChat}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                aria-label="Minimize chat"
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <button
                onClick={closeChat}
                className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
                aria-label="Close chat"
              >
                <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

          {/* Quick Action Prompts - Sales Focused */}
          <div className="p-3 lg:p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0 bg-white dark:bg-gray-900">
            <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mb-3 text-center">Choose what you'd like to know:</p>
            
            <div className="grid grid-cols-1 gap-2 lg:gap-3">
              {/* Primary prompts */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => sendMessage("What's your pricing?")}
                  className="text-xs lg:text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg transition-colors font-medium"
                >
                  💰 Pricing & Plans
                </button>
                <button
                  onClick={() => sendMessage("How can you help grow my business?")}
                  className="text-xs lg:text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg transition-colors font-medium"
                >
                  🚀 Grow My Business
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => sendMessage("What kind of results do you get?")}
                  className="text-xs lg:text-sm bg-orange-600 hover:bg-orange-700 text-white px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg transition-colors font-medium"
                >
                  📈 See Results
                </button>
                <button
                  onClick={() => sendMessage("How long does it take?")}
                  className="text-xs lg:text-sm bg-purple-600 hover:bg-purple-700 text-white px-3 py-2.5 lg:px-4 lg:py-3 rounded-lg transition-colors font-medium"
                >
                  ⏱️ Timeline
                </button>
              </div>

              {/* Secondary prompts */}
              <div className="grid grid-cols-3 gap-1.5 lg:gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                <button
                  onClick={() => sendMessage("Tell me about your website services")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-2 lg:px-3 lg:py-2.5 rounded-md transition-colors"
                >
                  🎨 Websites
                </button>
                <button
                  onClick={() => sendMessage("How do you help with SEO?")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-2 lg:px-3 lg:py-2.5 rounded-md transition-colors"
                >
                  📍 SEO Help
                </button>
                <button
                  onClick={() => sendMessage("Why choose you over others?")}
                  className="text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-2 lg:px-3 lg:py-2.5 rounded-md transition-colors"
                >
                  🤔 Why You?
                </button>
              </div>
              
              {/* Contact prompt */}
              <div className="pt-2">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="w-full text-sm bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 lg:py-3.5 rounded-lg transition-all duration-200 font-semibold shadow-lg hover:shadow-xl"
                >
                  📞 Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;