import React from 'react';
import { Clock, Square, DollarSign, AlertCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fair, competitive rates with no hidden fees. All pricing includes materials and labour.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Hourly Rates */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <Clock className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hourly Rates</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Standard work</span>
                <span className="font-semibold">$40–$100/hr</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">With helper</span>
                <span className="font-semibold">$250–$300/hr</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Specialised work</span>
                <span className="font-semibold">$250–$300/hr</span>
              </div>
            </div>
          </div>

          {/* Per Square Foot */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <Square className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Per Square Foot</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Mortar repointing</span>
                <span className="font-semibold">$3–$20</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Brick veneer</span>
                <span className="font-semibold">$11–$24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Stone/masonry façade</span>
                <span className="font-semibold">$55–$65</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Small fixes</span>
                <span className="font-semibold">$10–$30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Interlocking pavers</span>
                <span className="font-semibold">$8–$20</span>
              </div>
            </div>
          </div>

          {/* Flat/Project Rates */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-blue-600 mb-4">
              <DollarSign className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Flat/Project Rates</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Minimum service call</span>
                <span className="font-semibold">$250–$400</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Spalling repair (~100 sq ft)</span>
                <span className="font-semibold">$250–$3,500</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Brick step repair</span>
                <span className="font-semibold">$300–$750/step</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Notes */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="h-6 w-6 text-amber-400 flex-shrink-0 mt-1" />
            <div className="ml-3">
              <p className="text-amber-800 font-medium mb-2">Pricing Notes</p>
              <p className="text-amber-700">
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