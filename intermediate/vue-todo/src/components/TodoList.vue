<template>
	<div>
		<ul>
			<li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
				<button type="button" class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)">체크</button>
				<span v-bind:class="{textCompleted: todoItem.completed}" class="item">
					{{ todoItem.item }}
				</span>
				<button type="button" class="removeBtn" v-on:click="removeTodo(todoItem, index)">-</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['propsdata'],
	methods: {
		removeTodo: function(todoItem, index){
			this.$emit('removeItem', todoItem, index);
		},
		toggleComplete: function(todoItem, index){
			this.$emit('toggleItem', todoItem, index);
		}
	}
}
</script>

<style scoped>
ul	{margin-top:2.0rem;}
li	{display:flex;justify-content:space-between;align-items:center;height:5.0rem;color:#000;background-color:#fff;}
li ~ li	{margin-top:0.5rem;}
.item	{flex:1;padding:0 1.0rem;}
.removeBtn	{width:8.0rem;height:5.0rem;font-size:3.0rem;color:#fff;background-color:royalblue;vertical-align:middle;}
.textCompleted	{color:#ccc;text-decoration:line-through;}
.checkBtn	{color:#fff;background-color:#000;}
.checkBtnCompleted	{color:#000;background-color:#ccc;}
</style>