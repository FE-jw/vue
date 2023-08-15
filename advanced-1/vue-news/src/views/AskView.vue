<template>
	<ul class="hacker-news">
		<li v-for="item in ask" :key="item.id">
			{{ item.title }}
		</li>
	</ul>
</template>

<script>
import { fetchAsksList } from '../api/index.js';

export default {
	data(){
		return {
			ask: []
		}
	},
	created(){
		fetchAsksList()
			.then(res => {
				this.ask = res.data;
			})
			.catch(error => {
				console.log(error);
			});
	}
}
</script>

<style lang="scss" scoped>

</style>