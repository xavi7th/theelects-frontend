/** @type {import('tailwindcss').Config} */
export default {
  safelist: ["dark"],
  darkMode: ["class"],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      // => @media (min-width: Xpx) { ... }
      screens: {
        xs: '320px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
      },
    },
    extend: {}
  },
  plugins: [
    require( '@tailwindcss/forms' ),
    require( '@tailwindcss/typography' ),
  ]
};
