import React from 'react';
import { Clock, Square, Calculator, AlertTriangle } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            Transparent Pricing
          </h2>
          <p className="text-xl text-stone max-w-3xl mx-auto leading-relaxed">
            Fair, competitive rates with no hidden fees. All pricing includes materials and labour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Hourly Rates */}
          <div className="bg-marble-texture rounded-3xl p-10 shadow-lg border border-marble hover:shadow-xl transition-all duration-300">
            <div className="text-silver mb-6">
              <Clock className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-6">Hourly Rates</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-stone">Standard work</span>
                <span className="font-semibold text-charcoal">$40–$100/hr</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone">With helper</span>
                <span className="font-semibold text-charcoal">$250–$300/hr</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone">Specialised work</span>
                <span className="font-semibold text-charcoal">$250–$300/hr</span>
              </div>
            </div>
          </div>

          {/* Per Square Foot */}
          <div className="bg-marble-texture rounded-3xl p-10 shadow-lg border border-marble hover:shadow-xl transition-all duration-300">
            <div className="text-silver mb-6">
              <Square className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-6">Per Square Foot</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-stone">Mortar repointing</span>
                <span className="font-semibold text-charcoal">$3–$20</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone">Brick veneer</span>
                <span className="font-semibold text-charcoal">$11–$24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone">Stone/masonry façade</span>
                <span className="font-semibold text-charcoal">$55–$65</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone">Small fixes</span>
                <span className="font-semibold text-charcoal">$10–$30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone">Interlocking pavers</span>
                <span className="font-semibold text-charcoal">$8–$20</span>
              </div>
            </div>
          </div>

          {/* Flat/Project Rates */}
          <div className="bg-marble-texture rounded-3xl p-10 shadow-lg border border-marble hover:shadow-xl transition-all duration-300">
            <div className="text-silver mb-6">
              <Calculator className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-6">Flat/Project Rates</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-stone">Minimum service call</span>
                <span className="font-semibold text-charcoal">$250–$400</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone">Spalling repair (~100 sq ft)</span>
                <span className="font-semibold text-charcoal">$250–$3,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone">Brick step repair</span>
                <span className="font-semibold text-charcoal">$300–$750/step</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Notes */}
        <div className="bg-stone/5 border-l-4 border-silver p-8 rounded-xl">
          <div className="flex items-start">
            <AlertTriangle className="h-6 w-6 text-silver flex-shrink-0 mt-1" />
            <div className="ml-3">
              <p className="text-charcoal font-semibold mb-2">Pricing Notes</p>
              <p className="text-stone">
                Add 20–40% for difficult access, scaffolding, or special material matching. 
                Canadian repointing average: ~$1,300 (range $450–$4,900).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;