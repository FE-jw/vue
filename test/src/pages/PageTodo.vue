<template>
	<section class="todo-wrap">
		<h2 class="tit">TodoLists</h2>
		<ul class="list-todo">
			<li v-for="todoList in todoLists.slice(divide, divide + 10)" :key="todoList.id">
				<span class="num">{{ todoList.id }}</span>
				<span class="todo">{{ todoList.title }}</span>
			</li>
		</ul>
		<common-btn @click="changeList">다음 10개</common-btn>
	</section>
</template>

<script>
export default {
	data(){
		return{
			todoLists: [],
			divide: 0
		}
	},
	created(){
		fetch('https://jsonplaceholder.typicode.com/todos')
		.then(response => response.json())
		.then(json => {
			this.todoLists = json;
		});
	}	,
	methods: {
		changeList(){
			if(this.divide + 10 < 200){
				this.divide += 10;
			}else{
				alert('마지막 리스트입니다.');
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.todo-wrap	{margin-top:2.0rem;
	.list-todo	{
		.tit	{font-size:2.0rem;font-weight:bold;}
		li	{list-style:none;display:flex;}
		.num	{padding-right:1.0rem;}
		.todo	{font-size:1.6rem;}
	}
}
</style>