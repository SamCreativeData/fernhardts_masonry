import React from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import ObfuscatedContact from './ObfuscatedContact';
import SimpleContactForm from './SimpleContactForm';

// Feature flag (Vite env var)
const SHOW_LIVE_FORM = import.meta.env.VITE_SHOW_LIVE_FORM === 'true';

const Contact = () => {
  // Obfuscated contact values - Base64 encoded and chunked
  const phoneB64 = "KDY3MikgNTEzLTYxNzM="; // (672) 513-6173
  const emailB64 = "ZmVybmhhcmR0cy5tYXNv.bnJ5QGdtYWlsLmNvbQ=="; // fernhardts.masonry@gmail.com

  return (
    <section id="contact" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-stone max-w-3xl mx-auto leading-relaxed">
            Ready to restore your masonry? Contact us today for a free consultation and detailed estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT: Live form or Preview (based on feature flag) */}
          {SHOW_LIVE_FORM ? (
            <SimpleContactForm />
          ) : (
            <div className="rounded-3xl p-8 border border-marble shadow-card bg-white">
              <div className="mb-6">
                <h3 className="text-3xl font-semibold text-charcoal">Secure Contact Form</h3>
                <p className="text-stone mt-2">
                  The form is being finalized. In the meantime, please call or email us using the contact details on the right.
                </p>
              </div>

              <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-900">
                Form coming soon — thanks for your patience!
              </div>

              {/* Disabled preview fields */}
              <form className="space-y-5" aria-disabled="true">
                <fieldset disabled className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal">Full Name *</label>
                    <input
                      className="mt-1 w-full rounded-md border px-3 py-2 bg-gray-100 text-gray-500"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal">Email Address *</label>
                    <input
                      type="email"
                      className="mt-1 w-full rounded-md border px-3 py-2 bg-gray-100 text-gray-500"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal">Phone (optional)</label>
                    <input
                      className="mt-1 w-full rounded-md border px-3 py-2 bg-gray-100 text-gray-500"
                      placeholder="(672) 513-6173"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal">Project Details *</label>
                    <textarea
                      rows={5}
                      className="mt-1 w-full rounded-md border px-3 py-2 bg-gray-100 text-gray-500"
                      placeholder="Briefly describe your project…"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full bg-gray-200 text-gray-500 font-semibold rounded-md px-4 py-3 flex items-center justify-center gap-3 cursor-not-allowed"
                  >
                    <Send className="h-5 w-5" />
                    Send (Coming Soon)
                  </button>
                </fieldset>
              </form>
            </div>
          )}

          {/* RIGHT: Contact info + map */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-charcoal mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="space-y-3">
                  <h4 className="font-semibold text-charcoal flex items-center gap-3 text-lg">
                    <Phone className="h-6 w-6 text-silver" />
                    Phone
                  </h4>
                  <ObfuscatedContact
                    label="Phone"
                    type="phone"
                    b64={phoneB64}
                    className="ml-7"
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-charcoal flex items-center gap-3 text-lg">
                    <Mail className="h-6 w-6 text-silver" />
                    Email
                  </h4>
                  <ObfuscatedContact
                    label="Email"
                    type="email"
                    b64={emailB64}
                    className="ml-7"
                  />
                </div>

                <div className="flex items-start space-x-4 pt-6 border-t border-marble">
                  <Clock className="h-6 w-6 text-silver mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal text-lg">Business Hours</p>
                    <p className="text-stone">Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p className="text-stone">Saturday: Closed</p>
                    <p className="text-stone">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pt-6 border-t border-marble">
                  <MapPin className="h-6 w-6 text-silver mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-charcoal text-lg">Office Address</p>
                    <p className="text-stone">Vancouver, BC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Anti-scraping notice */}
            <div className="mt-8 p-6 bg-stone/5 rounded-xl border border-marble">
              <p className="text-sm text-charcoal">
                <strong>Privacy Protection:</strong> Our contact information is protected against automated scraping.
                Click &quot;Reveal&quot; buttons above to view our phone and email, or use the contact details provided.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-stone/70 mb-4">
                Prefer direct contact? Call or email using the details above.
              </p>
            </div>

            {/* Location / Map image */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-marble max-w-sm">
              <h4 className="font-semibold text-charcoal flex items-center gap-3 text-lg mb-3">
                <MapPin className="h-6 w-6 text-silver" />
                Located in Vancouver
              </h4>
              <img
                src="/locationmap.jpg"
                alt="Fernhardt's Masonry Service Area"
                className="w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
