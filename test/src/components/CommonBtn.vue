<template>
	<button type="button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color';

button	{padding:10px;color:$vue-light;background-color:rgba($vue-dark, 0.5);}
</style>