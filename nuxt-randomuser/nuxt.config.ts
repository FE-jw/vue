// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_var.scss";'
        },
      },
    },
  },
  css: ['@/assets/css/reset.min.css'],  // 글로벌 css 설정
  app: {
    head: {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
        },
        {
          'name': 'format-detection',
          'content': 'telephone=no'
        },
        {
          "charset": "utf-8"
        },
        {
        }
      ],
      'title': 'Nuxt.js Random User'
    }
  }
})