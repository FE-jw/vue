<template>
	<div>
		products: 
		<ul>
			<li v-for="product in products" :key="product.id">
				{{ product }}
			</li>
		</ul>
	</div>
</template>

<script setup>
const products = ref([]);

products.value = await $fetch('http://localhost:3000/products').catch(error => error.data);
</script>

<style lang="scss" scoped>
ul	{list-style:none;}
</style>