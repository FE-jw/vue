<template>
	<header>
		<h1 class="main-tit">
			<span class="tit">NASA</span>
			<NasaLogo></NasaLogo>
		</h1>
	</header>
</template>

<script>
import NasaLogo from './svg/NasaLogo.vue';

export default {
	components: {
		NasaLogo
	}
}
</script>

<style lang="scss" scoped>
header	{display:flex;justify-content:center;align-items:center;padding:4.0rem;
	.main-tit	{
		.tit	{overflow:hidden;position:absolute;left:0;top:0;width:1px;height:1px;padding:0;border:0;clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);}
	}
}
</style>