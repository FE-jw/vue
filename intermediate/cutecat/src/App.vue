<template>
	<div id="app" ref="app" :style="this.mainColor">
		<figure>
			<img :src="this.currentCat" alt="">
		</figure>
		<div class="btn-wrap">
			<button type="button" class="btn-cat" @click="callCat">야옹~</button>
			<a href="#" download class="btn-down" @click.prevent="downloadImage">다운받기</a>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import ColorThief from 'colorthief';

export default {
	data(){
		return	{
			currentCat: '',
			type: '',
			download: '',
			mainColor: ''
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
				this.currentCat = 'https://cataas.com' + res.data.url;
				this.download = 'https://cataas.com' + res.data.url + '.' + this.type;

				this.changeColor();
			})
			.catch(error => {
				if (error.response) {
					console.log(error.response.status);
					console.log(error.response.headers);
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
				this.mainColor = `background-color:rgb(${color[0]}, ${color[1]}, ${color[2]})`;
			};
		},
		async downloadImage(){
			const blob = await (await fetch(this.download)).blob();
			const url = URL.createObjectURL(blob);
			Object.assign(document.createElement('a'), { href: url, download: 'cat' }).click();
			URL.revokeObjectURL(url);
		}
	}
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/css/font.min.css';

*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;font-size:10px;}
body	{}
button	{border:0;font-family:inherit;font-size:1.4rem;font-weight:inherit;background:none;cursor:pointer;}
#app	{display:flex;flex-direction:column;justify-content:center;height:100vh;height:100dvh;line-height:1.3;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:1.4rem;font-weight:200;color:#fff;background-color:#111;transition:background-color 0.3s;}

figure	{display:block;width:70vw;max-width:640px;height:50vh;height:50dvh;margin:0 auto;}
figure img	{width:100%;height:100%;border:0;object-fit:cover;}
.btn-wrap	{display:flex;justify-content:center;margin-top:3.0rem;}
.btn-cat	{height:4.0rem;margin:0 1.0rem;padding:0 1.0rem;font-size:1.6rem;color:#000;background-color:#fff;box-sizing:border-box;}
.btn-down	{display:inline-flex;align-items:center;height:4.0rem;margin:0 1.0rem;padding:0 1.0rem;font-size:1.6rem;color:#000;text-decoration:none;vertical-align:top;background-color:#fff;box-sizing:border-box;}
</style>