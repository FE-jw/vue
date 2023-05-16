<template>
	<div class="wrap">
		<VHeader />
		<VContainer />
		<VFooter />
	</div>
</template>

<script>
import VHeader from './components/VHeader.vue';
import VContainer from './components/VContainer.vue';
import VFooter from './components/VFooter.vue';

export default {
	name: 'App',
	components: {
		VHeader,
		VContainer,
		VFooter
	}
}
</script>

<style lang="scss">
@import 'https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/css/font.min.css';
@import './assets/scss/color';

*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;font-size:10px;}
body	{background-color:#000;}
#app	{line-height:1.3;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:1.4rem;font-weight:200;color:#fff;}
.wrap	{display:flex;flex-direction:column;min-height:100vh;}
</style>