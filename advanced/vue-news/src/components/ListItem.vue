<template>
	<ul class="hacker-news">
		<li v-for="item in listItems" :key="item.id">
			<div class="item">
				<div class="points">
					{{ item.points || 0 }}
				</div>
				<h2 class="tit">
					<template v-if="item.domain">
						<a :href="item.url" target="_blank">{{ item.title }}</a>
					</template>
					<template v-else>
						<router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
					</template>
				</h2>
				<small class="user" v-if="item.user">
					<router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
				</small>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	computed: {
		listItems(){
			return this.$store.state.list;
		}
	}
}
</script>

<style lang="scss" scoped>
.hacker-news	{padding:1.0rem;
	li	{padding:1.0rem;
		& ~ li	{border-top:1px solid var(--main-gray);}
		.item	{display:flex;justify-content:space-between;align-items:center;
			.points	{flex-shrink:0;min-width:5.0rem;margin-right:1.0rem;padding-right:0.5rem;border-right:1px solid var(--main-dark);font-weight:500;box-sizing:border-box;}
			.tit	{flex:1;padding-right:2.0rem;font-size:1.8rem;font-weight:300;
				a	{
					&:hover	{text-decoration:underline;}
				}
			}
			.user	{flex-shrink:0;font-size:1.2rem;color:var(--main-gray);font-weight:100;}
		}
	}
}
</style>