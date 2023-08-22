<template>
	<div id="app">
		<tool-bar></tool-bar>
		<transition name="page">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
	methods: {
		fetchData(){
			console.log('hello');
		}
	},
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

*	{margin:0;padding:0;list-style:none;}
html	{-webkit-text-size-adjust:none;font-size:10px;}
body	{line-height:1.3;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:2.0rem;font-weight:300;color:var(--main-dark);}
a	{color:inherit;text-decoration:none;}
#app	{font-size:1.6rem;}
.hacker-news	{padding:1.0rem;
	li	{padding:1.0rem;
		& ~ li	{border-top:1px solid var(--main-gray);}
		.item	{display:flex;justify-content:space-between;
			.txt	{flex:1;padding-right:2.0rem;font-size:1.8rem;}
			.user	{flex-shrink:0;font-size:1.2rem;color:var(--main-gray);}
		}
	}
}

// Router Transition
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>