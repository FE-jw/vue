<template>
	<div>
		index
		<div>{{ data }}</div>
	</div>
</template>

<script setup>
// 왜 안되는지 확인
// definePageMeta({
  	// title: 'index'
// });

useHead({
  	title: 'index'
});

const { data, pending, error, refresh } = await useAsyncData(
  'hello',
  () => $fetch('/api/hello')
);
</script>

<style lang="scss" scoped>

</style>