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
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Masonry Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive masonry repair and restoration services for residential and commercial properties 
            throughout the Lower Mainland and Vancouver Island.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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