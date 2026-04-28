// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// dappco.re — docs for the dappcore Go ecosystem.
//
// Static site, served at https://dappco.re/. Existing per-package go-get
// redirect HTML lives in `public/<pkg>/index.html` and is served untouched;
// Starlight content under `src/content/docs/` overrides any matching path
// once written. Migration is one package at a time.
export default defineConfig({
	site: 'https://dappco.re',
	integrations: [
		starlight({
			title: 'dappco.re',
			description: 'Zero-dependency Go primitives for the dappcore ecosystem.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/dappcore/go' },
			],
			customCss: ['./src/styles/styles.css'],
			head: [
				// Default go-import / go-source for the umbrella module. Per-package
				// MDX pages override these in their own `head` frontmatter.
				{
					tag: 'meta',
					attrs: {
						name: 'go-import',
						content: 'dappco.re/go git https://github.com/dappcore/go.git',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'go-source',
						content: 'dappco.re/go https://github.com/dappcore/go https://github.com/dappcore/go/tree/main{/dir} https://github.com/dappcore/go/blob/main{/dir}/{file}#L{line}',
					},
				},
			],
			sidebar: [
				{
					label: 'core/go',
					items: [
						{ label: 'Overview', slug: 'go' },
					],
				},
			],
		}),
	],
});
