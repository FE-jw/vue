<template>
	<div>
		<h1>카트 페이지</h1>
		<ul class="list-cart" v-if="store.cartItems.length">
			<li v-for="(item, index) in store.cartItems" :key="index">
				<span class="idx">{{ index }}</span>
				<img :src="item.imageUrl" :alt="item.name">
				<div class="name">{{ item.name }}</div>
				<div class="price">{{ item.price }}</div>
			</li>
		</ul>
		<common-btn class="btn-buy">구매하기</common-btn>
	</div>
</template>

<script setup>
import { useStore } from '@/store/index.js';
const store = useStore();
</script>

<style lang="scss" scoped>
h1	{font-size:4.0rem;font-weight:900;text-align:center;}
.list-cart	{width:90%;margin:2.0rem auto 0;border:1px solid #ccc;
	li	{display:flex;align-items:center;padding:2.0rem;gap:1.0rem;
		& ~ li	{border-top:1px solid #ccc;}
		.idx	{font-weight:900;}
		img	{flex:none;width:10.0rem;}
		.name	{flex:1;}
		.price	{flex:none;font-size:1.2rem;color:#777;}
	}
}
.btn-buy	{display:block;min-width:20.0rem;margin:2.0rem auto 0;}
</style>