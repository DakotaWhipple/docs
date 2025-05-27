// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// site: 'https://whipple.dev',
	site: 'http://localhost:4321',
	base: '',
	integrations: [
		starlight({
			title: 'whipple.dev',
			logo: {
				light: './src/assets/logo.svg',
				dark: './src/assets/logo-dark.svg',
				alt: 'Whipple Logo',
				// height: 32 // adjust as needed
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DakotaWhipple/docs' }],
			sidebar: [
				{
					label: 'reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
