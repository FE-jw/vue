<template>
	<div class="nasa-wrap">
		<header>
			<h1 class="main-tit">
				<span class="tit">NASA</span>
				<NasaLogo></NasaLogo>
			</h1>
		</header>
		<section class="container">
			<AppForm></AppForm>
			<NasaToday></NasaToday>
			<IcoLoading class="ico-loading" v-if="this.$store.loading"></IcoLoading>
			<ul class="nasa-info" v-else>
				<li v-for="nasaData in this.$store.nasaDatas" :key="nasaData.id">
					{{ nasaData }}
				</li>
			</ul> 
		</section>
	</div>
</template>

<script>
import AppForm from './components/AppForm.vue';
import NasaToday from './components/NasaToday.vue';
import NasaLogo from './components/svg/NasaLogo.vue';
import IcoLoading from './components/svg/IcoLoading.vue';
import { useStore } from 'vuex';

export default {
	created(){
		const store = useStore();
		
		fetch(`https://api.nasa.gov/planetary/apod?api_key=${store.state.myKey}`)
		.then((res) => res.json())
		.then((data) => {
			store.state.todayInfo = data;
		})
		.catch(() => {
			alert('문제가 생겼습니다. 잠시 후 다시 시도해주세요.');
		});
	},
	methods: {
		
	},
	components: {
		AppForm,
		NasaToday,
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