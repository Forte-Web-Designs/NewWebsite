"use client";

import { useState } from 'react';
import DarkButton from '@/components/DarkButton';

interface GrowthSnapshotFormProps {
  onSubmit: (formData: any) => void;
}

export default function GrowthSnapshotForm({ onSubmit }: GrowthSnapshotFormProps) {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    websiteUrl: '',
    cityServiceArea: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.businessName || !formData.email) {
      alert('Please fill in at least business name and email.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit to API
      const response = await fetch('/api/growth-snapshot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // Call the parent callback
        await onSubmit(formData);
      } else {
        alert(result.message || 'There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        {/* Business Name */}
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Business Name *
          </label>
          <input
            type="text"
            id="businessName"
            name="businessName"
            required
            value={formData.businessName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="Your Business Name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Website URL */}
        <div>
          <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Website URL
          </label>
          <input
            type="url"
            id="websiteUrl"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            placeholder="https://yourbusiness.com"
          />
        </div>
      </div>

      {/* City/Service Area */}
      <div>
        <label htmlFor="cityServiceArea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          City/Service Area
        </label>
        <input
          type="text"
          id="cityServiceArea"
          name="cityServiceArea"
          value={formData.cityServiceArea}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          placeholder="Dallas, TX or DFW Metro"
        />
      </div>

      {/* Notes */}
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Notes (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-vertical"
          placeholder="Tell us about your biggest growth challenge or what you'd like us to focus on..."
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <DarkButton
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <span className="animate-spin">⏳</span>
              Preparing Your Snapshot...
            </>
          ) : (
            'Get my Free Growth Snapshot'
          )}
        </DarkButton>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
        We'll only use your info to prepare your snapshot. No spam, no sales calls unless you ask.
      </p>
    </form>
  );
}
