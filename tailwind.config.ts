import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enables dark mode using a class
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
};

export default config;