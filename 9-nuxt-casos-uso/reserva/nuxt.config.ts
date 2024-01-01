// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: [
      'composables/**',
      'utils/**'
    ]
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBaseUrl: process.env.API_BASE_URL || "http://localhost:8080/",
    }
  }
})
