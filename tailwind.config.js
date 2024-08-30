/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
    // => @media (min-width: Xpx) { ... }
    screens: {
      'xs': '320px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px',
    },
		extend: {}
	},

	plugins: [require('@tailwindcss/typography')]
};
