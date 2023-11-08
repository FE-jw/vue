<template>
	<div>
		home
		{{ num }}
		<nuxt-link to="/main">main</nuxt-link>
	</div>
</template>

<script setup>
const num = ref(0);
</script>

<style lang="scss" scoped>

</style>