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
    <section id="service-area" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly serving the Lower Mainland and Vancouver Island with expert masonry services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Areas List */}
          <div className="space-y-8">
            {/* Lower Mainland */}
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-2xl font-semibold text-gray-900">Lower Mainland</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {lowerMainlandCities.map((city, index) => (
                  <div key={index} className="text-gray-600 py-1">
                    • {city}
                  </div>
                ))}
              </div>
            </div>

            {/* Vancouver Island & Gulf Islands */}
            <div>
              <div className="flex items-center mb-4">
                <Anchor className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-2xl font-semibold text-gray-900">
                  Vancouver Island & Gulf Islands
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Custom projects with travel and overnight accommodation as needed:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {islandLocations.map((location, index) => (
                  <div key={index} className="text-gray-600 py-1">
                    • {location}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] border-2 border-dashed border-gray-300">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Service Area Map</h3>
              <p className="text-gray-500">
                Interactive map showing our service coverage area
              </p>
              <p className="text-sm text-gray-400 mt-2">
                TODO: Replace with interactive map component
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;