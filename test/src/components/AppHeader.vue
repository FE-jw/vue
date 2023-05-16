<template>
	<header class="header">
		<h1 class="vue-tit">
			<svg class="logo" xmlns="http://www.w3.org/2000/svg" width="800" height="800" fill="none" viewBox="0 0 32 32"><path fill="#41B883" d="m2 4 14 24L30 4h-5.5L16 18.5 7.5 4H2Z"/><path fill="#35495E" d="M7.5 4 16 18.5 24.5 4h-5l-3.435 6.013L12.5 4h-5Z"/></svg>
			<!-- <span class="tit">AEK</span> -->
		</h1>
	</header>
</template>

<script>
// import Logo from '../assets/logo.svg';

export default {

}
</script>

<style lang="scss">
@import '../assets/scss/color';

.header	{border-bottom:1px solid rgba($vue-light, 0.5);
	.vue-tit	{display:flex;justify-content:center;align-items:center;height:8.0rem;font-weight:900;color:$vue-light;
		.logo	{width:5.0rem;height:5.0rem;vertical-align:top;}
	}
}
</style>