<template>
	<div class="inputBox">
		<input type="text" placeholder="할 일 입력" v-model="newTodoItem" v-on:keyup.enter="addTodo">
		<button type="button" class="addBtn" v-on:click="addTodo">+</button>
		<modal-default v-if="showModal" @close="showModal = false">
			<h3 slot="header">저기요!!</h3>
			<p slot="body">뭐라도 좀 입력을 해주시겠습니까?</p>
		</modal-default>
	</div>
</template>

<script>
import ModalDefault from './common/ModalDefault.vue';

export default {
	data(){
		return	{
			newTodoItem: '',
			showModal: false
		}
	},
	methods: {
		addTodo: function(){
			if(this.newTodoItem !== ''){
				this.$emit('addTodoItem', this.newTodoItem);
				this.clearInput();
			}else{
				this.showModal = !this.showModal;
			}
		},
		clearInput: function(){
			this.newTodoItem = '';
		}
	},
	components: {
		'modal-default': ModalDefault
	}
}
</script>

<style scoped>
.inputBox	{display:flex;justify-content:center;height:5.0rem;margin-top:2.0rem;}
.inputBox input	{flex:1;padding:0 1.0rem;font-size:1.6rem;}
.addBtn	{width:8.0rem;height:5.0rem;font-size:3.0rem;color:#fff;background-color:#d33;vertical-align:middle;}
</style>