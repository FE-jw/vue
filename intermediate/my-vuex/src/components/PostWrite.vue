<template>
	<div>
		<input type="text" placeholder="title" v-model="title">
		<textarea placeholder="write" v-model="desc" @keypress.enter="uploadPosting"></textarea>
		<button type="button" @click="uploadPosting">upupu</button>
	</div>
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
		uploadPosting(){
			const postingObj = {
				id: Date.now(),
				title: this.title,
				desc: this.desc
			};
			
			// 스토어 저장
			this.$store.commit('onUpload', postingObj);
		}
	}
}
</script>

<style scoped>

</style>