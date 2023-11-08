<template>
	<div>
		error
		<br>
		{{ error }}
	</div>
</template>

<script setup>
const error = useError();
console.log(error);
</script>

<style lang="scss" scoped>
	$color: #d33;
	div	{color:$color;}
</style>