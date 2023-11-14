<template>
	<div>
		<div><img :src="data.imageUrl" :alt="data.name"></div>
		<div>id: {{ data.id }}</div>
		<div>name: {{ data.name }}</div>
		<div>price: {{ data.price }}</div>
	</div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;

const { data } = await useAsyncData(
	'product',
	() => $fetch(`http://localhost:3000/products/${id}`)
);
</script>

<style lang="scss" scoped>

</style>