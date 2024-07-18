import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
    alias: {
      '$vendor': '/src/vendor',
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
