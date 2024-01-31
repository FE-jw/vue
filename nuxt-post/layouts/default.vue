<template>
	<div id="app" :data-theme="commonStore.theme">
		<app-header></app-header>
		<main>
			<slot />
		</main>
		<app-footer></app-footer>
		<app-pop v-if="popStore.state"></app-pop>
	</div>
</template>

<script setup>
const commonStore = useCommonStore();
const popStore = usePopStore();

onBeforeMount(() => {
	commonStore.isMobile = window.matchMedia('(max-width: 767px)').matches

	window.matchMedia('(max-width: 767px)').addEventListener('change', match => {
		commonStore.isMobile = match.matches;
	});
})

onMounted(() => {
	// commonStore.isMobile = window.matchMedia('(max-width: 767px)').matches;
	
});
</script>

<style lang="scss">
#app	{
	--nuxt-green: #00DC82;
	--font-default: 'Pretendard', Arial, Helvetica, sans-serif;
	display:flex;flex-direction:column;min-width:320px;min-height:100vh;min-height:100dvh;line-height:1.3;font-family:var(--font-default);font-size:16px;font-weight:400;color:var(--default-text);background-color:var(--default-reverse);

	// Light Mode
	&[data-theme='light']	{
		--default-text: #111;
		--default-reverse: #fff;
	}

	// Dark Mode
	&[data-theme='dark']	{
		--default-text: #fff;
		--default-reverse: #111;
	}

	// Content
	main	{flex:1;padding:2.0rem 0;}
}
</style>