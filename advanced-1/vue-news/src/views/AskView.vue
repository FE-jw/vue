<template>
	<ul class="hacker-news">
		<li v-for="item in ask" :key="item.id">
			{{ item.title }}
		</li>
	</ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		// ...mapState({
			// ask: state => state.ask
		// })

		// ...mapGetters({
			// fetchedAsk: 'fetchedAsk'
		// })

		...mapGetters(['ask'])
	},
	created(){
		this.$store.dispatch('FETCH_ASK');
	}
}
</script>