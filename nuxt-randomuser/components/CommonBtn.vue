<template>
	<button type="button"><slot /></button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
button	{min-height:4.0rem;padding:0 2.0rem;border:none;border-radius:0;line-height:1.2;font-size:1.6rem;font-weight:600;color:#fff;background-color:darken($nuxt-green, 5%);cursor:pointer;transition:background-color 0.2s;
	&:hover	{background-color:darken($nuxt-green, 20%);}
}
</style>