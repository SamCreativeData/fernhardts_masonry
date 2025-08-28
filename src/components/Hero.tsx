import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="pt-20 lg:pt-24 pb-12 lg:pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Expert Masonry Repair in{' '}
            <span className="text-blue-600">Vancouver, BC</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
            Brick repointing, stone façade repair, paver and step restoration. 
            Serving the Lower Mainland with custom island projects on request.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => handleScrollToSection('#contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleScrollToSection('#pricing')}
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:shadow-lg transform hover:-translate-y-1"
            >
              <span>See Pricing</span>
              <CheckCircle className="h-5 w-5" />
            </button>
          </div>

          {/* Trust indicators */}
          <div>
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <span className="font-medium">15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;