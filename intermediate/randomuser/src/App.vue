<template>
	<div id="app">
		<!-- {{ this.randomInfo }} -->
		<div class="info-box">
			<figure class="thumb">
				<img v-bind:src="this.randomInfo.picture.large" alt="">
			</figure>
			<div class="name row">이름: {{ this.randomInfo.name.first + ' ' +this.randomInfo.name.last }}</div>
			<div class="age row">나이: {{ this.randomInfo.dob.age }}</div>
			<div class="birth row">생년월일: {{ this.randomInfo.dob.date }}</div>
			<div class="email row">이메일: {{ this.randomInfo.email }}</div>
			<div class="phone row">연락처: {{ this.randomInfo.phone }}</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'App',
	data: function(){
		return	{
			randomInfo: {}
		}
	},
	created: function(){
		axios.get('https://randomuser.me/api/')
			.then(res => {
				this.randomInfo = res.data.results[0];
			})
			.catch(error => {
				if (error.response) {
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			});
	}
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/gh/fe-jw/fe-jw.github.io/css/font.min.css';

*	{margin:0;padding:0;}
html	{font-size:10px;-webkit-text-size-adjust:none;}
body	{font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:16px;font-weight:300;color:#fff;background-color:#111;}
button	{border:none;font-weight:500;cursor:pointer;}
img	{width:100%;vertical-align:top;}
li	{list-style:none;}
#app	{display:flex;flex-direction:column;width:95%;min-width:360px;max-width:500px;min-height:100vh;margin:0 auto;}
.info-box	{margin:3.0rem;padding:2.0rem;border:1px solid #fff;}
.info-box .thumb	{display:block;width:30.0rem;margin:0 auto;}
.info-box .row	{margin-top:1.0rem;font-size:2.0rem;}
</style>