import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Documentation sidebar with reorganized structure
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/keyboard-shortcuts',
      ],
    },
    {
      type: 'category',
      label: 'Solution Explorer',
      link: {
        type: 'doc',
        id: 'solution-explorer/index',
      },
      items: [
        'solution-explorer/opening-solutions',
        'solution-explorer/creating-projects',
        'solution-explorer/adding-existing-projects',
        'solution-explorer/multi-root-workspace',
        'solution-explorer/running-debugging',
        'solution-explorer/advanced-search',
        'solution-explorer/recent-solutions',
      ],
    },
    {
      type: 'category',
      label: 'NuGet Package Management',
      link: {
        type: 'doc',
        id: 'nuget-management/index',
      },
      items: [
        'nuget-management/browsing-packages',
        'nuget-management/installing-packages',
        'nuget-management/updating-packages',
        'nuget-management/removing-packages',
        'nuget-management/credential-injection',
        'nuget-management/package-restore',
        'nuget-management/nuget-configuration',
      ],
    },
    {
      type: 'category',
      label: 'File Templates & Quick File Creation',
      link: {
        type: 'doc',
        id: 'file-templates/index',
      },
      items: [
        'file-templates/quick-add',
        'file-templates/json-to-csharp',
        'file-templates/available-templates',
        'file-templates/custom-templates',
        'file-templates/namespace-detection',
        'file-templates/file-location-context',
      ],
    },
    {
      type: 'category',
      label: 'Testing Integration',
      link: {
        type: 'doc',
        id: 'testing-integration/index',
      },
      items: [
        'testing-integration/running-debugging-tests',
        'testing-integration/test-generation',
        'testing-integration/code-coverage',
        'testing-integration/specflow-support',
        'testing-integration/playwright-integration',
      ],
    },
    {
      type: 'category',
      label: 'Code Navigation & IntelliSense',
      link: {
        type: 'doc',
        id: 'code-navigation/index',
      },
      items: [
        'code-navigation/inlay-hints',
        'code-navigation/unused-symbols',
        'code-navigation/code-lens',
        'code-navigation/semantic-colors',
      ],
    },
    {
      type: 'category',
      label: 'Source Control',
      link: {
        type: 'doc',
        id: 'source-control/index',
      },
      items: [
        'source-control/github-integration',
        'source-control/azure-devops-integration',
        'source-control/copilot-code-review',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      link: {
        type: 'doc',
        id: 'tools/index',
      },
      items: [
        'tools/bookmarks',
        'tools/diagrams',
        'tools/text-tools',
        'tools/ui-tools',
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      items: [
        'configuration/settings',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/support',
      ],
    },
  ],
};

export default sidebars;
