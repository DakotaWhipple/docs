// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://whipple.dev',
	integrations: [
		starlight({
			title: 'whipple.dev',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/DakotaWhipple/docs' }],
			sidebar: [
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
