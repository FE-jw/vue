<template>
	<ul>
		<li v-for="post in posts" :key="post.id">
			<h2 class="tit">포스팅 제목: {{ post.tit }}</h2>
			<p class="desc">포스팅 내용: {{ post.desc }}</p>
		</li>
	</ul>
</template>

<script>
export default {
	props: ['posts']
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/color';

ul	{margin-top:2.0rem;
	li	{list-style:none;padding:1.0rem;
		& ~ li	{margin-top:0.5rem;}
	}
}
.wrap	{
	&[data-theme='dark']	{
		ul	{
			li	{border:1px solid rgba($vue-light, 0.3);}
		}
	}
	&[data-theme='light']	{
		ul	{
			li	{border:1px solid $vue-dark;}
		}
	}
}
</style>