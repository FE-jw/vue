<template>
	<!-- <Header></Header> -->
	<div class="container">
		<h1>
			<nuxt-link to="/">HOME</nuxt-link>
		</h1>
		<slot />
	</div>
	<!-- <Footer></Footer> -->
</template>

<style lang="scss">
*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;font-size:10px;}
body	{line-height:1.3;font-family:'Pretendard', sans-serif;font-size:1.6rem;color:#000;}
</style>