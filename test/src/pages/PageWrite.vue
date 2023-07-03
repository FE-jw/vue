<template>
	<form @submit.prevent @keypress.enter.exact.prevent="onSubmit">
		<legend class="tit">포스팅</legend>
		<input type="text" placeholder="제목" v-model="title">
		<textarea placeholder="내용 입력" v-model="desc"></textarea>
		<common-btn type="submiit" class="btn-submit" @click="onSubmit">업로드</common-btn>
	</form>
</template>

<script>
export default {
	data(){
		return{
			title: '',
			desc: ''
		}
	},
	methods: {
		onSubmit(){
			this.$emit('onPosting', this.title, this.desc);
		}
	}
}
</script>

<style lang="scss" scoped>
.tit	{margin-top:5.0rem;font-size:4.0rem;font-weight:900;}
form	{margin:2.0rem 0 0;}
input	{display:block;width:30.0rem;height:4.0rem;}
textarea	{display:block;width:30.0rem;height:4.0rem;}
.btn-submit	{margin:1.0rem 0 0;}
</style>