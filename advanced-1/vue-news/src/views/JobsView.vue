<template>
	<ul class="hacker-news">
		<li v-for="item in jobs" :key="item.id">
			<div class="item">
				<div class="points">
					{{ item.points || 0 }}
				</div>
				<h2 class="tit">
					<a :href="item.url" target="_blank">{{ item.title }}</a>
				</h2>
				<small v-if="item.domain" class="user">
					<a :href="item.url">{{ item.domain }}</a>
				</small>
			</div>
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