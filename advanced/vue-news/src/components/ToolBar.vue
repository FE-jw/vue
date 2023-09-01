<template>
	<header>
		<nav>
			<router-link to="/news">NEWS</router-link>
			<router-link to="/ask">ASK</router-link>
			<router-link to="/jobs">JOBS</router-link>
		</nav>
	</header>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
header	{position:sticky;top:0;z-index:10;}
nav	{display:flex;padding:2.0rem;background-color:var(--main-dark);
	a	{padding:0 1.0rem;font-size:2.0rem;font-weight:500;color:#fff;
		&.router-link-active	{color:var(--main-yellow);}
	}
}
</style>