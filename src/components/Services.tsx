import React from 'react';
import { Hammer, Home, Wrench, Footprints, Flame, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Hammer className="h-8 w-8" />,
      title: 'Brick Repointing',
      description: 'Professional mortar removal and replacement to restore structural integrity and appearance.',
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Veneer & Façade Repair',
      description: 'Stone and brick façade restoration with colour matching and moisture management.',
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: 'Spalling & Crack Repair',
      description: 'Expert repair of damaged masonry surfaces and structural crack remediation.',
    },
    {
      icon: <Footprints className="h-8 w-8" />,
      title: 'Steps & Walkways',
      description: 'Restoration and installation of masonry steps, walkways, and paver systems.',
    },
    {
      icon: <Flame className="h-8 w-8" />,
      title: 'Chimneys',
      description: 'Complete chimney repair, rebuilding, and maintenance for safety and efficiency.',
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Custom & Island Projects',
      description: 'Specialized projects throughout Vancouver Island and Gulf Islands with custom solutions.',
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            Professional Masonry Services
          </h2>
          <p className="text-xl text-stone max-w-3xl mx-auto leading-relaxed">
            Comprehensive masonry repair and restoration services for residential and commercial properties 
            throughout the Lower Mainland and Vancouver Island.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-marble rounded-2xl p-8 shadow-md hover:shadow-xl hover:border-silver transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-silver mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">
                {service.title}
              </h3>
              <p className="text-stone leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;