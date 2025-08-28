import React, { useState } from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Camera, ArrowLeft, ArrowRight } from 'lucide-react';

const Gallery = () => {
  // Placeholder images for additional gallery items
  const galleryImages = [
    {
      id: 1,
      title: 'Brick Repointing Project',
      before: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg',
      after: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      alt: 'Brick wall repointing before and after'
    },
    {
      id: 2,
      title: 'Stone Façade Restoration',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
      alt: 'Restored stone façade masonry work'
    },
    {
      id: 3,
      title: 'Chimney Repair',
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
      alt: 'Professional chimney masonry repair'
    },
    {
      id: 4,
      title: 'Walkway Installation',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
      alt: 'Interlocking paver walkway installation'
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
            Our Work Gallery
          </h2>
          <p className="text-xl text-stone max-w-3xl mx-auto leading-relaxed">
            See the difference our expert craftsmanship makes. Browse our portfolio of completed masonry projects.
          </p>
        </div>

        {/* Before/After Comparison Slider */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-charcoal mb-8 text-center">
            Before & After Comparison
          </h3>
          <div className="max-w-4xl mx-auto bg-marble-texture p-8 rounded-3xl shadow-lg border border-marble">
            <BeforeAfterSlider
              beforeImage="/before-example.jpg"
              afterImage="/after-example.jpg"
              beforeAlt="Masonry work before repair - damaged brick wall"
              afterAlt="Masonry work after repair - restored brick wall"
            />
            <p className="text-center text-stone mt-6 font-medium">
              Drag the slider to see the transformation
            </p>
          </div>
        </div>

        {/* Additional Gallery Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-marble hover:border-silver transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 relative overflow-hidden">
                <img
                  src={item.image || item.before}
                  alt={item.alt}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-charcoal bg-opacity-0 hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-silver opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-charcoal mb-2 text-lg">{item.title}</h4>
                <p className="text-sm text-stone">Professional masonry restoration</p>
              </div>
            </div>
          ))}
        </div>

        {/* TODO Note */}
        <div className="mt-12 text-center">
          <p className="text-stone/60 text-sm">
            TODO: Replace placeholder images with actual project photos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;