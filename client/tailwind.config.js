/** @type {import('tailwindcss').Config} */

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss(),
    autoprefixer,
  ],
}

