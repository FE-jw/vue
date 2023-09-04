<template>
	<h1>index.vue</h1>
	<nav>
		<nuxt-link to="/about">about</nuxt-link>
	</nav>
	<p>{{ data.hello }}</p>
</template>

<script setup>
const { data } = await useFetch('/api/hello');
</script>

<style lang="scss" scoped>

</style>