
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
        content: 'The Honest Painting Co.',
      },
      {
        name: 'keywords',
        keywords: 'the honest painting co, geelong, victoria, australia, commercial, residential, painting, painter'
           },
            {
              hid: 'description',
              name: 'description',
              content: 'We specialize in both internal and external painting for residential and commercial needs. When we do the job, you can trust us to do it right.'
            },
              {
                hid: 'description',
                name: 'description',
                content: 'The Honest Painting Co strives to offer painting services at a competitive price for Geelong and the surrounding area.'
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
