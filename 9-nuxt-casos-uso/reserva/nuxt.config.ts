// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.js'
  },
  imports: {
    dirs: [
      'composables/**',
      'utils/**'
    ]
  },
  runtimeConfig: {
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
  css: ['~/assets/css/main.min.css'],
  app:{
    head:{
      script:[
        {src:'/js/backend-bundle.min.js'},
        {src:'/js/customizer.js'},
        {src:'/js/app.js'}
      ]
    }
  }
})
