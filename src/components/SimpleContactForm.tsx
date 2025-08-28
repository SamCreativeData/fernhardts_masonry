import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Shield } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  // Anti-spam fields
  company: string; // honeypot
  timestamp: string; // time trap
}

export default function SimpleContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '', // honeypot - should remain empty
    timestamp: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [startTime] = useState(Date.now());

  useEffect(() => {
    // Set timestamp when component mounts
    setFormData(prev => ({
      ...prev,
      timestamp: Date.now().toString()
    }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): string | null => {
    // Check honeypot
    if (formData.company.trim() !== '') {
      return 'Spam detected';
    }

    // Check time trap (minimum 5 seconds)
    const timeElapsed = Date.now() - startTime;
    if (timeElapsed < 5000) {
      return 'Form submitted too quickly';
    }

    // Basic validation
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!formData.message.trim()) return 'Message is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return 'Please enter a valid email address';
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      console.error('Validation failed:', validationError);
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     name: formData.name,
      //     email: formData.email,
      //     phone: formData.phone,
      //     message: formData.message,
      //     timestamp: formData.timestamp
      //   }),
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        company: '',
        timestamp: Date.now().toString()
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-marble-texture rounded-3xl p-10 shadow-lg border border-marble">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="h-6 w-6 text-silver" />
        <h3 className="text-3xl font-semibold text-charcoal">
          Secure Contact Form
        </h3>
      </div>
      
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-stone/5 border border-silver rounded-xl p-6 mb-6"
        >
          <p className="text-charcoal font-semibold">
            Thank you! We'll contact you within 24 hours to discuss your project.
          </p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-stone/5 border border-stone rounded-xl p-6 mb-6"
        >
          <p className="text-charcoal font-semibold">
            There was an error submitting your form. Please try again.
          </p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          autoComplete="off"
          tabIndex={-1}
          className="absolute left-[-9999px] opacity-0"
          aria-hidden="true"
        />
        
        {/* Hidden timestamp field */}
        <input
          type="hidden"
          name="timestamp"
          value={formData.timestamp}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-3">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-marble rounded-xl focus:ring-2 focus:ring-silver focus:border-silver transition-all duration-200 bg-white"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-3">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-marble rounded-xl focus:ring-2 focus:ring-silver focus:border-silver transition-all duration-200 bg-white"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-3">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-marble rounded-xl focus:ring-2 focus:ring-silver focus:border-silver transition-all duration-200 bg-white"
            placeholder="(604) 555-0123"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-3">
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-marble rounded-xl focus:ring-2 focus:ring-silver focus:border-silver transition-all duration-200 bg-white resize-none"
            placeholder="Tell us about your masonry project, including any specific issues or requirements..."
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-charcoal hover:bg-stone disabled:bg-stone/50 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Send Secure Message</span>
            </>
          )}
        </motion.button>
      </form>
      
      <p className="text-sm text-stone/70 mt-6">
        Protected with honeypot and time-trap anti-spam measures.
      </p>
    </div>
  );
}