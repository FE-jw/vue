<template>
	<div>
		<section>
			<!-- 사용자 정보 -->
			<!-- <UserProfile :info="fetchedItem"> -->
			<UserProfile>
				<router-link slot="username" :to="`/user/${fetchedItem.user}`">
					{{ fetchedItem.user }}
				</router-link>
				<div slot="time">{{ fetchedItem.time_ago }}</div>
			</UserProfile>
		</section>
		<section>
			<h2>{{ fetchedItem.title }}</h2>
		</section>
		<section>
			<!-- 질문 댓글 -->
			<div class="comments" v-html="fetchedItem.content"></div>
		</section>
	</div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['fetchedItem'])
	},
	created(){
		const id = this.$route.params.id;

		this.$store.dispatch('FETCH_ITEM', id);
	},
	components: {
		UserProfile
	}
}
</script>

<style lang="scss" scoped>
.comments	{
	&::v-deep	{
		p	{padding:1.0rem;
			& ~ p	{margin-top:1.0rem;}
		}
	}
}
</style>