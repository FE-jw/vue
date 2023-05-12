<template>
	<p :class="color">{{ txt }}</p>
</template>

<script>
export default {
	name: 'HelloJw',
	props: {
		txt: String,
		color: String
	}
}
</script>

<style scoped>
	p	{margin:50px 0;background-color:#d33;}
	p.white	{color:#fff;}
</style>