"use client";

import { useState } from "react";

interface EmailCaptureProps {
  title?: string;
  description?: string;
  buttonText?: string;
  placeholder?: string;
  className?: string;
  variant?: 'default' | 'mini' | 'inline';
}

export default function EmailCapture({
  title = "Free Website Audit Checklist",
  description = "Download our comprehensive 25-point website audit checklist and see exactly how your current site measures up.",
  buttonText = "Get Free Checklist",
  placeholder = "Enter your email",
  className = "",
  variant = 'default'
}: EmailCaptureProps) {
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
      formData.append('form-name', 'email-capture');
      formData.append('email', email);
      formData.append('source', title); // Track which form captured the email

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
      console.error("Email capture error:", error);
      setError("Sorry, there was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'mini') {
    return (
      <div className={`${className}`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input type="hidden" name="form-name" value="email-capture" />
          <input
            type="email"
            name="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className={`flex-1 px-3 py-2 border rounded-lg text-sm transition-colors ${
              error 
                ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20'
            } dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2`}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors"
          >
            {isSubmitting ? "..." : buttonText}
          </button>
        </form>
        {error && (
          <p className="text-red-500 text-xs mt-1">{error}</p>
        )}
        {showSuccess && (
          <p className="text-green-600 text-xs mt-1">✓ Check your email for the download link!</p>
        )}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
          <input type="hidden" name="form-name" value="email-capture" />
          <input
            type="email"
            name="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className={`flex-1 px-4 py-2 border rounded-lg text-sm transition-colors ${
              error 
                ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20'
            } dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2`}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap"
          >
            {isSubmitting ? "Sending..." : buttonText}
          </button>
        </form>
        {error && (
          <p className="text-red-500 text-xs mt-1">{error}</p>
        )}
        {showSuccess && (
          <p className="text-green-600 text-xs mt-1">✓ Check your email for the download link!</p>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-6 border border-green-200 dark:border-green-700 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">📋</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            {description}
          </p>
          
          {showSuccess ? (
            <div className="p-4 bg-green-100 dark:bg-green-900/40 border border-green-300 dark:border-green-600 rounded-lg">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-800 dark:text-green-200 font-medium">Success!</span>
              </div>
              <p className="text-green-700 dark:text-green-300 text-sm mt-1">
                Check your email for the download link!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="email-capture" />
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className={`flex-1 px-4 py-2 border rounded-lg text-sm transition-colors ${
                    error 
                      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
                      : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/20'
                  } dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2`}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors"
                >
                  {isSubmitting ? "Sending..." : buttonText}
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </p>
              )}
            </form>
          )}
          
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            No spam, just valuable insights for your business.
          </p>
        </div>
      </div>
    </div>
  );
}
