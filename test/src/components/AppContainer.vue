<template>
	<main class="container">
		<div>
			{{ cnt }}
			<CommonBtn type="button" @click="addCnt">add count</CommonBtn>
		</div>
		<div>부모에서 전달받은 props(lang)값: {{ props.lang }}</div>
	</main>
</template>

<script setup>
import { ref } from 'vue';
import CommonBtn from './CommonBtn.vue';
import { defineProps } from 'vue';

const cnt = ref(0);
const addCnt = () => {
	cnt.value++;
};

// 부모 컴포넌트에서 전달받은 props
const props = defineProps({
	lang: String
});
</script>

<style lang="scss" scoped>
.container	{flex:1;padding:2.0rem;}
</style>