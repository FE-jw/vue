<template>
	<section class="container">
		<todo-input></todo-input>
		<todo-list></todo-list>
	</section>
</template>

<script>
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';

export default {
	components: {
		'todo-input': TodoInput,
		'todo-list': TodoList
	}
}
</script>

<style>

</style>