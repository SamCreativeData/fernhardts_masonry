import React, { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-xl border border-marble">
      {/* After image (background) */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="w-full h-full object-cover"
          style={{ width: `${100 * (100 / sliderPosition)}%` }}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-silver shadow-lg z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl border-2 border-silver flex items-center justify-center">
          <div className="w-1 h-5 bg-stone rounded-full"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-6 left-6 bg-charcoal bg-opacity-80 text-white px-4 py-2 rounded-xl text-sm font-semibold">
        Before
      </div>
      <div className="absolute top-6 right-6 bg-charcoal bg-opacity-80 text-white px-4 py-2 rounded-xl text-sm font-semibold">
        After
      </div>

      {/* Range slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-72 h-3 bg-marble rounded-lg appearance-none cursor-pointer slider"
        aria-label="Before and after comparison slider"
      />

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #c0c0c0;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #c0c0c0;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default BeforeAfterSlider;