<template>
	<ul class="hacker-news">
		<li v-for="item in news" :key="item.id">
			{{ item.title }}
		</li>
	</ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['news'])
	},
	created(){
		this.$store.dispatch('FETCH_NEWS');
	}
}
</script>