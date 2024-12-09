/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            'text-shadow': '0 0 10px rgba(147,51,234,0.5), 0 0 20px rgba(147,51,234,0.3), 0 0 30px rgba(147,51,234,0.2)',
          },
          '50%': {
            'text-shadow': '0 0 20px rgba(147,51,234,0.8), 0 0 30px rgba(147,51,234,0.5), 0 0 40px rgba(147,51,234,0.3)',
          },
        },
      },
    },
  },
  plugins: [],
};