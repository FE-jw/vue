<template>
	<div>
		<h2 class="tit">라우트 테스트</h2>
		<nav>
			<router-link :to="{name: 'RouteHome'}">Home</router-link>
			<router-link :to="{name: 'RouteAbout'}">About</router-link>
			<router-link :to="{name: 'RouteIntro'}">Intro</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
.tit	{margin-top:5.0rem;font-size:4.0rem;font-weight:900;}
</style>