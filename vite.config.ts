import concat from 'rollup-plugin-concat';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	plugins: [
    concat({
      // groupedFiles: [
      //   {
      //     files: [
      //       './src/vendor/js/jquery.js',
      //       './src/vendor/js/bootstrap.min.js',
      //       './src/vendor/js/owl.js',
      //       './src/vendor/js/appear.js',
      //       './src/vendor/js/wow.js',
      //       './src/vendor/js/jquery.easing.min.js',
      //     ],
      //     outputFile: './static/js/app-vendor.js',
      //   },
      // ],
    }),
    enhancedImages(),
    sveltekit()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '$vendor/css/variables' as *;
        `,
      },
    },
  },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
