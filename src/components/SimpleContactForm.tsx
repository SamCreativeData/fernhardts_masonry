import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Shield } from 'lucide-react';

type Status = 'idle' | 'success' | 'error' | 'dev';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  // Anti-spam
  company: string;   // honeypot
  timestamp: string; // time trap
}

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');
}

// We’ll only try to submit when actually deployed (Bolt preview can't process forms)
const IS_NETLIFY =
  typeof window !== 'undefined' &&
  (window.location.hostname.endsWith('.netlify.app') || import.meta.env.PROD);

export default function SimpleContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '',    // honeypot
    timestamp: '',  // set on mount
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<Status>('idle');
  const [startTime] = useState(Date.now());

  useEffect(() => {
    setFormData(prev => ({ ...prev, timestamp: Date.now().toString() }));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): string | null => {
    // Honeypot: must remain empty
    if (formData.company.trim() !== '') return 'Spam detected';

    // Time trap: at least 5 seconds on page
    const timeElapsed = Date.now() - startTime;
    if (timeElapsed < 5000) return 'Form submitted too quickly';

    // Basic checks
    if (!formData.name || !formData.email || !formData.message) return 'Missing required fields';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateForm();
    if (err) { setSubmitStatus('error'); return; }

    // In Bolt preview, show a helpful message instead of failing
    if (!IS_NETLIFY) { setSubmitStatus('dev'); return; }

    setIsSubmitting(true);
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact', // MUST match index.html `name`
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          'bot-field': formData.company,
          timestamp: formData.timestamp,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', company: '', timestamp: Date.now().toString() });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-stone/30 shadow-card">
      <div className="flex items-center gap-3 mb-6">
        <Shield className="h-6 w-6 text-charcoal" />
        <h3 className="text-2xl font-semibold text-charcoal">Secure Contact Form</h3>
      </div>

      {submitStatus === 'success' && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-300 rounded-xl p-4 mb-6 text-green-800">
          Thanks! Your message has been sent.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="bg-rose-50 border border-rose-300 rounded-xl p-4 mb-6 text-rose-800">
          There was an error submitting your form. Please try again.
        </motion.div>
      )}

      {submitStatus === 'dev' && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 border border-amber-300 rounded-xl p-4 mb-6 text-amber-900">
          You’re viewing a preview (not Netlify). Deploy to Netlify to submit this form.
        </motion.div>
      )}

      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Required hidden field so Netlify associates this submission with the registered name */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Honeypot - must stay invisible */}
        <input
          type="text" name="company" value={formData.company} onChange={handleInputChange}
          autoComplete="off" tabIndex={-1} className="absolute left-[-9999px] opacity-0" aria-hidden="true"
        />

        {/* Hidden timestamp field */}
        <input type="hidden" name="timestamp" value={formData.timestamp} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-charcoal">Full Name *</label>
            <input
              type="text" name="name" value={formData.name} onChange={handleInputChange} required
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal">Email Address *</label>
            <input
              type="email" name="email" value={formData.email} onChange={handleInputChange} required
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal">Phone (optional)</label>
          <input
            type="text" name="phone" value={formData.phone} onChange={handleInputChange}
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal">Project Details *</label>
          <textarea
            name="message" rows={5} value={formData.message} onChange={handleInputChange} required
            className="mt-1 w-full rounded-md border px-3 py-2"
          />
        </div>

        <motion.button
          type="submit" disabled={isSubmitting}
          className="w-full bg-charcoal hover:bg-stone text-white font-semibold rounded-md px-4 py-3 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending…</span>
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
