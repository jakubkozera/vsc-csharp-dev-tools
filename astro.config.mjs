// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
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
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jakubkozera/vsc-csharp-dev-tools',
        },
      ],
      customCss: ['./src/tailwind.css', './src/styles/custom.css'],
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
  ],
});
