export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ecommerce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/owl.carousel.min.css',
    '~/assets/css/animate.min.css',
    '~/assets/css/magnific-popup.css',
    '~/assets/css/fontawesome-all.min.css',
    '~/assets/css/flaticon.css',
    '~/assets/css/meanmenu.css',
    '~/assets/css/meanmenu.css',
    '~/assets/css/slick.css',
    '~/assets/css/default.css',
    '~/assets/css/style.css',
    '~/assets/css/responsive.css',
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/updateQueryParams.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
    '@nuxtjs/auth-next'
  ],
  bootstrapVue: {
    bootstrapCSS: true, // Or `css: false`
    bootstrapVueCSS: true // Or `bvCSS: false`
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        autoprefixer: {},
      },
    },
  },
  axios: {
    // proxy: true
    baseURL: 'http://localhost:5000'
  },
  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'token',
          maxAge: 30,
          global: true,
          // type: 'Bearer'
          type: false
        },
        refreshToken: {
          property: false,
          maxAge: 60 * 60 * 24 * 30,
          tokenRequired: true,
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: '/login', method: 'post' },
          refresh: { url: '/refresh-token', method: 'post', propertyName: 'data.refresh_token' },
          user: { url: '/profile', method: 'get' },
          // logout: { url: '/logout', method: 'post' }
        },
        // autoLogout: false
      }
    }
  },
  router: {
    // middleware: ['auth']
  }
}
