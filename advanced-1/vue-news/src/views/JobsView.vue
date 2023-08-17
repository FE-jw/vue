<template>
	<ul class="hacker-news">
		<li v-for="job in jobs" :key="job.id">
			{{ job.title }}
		</li>
	</ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['jobs'])
	},
	created(){
		this.$store.dispatch('FETCH_JOBS');
	}
}
</script>