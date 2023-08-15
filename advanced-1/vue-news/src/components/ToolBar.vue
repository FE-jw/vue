<template>
	<header>
		<nav>
			<router-link to="/news">News</router-link>
			<router-link to="/ask">Ask</router-link>
			<router-link to="/jobs">Jobs</router-link>
		</nav>
	</header>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
nav	{display:flex;padding:1.0rem;font-weight:500;color:#fff;background-color:var(--main-dark);
	a	{padding:0 0.5rem;
		&.router-link-active	{color:var(--main-yellow);}
	}
}
</style>