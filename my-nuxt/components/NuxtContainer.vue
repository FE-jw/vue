<template>
	<section class="container">
		<div>count: {{ cntStore.count }}</div>
		<div>double count: {{ cntStore.cntDouble }}</div><br>
		<global-btn @click="cntStore.cntPlus">cntPlus</global-btn>
		<global-btn @click="cntStore.cntMinus">cntMinus</global-btn>
	</section>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js';

const cntStore = useCounterStore();
</script>

<style lang="scss" scoped>
.container	{flex:1;padding:2.0rem;}
</style>