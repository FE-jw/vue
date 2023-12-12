import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { createSta } from 'sta';
import CommonBtn from './components/CommonBtn.vue';

const app = createApp(App);

app.use(createSta, {
	repeatEffect: true
});
app.use(createPinia());	// pinia store 사용
app.component('CommonBtn', CommonBtn)	// 전역 컴포넌트 설정
app.mount('#app');