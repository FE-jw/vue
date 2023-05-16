<template>
	<main class="container">
		HTML의 lang값은 {{ propsdata }}입니다.
		<page-emit
			v-on:upNum="increaseNum"
			v-on:resetNum="resetNum"></page-emit>
		num 값은 {{ num }}입니다.
	</main>
</template>

<script>
import PageEmit from '../pages/PageEmit.vue';

export default {
	props: ['propsdata'],
	data: function(){
		return{
			num: 0
		}
	},
	components: {
		'page-emit': PageEmit
	},
	methods: {
		increaseNum: function(){
			this.num++;
		},
		resetNum: function(){
			this.num = 0;
		}
	}
}
</script>

<style lang="scss">
@import '../assets/scss/color';

.container	{flex:1;padding:2.0rem;}
</style>