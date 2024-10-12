/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        waveExplosion: {
          '0%': { transform: 'scale(0.5)', opacity: '1' },
          '100%': { transform: 'scale(5)', opacity: '0' },
        },
      },
      animation: {
        waveExplosion: 'waveExplosion 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
