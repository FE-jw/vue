<template>
	<ul class="todo-list">
		<li v-for="(todoItem) in todoItems" :key="todoItem.key" :class="{complete: todoItem.completed}">
			<button type="button" class="btn-check" v-on:click="toggleComplete(todoItem)">체크</button>
			<span class="todo">{{ todoItem }}</span>
			<button type="button" class="todo-remove">삭제</button>
		</li>
	</ul>
</template>

<script>
export default {
	data: function(){
		return	{
			todoItems: []
		}
	},
	created: function(){
		if(localStorage.length){
			for (let index = 0; index < localStorage.length; index++) {
				this.todoItems.push(
					JSON.parse(
						localStorage.getItem(
							localStorage.key(index)
						)
					)
				);
			}
		}
	},
	methods: {
		toggleComplete: function(todoitem){
			todoitem.completed = !todoitem.completed;
		}
	}
}
</script>

<style scoped>
.todo-list	{margin-top:2.5rem;padding-top:2.5rem;border-top:1px solid #35495E;}
.todo-list li	{display:flex;align-items:center;min-height:5.0rem;padding:1.0rem 2.0rem;font-size:1.6rem;color:#35495E;background-color:#fff;box-sizing:border-box;}
.todo-list li ~ li	{margin-top:1.0rem;}
.todo-list li .todo	{font-size:1.4rem;padding:0 1.0rem;}
.todo-list li .btn-check	{background-color:#ccc;}
.todo-list li .todo	{font-size:1.4rem;padding:0 1.0rem;}
.todo-list li.complete .btn-check	{color:#fff;background-color:#111;}
.todo-list li.complete .todo	{color:#ccc;text-decoration:line-through;}
.todo-list li .todo-remove	{background-color:#ccc;}
</style>