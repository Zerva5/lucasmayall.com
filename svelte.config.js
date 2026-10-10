import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Fully prerendered static site: `npm run build` writes everything to ./build.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// Emit build/404.html from +error.svelte. Without this a prerendered
			// site has no error page, and hosts like Cloudflare Pages fall back to
			// their own generic 404.
			fallback: "404.html",
		}),
	},
};

export default config;
