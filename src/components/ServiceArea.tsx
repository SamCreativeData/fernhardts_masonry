import React from 'react';
import { MapPin, Anchor } from 'lucide-react';

const ServiceArea = () => {
  const lowerMainlandCities = [
    'Vancouver', 'Burnaby', 'North Vancouver', 'West Vancouver',
    'Richmond', 'Surrey', 'Delta', 'New Westminster',
    'Coquitlam', 'Port Coquitlam', 'Port Moody', 'Langley',
    'Maple Ridge', 'Pitt Meadows'
  ];

  const islandLocations = [
    'Victoria', 'Nanaimo', 'Parksville', 'Salt Spring Island',
    'Bowen Island', 'Galiano Island'
  ];

  return (
    <section id="service-area" className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            Service Areas
          </h2>
          <p className="text-xl text-stone max-w-3xl mx-auto leading-relaxed">
            Proudly serving the Lower Mainland and Vancouver Island with expert masonry services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Service Areas List */}
          <div className="space-y-10">
            {/* Lower Mainland */}
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-7 w-7 text-silver mr-3" />
                <h3 className="text-3xl font-semibold text-charcoal">Lower Mainland</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {lowerMainlandCities.map((city, index) => (
                  <div key={index} className="text-stone py-2 font-medium">
                    • {city}
                  </div>
                ))}
              </div>
            </div>

            {/* Vancouver Island & Gulf Islands */}
            <div>
              <div className="flex items-center mb-4">
                <Anchor className="h-7 w-7 text-silver mr-3" />
                <h3 className="text-3xl font-semibold text-charcoal">
                  Vancouver Island & Gulf Islands
                </h3>
              </div>
              <p className="text-stone mb-6 text-lg">
                Custom projects with travel and overnight accommodation as needed:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {islandLocations.map((location, index) => (
                  <div key={index} className="text-stone py-2 font-medium">
                    • {location}
                  </div>
                ))}
              </div>
            </div>
          </div>

         {/* Static Map Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-marble min-h-[500px]">
          <img
            src="/public/service area.png" // place your static image in /public/service-area-map.jpg
            alt="Fernhardt's Masonry Service Area"
            className="w-full h-full object-cover"
            loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
