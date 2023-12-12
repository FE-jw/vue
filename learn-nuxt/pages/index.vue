<template>
	<div class="app">
		<main>
			<h1>상품 리스트</h1>
			<search-inp
				@onUpdateInput="keyword => updateKeyword(keyword)"
				@onSearch="searchProduct"
			></search-inp>
			<ul>
				<li class="item" v-for="product in products.list" :key="product.id" @click="moveToDetailPage(product.id)">
					<div class="thumb">
						<img :src="product.imageUrl" :alt="product.name">
					</div>
					<div class="info">
						<h2>name: {{ product.name }}</h2>
						<span>price: {{ product.price }}</span>
					</div>
				</li>
			</ul>
			<nuxt-link to="/cart" class="move-cart">장바구니 바로가기</nuxt-link>
		</main>
	</div>
</template>

<script setup>
// 스토어
import { useStore } from '@/store/index.js';
const store = useStore();

// 라우터
const router = useRouter();

// 상품 리스트
const products = reactive({});
const { data } = await useAsyncData(
	'productList',
	() => $fetch('http://localhost:3000/products')
);
products.list = data;

// 자세히 보기 페이지 이동
const moveToDetailPage = id => {
	router.push(`detail/${id}`);
};

// 키워드 저장
const searchKeyword = ref('');
const updateKeyword = keyword => searchKeyword.value = keyword;

// 검색 결과
/*
const searchProduct = async () => {
	const { data } = await useAsyncData(
		'filterResult',
		() => $fetch('http://localhost:3000/products', {
			params: {
				name_like: searchKeyword.value
			}
		})
	);

	products.list = data;
};
*/
const searchProduct = async () => {
	const data = await $fetch('http://localhost:3000/products', {
		params: {
			name_like: searchKeyword.value
		}
	}).catch(err => console.log(err));

	products.list = data;
};
</script>

<style lang="scss" scoped>
.app	{padding:0 2.0rem;}
h1	{padding:2.0rem 0;font-size:4.0rem;font-weight:900;text-align:center;}
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
.move-cart	{padding:1.0rem 2.0rem;position:fixed;right:2.0rem;bottom:2.0rem;border-radius:0.6rem;font-size:1.6rem;font-weight:700;color:#fff;background-color:#d33;text-decoration:none;}
</style>