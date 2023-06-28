<template>
	<div class="inputBox">
		<input type="text" placeholder="할 일 입력" v-model="newTodoItem" v-on:keyup.enter="addTodo">
		<button type="button" class="addBtn" v-on:click="addTodo">+</button>
	</div>
</template>

<script>
export default {
	data: function(){
		return	{
			newTodoItem: ''
		}
	},
	methods: {
		addTodo: function(){
			if(this.newTodoItem !== ''){
				this.$emit('addTodoItem', this.newTodoItem);
				this.clearInput();
			}
		},
		clearInput: function(){
			this.newTodoItem = '';
		}
	}
}
</script>

<style scoped>
.inputBox	{display:flex;justify-content:center;height:5.0rem;margin-top:2.0rem;}
.inputBox input	{flex:1;padding:0 1.0rem;font-size:1.6rem;}
.addBtn	{width:8.0rem;height:5.0rem;font-size:3.0rem;color:#fff;background-color:#d33;vertical-align:middle;}
</style>