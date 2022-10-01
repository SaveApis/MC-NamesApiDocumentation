// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'MC-Names Api',
    tagline: '',
    url: 'https://saveapis.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'SaveApis', // Usually your GitHub org/user_name.
    projectName: 'MC-NamesApi', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "de" with "zh-Hans".
    i18n: {
        defaultLocale: 'de',
        locales: ['de', 'en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    path: 'docs',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'MC-Names',
                logo: {
                    alt: 'MC-Names Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                    {
                        type: 'docsVersionDropdown',
                        position: 'right',
                    },
                    {
                        type: 'doc',
                        docId: 'rest-api/intro',
                        position: 'left',
                        label: 'REST'
                    },
                    {
                        type: 'doc',
                        docId: 'c-sharp-api/intro',
                        position: 'left',
                        label: 'C#'
                    },
                    {
                        type: 'doc',
                        docId: 'java-api/intro',
                        position: 'left',
                        label: 'Java'
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'REST-API',
                                to: '/docs/rest-api/intro',
                            },
                            {
                                label: 'Java Library',
                                to: '/docs/java-api/intro',
                            },
                            {
                                label: 'C# Library',
                                to: '/docs/c-sharp-api/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/SaveApis/MC-NamesApi',
                            },
                        ],
                    },
                    {
                        title: 'Other',
                        items: [
                            {
                                label: 'Datenschutz',
                                href: 'https://github.com/SaveApis/MC-NamesApi',
                            },
                            {
                                label: 'Impressum',
                                href: 'https://github.com/SaveApis/MC-NamesApi',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} MC-NamesApi, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;