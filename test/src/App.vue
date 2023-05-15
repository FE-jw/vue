<template>
	<div class="wrap">
		<VHeader/>
		<VContainer/>
		<VFooter/>
	</div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
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
html	{-webkit-text-size-adjust:none;font-size:10px;
	--vue-light: #41B883;
	--vue-dark: #35495E;
}

@import 'https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/css/font.min.css';

*	{margin:0;padding:0;}
body	{background-color:#000;}
#app	{line-height:1.3;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:14px;font-weight:200;color:#fff;}
.wrap	{display:flex;flex-direction:column;height:100vh;}
.container	{flex:1;}
</style>