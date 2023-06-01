<template>
	<div class="wrap">
		<h1>탭 콘텐츠 예제</h1>
		<ul class="tab_btn">
			<li><button type="button" v-on:click="$evt => tabChange(1)">탭 1</button></li>
			<li><button type="button" v-on:click="$evt => tabChange(2)">탭 2</button></li>
			<li><button type="button" v-on:click="$evt => tabChange(3)">탭 3</button></li>
			<li><button type="button" v-on:click="$evt => tabChange(4)">탭 4</button></li>
		</ul>
		<section v-show="this.currentTab === 1">
			<h2>콘텐츠 1</h2>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quidem corrupti architecto, velit voluptatum iste unde cum praesentium in laborum nulla sunt optio dolores fuga exercitationem ea dolore id obcaecati deserunt atque commodi asperiores at laudantium! Et quis nostrum, suscipit accusantium quo incidunt rem, magnam dicta quaerat culpa cupiditate eos numquam, iure rerum? Facilis ullam magni ipsa sapiente laudantium quos itaque ducimus labore repellat dicta reprehenderit, sit, quibusdam molestias dolor nisi architecto voluptate, possimus omnis debitis odit porro nemo soluta voluptatibus maiores. Omnis pariatur, dignissimos ratione libero quas esse voluptas aliquam nobis repudiandae, aperiam eum sit. Totam officia adipisci placeat.
		</section>
		<section v-show="this.currentTab === 2">
			<h2>콘텐츠 2</h2>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus temporibus dicta aut provident perspiciatis quod eaque commodi sint assumenda, doloremque architecto eveniet magni et numquam reprehenderit eligendi, neque consequatur.
		</section>
		<section v-show="this.currentTab === 3">
			<h2>콘텐츠 3</h2>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus veritatis adipisci, fugiat at eveniet reiciendis similique eos quisquam autem.
		</section>
		<section v-show="this.currentTab === 4">
			<h2>콘텐츠 4</h2>
			Lorem ipsum dolors sit amet consectetur adipisicing elit. Ipsam maxime quis voluptatum? Cupiditate, placeat cumque optio molestias consequuntur cum beatae esse, tempora, quia quae officiis asperiores provident et repellendus aut a voluptatibus nostrum in. Ab nostrum adipisci corrupti voluptatibus optio. Ullam libero reiciendis ut voluptates vitae quia aspernatur quibusdam. Deserunt, alias? Aliquam atque placeat quibusdam numquam cumque consectetur consequuntur inventore, ad cum omnis unde tenetur deleniti asperiores quasi, esse adipisci?
		</section>
	</div>
</template>

<script>
export default {
	data: function(){
		return	{
			currentTab: 1
		}
	},
	methods: {
		tabChange: function(index){
			this.currentTab = index;
		}
	}
}
</script>

<style scoped>
.wrap	{margin-top:50px;}
h1	{font-size:30px;}
li	{list-style:none;}
.tab_btn	{display:flex;padding:0;}
</style>