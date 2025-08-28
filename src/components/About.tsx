import React from 'react';
import { Shield, Clock, Palette, FileText } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      text: 'Moisture management for coastal climates'
    },
    {
      icon: <Palette className="h-6 w-6" />,
      text: 'Historic-sensitive mortar/colour matching'
    },
    {
      icon: <FileText className="h-6 w-6" />,
      text: 'Clear estimates with photos/scope notes'
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Fernhardt's Masonry
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                With over 25 years of experience serving the Lower Mainland and Vancouver Island, 
                Fernhardt's Masonry is built on a foundation of exceptional craftsmanship, 
                maintaining tidy work sites, and adhering to reliable schedules. We specialize 
                in moisture management solutions specifically designed for coastal BC's unique climate challenges.
              </p>
              <p>
                Our commitment to quality extends beyond the work itself – we ensure every project 
                is completed with attention to detail and respect for your property, leaving you 
                with masonry that stands the test of time.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-blue-600 flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px] border-2 border-dashed border-gray-300 lg:order-first">
            <div className="text-center">
              <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Company Photo</h3>
              <p className="text-gray-500">
                Professional team or work site image
              </p>
              <p className="text-sm text-gray-400 mt-2">
                TODO: Replace with actual company photo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;