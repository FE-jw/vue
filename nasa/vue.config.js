const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/vue/nasa',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass')
      }
    }
  }
})
