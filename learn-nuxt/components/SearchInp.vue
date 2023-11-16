<template>
	<div class="search-wrap">
		<input type="text" placeholder="상품명" :value="defaultValue" @input="emit('onUpdateInput', $event.target.value)" @keydown.enter="emit('onSearch')">
		<global-btn type="button" @click="emit('onSearch')">search</global-btn>
	</div>
</template>

<script setup>
const emit = defineEmits(['onUpdateInput', 'onSearch']);
const defaultValue = ref('');
</script>

<style lang="scss" scoped>
.search-wrap	{display:flex;justify-content:center;align-items:center;gap:1.0rem;
	input	{width:30.0rem;height:4.0rem;padding:0 1.0rem;font-size:1.6rem;color:#000;box-sizing:border-box;}
	button	{width:10.0rem;height:4.0rem;}
}
</style>