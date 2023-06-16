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

button	{margin:5px;padding:10px;color:$vue-light;border:1px solid rgba(#fff, 0.2);background-color:rgba($vue-dark, 0.5);}
</style>