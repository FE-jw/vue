<template>
	<div>
		<ul>
			<li v-for="todoItem in todoItems" v-bind:key="todoItem">
				<span class="item">
					{{ todoItem }}
				</span>
				<button type="button" class="removeBtn" v-on:click="removeTodo">-</button>
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
				this.todoItems.push(
					localStorage.key(i)
				);
			}
		}
	},
	methods: {
		removeTodo: function(){

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
</style>