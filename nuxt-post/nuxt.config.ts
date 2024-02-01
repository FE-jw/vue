// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'JW nuxt-post',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: 'JW nuxt-post 프로젝트입니닷' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },
  css: ['assets/css/reset.scss'],
  modules: [
    '@pinia/nuxt',
    'nuxt-swiper'
  ],
  runtimeConfig: {
    public: {
      myname: process.env.MYNAME
    }
  }
})