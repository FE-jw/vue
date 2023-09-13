<template>
	<div id="app">
		<tool-bar></tool-bar>
		<section class="container">
			<router-view></router-view>
		</section>
		<loading-spin :loading="loadingStatus"></loading-spin>
	</div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import LoadingSpin from './components/LoadingSpin.vue';
import bus from '@/utils/bus.js';

export default {
	components: {
		ToolBar,
		LoadingSpin
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

		// .env 테스트
		console.log(process.env.VUE_APP_TITLE);
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
a	{color:inherit;text-decoration:none;}
ul, dl, ol	{list-style:none;}
#app	{line-height:1.3;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:1.6rem;font-weight:300;color:var(--main-dark);}
</style>