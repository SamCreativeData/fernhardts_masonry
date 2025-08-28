import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-xl border-b border-marble' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-22">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="Fernhardt's Masonry logo" 
              className="h-8 w-8 lg:h-10 lg:w-10"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <span className="font-bold text-xl lg:text-2xl text-charcoal">
              Fernhardt's Masonry
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-stone hover:text-charcoal font-medium transition-colors duration-200 text-lg"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="bg-charcoal hover:bg-stone text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              <span>Get a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-stone hover:text-charcoal"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-marble bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-stone hover:text-charcoal font-medium py-3 text-lg"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="bg-charcoal hover:bg-stone text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 mt-6 shadow-md"
              >
                <Phone className="h-4 w-4" />
                <span>Get a Quote</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;