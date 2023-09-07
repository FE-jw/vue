<template>
	<main class="container">
		<div>
			{{ cnt }}
			<common-btn @click="increaseCnt">increaseCnt</common-btn>
			<common-btn @click="decreaseCnt">decreaseCnt</common-btn>
			<common-btn @click="resetCnt">resetCnt</common-btn>
		</div>
		<div>store에서 받아온 lang 값: {{ store.lang }}</div>
		<common-btn @click="popup.setShow(true)">popup show</common-btn>
		<app-lang></app-lang>
	</main>
</template>

<script setup>
import { ref } from 'vue';
// import { defineProps } from 'vue';
import AppLang from '@/components/AppLang.vue';
import { useStore } from '@/stores/store.js';
import { usePopup } from '@/stores/popup.js';

const store = useStore();
const popup = usePopup();

const cnt = ref(0);
const increaseCnt = () => {
	cnt.value++;
};
const decreaseCnt = () => {
	cnt.value--;
};
const resetCnt = () => {
	cnt.value = 0;
};

// 부모 컴포넌트에서 전달받은 props
// const props = defineProps({
	// lang: String
// });
</script>

<style lang="scss" scoped>
.container	{flex:1;padding:2.0rem;}
</style>