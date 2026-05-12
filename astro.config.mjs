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
			components: {
				Footer: './src/components/Footer.astro',
			},
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
						{ label: 'Result', slug: 'go/result' },
						{ label: 'Options', slug: 'go/options' },
						{ label: 'Actions', slug: 'go/action' },
						{ label: 'Errors', slug: 'go/error' },
					],
				},
				{
					// Recently fleshed-out — these have real content + examples
					// today. Promoted to the top of the package list so demos
					// can jump straight in without hunting through stubs.
					label: 'Packages — content',
					items: [
						{ label: 'store', slug: 'go/store' },
						{ label: 'io', slug: 'go/io' },
						{ label: 'process', slug: 'go/process' },
						{ label: 'webview', slug: 'go/webview' },
						{ label: 'forge', slug: 'go/forge' },
						{ label: 'agent', slug: 'go/agent' },
						{ label: 'mcp', slug: 'go/mcp' },
						{ label: 'miner', slug: 'go/miner' },
						{ label: 'pool', slug: 'go/pool' },
						{ label: 'proxy', slug: 'go/proxy' },
						{ label: 'stream', slug: 'go/stream' },
						{ label: 'tenant', slug: 'go/tenant' },
					],
				},
				{
					// Stub pages — `go get` resolves them, human-facing content
					// fills in as each package converges. Listed so the full
					// ecosystem scope is visible in the nav.
					label: 'Packages — index',
					collapsed: true,
					items: [
						{ label: 'ai', slug: 'go/ai' },
						{ label: 'ansible', slug: 'go/ansible' },
						{ label: 'api', slug: 'go/api' },
						{ label: 'build', slug: 'go/build' },
						{ label: 'cgo', slug: 'go/cgo' },
						{ label: 'cli', slug: 'go/cli' },
						{ label: 'config', slug: 'go/config' },
						{ label: 'container', slug: 'go/container' },
						{ label: 'crypt', slug: 'go/crypt' },
						{ label: 'devops', slug: 'go/devops' },
						{ label: 'dns', slug: 'go/dns' },
						{ label: 'git', slug: 'go/git' },
						{ label: 'gui', slug: 'go/gui' },
						{ label: 'html', slug: 'go/html' },
						{ label: 'i18n', slug: 'go/i18n' },
						{ label: 'ide', slug: 'go/ide' },
						{ label: 'inference', slug: 'go/inference' },
						{ label: 'log', slug: 'go/log' },
						{ label: 'ml', slug: 'go/ml' },
						{ label: 'mlx', slug: 'go/mlx' },
						{ label: 'netops', slug: 'go/netops' },
						{ label: 'orm', slug: 'go/orm' },
						{ label: 'p2p', slug: 'go/p2p' },
						{ label: 'rag', slug: 'go/rag' },
						{ label: 'scm', slug: 'go/scm' },
						{ label: 'ws', slug: 'go/ws' },
					],
				},
			],
		}),
	],
});
