<template>
	<div>
		error
		{{ error }}
	</div>
</template>

<script setup>
const error = useError();
console.log(error);
</script>

<style lang="scss" scoped>

</style>