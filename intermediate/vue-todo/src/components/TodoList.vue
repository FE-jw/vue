<template>
	<div>
		<ul>
			<li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
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
	data: function(){
		return	{
			todoItems: []
		}
	},
	created: function(){
		if(localStorage.length){
			for (let i = 0; i < localStorage.length; i++) {
				// console.log(
					// JSON.parse(localStorage.getItem(localStorage.key(i)))
				// );
				this.todoItems.push(
					JSON.parse(localStorage.getItem(localStorage.key(i)))
				);
			}
		}
	},
	methods: {
		removeTodo: function(todoItem, index){
			localStorage.removeItem(todoItem);
			this.todoItems.splice(index, 1);
		},
		toggleComplete: function(todoItem){
			todoItem.completed = !todoItem.completed;

			// 로컬 스토리지 데이터 갱신(업데이트 API가 없어서 삭제 후 추가)
			localStorage.removeItem(todoItem.item);
			localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
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