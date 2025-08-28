import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ServiceArea from './components/ServiceArea';
import Gallery from './components/Gallery';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import StructuredData from './components/StructuredData';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <StructuredData />
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <ServiceArea />
        <Gallery />
        <About />
        <FAQ />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-charcoal text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Fernhardt's Masonry logo" 
                  className="h-8 w-8"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="font-bold text-xl text-white">Fernhardt's Masonry</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Expert masonry repair and restoration services throughout the Lower Mainland and Vancouver Island.
              </p>
              <p className="text-sm text-silver font-medium">
               WCB Compliant
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Quick Links</h3>
              <div className="space-y-3">
                <a href="#services" className="block text-gray-400 hover:text-silver transition-colors duration-200">Services</a>
                <a href="#pricing" className="block text-gray-400 hover:text-silver transition-colors duration-200">Pricing</a>
                <a href="#gallery" className="block text-gray-400 hover:text-silver transition-colors duration-200">Gallery</a>
                <a href="#contact" className="block text-gray-400 hover:text-silver transition-colors duration-200">Contact</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-6 text-white text-lg">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <p>Phone: <span className="text-silver">[Protected - Click "Reveal Phone" above]</span></p>
                <p>Email: <span className="text-silver">[Protected - Click "Reveal Email" above]</span></p>
                <p>Vancouver, BC V5K</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-stone/30 pt-8 mt-12 text-center text-gray-500">
            <p>&copy; 2025 Fernhardt's Masonry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;