<template>
	<div>
		<form @submit.prevent>
			<div class="row">
				<label for="titInfo">제목</label>
				<input id="titInfo" type="text" placeholder="title" v-model="title" ref="titInfo">
			</div>
			<div class="row">
				<label for="descInfo">내용</label>
				<textarea id="descInfo" placeholder="write" v-model="desc" @keypress.enter="uploadPosting" ref="descInfo"></textarea>
			</div>
			<button type="button" class="btn-upload" @click="uploadPosting">업로드</button>
		</form>
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
			if(this.title.trim() === ''){
				alert('제목을 입력해주세요');
				this.$refs.titInfo.focus();
			}else if(this.desc.trim() === ''){
				alert('내용을 입력해주세요');
				this.$refs.descInfo.focus();
			}else{
				const postingObj = {
					id: Date.now(),
					title: this.title,
					desc: this.desc
				};
				
				// 스토어 저장
				this.$store.commit('onUpload', postingObj);

				// 내용 초기화
				this.title = '';
				this.desc = '';
				this.$refs.titInfo.focus();
			}
		}
	}
}
</script>

<style scoped>
.row	{display:flex;align-items:center;padding:2.0rem;}
label	{display:inline-block;padding:1.0rem;cursor:pointer;}
input	{display:block;width:50.0rem;height:5.0rem;padding:0 2.0rem;border:1px solid #000;border-radius:0.4rem;box-sizing:border-box;}
textarea	{display:block;width:50.0rem;height:10.0rem;padding:2.0rem;border:1px solid #000;border-radius:0.4rem;box-sizing:border-box;resize:none;}
.btn-upload	{display:block;width:20.0rem;height:5.0rem;font-family:inherit;font-size:2.0rem;font-weight:500;color:#fff;background-color:#d33;}
</style>