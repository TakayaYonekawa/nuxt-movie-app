// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
    '@vueuse/nuxt'
  ],
  devtools: { 
    enabled: true
   },
   runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    apiBaseUrl: process.env.NUXT_API_BASE_URL,
    public: {
      imgBaseUrl: ''
    }
   }

})
