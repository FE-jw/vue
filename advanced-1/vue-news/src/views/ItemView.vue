<template>
	<div>
		<section>
			<!-- 질문 상세 영역 -->
			<div class="user_container">
				<div class="user-head">
					User
				</div>
				<div class="user-desc">
					<div>
						name: <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
					</div>
					<div class="time">
						{{ fetchedItem.time_ago }}
					</div>
				</div>
			</div>
			<h2>{{ fetchedItem.title }}</h2>
		</section>
		<section>
			<!-- 질문 댓글 -->
			<div class="comments" v-html="fetchedItem.content"></div>
		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['fetchedItem'])
	},
	created(){
		const id = this.$route.params.id;

		this.$store.dispatch('FETCH_ITEM', id);
	}
}
</script>

<style lang="scss" scoped>
.user_container	{display:flex;align-items:center;padding:2.0rem;
	.user-head	{}
	.user-desc	{padding-left:2.0rem;
		.time	{font-size:1.2rem;color:var(--main-gray);}
	}
}
.comments	{
	&::v-deep	{
		p	{padding:1.0rem;
			& ~ p	{margin-top:1.0rem;}
		}
	}
}
</style>