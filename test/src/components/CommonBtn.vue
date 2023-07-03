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

button	{margin:0.5rem;padding:1.0rem;}
.wrap	{
	&[data-theme='dark']	{
		button	{border:1px solid rgba(#fff, 0.2);color:$vue-light;background-color:rgba($vue-dark, 0.5);}
	}
	&[data-theme='light']	{
		button	{border:1px solid rgba(#111, 0.2);color:$vue-dark;background-color:rgba($vue-light, 0.1);}
	}
}
</style>