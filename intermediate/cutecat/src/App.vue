<template>
	<div id="app" :style="this.colorInit">
		<div class="wrap">
			<figure>
				<img :src="this.currentCat" alt="">
			</figure>
			<div class="btn-wrap">
				<button type="button" class="btn-cat" @click="callCat">야옹~</button>
				<button type="button" class="ico-sound" @click="toggleMuted" :class="{inactive: this.muted}">
					<ico-sound></ico-sound>
				</button>
				<a href="#" download class="btn-down" @click.prevent="downloadImage">다운받기</a>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import ColorThief from 'colorthief';
import IcoSound from './assets/IcoSound.vue';

export default {
	data(){
		return	{
			domain: 'https://cataas.com',
			currentCat: '',
			type: '',
			file: '',
			download: '',
			colorInit: '',
			muted: false
		}
	},
	created(){
		this.callCat();
	},
	methods: {
		callCat(){
			axios.get('https://cataas.com/cat?json=true')
			.then(res => {
				this.type = res.data.mimetype.replace('image/', '');
				this.currentCat = this.domain + res.data.url;
				this.download = this.domain + res.data.url + '.' + this.type;
				this.file = res.data.file;

				this.changeColor();

				if(!this.muted){
					const src = './assets/cat.mp3';

					if(src){
						const audio = new Audio(src);
						audio.src = ;
						audio.play();
					}
				}
			});
		},
		changeColor(){
			const colorThief = new ColorThief();
			const img = new Image();

			img.crossOrigin = 'Anonymous';
			img.src = this.currentCat;
			img.onload = () => {
				const color = colorThief.getColor(img);
				this.colorInit = `background-image:url(${this.currentCat});--bg-color: ${color[0]}, ${color[1]}, ${color[2]}`;
			};
		},
		async downloadImage(){
			const blob = await (await fetch(this.download)).blob();
			const url = URL.createObjectURL(blob);
			Object.assign(document.createElement('a'), { href: url, download: this.file }).click();
			URL.revokeObjectURL(url);
		},
		toggleMuted(){
			this.muted = !this.muted;
		}
	},
	components: {
		'ico-sound': IcoSound
	}
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/css/font.min.css';

*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;font-size:10px;}
button	{border:0;font-family:inherit;font-size:1.4rem;font-weight:inherit;background:none;cursor:pointer;}
#app	{
	--bg-color: 10, 10, 10;
	display:flex;flex-direction:column;justify-content:center;height:100vh;height:100dvh;line-height:1.3;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:1.4rem;font-weight:200;color:#fff;background-repeat:no-repeat;background-size:cover;transition:background-color 0.3s;
}
#app:before	{opacity:0.8;content:'';width:100%;height:100%;position:fixed;left:0;top:0;background-color:rgb(var(--bg-color));backdrop-filter:blur(10px);transition:background-color 0.3s;}
.wrap	{position:relative;z-index:10;}

figure	{display:block;width:70vw;max-width:640px;height:60vh;height:60dvh;margin:0 auto;}
figure img	{width:100%;height:100%;border:0;object-fit:cover;}
.btn-wrap	{display:flex;justify-content:center;align-items:center;margin-top:3.0rem;}
.btn-cat	{height:4.0rem;padding:0 1.0rem;font-size:1.6rem;color:#000;background-color:#fff;box-sizing:border-box;}
.btn-down	{display:inline-flex;align-items:center;height:4.0rem;margin:0 2.0rem;padding:0 1.0rem;font-size:1.6rem;color:#000;text-decoration:none;vertical-align:top;background-color:#fff;box-sizing:border-box;}
.ico-sound	{width:3.0rem;height:3.0rem;margin-left:0.5rem;position:relative;}
.ico-sound svg	{width:100%;height:100%;}
.ico-sound svg path	{fill:#fff;}
.ico-sound.inactive:after	{content:'';width:100%;height:0.2rem;position:absolute;right:0;top:50%;background-color:#999;transform:translateY(-50%) rotate(-45deg);}
.ico-sound.inactive svg path	{fill:#999;}
</style>