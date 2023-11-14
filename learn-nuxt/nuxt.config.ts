// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8000
  },
  devtools: { enabled: true },
  css: ['@/assets/css/reset.css'] // 글로벌 css 설정
})
