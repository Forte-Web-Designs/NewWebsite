import React, { useState, useEffect } from 'react';
import SimpleAnimatedInput from '@/components/animations/SimpleAnimatedInput';
import DarkButton from '@/components/DarkButton';
import { CONTACT_INFO } from '@/constants/contact';

interface GenericContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: string;
  title?: string;
  subtitle?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export default function GenericContactModal({ 
  isOpen, 
  onClose, 
  trigger = 'mobile-cta',
  title = "Get Started Today",
  subtitle = "Let's discuss your project and how we can help grow your business"
}: GenericContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Website Design',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  // Close modal when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if ((e.target as HTMLElement)?.classList?.contains('modal-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setShowSuccess(false);
      setSubmitError(null);
      setFieldErrors({});
    }
  }, [isOpen]);

  // Form validation
  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      case 'phone':
        if (value && value.trim()) {
          const cleanPhone = value.replace(/\D/g, '');
          if (cleanPhone.length < 10) return 'Please enter a valid phone number';
        }
        return '';
      case 'service':
        if (!value.trim()) return 'Please select a service';
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    // Format phone number as user types
    let formattedValue = value;
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      if (cleaned.length <= 10) {
        if (cleaned.length >= 6) {
          formattedValue = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
        } else if (cleaned.length >= 3) {
          formattedValue = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        } else {
          formattedValue = cleaned;
        }
      } else {
        formattedValue = value; // Keep original if too long
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue,
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Validate required fields
    const errors: Record<string, string> = {};
    const requiredFields = ['name', 'email', 'service'];
    
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) errors[field] = error;
    });

    // Validate optional phone if provided
    if (formData.phone.trim()) {
      const phoneError = validateField('phone', formData.phone);
      if (phoneError) errors.phone = phoneError;
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Create form data for Netlify submission
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      
      // Add form name and trigger source for Netlify
      formDataToSend.append('form-name', 'contact');
      formDataToSend.append('trigger', trigger);
      
      const response = await fetch("/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
        },
        body: new URLSearchParams(formDataToSend as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: 'Website Design',
          message: ''
        });
        setFieldErrors({});
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitError(`Sorry, there was an error sending your message. Please try again or contact us directly at ${CONTACT_INFO.email}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-xs md:max-w-sm max-h-[85vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="relative p-2.5 md:p-3 pb-1.5 md:pb-2 border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="absolute top-1.5 right-1.5 md:top-2 md:right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full p-1.5 z-10"
            aria-label="Close modal"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <h2 className="text-sm md:text-base font-bold text-gray-900 dark:text-white pr-6">
            {title}
          </h2>
          <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
            {subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="p-2.5 md:p-3">
          {!showSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-2.5 md:space-y-3">
              {/* Hidden form name for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Name Field */}
              <div>
                <SimpleAnimatedInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                  className="text-sm"
                />
                {fieldErrors.name && (
                  <p className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <SimpleAnimatedInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  className="text-sm"
                />
                {fieldErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <SimpleAnimatedInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number (Optional)"
                  className="text-sm"
                />
                {fieldErrors.phone && (
                  <p className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>
                )}
              </div>

              {/* Company Field */}
              <div>
                <SimpleAnimatedInput
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company Name (Optional)"
                  className="text-sm"
                />
              </div>

              {/* Service Field */}
              <div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  required
                >
                  <option value="Custom Web Design">Custom Web Design</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="Complete Business System">Complete Business System</option>
                  <option value="Forte Care™ (Maintenance & Support)">Forte Care™ (Maintenance & Support)</option>
                  <option value="Free Growth Snapshot">Free Growth Snapshot</option>
                  <option value="Not Sure / Need Consultation">Not Sure / Need Consultation</option>
                </select>
                {fieldErrors.service && (
                  <p className="text-red-500 text-xs mt-1">{fieldErrors.service}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-1">
                <DarkButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 text-sm font-semibold"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </DarkButton>
              </div>

              {/* Error Message */}
              {submitError && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 mt-3">
                  <p className="text-red-700 dark:text-red-300 text-xs">{submitError}</p>
                </div>
              )}
            </form>
          ) : (
            // Success Message
            <div className="text-center py-4" data-success-message>
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Message Sent!</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Thanks for reaching out! We'll get back to you within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
