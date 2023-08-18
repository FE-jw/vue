<template>
	<div class="wrap" :data-theme="this.theme">
		<AppHeader @onChangeTheme="changeTheme"></AppHeader>
		<AppContainer :propsdata="lang"></AppContainer>
		<AppFooter></AppFooter>
	</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppContainer from './components/AppContainer.vue';
import AppFooter from './components/AppFooter.vue';

export default {
	name: 'App',
	data(){
		return{
			lang: document.documentElement.lang,
			theme: 'dark'
		}
	},
	methods: {
		changeTheme(){
			if(this.theme === 'dark'){
				this.theme = 'light';
			}else{
				this.theme = 'dark';
			}
		}
	},
	components: {
		AppHeader,
		AppContainer,
		AppFooter
	}
}
</script>

<style lang="scss">
*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;font-size:10px;}
button	{border:0;font-family:inherit;font-size:1.4rem;font-weight:inherit;background:none;cursor:pointer;}
.wrap	{display:flex;flex-direction:column;min-height:100vh;line-height:1.3;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:1.4rem;font-weight:200;
	&[data-theme='dark']	{color:#fff;background-color:#111;}
	&[data-theme='light']	{color:#111;background-color:#fff;}
}
</style>