<template>
	<div>
		<button type="button" class="btnClear" v-on:click="clearTodo">Clear All</button>	
	</div>
</template>

<script>
export default {
	methods: {
		clearTodo: function(){
			this.$emit('clearAll');
		}
	}
}
</script>

<style scoped>
div	{padding:2.0rem;color:#555;text-align:center;}
.btnClear	{display:block;width:8.0rem;height:4.0rem;margin:0 auto;}
</style>