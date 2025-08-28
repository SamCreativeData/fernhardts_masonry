import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const Hero = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative pt-20 lg:pt-24 pb-16 lg:pb-20 min-h-screen flex items-center">
      {/* Hero background with marble texture */}
      <div className="absolute inset-0 bg-marble-texture"></div>
      <div className="absolute inset-0 bg-hero-overlay"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-8 leading-tight tracking-tight">
            Expert Masonry Repair in{' '}
            <span className="bg-silver-gradient bg-clip-text text-transparent">Vancouver, BC</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-stone mb-12 leading-relaxed font-light">
            Brick repointing, stone façade repair, paver and step restoration. 
            Serving the Lower Mainland with custom island projects on request.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => handleScrollToSection('#contact')}
              className="bg-charcoal hover:bg-stone text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleScrollToSection('#pricing')}
              className="border-2 border-silver hover:border-stone text-stone hover:text-charcoal hover:bg-silver/10 px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:shadow-lg transform hover:-translate-y-1"
            >
              <span>See Pricing</span>
              <Shield className="h-5 w-5" />
            </button>
          </div>

          {/* Trust indicators */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-marble">
            <div className="flex items-center justify-center space-x-4 text-stone">
              <Shield className="h-6 w-6 text-silver flex-shrink-0" />
              <span className="font-semibold text-lg">25+ Years Experience</span>
              <div className="w-1 h-6 bg-marble"></div>
              <span className="font-medium">WCB Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;