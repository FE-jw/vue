<template>
	<ul class="hacker-news">
		<li v-for="job in jobs" :key="job.id">
			{{ job.title }}
		</li>
	</ul>
</template>

<script>
import { fetchJobsList } from '../api/index.js';

export default {
	data(){
		return {
			jobs: []
		}
	},
	created(){
		fetchJobsList()
			.then(res => {
				this.jobs = res.data;
			})
			.catch(error => {
				console.log(error);
			});
	}
}
</script>

<style lang="scss" scoped>

</style>