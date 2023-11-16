<template>
	<div>
		<div><img :src="data.imageUrl" :alt="data.name"></div>
		<div>id: {{ data.id }}</div>
		<div>name: {{ data.name }}</div>
		<div>price: {{ data.price }}</div>
		<global-btn type="button" @click="addToCart">Add To Cart</global-btn>
	</div>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const id = route.params.id;

const { data } = await useAsyncData(
	'product',
	() => $fetch(`http://localhost:3000/products/${id}`)
);

const addToCart = () => {
	router.push('/cart');
};
</script>

<style lang="scss" scoped>

</style>0