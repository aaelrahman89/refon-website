export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Refon | ريفون',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Tajawal&display=swap'
      },
    ]
  },

  pageTransition: 'slide-fade',
  router: {
    linkExactActiveClass: 'exact-active-link'
  },
  loading: { color: '#ef6644', height: '2px' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/splide.client.js', mode: 'client'},
    {src: '~/plugins/bootstrap-vue.js'},
    {src: '~/plugins/axios.js'},
    { src: '~/plugins/vee-validate.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        strategy: 'prefix_except_default',
        detectBrowserLanguage: false,
        locales: [
          {
            code: 'en',
            file: 'en.js',
            iso: 'en-US'
          },
          {
            code: 'ar',
            file: 'ar.js',
            iso: 'ar-AR'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en'
        },
      }
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    // proxy: true
    // baseURL: 'http://localhost:3000/'
  },
  // proxy: { '/api/': process.env.API_URL },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ]
  }
}
