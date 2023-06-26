<template>
	<div>
		<ul class="todo-list">
			<li v-for="(todoItem, index) in todoItems" :key="todoItem.id" :class="{complete: todoItem.completed}">
				<button type="button" class="btn-check" v-on:click="toggleComplete(todoItem, index)">체크</button>
				<span class="todo">{{ todoItem }}</span>
				<button type="button" class="btn-remove" v-on:click="removeTodo(todoItem, index)">-</button>
			</li>
		</ul>
		<button type="button" class="btn-clear" v-on:click="clearTodo" v-show="this.todoItems.length >= 2">모두 삭제</button>
	</div>
</template>

<script>
export default {
	data: function(){
		return	{
			todoItems: []
		}
	},
	props: ['propsdata'],
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
		toggleComplete: function(todoitem, index){
			const toggleKey = localStorage.key(index);
			const objVal = JSON.parse(localStorage.getItem(toggleKey));

			objVal.completed = !objVal.completed;
			todoitem.completed = !todoitem.completed;

			localStorage.setItem(toggleKey, JSON.stringify(objVal));
		},
		removeTodo: function(todoItem, index){
			const removeKey = localStorage.key(index);

			this.todoItems.splice(index, 1);
			localStorage.removeItem(removeKey);
		},
		clearTodo: function(){
			this.todoItems = [];
			localStorage.clear();
		}
	},
	watch: {
		propsdata(){
			this.todoItems.push(
				JSON.parse(
					localStorage.getItem(
						localStorage.key(localStorage.length - 1)
					)
				)
			);
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
.btn-clear	{display:block;width:30%;margin:20px auto 0;padding:10px;line-height:1.2;font-size:2.0rem;font-weight:bold;color:#fff;background-color:#255c43;}
</style>