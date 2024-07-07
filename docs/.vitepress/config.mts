import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'v-anything',
  description: 'A Vue 3 custom directives library ',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/installation' },
      { text: 'Directives', link: '/directives/overview' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '',
          items: [
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/quick-start' },
          ],
        },
      ],
      '/directives/': [
        {
          text: '',
          items: [
            { text: 'overview', link: '/directives/overview' },
            { text: 'v-hovertime', link: '/directives/v-hovertime' },
            { text: 'v-highlight', link: '/directives/v-highlight' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/summergua/v-anything' },
      {
        icon: 'npm',
        link: 'https://www.npmjs.com/package/@v-anything/directives',
      },
    ],
  },
  base: '/docs/',
})
