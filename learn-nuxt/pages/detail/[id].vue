<template>
	<div>
		<div><img :src="data.imageUrl" :alt="data.name"></div>
		<div>id: {{ data.id }}</div>
		<div>name: {{ data.name }}</div>
		<div>price: {{ data.price }}</div>
		<common-btn type="button" @click="addToCart">Add To Cart</common-btn>
	</div>
</template>

<script setup>
// import { useStore } from '@/store/index.js';
// const store = useStore();

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const { data } = await useAsyncData(
	'product',
	() => $fetch(`http://localhost:3000/products/${id}`)
);

const addToCart = async () => {
	await $fetch('http://localhost:3000/carts', {
		method: 'POST',
		body: data.value
	});

	router.push('/cart');
};

// useHead({
// 	title: 'jw nuxt detail',
// 	meta: [
// 		{ name: 'description', content: data.value.name },
// 		{ charset: 'test utf-8' }
// 	]
// })

useSeoMeta({
	title: 'jw nuxt detail',
	charset: 'test utf-8',
	description: data.value.name,
	ogImage: data.value.imageUrl,
	ogDescription: data.value.name
})
</script>

<style lang="scss" scoped>

</style>0