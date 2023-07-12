import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

new Vue({
	VueRouter,
	store,
	render: h => h(App),
}).$mount('#app')
