// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
  ],
  devtools: { 
    enabled: true
   },
   runtimeConfig: {
    apiKey: '',
    apiBaseUrl: ''
   }

})
