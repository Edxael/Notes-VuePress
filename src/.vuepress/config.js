const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Edxael Notes',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'JavaScript',
        link: '/JS/'
      },
      {
        text: 'Node',
        link: '/Node/'
      },
      {
        text: 'Shopify',
        link: '/ShopyFy/'
      },
      {
        text: 'Vue',
        link: '/Vue/'
      },
      {
        text: 'Misc',
        link: '/Miscellaneous/'
      },
      {
        text: 'Edmundo',
        link: 'http://edmundorubio.net/'
      }
    ],
    sidebar: {
      '/JS/': [
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            '',
            'js-basics',
          ]
        }
      ],
      '/Node/': [
        {
          title: 'Node.js',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/ShopyFy/': [
        {
          title: 'Shopify',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/Vue/': [
        {
          title: 'Vue',
          collapsable: false,
          children: [
            '',
          ]
        }
      ],
      '/Miscellaneous/': [
        {
          title: 'Misc',
          collapsable: false,
          children: [
            '',
            'resources',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
