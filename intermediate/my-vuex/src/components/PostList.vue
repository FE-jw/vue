<template>
	<div>
		<h2 class="tit" v-if="this.$store.state.posts.length > 0">리스트</h2>
		<ul class="list">
			<li v-for="post in this.$store.state.posts" :key="post.id" @click="deletePosting(post.id)">
				<h3 class="post-tit">{{ post.title }}</h3>
				<p class="post-desc">{{ post.desc }}</p>
				<div class="post-date">{{ post.id }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	methods: {
		deletePosting(id){
			this.$store.commit('onDelete', id);
		}
	}
}
</script>

<style scoped>
.tit	{margin-top:10.0rem;padding:2.0rem;font-size:6.0rem;font-weight:800;}
.list	{list-style:none;}
.list li	{margin:0 2.0rem;padding:2.0rem;border:1px solid #000;}
.list li ~ li	{margin-top:1.0rem;}
.list .post-tit	{font-size:3.0rem;font-weight:800;}
.list .post-desc	{font-size:2.0rem;font-weight:500;}
</style>