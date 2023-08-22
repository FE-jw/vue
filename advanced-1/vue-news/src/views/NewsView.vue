<template>
	<ul class="hacker-news">
		<li v-for="item in news" :key="item.id">
			<a :href="item.url" target="_blank">
				<div class="item">
					<p class="txt">{{ item.title }}</p>
					<router-link :to="`/user/${item.user}`" v-if="item.user">
						<small class="user">{{ item.user }}</small>
					</router-link>
				</div>
			</a>
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