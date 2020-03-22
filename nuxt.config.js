module.exports = {

  mode: 'universal',

  /*
  ** Headers of the page
  */

  head: {
    title: 'Jérémy SIMEON - Développeur Full-Stack JS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Développeur Full-Stack JS à Paris. Visitez mon site web pour plus d\'informations sur mes différentes expérience et pour me contacter.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Modules
  */

  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-134146097-1'
    }],
    ['@nuxtjs/moment', {
      locales: ['fr']
    }],
    ['bootstrap-vue/nuxt', {
      bootstrapCSS: false,
      bootstrapVueCSS: false
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
