import adapter from '@bun-community/sveltekit-adapter-bun';
import cfAdapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			dynamic_origin: true,
			adapter: cfAdapter({
				routes: {
					include: ['/*'],
					exclude: ['<all>']
				}
			})
		})
	}
};

export default config;
