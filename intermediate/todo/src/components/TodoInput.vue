<template>
	<div class="push-info">
		<input type="text" placeholder="할 일 입력" v-model="newItem" v-on:keyup.enter="addTodo">
		<button type="button" class="btn-add" v-on:click="addTodo">+</button>
	</div>
</template>

<script>
export default {
	data: function(){
		return	{
			newItem: ''
		}
	},
	methods: {
		addTodo: function(){
			if(this.newItem != ''){
				const obj = {
					completed: false,
					item: this.newItem
				};
	
				localStorage.setItem(
					Date.now(), JSON.stringify(obj)
				);
				
				this.$emit('submitAdd', this.newItem);
				this.newItem = '';
			}else{
				alert('할 일을 제대로 입력해주세요');
			}
		}
	}
}
</script>

<style scoped>
.push-info	{display:flex;justify-content:space-between;}
</style>