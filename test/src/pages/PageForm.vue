<template>
	<form action="#">
		<input type="text" v-model="inpNum">
		inpNum값은 {{ inpNum }}입니다.
		<common-btn v-on:click="this.infoSubmit(this.inpNum)">submit (콘솔창 확인)</common-btn>
	</form>
</template>

<script>
import CommonBtn from '../components/CommonBtn.vue';

export default {
	data: function(){
		return	{
			inpNum: ''
		}
	},
	methods: {
		infoSubmit: function(num){
			this.$emit('infoSubmit', num);
		}
	},
	components: {
		'common-btn': CommonBtn
	}
}
</script>

<style lang="scss" scoped>
input	{height:3.0rem;border:none;border-radius:0;}
</style>