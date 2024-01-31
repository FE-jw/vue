<template>
	<div class="post-content">
		<h2 class="post-tit">제목 {{ data.id }} {{ data.title }}</h2>
		<p class="post-body">내용 {{ data.id }}<br>{{ data.body + data.body + data.body + data.body + data.body + data.body }}</p>
	</div>
</template>

<script setup>
const route = useRoute();

const { data } = await useAsyncData(
	'posts',
	() => $fetch('https://jsonplaceholder.typicode.com/' + route.path)
);

useSeoMeta({
  title: 'JW nuxt-post:: ' + data.value.title,
  description: data.value.body
});
</script>

<style lang="scss" scoped>
.post-content	{max-width:70.0rem;margin:0 auto;padding:3.0rem;box-sizing:border-box;
	.post-tit	{font-size:3.0rem;}
	.post-body	{margin-top:4.0rem;}
}
</style>