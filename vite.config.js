import fs from 'node:fs';
import path from 'node:path';
import concat from 'rollup-plugin-concat';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

let sum = Bun.CryptoHasher('md5');

let file_buffer = Bun.file('./src/vendor/js/number.js');
let txt = await file_buffer.text();
sum.update(txt);

file_buffer = Bun.file('./src/vendor/js/main.js');
txt = await file_buffer.text();
sum.update(txt);

file_buffer = Bun.file('./src/vendor/js/header.js');
txt = await file_buffer.text();
sum.update(txt);

let hex = sum.digest('hex');

export default defineConfig({
  define: {
    appInitHex: JSON.stringify(hex)
  },
	plugins: [
    {
      name: "Cleaning assets folder",
      async buildStart() {
        fs.rmSync('./static/js', { recursive: true, force: true });
        fs.mkdirSync(path.join(__dirname, 'static/js/'), { recursive: true });
      }
    },
    concat({
      groupedFiles: [
        {
          files: [
            './src/vendor/jquery/jquery.min.js',
            './src/vendor/bootstrap/js/bootstrap.bundle.min.js',
            './src/vendor/owl-carousel/owl.carousel.min.js',
            './src/vendor/nouislider/nouislider.min.js',
            './src/vendor/photoswipe/photoswipe.min.js',
            './src/vendor/photoswipe/photoswipe-ui-default.min.js',
            './src/vendor/select2/js/select2.min.js',
            './src/vendor/svg4everybody/svg4everybody.min.js',
          ],
          outputFile: './static/js/app-vendor.js',
        },
        {
          files: [
            './src/vendor/js/number.js',
            './src/vendor/js/main.js',
            './src/vendor/js/header.js',
          ],
          outputFile: `./static/js/app-init-${hex}.js`,
        },
      ],
    }),
    enhancedImages(),
    sveltekit(),
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
