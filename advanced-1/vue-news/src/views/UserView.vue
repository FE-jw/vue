<template>
	<div>
		<div>name: {{ userInfo.id }}</div>
		<div>karma: {{ userInfo.karma }}</div>
		<div>created: {{ userInfo.created }}</div>
	</div>
</template>

<script>
export default {
	computed: {
		userInfo(){
			return this.$store.state.user;
		}
	},
	created(){
		const id = this.$route.params.id;

		this.$store.dispatch('FETCH_USER', id);
	}
}
</script>

<style lang="scss" scoped>

</style>