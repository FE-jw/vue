<template>
	<header>
		<h1>
			<nuxt-link to="/">
				<svg-logo></svg-logo>
			</nuxt-link>
		</h1>
		<nav>
			<!-- <NuxtLink class="nuxt-link" to="/">HOME</NuxtLink> -->
			<nuxt-link class="nuxt-link" to="/intro">INTRO</nuxt-link>
			<nuxt-link class="nuxt-link" to="/about">ABOUT</nuxt-link>
		</nav>
	</header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
header	{
	--header-height: 60;
	display:flex;justify-content:space-between;align-items:center;height:calc(var(--header-height) / 10 * 1.0rem);padding:0 2.0rem;border-bottom:1px solid rgba($nuxt-green, 0.3);box-sizing:border-box;
	h1	{
		svg	{width:4.0rem;height:auto;}
	}
	nav	{
		.nuxt-link	{display:inline-flex;padding:1.0rem;border-radius:0.4rem;font-size:1.4rem;color:var(--nuxt-green);text-decoration:none;
			&:hover,
			&:focus	{background-color:rgba($nuxt-green, 0.1);}
		}
	}
}

@media all and (min-width: 768px)	{
	header	{
		--header-height: 70;
		h1	{
			svg	{width:5.0rem;}
		}
		nav	{
			.nuxt-link	{font-size:1.6rem;}
		}
	}
}
</style>