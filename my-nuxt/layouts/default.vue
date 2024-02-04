<template>
	<nuxt-header></nuxt-header>
	<div class="container">
		<slot />
	</div>
	<nuxt-footer></nuxt-footer>
</template>

<style lang="scss" scoped>
.container	{flex:1;padding:2.0rem;}
</style>