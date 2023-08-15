<template>
	<ul class="hacker-news">
		<li v-for="item in news" :key="item.id">
			{{ item.title }}
		</li>
	</ul>
</template>

<script>
import { fetchNewsList } from '../api/index.js';

export default {
	data(){
		return {
			news: []
		}
	},
	created(){
		fetchNewsList()
			.then(res => {
				this.news = res.data;
			})
			.catch(error => {
				console.log(error);
			});
	},
	components: {

	}
}
</script>

<style lang="scss" scoped>

</style>