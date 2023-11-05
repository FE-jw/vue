<template>
	<div>
		<!-- <UserProfile :info="userInfo"> -->
		<UserProfile>
			<div slot="username">{{ userInfo.id }}</div>
			<span slot="time">Joined {{ userInfo.created }}</span>
			<span slot="karma">, {{ userInfo.karma }}</span>
		</UserProfile>
	</div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';

/**
 * props로 data를 내려주는 방법도 있고
 * UserProfile 컴포넌트에서 store에 접근해서 data를 가져오는 방법도 가능
 */

export default {
	computed: {
		userInfo(){
			return this.$store.state.user;
		}
	},
	created(){
		const id = this.$route.params.id;

		this.$store.dispatch('FETCH_USER', id);
	},
	components: {
		UserProfile
	}
}
</script>

<style lang="scss" scoped>

</style>