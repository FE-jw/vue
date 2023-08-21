<template>
	<ul class="hacker-news">
		<li v-for="item in ask" :key="item.id">
			<a :href="item.url" target="_blank">
				<div class="item">
					<p class="txt">{{ item.title }}</p>
					<small v-if="item.user" class="user">{{ item.user }}</small>
				</div>
			</a>
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