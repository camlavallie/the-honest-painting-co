
export default {
  mode: 'universal',
  generate: {
    fallback: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'The Honest Painting Co.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'The Honest',
        keywords: 'the, honest, co, geelong, victoria, australia, commercial, painting, residential, painting, painter, painting'
      },
           {
             hid: 'keywords',
             name: 'keywords',
             content: 'the, honest, co, geelong, victoria, australia, commercial, painting, residential, painting, painter, painting'
           }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
