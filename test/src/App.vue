<template>
	<div class="wrap" :data-theme="store.theme">
		<!-- <app-header></app-header> -->
		<app-container></app-container>
		<app-footer></app-footer>
		<app-popup v-if="popup.show">
			<template #head>
				<div class="pop-tit">팝업 제목</div>
			</template>
			<template #body>
				<div>ESC 눌러도 닫힘..!</div>
			</template>
		</app-popup>
	</div>
</template>

<script setup>
// import AppHeader from '@/components/AppHeader.vue';
import AppContainer from '@/components/AppContainer.vue';
import AppFooter from '@/components/AppFooter.vue';
import AppPopup from '@/components/AppPopup.vue';
import { useStore } from '@/stores/store.js';
import { usePopup } from '@/stores/popup.js';

const store = useStore();
const popup = usePopup();
</script>

<style lang="scss">
*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;font-size:10px;}
#app	{line-height:1.3;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:1.4rem;font-weight:200;}
.wrap	{display:flex;flex-direction:column;min-height:100vh;min-height:100dvh;transition:color 0.2s, background-color 0.2s;
	&[data-theme='dark']	{color:#fff;background-color:#111;}
	&[data-theme='light']	{color:#111;background-color:#fff;}
}
button	{border:0;border-radius:0;font-family:inherit;font-size:1.4rem;font-weight:inherit;background:none;cursor:pointer;}
</style>

<style lang="scss" scoped>
.pop-tit	{font-weight:900;}
</style>