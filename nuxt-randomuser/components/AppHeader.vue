<template>
	<header>
		<h1 @click="headerBg = '#fff'">Random User</h1>
	</header>
</template>

<script setup>
const headerBg = ref('#000');
</script>

<style lang="scss" scoped>
$tag: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" color="red" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 0 1 5.656 0L10 6.343l1.172-1.171a4 4 0 1 1 5.656 5.656L10 17.657l-6.828-6.829a4 4 0 0 1 0-5.656z" clip-rule="evenodd"/></svg>';
$base: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' color='red'%3E%3Cpath fill-rule='evenodd' d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z' clip-rule='evenodd'/%3E%3C/svg%3E";

header	{padding:4.0rem 1.0rem;border-bottom:1px solid var(--nuxt-green);
	h1	{font-size:4.0rem;font-weight:900;text-align:center;color:var(--nuxt-green);
		background-repeat:no-repeat;background-position:0 50%;background-size:auto 20%;
		background-color:v-bind(headerBg);
		// background-image:url('#{$tag}');
		// background-image:url("#{$base}");
	}
}
</style>