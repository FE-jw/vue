<template>
	<div class="nasa-today">
		<h2>Today's NASA</h2>
		<div class="img-wrap">
			<figure>
				<img :src="this.$store.todayInfo.url" alt="">
			</figure>
			<div class="desc">
				<span class="time">{{ this.$store.todayInfo.date }}</span>
				<p>{{ this.$store.todayInfo.explanation }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
$nasaBlue: #0B3D91;
$nasaRed: #FC3D21;
$radius: 0.4rem;
$borderColor: #ccc;

.nasa-today	{margin-top:5.0rem;
	h2	{font-size:5.0rem;font-weight:600;text-align:center;}
	.img-wrap	{position:relative;
		figure	{margin-top:2.0rem;
			img	{width:100%;}
		}
		.desc	{width:100%;padding:3.0rem;position:absolute;left:0;bottom:0;background-color:rgba($nasaBlue, 0.4);box-sizing:border-box;
			.time	{display:block;margin-bottom:2.0rem;font-size:2.2rem;font-weight:500;color:#fff;}
			p	{
				$line: 5;
				padding-left:2.0rem;border-left:0.4rem solid $nasaRed;color:#fff;
				overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:$line;-webkit-box-orient:vertical;max-height:#{calc($line * 2)}em;word-wrap:break-word;
				@media all and (min-width: 768px)	{
					$line: 3;
					-webkit-line-clamp:$line;-webkit-box-orient:vertical;max-height:#{calc($line * 2)}em;
				}
			}
		}
	}
}
</style>