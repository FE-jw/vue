<template>
	<ListItem></ListItem>
	<!--
	<ul class="hacker-news">
		<li v-for="item in ask" :key="item.id">
			<div class="item">
				<div class="points">
					{{ item.points || 0 }}
				</div>
				<h2 class="tit">
					<a :href="item.url" target="_blank">{{ item.title }}</a>
				</h2>
				<small class="user" v-if="item.user">
					<router-link :to="`/item/${item.id}`">{{ item.user }}</router-link>
				</small>
			</div>
		</li>
	</ul>
	-->
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
	components: {
		ListItem
	}
}
</script>