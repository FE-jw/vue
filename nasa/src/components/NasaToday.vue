<template>
	<div class="nasa-today">
		<h2>Today's NASA</h2>
		<div class="img-wrap" v-show="this.info.explanation">
			<figure>
				<img :src="this.info.url" alt="">
			</figure>
			<div class="desc">
				<span class="time">{{ this.info.date }}</span>
				<p>{{ this.info.explanation }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { useStore } from 'vuex';

export default {
	data(){
		return{
			info: {
				url: '',
				date: '',
				explanation: ''
			}
		}
	},
	created(){
		const store = useStore();
		
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${store.state.myKey}`)
			.then((res) => res.json())
			.then((data) => {
				this.info.url = data.url;
				this.info.date = data.date;
				this.info.explanation = data.explanation;
			})
			.catch((error) => {
				console.log(error);
				alert('문제가 생겼습니다. 잠시 후 다시 시도해주세요.');
			});
	}
}
</script>

<style lang="scss" scoped>
.nasa-today	{margin-top:5.0rem;
	h2	{font-size:5.0rem;font-weight:900;text-align:center;}
	.img-wrap	{position:relative;
		figure	{margin-top:2.0rem;}
		.desc	{width:100%;padding:3.0rem;position:absolute;left:0;bottom:0;background-color:rgba(#0B3D91, 0.4);box-sizing:border-box;
			.time	{display:block;margin-bottom:2.0rem;font-size:2.2rem;font-weight:500;color:#fff;}
			p	{
				$line: 5;
				padding-left:2.0rem;border-left:0.4rem solid var(--nasa-red);color:#fff;
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