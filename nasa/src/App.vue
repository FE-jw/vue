<template>
	<div class="nasa-wrap">
		<AppHeader></AppHeader>
		<section class="container">
			<AppForm></AppForm>
			<NasaToday></NasaToday>
			<IcoLoading v-if="loading"></IcoLoading>
			<NasaInfo v-else></NasaInfo>
		</section>
	</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppForm from './components/AppForm.vue';
import NasaToday from './components/NasaToday.vue';
import NasaInfo from './components/NasaInfo.vue';
import IcoLoading from './components/svg/IcoLoading.vue';
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['loading'])
	},
	components: {
		AppHeader,
		AppForm,
		NasaToday,
		NasaInfo,
		IcoLoading
	}
}
</script>

<style lang="scss">
:root	{
	--nasa-blue: #0B3D91;
	--nasa-red: #FC3D21;
	--radius: 0.4rem;
	--border-color: #ccc;
}

// Reset
* {margin:0;padding:0;}
html  {-webkit-text-size-adjust:auto;font-size:5px;}
body  {font-family:'Pretendard', Arial, Helvetica, sans-serif;font-size:2.0rem;font-weight:300;color:#111;}
button	{border:none;border-radius:0;background:none;cursor:pointer;}
img	{width:100%;vertical-align:top;}
a	{color:inherit;text-decoration:underline;}
input	{border:none;border-radius:0;background:none;-webkit-appearance:none;appearance:none;}
input::-webkit-placeholder	{font-size:2.0rem;color:#ccc;}
input::placeholder	{font-size:2.0rem;color:#ccc;}

@media all and (min-width: 768px)	{
	html	{font-size:7px;}
}

// Common
.hide	{overflow:hidden;position:absolute;left:0;top:0;width:1px;height:1px;padding:0;border:0;clip:rect(1px, 1px, 1px, 1px);clip-path:inset(50%);}
.flex	{display:flex;justify-content:center;align-items:center;}

// Container
.container	{min-width:320px;max-width:640px;margin:0 auto;padding:0 4.0rem 5.0rem;box-sizing:border-box;}
</style>