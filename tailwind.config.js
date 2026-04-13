/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: [
    {
      pattern: /text-(xs|sm|base|lg|xl)/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
