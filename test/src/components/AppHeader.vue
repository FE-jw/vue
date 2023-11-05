<template>
	<header class="header">
		<h1 class="vue-tit">
			<svg-logo></svg-logo>
		</h1>
		<common-btn @click="store.setTheme">테마 변경</common-btn>
	</header>
</template>

<script setup>
import SvgLogo from '@/components/svg/SvgLogo.vue';
import { useStore } from '@/stores/store.js';

const store = useStore();
</script>

<style lang="scss" scoped>
.header	{position:relative;border-bottom:1px solid rgba($vue-light, 0.5);
	.vue-tit	{display:flex;justify-content:center;align-items:center;height:8.0rem;font-weight:900;color:$vue-light;}
	button	{margin:0;position:absolute;right:1.0rem;top:50%;transform:translateY(-50%);}
}
</style>