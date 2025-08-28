/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        silver: '#c0c0c0',
        marble: '#e5e7eb',
        charcoal: '#111827',
        stone: '#374151',
      },
      fontFamily: {
        'serif': ['DM Serif Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'marble-texture': 'linear-gradient(145deg, #f8f9fa 0%, #e5e7eb 50%, #f8f9fa 100%)',
        'silver-gradient': 'linear-gradient(145deg, #d1d5db, #9ca3af)',
        'hero-overlay': 'linear-gradient(135deg, rgba(192, 192, 192, 0.1) 0%, rgba(156, 163, 175, 0.2) 100%)',
      },
    },
  },
  plugins: [],
};
