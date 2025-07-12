// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const sidebar = [
	{
		label: 'Getting Started',
		collapsed: true,
		autogenerate: { directory: 'getting-started' },
	},
	{
		label: 'Guides',
		collapsed: true,
    autogenerate: { directory: 'guides', collapsed: true },
	},
  {
    label: 'References',
    collapsed: true,
    autogenerate: { directory: 'references', collapsed: true },
  },
];

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Kameo',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kameojs/kameo' }],
			sidebar,
			components: {
				Hero: './src/components/overrides/Hero.astro',
				ThemeSelect: './src/components/overrides/ThemeSelect.astro',
				ThemeProvider: './src/components/overrides/ThemeProvider.astro',
			},
			customCss: [
				'./src/styles/main.css',
			],
		}),
	],
});
