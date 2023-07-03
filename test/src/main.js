import { createApp } from 'vue';
import App from './App.vue';
import CommonBtn from './components/CommonBtn';

createApp(App)
	.component('common-btn', CommonBtn)	// 전역 컴포넌트 설정
	.mount('#app');