<template>
	<main class="container">
		HTML의 lang값은 {{ propsdata }}입니다.
		<page-emit
			v-on:upNum="increaseNum"
			v-on:resetNum="resetNum"></page-emit>
		num 값은 {{ num }}입니다.
		<page-form @:infoSubmit="submit"></page-form>
		<page-todo></page-todo>
		<page-write @onPosting="posting"></page-write>
		<page-posts :posts="posts"></page-posts>
	</main>
</template>

<script>
import PageEmit from '../pages/PageEmit.vue';
import PageForm from '../pages/PageForm.vue';
import PageTodo from '../pages/PageTodo.vue';
import PageWrite from '../pages/PageWrite.vue';
import PagePosts from '../pages/PagePosts.vue';

export default {
	props: ['propsdata'],
	data(){
		return{
			num: 0,
			posts: []
		}
	},
	components: {
		'page-emit': PageEmit,
		'page-form': PageForm,
		'page-todo': PageTodo,
		'page-write': PageWrite,
		'page-posts': PagePosts
	},
	created(){
		if(localStorage.length > 0){
			for (let idx = 0; idx < localStorage.length; idx++) {
				this.posts.push(
					JSON.parse(
						localStorage.getItem(
							localStorage.key(idx)
						)
					)
				);
			}
		}
	},
	methods: {
		increaseNum(){
			this.num++;
		},
		resetNum(){
			this.num = 0;
		},
		submit(num){
			console.log(
				`AppContainer에서 inpNum을 전달받음. 값은 ${num} 입니다.`
			);
		},
		posting(postTit, postDesc){
			const postObj = {
				id: Date.now(),
				tit: postTit,
				desc: postDesc
			};

			localStorage.setItem(postObj.id, JSON.stringify(postObj));
			this.posts.push(
				JSON.parse(
					localStorage.getItem(postObj.id)
				)
			);
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color';

.container	{flex:1;padding:2.0rem;}
</style>