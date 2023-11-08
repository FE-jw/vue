<template>
	<button type="button">
		<slot></slot>
	</button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
button	{padding:1.0rem 2.0rem;border:1px solid rgba($nuxt-green, 0.5);line-height:1.3;font-size:1.4rem;color:#fff;background-color:var(--main-dark);transition:background-color 0.2s;
	&:hover	{background-color:rgba($nuxt-green, 0.2);}
}
</style>