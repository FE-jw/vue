<template>
	<header class="header">
		<h1 class="vue-tit">
			<SvgLogo></SvgLogo>
		</h1>
		<common-btn @click="$emit('onChangeTheme')">테마 변경</common-btn>
	</header>
</template>

<script>
import SvgLogo from './SvgLogo.vue';

export default {
	components: {
		SvgLogo
	}
}
</script>

<style lang="scss" scoped>
.header	{position:relative;border-bottom:1px solid rgba($vue-light, 0.5);
	.vue-tit	{display:flex;justify-content:center;align-items:center;height:8.0rem;font-weight:900;color:$vue-light;}
	button	{margin:0;position:absolute;right:1.0rem;top:50%;transform:translateY(-50%);}
}
</style>