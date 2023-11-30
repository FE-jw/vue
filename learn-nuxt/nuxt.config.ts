// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    // port: process.env.NODE_ENV === 'production' ? null : 8000
    port: 8000
  },
  devtools: { enabled: true },
  css: ['@/assets/css/reset.css'], // 글로벌 css 설정
  modules: [
    '@pinia/nuxt'
  ]
})
