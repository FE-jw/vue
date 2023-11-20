<template>
	<div>
		<div>{{ randomResult.user }}</div>
	</div>
</template>

<script setup>
const { params } = useRoute();
const routeInfo = {
	nat: params.nat,
	gender: params.gender,
	seed: params.seed,
	id: params.id
};
console.log(routeInfo);
const randomResult = reactive({});

const { data } = await useAsyncData('detail',
	() => $fetch('https://randomuser.me/api', {
		params: {
			nat: routeInfo.nat,
			gender: routeInfo.gender,
			seed: routeInfo.seed,
			results: 10
		}
	})
);
randomResult.user = data.value.results[routeInfo.id];
</script>

<style lang="scss" scoped>

</style>