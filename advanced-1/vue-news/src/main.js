import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js';
console.log(router);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // router: router
  router
}).$mount('#app');