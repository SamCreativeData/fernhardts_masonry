import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What areas do you service?',
      answer: 'We serve the entire Lower Mainland including Vancouver, Burnaby, Richmond, Surrey, and surrounding cities. We also take on custom projects throughout Vancouver Island and Gulf Islands including Victoria, Nanaimo, Salt Spring Island, and other island communities.'
    },
    {
      question: 'What is your minimum call-out fee?',
      answer: 'Our minimum service call fee ranges from $250–$400 depending on location and project scope. For Vancouver Island and Gulf Island projects, additional travel and overnight accommodation costs may apply, which will be discussed upfront.'
    },
    {
      question: 'How do you structure your pricing?',
      answer: 'We offer three pricing models: hourly rates ($40–$300/hr depending on complexity), per square foot pricing ($3–$65/sq ft based on work type), and flat project rates. Add 20–40% for difficult access, scaffolding requirements, or special material matching needs.'
    },
    {
      question: 'Do you provide free estimates?',
      answer: 'Virtual estimates using photos and project details are provided free of charge. On-site diagnostic visits may be billed at our standard rate, but this cost will be credited towards your project if you proceed with the work.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-stone leading-relaxed">
            Get answers to common questions about our masonry services and pricing.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg border border-marble hover:border-silver overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-silver/5 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-xl font-semibold text-charcoal pr-4">
                  {faq.question}
                </h3>
                <div className="text-silver flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-marble pt-6">
                    <p className="text-stone leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;