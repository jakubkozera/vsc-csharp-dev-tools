import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "C# Dev Tools",
  tagline: "Powerful tools for C# development in VS Code",
  favicon: "img/favicon.ico",

  future: {
    v4: true, // Improve compatibility with Docusaurus v4
  },

  // Set the production URL of your site
  url: "https://jakubkozera.github.io",
  // Set the base URL to point directly to the docs
  baseUrl: "/vsc-csharp-dev-tools", // Changed to make /docs/ the root

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Set the docs route as the default landing page
          routeBasePath: "/", // Makes /docs/ content appear at the root
        },
        // Disable the blog if you don’t need it
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "C# Dev Tools Docs", // Changed label to reflect focus on docs
        },
        {
          href: "https://github.com/jakubkozera/vsc-csharp-dev-tools",
          label: "GitHub",
          position: "left",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
