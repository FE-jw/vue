<template>
	<form action="#">
		<input type="text" v-model="inpNum">
		inpNum값은 {{ inpNum }}입니다.
		<common-btn v-on:click="this.infoSubmit(this.inpNum)">submit (콘솔창 확인)</common-btn>
	</form>
</template>

<script>
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
	}
}
</script>

<style lang="scss" scoped>
input	{height:3.0rem;border:1px solid #000;border-radius:0;}
</style>