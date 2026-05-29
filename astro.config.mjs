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
          items: [
            { label: 'Installation', slug: 'getting-started/installation' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'Keyboard Shortcuts', slug: 'getting-started/keyboard-shortcuts' },
          ],
        },
        {
          label: 'Solution Explorer',
          link: '/solution-explorer/',
          items: [
            { label: 'Opening Solutions', slug: 'solution-explorer/opening-solutions' },
            { label: 'Creating Projects', slug: 'solution-explorer/creating-projects' },
            { label: 'Adding Existing Projects', slug: 'solution-explorer/adding-existing-projects' },
            { label: 'Multi-Root Workspace', slug: 'solution-explorer/multi-root-workspace' },
            { label: 'Running & Debugging', slug: 'solution-explorer/running-debugging' },
            { label: 'Advanced Search', slug: 'solution-explorer/advanced-search' },
            { label: 'Recent Solutions', slug: 'solution-explorer/recent-solutions' },
          ],
        },
        {
          label: 'NuGet Package Management',
          link: '/nuget-management/',
          items: [
            { label: 'Browsing Packages', slug: 'nuget-management/browsing-packages' },
            { label: 'Installing Packages', slug: 'nuget-management/installing-packages' },
            { label: 'Updating Packages', slug: 'nuget-management/updating-packages' },
            { label: 'Removing Packages', slug: 'nuget-management/removing-packages' },
            { label: 'Credential Injection', slug: 'nuget-management/credential-injection' },
            { label: 'Package Restore', slug: 'nuget-management/package-restore' },
            { label: 'NuGet Configuration', slug: 'nuget-management/nuget-configuration' },
          ],
        },
        {
          label: 'File Templates & Quick File Creation',
          link: '/file-templates/',
          items: [
            { label: 'Quick Add', slug: 'file-templates/quick-add' },
            { label: 'JSON to C#', slug: 'file-templates/json-to-csharp' },
            { label: 'Available Templates', slug: 'file-templates/available-templates' },
            { label: 'Custom Templates', slug: 'file-templates/custom-templates' },
            { label: 'Namespace Detection', slug: 'file-templates/namespace-detection' },
            { label: 'File Location Context', slug: 'file-templates/file-location-context' },
          ],
        },
        {
          label: 'Testing Integration',
          link: '/testing-integration/',
          items: [
            { label: 'Running & Debugging Tests', slug: 'testing-integration/running-debugging-tests' },
            { label: 'Test Generation', slug: 'testing-integration/test-generation' },
            { label: 'Code Coverage', slug: 'testing-integration/code-coverage' },
            { label: 'SpecFlow Support', slug: 'testing-integration/specflow-support' },
            { label: 'Playwright Integration', slug: 'testing-integration/playwright-integration' },
          ],
        },
        {
          label: 'Code Navigation & IntelliSense',
          link: '/code-navigation/',
          items: [
            { label: 'Inlay Hints', slug: 'code-navigation/inlay-hints' },
            { label: 'Unused Symbols', slug: 'code-navigation/unused-symbols' },
            { label: 'Code Lens', slug: 'code-navigation/code-lens' },
            { label: 'Semantic Colors', slug: 'code-navigation/semantic-colors' },
          ],
        },
        {
          label: 'Source Control',
          link: '/source-control/',
          items: [
            { label: 'GitHub Integration', slug: 'source-control/github-integration' },
            { label: 'Azure DevOps Integration', slug: 'source-control/azure-devops-integration' },
            { label: 'Copilot Code Review', slug: 'source-control/copilot-code-review' },
          ],
        },
        {
          label: 'Tools',
          link: '/tools/',
          items: [
            { label: 'Bookmarks', slug: 'tools/bookmarks' },
            { label: 'Diagrams', slug: 'tools/diagrams' },
            { label: 'Secret Scanning', slug: 'tools/secret-scanning' },
            { label: 'Text Tools', slug: 'tools/text-tools' },
            { label: 'UI Tools', slug: 'tools/ui-tools' },
          ],
        },
        {
          label: 'Configuration',
          items: [{ label: 'Settings', slug: 'configuration/settings' }],
        },
        {
          label: 'Advanced',
          items: [
            { label: 'Support', slug: 'advanced/support' },
            { label: 'Offline Installation', slug: 'advanced/offline-installation' },
          ],
        },
      ],
    }),
    react(),
  ],
});
