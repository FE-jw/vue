<template>
	<div>
		<p>만남 인사: {{ multiLang.hello[store.lang] }}</p>
		<p>헤어짐 인사: {{ multiLang.bye[store.lang] }}</p>
		<p v-if="multiLang.txt_1[store.lang]">중간체인 경우 제거됨: {{ multiLang.txt_1[store.lang] }}</p>
		<p v-if="multiLang.txt_2[store.lang]">영문인 경우 제거됨: {{ multiLang.txt_2[store.lang] }}</p>
		<common-btn @click="changeLang">언어 변경</common-btn> 현재 언어: {{ store.lang }}
		<ul class="reward_1">
			<li v-for="(item, index) in multiLang.reward_1" :key="index">
				<span class="reward">{{ item[store.lang] }}</span>
				<button type="button"
					@click="updateState(index)"
					:class="{
						btn_off: btnState[index].value == -1,
						btn_on: btnState[index].value == 0,
						btn_complete: btnState[index].value > 0
					}">{{ multiLang.btn_1[store.lang][btnState[index].value] }}</button>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '@/stores/store.js';
import { multiLang } from '@/json/multiLang.js';

const store = useStore();
let btnState = [
	ref(-1),
	ref(0),
	ref(1),
	ref(-1)
];

const changeLang = () => {
	const langState = store.lang;

	switch(langState){
		case 'ko': store.setLang('en');
			break;
		case 'en': store.setLang('zh-hans');
			break;
		case 'zh-hans': store.setLang('ko');
			break;
	}
};

const updateState = index => {
	btnState[index].value = 1;
};
</script>

<style lang="scss" scoped>
.reward_1	{display:flex;flex-wrap:wrap;gap:2.0rem;list-style:none;
	li	{flex-shrink:0;width:10.0rem;height:20.0rem;position:relative;background-color:$vue-light;}
	.reward	{display:flex;justify-content:center;align-items:center;height:4.0rem;font-size:1.6rem;text-align:center;background-color:$vue-dark;}
	button	{width:100%;height:4.0rem;position:absolute;left:0;bottom:0;font-size:1.6rem;color:inherit;background-color:$vue-dark;
		&.btn_complete	{color:darken(#fff, 10%);background-color:darken($vue-dark, 10%);}
	}
}
</style>