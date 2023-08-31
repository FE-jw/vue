<template>
	<div id="app">
		<tool-bar></tool-bar>
		<section class="container">
			<router-view></router-view>
		</section>
		<Spinner :loading="loadingStatus"></Spinner>
	</div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from '@/utils/bus.js';

export default {
	components: {
		ToolBar,
		Spinner
	},
	data(){
		return {
			loadingStatus: false
		}
	},
	methods: {
		startSpinner(){
			this.loadingStatus = true;
		},
		endSpinner(){
			this.loadingStatus = false;
		}
	},
	created(){
		bus.$on('start:spinner', this.startSpinner);
		bus.$on('end:spinner', this.endSpinner);
	},
	beforeDestroy(){
		bus.$off('start:spinner', this.startSpinner);
		bus.$off('end:spinner', this.endSpinner);
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