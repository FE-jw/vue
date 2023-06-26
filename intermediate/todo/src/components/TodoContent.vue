<template>
	<section class="container">
		<todo-input v-on:submitAdd="todo => this.newTodo = todo"></todo-input>
		<todo-list v-bind:propsdata="newTodo"></todo-list>
	</section>
</template>

<script>
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';

export default {
	data: function(){
		return	{
			newTodo: ''
		}
	},
	components: {
		'todo-input': TodoInput,
		'todo-list': TodoList
	}
}
</script>

<style>

</style>