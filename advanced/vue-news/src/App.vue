<template>
	<div id="app">
		<tool-bar></tool-bar>
		<section class="container">
			<router-view></router-view>
		</section>
	</div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
	components: {
		ToolBar
	}
}
</script>

<style lang="scss">
:root	{
	--main-yellow: #fff01e;
	--main-dark: #111;
	--main-gray: #999;
}

*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;font-size:10px;}
body	{line-height:1.3;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:2.0rem;font-weight:300;color:var(--main-dark);}
a	{color:inherit;text-decoration:none;}
ul, dl, ol	{list-style:none;}
#app	{font-size:1.6rem;}
</style>