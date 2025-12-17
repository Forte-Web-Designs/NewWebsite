"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  className?: string;
}

export default function NewsletterSignup({ className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Create form data for Netlify submission
      const formData = new FormData();
      formData.append('form-name', 'newsletter-signup');
      formData.append('email', email);
      formData.append('source', 'Blog Newsletter');
      formData.append('timestamp', new Date().toISOString());

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setShowSuccess(true);
        setEmail("");
        // Auto-hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Newsletter signup error:", error);
      setError("Sorry, there was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Stay Updated with Marketing Insights
      </h2>
      <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
        Get practical tips, case studies, and proven strategies delivered to your inbox. No spam, just actionable insights to grow your business.
      </p>
      
      {showSuccess ? (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
          <div className="flex items-center justify-center gap-2 text-white">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Success! Check your email for confirmation.</span>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="newsletter-signup" />
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError(''); // Clear error when user starts typing
              }}
              autoComplete="email"
              className={`flex-1 px-4 py-3 rounded-lg border text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-colors ${
                error 
                  ? 'border-red-400 bg-red-50 focus:ring-red-500/50' 
                  : 'border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-white/50'
              }`}
              disabled={isSubmitting}
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 disabled:bg-gray-200 disabled:text-gray-400 transition-colors"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          {error && (
            <div className="mt-3 text-red-200 text-sm flex items-center justify-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          )}
        </form>
      )}
      
      <p className="text-blue-200 text-sm mt-3">
        Join 25+ business owners getting weekly insights
      </p>
    </div>
  );
}
