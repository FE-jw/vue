<template>
	<ul>
		<li v-for="(data, index) in inpData" :key="index">
			<input type="text" v-model="inpData[index]">
		</li>
	</ul>
	<CommonBtn type="button" @click="addList">추가</CommonBtn>
	<CommonBtn type="button" @click="pickList">pick</CommonBtn>
</template>

<script setup>
import { reactive } from 'vue';

const inpData = reactive(['']);
const addList = () => {
	inpData.push('');
};
const pickList = () => {
	// const randomIndex = Math.floor(Math.random() * inpData.length);
};
</script>

<style lang="scss" scoped>
ul	{list-style:none;}
</style>