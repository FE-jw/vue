<template>
	<div class="app">
		<main>
			<h1>상품 리스트</h1>
			<div>
				<input type="text" placeholder="상품명">
			</div>
			<ul>
				<li class="item" v-for="product in products.list" :key="product.id" @click="moveToDetailPage(product.id)">
					<div class="thumb">
						<img :src="product.imageUrl" :alt="product.name">
					</div>
					<div class="info">
						<!-- <div>id: {{ product.id }}</div> -->
						<h2>name: {{ product.name }}</h2>
						<span>price: {{ product.price }}</span>
					</div>
				</li>
			</ul>
		</main>
	</div>
</template>

<script setup>
const router = useRouter();
const products = reactive({});
// const { data } = await useFetch('http://localhost:3000/products');
const { data } = await useAsyncData(
	'productList',
	() => $fetch('http://localhost:3000/products')
);
products.list = data;

const moveToDetailPage = id => {
	router.push(`detail/${id}`);
};
</script>

<style lang="scss" scoped>
.app	{padding:0 2.0rem;}
h1	{padding:2.0rem 0;font-size:4.0rem;font-weight:900;text-align:center;}
input	{display:block;width:30.0rem;height:4.0rem;margin:0 auto;padding:0 1.0rem;}
ul	{margin:2.0rem auto 0;border:1px solid #777;font-size:2.0rem;
	li	{display:flex;gap:1.0rem;padding:1.0rem;font-size:1.4rem;list-style:none;
		& ~ li	{border-top:1px solid #777;}
		.info	{flex:1;
			h2	{font-size:2.0rem;font-weight:500;}
			span	{display:block;margin-top:1.0rem;color:#777;text-align:right;}
		}
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