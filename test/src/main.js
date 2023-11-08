import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import testPlugin from 'testPlugin';
import CommonBtn from './components/CommonBtn.vue';

const app = createApp(App);

app.use(testPlugin);
app.use(createPinia());	// pinia store 사용
app.component('CommonBtn', CommonBtn)	// 전역 컴포넌트 설정
app.mount('#app');