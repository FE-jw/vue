<template>
	<header>
		<h1>
			<nuxt-link to="/">
				<nuxt-logo />
			</nuxt-link>
		</h1>
		<app-nav></app-nav>
	</header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
header	{display:flex;justify-content:space-between;align-items:center;height:60px;padding:0 10px;border-bottom:1px solid var(--default-text);
	h1	{width:60px;height:40px;}
}
</style>