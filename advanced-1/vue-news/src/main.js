import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { router } from './routes/index.js';

Vue.use(Vuex);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  // router: router
  router
}).$mount('#app');