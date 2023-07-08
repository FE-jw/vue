import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import CommonBtn from './components/CommonBtn';

createApp(App)
	.use(router)
	.component('common-btn', CommonBtn)	// 전역 컴포넌트 설정
	.mount('#app');