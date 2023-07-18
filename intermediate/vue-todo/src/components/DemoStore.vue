<template>
	<div id="root">
		<p>{{ originalPrice }}</p>
		<p>{{ dobblePrice }}</p>
		<p>{{ triplePrice }}</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters([
			'originalPrice',
			'dobblePrice',
			'triplePrice'
		])
		// originalPrice(){
			// return this.$store.getters.originalPrice;
		// },
		// dobblePrice(){
			// return this.$store.getters.dobblePrice;
		// },
		// triplePrice(){
			// return this.$store.getters.triplePrice;
		// }
	}
}
</script>

<style scoped>

</style>