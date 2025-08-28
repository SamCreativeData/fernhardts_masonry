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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <span className="font-bold text-lg">Fernhardt's Masonry</span>
              </div>
              <p className="text-gray-300 mb-4">
                Expert masonry repair and restoration services throughout the Lower Mainland and Vancouver Island.
              </p>
              <p className="text-sm text-gray-400">
               WCB Compliant
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-300 hover:text-white transition-colors">Services</a>
                <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
                <a href="#gallery" className="block text-gray-300 hover:text-white transition-colors">Gallery</a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>Phone: <span className="text-gray-400">[Protected - Click "Reveal Phone" above]</span></p>
                <p>Email: <span className="text-gray-400">[Protected - Click "Reveal Email" above]</span></p>
                <p>Vancouver, BC V5K </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 Fernhardt's Masonry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;