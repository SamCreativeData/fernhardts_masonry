import React from 'react';
import { Award, Clock, Palette, FileText } from 'lucide-react';

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
    <section id="about" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-8 leading-tight">
              About Fernhardt's Masonry
            </h2>
            
            <div className="prose prose-lg text-stone mb-10 space-y-6">
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
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50/50 border border-marble hover:bg-silver/5 transition-colors duration-200">
                  <div className="text-silver flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <span className="text-stone font-medium text-lg">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="bg-marble-texture rounded-3xl p-12 flex items-center justify-center min-h-[500px] border border-marble lg:order-first shadow-lg">
            <div className="text-center">
              <Award className="h-20 w-20 text-silver mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-stone mb-3">Company Photo</h3>
              <p className="text-stone/70">
                Professional team or work site image
              </p>
              <p className="text-sm text-stone/50 mt-3">
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