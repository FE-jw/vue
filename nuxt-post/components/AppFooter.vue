<template>
	<footer>
		<p class="copyright">&copy;JW</p>
		<change-theme v-if="!commonStore.isMobile"></change-theme>
	</footer>
</template>

<script setup>
const commonStore = useCommonStore();
</script>

<style lang="scss" scoped>
footer	{flex:none;padding:2.0rem;border-top:1px solid #999;
	.copyright	{font-size:1.2rem;color:#999;text-align:center;}
}
</style>