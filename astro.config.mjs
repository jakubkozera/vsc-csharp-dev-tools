// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jakubkozera.github.io',
  base: '/vsc-csharp-dev-tools',
  outDir: './build',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    starlight({
      title: 'C# Dev Tools',
      description:
        'Powerful tools for C# development in VS Code – Solution Explorer, Test Generation, NuGet Management, and more.',
      logo: {
        src: './src/assets/logo.png',
        alt: 'C# Dev Tools',
        replacesTitle: false,
      },
      favicon: '/img/favicon.ico',
      editLink: {
        baseUrl:
          'https://github.com/jakubkozera/vsc-csharp-dev-tools/edit/refactor-astro/src/content/docs/',
      },
      lastUpdated: true,
      pagination: true,
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:type', content: 'website' },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:image',
            content: 'https://jakubkozera.github.io/vsc-csharp-dev-tools/img/logo.png',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'twitter:image',
            content: 'https://jakubkozera.github.io/vsc-csharp-dev-tools/img/logo.png',
          },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#0b0d0e' },
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jakubkozera/vsc-csharp-dev-tools',
        },
      ],
      customCss: ['./src/tailwind.css', './src/styles/custom.css'],
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        PageTitle: './src/components/PageTitle.astro',
        SocialIcons: './src/components/SocialIcons.astro',
      },
      sidebar: [
        {
          label: 'Getting Started',
          autogenerate: { directory: 'getting-started' },
        },
        {
          label: 'Solution Explorer',
          autogenerate: { directory: 'solution-explorer' },
        },
        {
          label: 'NuGet Package Management',
          autogenerate: { directory: 'nuget-management' },
        },
        {
          label: 'File Templates & Quick File Creation',
          autogenerate: { directory: 'file-templates' },
        },
        {
          label: 'Testing Integration',
          autogenerate: { directory: 'testing-integration' },
        },
        {
          label: 'Code Navigation & IntelliSense',
          autogenerate: { directory: 'code-navigation' },
        },
        {
          label: 'Source Control',
          autogenerate: { directory: 'source-control' },
        },
        {
          label: 'Tools',
          autogenerate: { directory: 'tools' },
        },
        {
          label: 'Configuration',
          autogenerate: { directory: 'configuration' },
        },
        {
          label: 'Advanced',
          autogenerate: { directory: 'advanced' },
        },
      ],
    }),
    react(),
    sitemap(),
  ],
});
