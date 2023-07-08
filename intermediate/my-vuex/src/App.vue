<template>
	<div id="app">
		<PostWrite></PostWrite>
		<PostList></PostList>
	</div>
</template>

<script>
import PostWrite from './components/PostWrite.vue';
import PostList from './components/PostList.vue';

export default {
	components: {
		PostWrite,
		PostList
	}
}
</script>

<style>
/* @import 'https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/css/font.min.css'; */
*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;font-size:5px;}
body    {margin:0;padding:0;line-height:1.2;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:1.6rem;font-weight:300;color:#000;}
button	{border:0;border-radius:0;cursor:pointer;}


</style>