import scrollbar from 'tailwind-scrollbar';
import scrollbarHide from 'tailwind-scrollbar-hide';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
  fontFamily: {
    magical: ['Cinzel', 'serif'],
  }
},
  },
  plugins: [scrollbarHide, scrollbar],
};
