import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'import.meta.env.VITE_LAST_UPDATE': JSON.stringify(new Date().toLocaleDateString('en-US', {
			month: 'long',  // Full month name
			day: 'numeric', // Day of the month
			year: 'numeric' // Full year
		}))
	}
});
