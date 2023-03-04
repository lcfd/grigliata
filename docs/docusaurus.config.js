// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Grigliata",
  tagline: "A styled-components grid system.",
  url: "https://lcfd.github.io",
  baseUrl: "/grigliata/",

  favicon: "img/favicon.ico",

  // GitHub
  organizationName: "lcfd", // Usually your GitHub org/user name.
  projectName: "grigliata", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/lcfd/grigliata/docs"
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/lcfd/grigliata/docs"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      title: "Grigliata",
      logo: {
        alt: "Grigliata Logo",
        src: "img/favicon.png"
      },
      image: "img/social-card.jpg",
      navbar: {
        title: "Grigliata",
        logo: {
          alt: "Grigliata Logo",
          src: "img/favicon.png"
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs"
          },
          { to: "about", label: "About", position: "left" },
          { to: "blog", label: "Blog", position: "left" },
          { to: "roadmap", label: "Roadmap", position: "left" },
          {
            href: "https://github.com/lcfd/grigliata",
            label: "GitHub",
            position: "right"
          },
          {
            href: "https://www.npmjs.com/package/grigliata",
            label: "Npm",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Grigliata`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
