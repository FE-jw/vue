<template>
	<div id="app">
		<figure>
			<img :src="this.currentCat" alt="">
		</figure>
		<div class="btn-wrap">
			<button type="button" class="btn-cat" @click="callCat">야옹~</button>
			<a :href="this.download" target="_blank" download class="btn-down" @click="downloadImage">이미지 다운받기</a>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data(){
		return	{
			currentCat: '',
			download: ''
		}
	},
	created(){
		this.callCat();
	},
	methods: {
		callCat(){
			axios.get('https://cataas.com/cat?json=true')
				.then(res => {
					const type = res.data.mimetype.replace('image/', '.');
					
					this.currentCat = 'https://cataas.com' + res.data.url;
					this.download = 'https://cataas.com' + res.data.url + type;
				})
				.catch(error => {
					if (error.response) {
						console.log(error.response.status);
						console.log(error.response.headers);
					}
				});
		},
		async downloadImage(){
			const blob = await (await fetch(this.download)).blob();
			const url = URL.createObjectURL(blob);
			Object.assign(document.createElement('a'), { href: url, download: 'image.jpg' }).click();
			URL.revokeObjectURL(url);
		}
	}
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/css/font.min.css';

*	{margin:0;padding:0;}
html	{-webkit-text-size-adjust:none;font-size:10px;}
body	{background-color:#111;}
button	{border:0;font-family:inherit;font-size:1.4rem;font-weight:inherit;background:none;cursor:pointer;}
#app	{line-height:1.3;font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:1.4rem;font-weight:200;color:#fff;}

figure	{display:block;text-align:center;}
.btn-wrap	{display:flex;justify-content:center;}
.btn-cat	{height:50px;margin:0 2.0rem;padding:1.0rem 2.0rem;font-size:2.0rem;color:#000;background-color:#fff;box-sizing:border-box;}
.btn-down	{display:inline-block;height:50px;margin:0 2.0rem;padding:1.0rem 2.0rem;font-size:2.0rem;color:#000;text-decoration:none;vertical-align:top;background-color:#fff;box-sizing:border-box;}
</style>