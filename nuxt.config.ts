// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: {
    global: true,
    dirs: ['~/components']
  },
  css: ['~/assets/styles/all.scss'],
})
