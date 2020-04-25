
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
        content: 'The Honest Painting Co offers excellent painting for Geelong and the surrounding area. We specialize in interior and exterior painting, either commercial or domestic. You can be sure to get competitive painting prices done with excellence.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        keywords: 'The Honest Painting Co, Painters Geelong, Painters victoria, Painters australia, commercial, residential, painting, apartments, office spaces, decks, porches, painter, houses, offices, ',
        content: 'The Honest Painting Co, Painters Geelong, Painters victoria, Painters australia, commercial, residential, painting, apartments, office spaces, decks, porches, painter, houses, offices'
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
    // '@nuxtjs/google-analytics'
  ],
  /*
  ** Build configuration
  */
//  googleAnalytics: {
//    id: UA-162282246-1,
//    dev: false
//  },

  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
