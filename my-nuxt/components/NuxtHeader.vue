<template>
	<header>
		<h1>
			<nuxt-logo></nuxt-logo>
		</h1>
		<NuxtLink class="nuxt-link" to="/testjson">JSONplaceholder</NuxtLink>
		<NuxtLink class="nuxt-link" to="/main">main</NuxtLink>
	</header>
</template>

<script setup>
import NuxtLogo from '@/components/svg/NuxtLogo.vue';
</script>

<style lang="scss" scoped>
header	{display:flex;justify-content:flex-end;padding:1.0rem 2.0rem;border-bottom:1px solid rgba($nuxt-green, 0.3);
	h1	{width:5.0rem;height:5.0rem;}
	.nuxt-link	{color:var(--nuxt-green);}
}
</style>