<template>
	<section class="container">
		<button type="button" @click="changeLang">언어 변경</button> || 현재 언어: {{ lang }}
		<p>hello: {{ data.hello[lang] }}</p>
		<p>bye: {{ data.bye[lang] }}</p>
		<p v-if="data.txt_1[lang]">중간체는 제거됨: {{ data.txt_1[lang] }}</p>
		<p v-if="data.txt_2[lang]">영문은 제거됨: {{ data.txt_2[lang] }}</p>
	</section>
</template>

<script setup>
const { data } = await useFetch('/api/test');

const lang = ref('ko');
const changeLang = () => {
	switch(lang.value){
		case 'ko': lang.value = 'en';
			break;
		case 'en': lang.value = 'zh-hans';
			break;
		case 'zh-hans': lang.value = 'ko';
			break;
	}
};
</script>

<style lang="scss" scoped>
.container	{flex:1;padding:2.0rem;}
</style>