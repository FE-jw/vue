<template>
	<header class="header">
		<h1 class="vue-tit">
			<main-logo class="logo"></main-logo>
		</h1>
		<common-btn @click="$emit('onChangeTheme')">테마 변경</common-btn>
	</header>
</template>

<script>
import MainLogo from '../assets/MainLogo.vue';

export default {
	components: {
		'main-logo': MainLogo
	}
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color';

.header	{position:relative;border-bottom:1px solid rgba($vue-light, 0.5);
	.vue-tit	{display:flex;justify-content:center;align-items:center;height:8.0rem;font-weight:900;color:$vue-light;
		.logo	{width:5.0rem;height:5.0rem;vertical-align:top;
			&:hover	{
				:deep path	{transition:fill 0.2s;
					&:nth-child(1)	{fill:$vue-dark;}
					&:nth-child(2)	{fill:$vue-light;}
				}
			}
		}
	}
	button	{margin:0;position:absolute;right:1.0rem;top:50%;transform:translateY(-50%);}
}
</style>