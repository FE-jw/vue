<template>
	<div>
		<h2>상품 리스트</h2>
		<ul>
			<li v-for="product in products.list" :key="product.id">
				<div class="thumb">
					<img :src="product.imageUrl" :alt="product.name">
				</div>
				<div class="info">
					<!-- <div>id: {{ product.id }}</div> -->
					<div>name: {{ product.name }}</div>
					<div>price: {{ product.price }}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
const products = reactive({});
const { data } = await useFetch('http://localhost:3000/products');

products.list = data;
</script>

<style lang="scss" scoped>
ul	{width:90%;margin:2.0rem auto 0;border:1px solid #777;font-size:2.0rem;
	li	{display:flex;gap:1.0rem;padding:1.0rem;font-size:1.4rem;list-style:none;
		& ~ li	{border-top:1px solid #777;}
		.info	{flex:1;}
		.thumb	{overflow:hidden;
			img	{width:10.0rem;vertical-align:top;transition:transform 0.2s;}
		}
		&:hover	{
			.thumb	{
				img	{transform:scale(1.2);}
			}
		}
	}
}
</style>