<template>
	<div id="app">
		<TodoHeader></TodoHeader>
		<div class="container">
			<TodoInput></TodoInput>
			<TodoList></TodoList>
		</div>
		<TodoFooter></TodoFooter>
	</div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
	components: {
		// 컴포넌트 태그명: 컴포넌트 내용
		'TodoHeader': TodoHeader,
		'TodoInput': TodoInput,
		'TodoList': TodoList,
		'TodoFooter': TodoFooter
	}
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/css/font.min.css';

*	{margin:0;padding:0;}
html	{font-size:10px;-webkit-text-size-adjust:none;}
body	{font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:16px;font-weight:300;color:#fff;background-color:#111;}
input	{border:none;font-family:inherit;font-weight:inherit;color:#000;}
input::placeholder	{font-size:1.6rem;color:#777;}
button	{border:none;font-weight:500;cursor:pointer;}
li	{list-style:none;}
#app	{display:flex;flex-direction:column;width:95%;min-width:360px;max-width:500px;min-height:100vh;margin:0 auto;}
.container	{flex:1;}
</style>