import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import ObfuscatedContact from './ObfuscatedContact';
import SimpleContactForm from './SimpleContactForm';

const Contact = () => {
  // Obfuscated contact values - Base64 encoded and chunked
  // Phone: (627) 513-6173 -> Base64 -> chunked
  const phoneB64 = "KDYyNykgNTEzLTYxNzM=";
  // Email: fernhardts.masonry@gmail.com -> Base64 -> chunked  
  const emailB64 = "ZmVybmhhcmR0cy5tYXNv.bnJ5QGdtYWlsLmNvbQ==";

  return (
    <section id="contact" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Free Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to restore your masonry? Contact us today for a free consultation and detailed estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <SimpleContactForm />

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900 flex items-center gap-2">
                    <Phone className="h-5 w-5 text-blue-600" />
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
                  <h4 className="font-medium text-gray-900 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    Email
                  </h4>
                  <ObfuscatedContact
                    label="Email"
                    type="email"
                    b64={emailB64}
                    className="ml-7"
                  />
                </div>

                <div className="flex items-start space-x-4 pt-4 border-t border-gray-200">
                  <Clock className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: Closed</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 pt-4 border-t border-gray-200">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">Office Address</p>
                    <p className="text-gray-600">Vancouver, BC</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Anti-scraping notice */}
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Privacy Protection:</strong> Our contact information is protected against automated scraping. 
                Click "Reveal\" buttons above to view our phone and email, or use the secure contact form.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-4">
                Prefer forms? Use the secure contact form above—protected with honeypot and time-trap anti-spam measures.
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[250px] border-2 border-dashed border-gray-300">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-gray-600 mb-2">Location Map</h4>
                <p className="text-gray-500 text-sm">
                  Interactive map showing our office location
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  TODO: Replace with Google Maps embed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;