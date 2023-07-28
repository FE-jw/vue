<template>
	<div class="nasa-wrap">
		<header>
			<h1 class="main-tit">
				<span class="tit">NASA</span>
				<NasaLogo></NasaLogo>
			</h1>
		</header>
		<section class="container">
			<form @submit.prevent>
				<fieldset>
					<div class="form-wrap">
						<input type="text" placeholder="검색어를 입력해주세요." v-model="searchKeyword">
						<button type="submit" @click="getNasaData">검색</button>
					</div>
				</fieldset>
			</form>
			<div class="nasa-today">
				<h2>Today's NASA</h2>
				<div class="img-wrap">
					<figure>
						<img :src="todayInfo.url" alt="">
					</figure>
					<div class="desc">
						<span class="time">{{ todayInfo.date }}</span>
						<p>{{ todayInfo.explanation }}</p>
					</div>
				</div>
			</div>
			<IcoLoading class="ico-loading" v-if="this.loading"></IcoLoading>
			<ul class="nasa-info" v-else>
				<li v-for="nasaData in this.nasaDatas" :key="nasaData.id">
					{{ nasaData }}
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
import NasaLogo from './components/svg/NasaLogo.vue';
import IcoLoading from './components/svg/IcoLoading.vue';

export default {
	data(){
		return {
			myKey: 'daZ3W9FpHjNDOysquJxnS31f01lgRfGFP8bnZ2WP',
			loading: true,
			searchKeyword: '',
			nasaDatas: [],
			imgList: [],
			todayInfo: ''
		}
	},
	created(){
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.myKey}`)
		.then((res) => res.json())
		.then((data) => {
			this.todayInfo = data;
			console.log(data);
		})
		.catch(() => {
			alert('문제가 생겼습니다. 잠시 후 다시 시도해주세요.');
		});
	},
	methods: {
		getNasaData(){
			if(!this.loading) this.loading = true;

			fetch(`https://images-api.nasa.gov/search?q=${this.searchKeyword}&page_size=10`)
			.then((res) => res.json())
			.then((data) => {
				this.nasaDatas = data.collection.items;
				console.log(this.nasaDatas);

				// const nasaId = data.collection.items[0].data[0].nasa_id;

				// fetch(`https://images-api.nasa.gov/asset/${nasaId}`)
				// .then((response) => response.json())
				// .then((data) => {
					// this.imgList = data.collection.items;
				// });

				this.loading = false;
			})
			.catch(() => {
				alert('문제가 생겼습니다. 잠시 후 다시 시도해주세요.');
			});
		}
	},
	components: {
		NasaLogo,
		IcoLoading
	}
}
</script>

<style lang="scss" scoped>
$nasaBlue: #0B3D91;
$nasaRed: #FC3D21;
$radius: 0.4rem;
$borderColor: #ccc;

// Common
.hide	{overflow:hidden;position:absolute;left:0;top:0;width:1px;height:1px;padding:0;border:0;clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);}
.flex	{display:flex;justify-content:center;align-items:center;}

// Header
header	{@extend .flex;padding:4.0rem;
	.main-tit	{
		.tit	{@extend .hide;}
	}
}

// Container
.container	{min-width:320px;max-width:640px;margin:0 auto;padding:0 4.0rem;box-sizing:border-box;
	fieldset	{border:none;}
	.form-wrap	{display:flex;
		input	{flex:1;margin-right:2.0rem;padding:0 2.0rem;border:1px solid $borderColor;border-radius:$radius;font-size:2.4rem;
			&::-webkit-placeholder	{font-size:2.4rem;}
			&::placeholder	{font-size:2.4rem;}
		}
		button	{width:15.0rem;height:8.0rem;border-radius:$radius;line-height:1.2;font-size:2.4rem;font-weight:800;color:#fff;background-color:$nasaRed;
			&:hover	{background-color:darken($nasaRed, 10%);}
		}
	}
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
	.ico-loading	{opacity:0.5;display:block;width:10.0rem;height:10.0rem;margin:10.0rem auto 0;animation:loading 2s linear infinite alternate;}
}

.nasa-info	{margin-top:2.0rem;
	li	{list-style:none;padding:2.0rem;border:1px solid $borderColor;border-radius:$radius;
		& ~ li	{margin-top:2.0rem;}
	}
}

// CSS Animation
@keyframes loading {
	from	{transform:rotate(0);}
	to	{transform:rotate(360deg);}
}
</style>