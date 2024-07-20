import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { importAssets } from 'svelte-preprocess-import-assets'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
    importAssets({
      // Include URLs with specific extensions only
      urlFilter: (url) => /(src\/lib\/)/.test(url),
      // urlFilter: (url) => /\.(png|jpg|gif|webp)$/.test(url),
    }),
    vitePreprocess()
  ],
   /** @type {import('@sveltejs/vite-plugin-svelte').SvelteConfig['onwarn']} */
  onwarn: (warning, handler) => {
    const { code, frame } = warning;

    if (
      code == "anchor-is-valid" ||
      code == "a11y-invalid-attribute" ||
      code == "a11y-media-has-caption" ||
      code == "a11y-no-static-element-interactions" ||
      code == "a11y-missing-attribute" ||
      code == "css-unused-selector" ||
      code == "a11y-missing-content" ||
      // code.startsWith('a11y-') ||
      code == 'missing-declaration' && frame.includes('route')
    ) { return }

    console.log( '\x1b[41m%s\x1b[0m', code);

    handler(warning);
  },
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
    alias: {
      '$vendor': './src/vendor',
      '$stores': './src/stores',
    },
    // prerender: {
    //   //@see https://kit.svelte.dev/docs/configuration#prerender
    //   handleMissingId: ({ path, referrers, message, id }) => {

    //     if (id === '/') return;

    //     console.log({ path, referrers, message, id });

		// 		throw new Error(message);
		// 	},

    //   //@see https://kit.svelte.dev/docs/configuration#prerender
    //   handleHttpError: ({ referenceType, path, referrer, message, status }) => {

    //     console.log({ referenceType, path, referrer, message, status});

    //     throw new Error(message);
		// 	}
    // }
	}
};

export default config;
