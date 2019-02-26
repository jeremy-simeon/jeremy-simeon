module.exports = {

  mode: 'universal',

  /*
  ** Headers of the page
  */

  head: {
    title: 'Jérémy SIMEON - Développeur Full-Stack JS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Modules
  */

  modules: [
    ['@nuxtjs/axios'],
    ['bootstrap-vue/nuxt'],
    ['@nuxtjs/google-analytics', {
      id: 'UA-134146097-1'
    }],
    ['nuxt-fontawesome', {
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faCodeBranch']
      }]
    }]
  ],

  /*
  ** CSS
  */

  css: [
    '@/assets/main.scss'
  ],

  /*
  ** Customize the progress bar color
  */

  loading: false,

  /*
  ** Build configuration
  */

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }

}
