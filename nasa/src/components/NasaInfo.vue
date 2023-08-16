<template>
	<ul>
		<li v-for="nasaData in nasaDatas" :key="nasaData.data[0].nasa_id">
			<img :src="nasaData.links[0].href" alt="" class="thumb">
			<div class="info-wrap">
				<h3 class="tit">{{ nasaData.data[0].title }}</h3>
				<p class="desc">{{ nasaData.data[0].description }}</p>
				<div class="hash-tag">
					<span v-for="(item, index) in nasaData.data[0].keywords" :key="index">#{{ item }}</span>
				</div>
			</div>
		</li>
	</ul> 
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['nasaDatas'])
	}
}
</script>

<style lang="scss" scoped>
ul	{margin-top:2.0rem;
	li	{list-style:none;display:flex;align-items:center;padding:2.0rem;border:1px solid var(--border-color);border-radius:var(--radius);
		& ~ li	{margin-top:2.0rem;}
		.thumb	{width:10.0rem;height:10.0rem;margin-right:3.0rem;}
		.info-wrap	{flex:1;
			.tit	{margin-bottom:1.0rem;font-size:3.0rem;font-weight:900;}
			.desc	{
				$line: 5;
				overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:$line;-webkit-box-orient:vertical;max-height:#{calc($line * 2)}em;word-wrap:break-word;
				@media all and (min-width: 768px)	{
					$line: 3;
					-webkit-line-clamp:$line;-webkit-box-orient:vertical;max-height:#{calc($line * 2)}em;
				}
			}
			.hash-tag	{display:flex;flex-wrap:wrap;gap:1.0rem;margin-top:2.0rem;
				span	{padding:1.0rem;color:#fff;background-color:var(--nasa-blue);}
			}
		}
	}
}
</style>