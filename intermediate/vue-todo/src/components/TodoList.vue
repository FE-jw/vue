<template>
	<div>
		<transition-group tag="ul" name="list">
			<li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item">
				<button type="button" class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)">체크</button>
				<span v-bind:class="{textCompleted: todoItem.completed}" class="item">
					{{ todoItem.item }}
				</span>
				<button type="button" class="removeBtn" v-on:click="removeTodo(todoItem, index)">-</button>
			</li>
		</transition-group>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	methods: {
		removeTodo(todoItem, index){
			this.$store.commit('removeOneItem', { todoItem, index });
		},
		toggleComplete(todoItem, index){
			this.$store.commit('toggleOneItem', { todoItem, index });
		}
	},
	computed: {
		// todoItems(){
			// return this.$store.getters.storedTodoItems;
		// },
		...mapGetters(['storedTodoItems'])
		// ...mapGetters({
			// todoItems: 'storedTodoItems'	// 이름 바꿔서 쓸 수 있음(이럴 땐 Array 대신 Object 형식 이용)
		// })
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

/* 리스트 아이템 Transition Test */
.list-enter-active, .list-leave-active {
	transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>