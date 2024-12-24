export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: {
    global: true,
    dirs: ['~/components']
  },
  css: ['~/assets/styles/all.scss'],
  runtimeConfig: {
    public: {
      apiBase: 'https://freyja-api-c6ji.onrender.com/api/v1', // 固定值
    },
  },
  modules: ["@pinia/nuxt","@vee-validate/nuxt"],
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt3-demo/' : '/',
    buildAssetsDir: '/static/'
  },
  veeValidate: {
    componentNames: {
      Form: "VForm",
      Field: "VField",
      ErrorMessage: "VErrorMessage",
    },
  },
});
