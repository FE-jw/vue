<template>
	<div id="app">
		<div class="wrap">
			<todo-header></todo-header>
			<todo-content></todo-content>
		</div>
	</div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoContent from './components/TodoContent.vue';

export default {
	name: 'App',
	components: {
		'todo-header': TodoHeader,
		'todo-content': TodoContent
	}
}
</script>

<style>
*	{margin:0;padding:0;list-style:none;}
html 	{font-size:10px;-webkit-text-size-adjust:auto;}
body	{background-color:#000;}
#app	{display:flex;align-items:center;min-width:360px;max-width:600px;min-height:100vh;margin:0 auto;line-height:1.2;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:2.0rem;color:#fff;}
.wrap	{width:100%;}
input[type='text']	{display:block;width:100%;height:5.0rem;padding:0 2.0rem;border:none;border-radius:0;font-size:1.6rem;color:#35495E;background:#fff;box-sizing:border-box;}
input::placeholder	{color:#999;}
button	{border:none;border-radius:0;background:none;cursor:pointer;}
.btn-add	{width:50px;line-height:1.2;font-size:4.0rem;font-weight:bold;color:#fff;background-color:#41B883;}
.btn-remove	{width:50px;line-height:1.2;font-size:4.0rem;font-weight:bold;color:#fff;background-color:#255c43;}
/* 
$vue-light: #41B883;
$vue-dark: #35495E;
 */
</style>
