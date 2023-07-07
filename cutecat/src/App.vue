<template>
	<div class="wrap" :style="this.colorInit">
		<div class="container">
			<header>
				<h1>Cute <ico-cat-title></ico-cat-title>at</h1>
			</header>
			<section class="container">
				<div class="img_wrap" :class="{loading: this.loading}">
					<ico-loading class="cat-loading" v-if="this.loading"></ico-loading>
					<figure>
						<img :src="this.currentCat" alt="">
					</figure>
					<button type="button" class="btn-muted" title="음소거" :class="{muted: this.muted}" @click="toggleMuted">
						<ico-volumn></ico-volumn>
						음소거
					</button>
					<a class="btn-download" href="#" @click.prevent="downloadImage" title="저장하기">
						<ico-download></ico-download>
					</a>
				</div>
				<button type="button" class="btn-next" @click="catCrying">
					<ico-cat></ico-cat>
					NEXT
					<ico-cat></ico-cat>
				</button>
			</section>
		</div>
	</div>
</template>

<script>
import ColorThief from 'colorthief';
import IcoDownload from './components/IcoDownload.vue';
import IcoCat from './components/IcoCat.vue';
import IcoCatTitle from './components/IcoCatTitle.vue';
import IcoLoading from './components/IcoLoading.vue';
import IcoVolumn from './components/IcoVolumn.vue';

export default {
	data(){
		return{
			domain: 'https://cataas.com',
			currentCat: '',
			type: '',
			fileName: '',
			colorInit: '',
			loading: false,
			muted: true
		}
	},
	created(){
		this.callCat();
	},
	methods: {
		callCat(){
			if(!this.loading){
				this.loading = true;
				fetch('https://cataas.com/cat?json=true')
				.then((response) => response.json())
				.then((data) => {
					this.type = data.mimetype.replace('image/', '');
					this.currentCat = this.domain + data.url;
					this.fileName = data.file;
					this.chageColor();
				});
			}
		},
		chageColor(){
			const colorThief = new ColorThief();
			const img = new Image();

			img.crossOrigin = 'Anonymous';
			img.src = this.currentCat;
			img.addEventListener('load', () => {
				const color = colorThief.getColor(img);
				this.colorInit = `background-image:url(${this.currentCat});--bg-color: rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.6)`;
				this.loading = false;
			});
			img.addEventListener('error', () => {
				if(confirm('오류가 발생했습니다. 다시 시도하시겠습니까?')){
					this.loading = false;
					this.callCat();
				}
			});
		},
		catCrying(){
			this.callCat();

			if(!this.muted){
				const audio = new Audio('https://cdn.jsdelivr.net/gh/fe-jw/vue/cutecat/src/assets/cat.mp3');
				audio.play();
			}
		},
		toggleMuted(){
			this.muted = !this.muted;
		},
		async downloadImage(){
			const blob = await (await fetch(this.currentCat)).blob();
			const url = URL.createObjectURL(blob);
			Object.assign(document.createElement('a'), { href: url, download: this.fileName }).click();
			URL.revokeObjectURL(url);
		}
	},
	components: {
		'ico-download': IcoDownload,
		'ico-cat': IcoCat,
		'ico-cat-title': IcoCatTitle,
		'ico-loading': IcoLoading,
		'ico-volumn': IcoVolumn
	}
}
</script>

<style lang="scss">
@import 'https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/css/font.min.css';
*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;font-size:5px;}
body    {margin:0;padding:0;line-height:1.2;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:1.6rem;font-weight:300;color:#fff;}
button	{border:0;border-radius:0;cursor:pointer;}

@media all and (min-width: 768px)	{
	html	{font-size:10px;}
}
</style>

<style lang="scss" scoped>
.flex	{display:flex;justify-content:center;align-items:center;}
.wrap   {
	--bg-color: rgba(0, 0, 0, 0.6);

	@extend .flex;width:100%;height:100vh;height:100dvh;background-repeat:no-repeat;background-color:#111;background-position:50% 50%;background-size:cover;
	&:before	{content:'';width:100vw;height:100vh;height:100dvh;position:fixed;left:0;top:0;background-color:var(--bg-color);backdrop-filter:blur(10px);transition:background-color 0.3s;}
	.container	{position:relative;}
    header	{@extend .flex;
		h1	{@extend .flex;padding:0.5rem 4.0rem;font-size:6.0rem;font-weight:800;background-color:rgba(#000, 0.5);
			svg	{width:7.0rem;height:7.0rem;margin-right:-1.0rem;
				:deep(path)	{stroke:#fff;}
			}
		}
	}
	.img_wrap	{margin-top:3.0rem;position:relative;
		&:before	{opacity:0;visibility:hidden;content:'';width:100%;height:100%;position:absolute;left:0;top:0;background:radial-gradient(ellipse at center,  rgba(#000, 1) 0%,rgba(#000, 0) 100%);transition:all 0.2s;}
		&.loading	{
			&:before	{opacity:1;visibility:visible;}
		}
		.cat-loading	{width:10.0rem;height:10.0rem;margin:-5.0rem 0 0 -5.0rem;position:absolute;left:50%;top:50%;animation:loading 0.2s linear infinite alternate;}
		figure	{overflow:hidden;width:70vw;min-width:320px;max-width:1280px;height:70vh;height:70dvh;border:0.2rem solid #fff;border-radius:2.0rem;box-sizing:border-box;}
		img	{width:100%;height:100%;vertical-align:top;object-fit:cover;
			&[src='']	{visibility:hidden;}
		}
		.btn-muted	{width:8.0rem;height:8.0rem;position:absolute;left:2.0rem;bottom:2.0rem;border-radius:50%;border:1px solid #fff;background-color:rgba(#000, 0.8);font-size:0;color:transparent;
			svg	{width:60%;height:60%;}
			&.muted	{
				&:before	{content:'';width:100%;height:0.2rem;position:absolute;right:0;top:50%;background-color:#fff;transform:rotate(-45deg) scale(0.7);}
			}
		}
		.btn-download	{@extend .flex;width:8.0rem;height:8.0rem;position:absolute;right:2.0rem;bottom:2.0rem;border-radius:50%;border:1px solid #fff;background-color:rgba(#000, 0.8);box-sizing:border-box;
			svg	{width:60%;height:60%;}
		}
	}
	.btn-next	{@extend .flex;width:50%;min-width:320px;height:8.0rem;margin:2.0rem auto 0;border:0.2rem solid #000;border-radius:0.8rem;line-height:1.2;font-family:inherit;font-size:2.4rem;font-weight:600;color:#000;background-color:#fff;
		svg	{width:3.0rem;height:3.0rem;margin:0 1.0rem;}
	}
}

// CSS Animation
@keyframes loading {
	from	{transform:rotate(-10deg);}
	50%	{transform:rotate(0);}
	to	{transform:rotate(10deg);}
}
</style>