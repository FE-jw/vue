<template>
	<div class="my-swiper" v-if="commonStore.isMobile && swiper.init">
		<Swiper
			:modules="[SwiperNavigation]"
			:slides-per-view="'auto'"
			:loop="true"
			:space-between="20"
			:initial-slide="swiper.set - 1"
			:centered-slides="true"
			:navigation="true"
		>
			<swiper-slide v-for="(slide, index) in (swiper.slideLength * swiper.loopSet)" :key="index">
				<img src="@/assets/img/slide.svg" alt="">
			</swiper-slide>
		</Swiper>
	</div>
	<ul class="main-img" v-else>
		<li v-for="(item, index) in 3" :key="index">
			<img src="@/assets/img/slide.svg" alt="">
		</li>
	</ul>
</template>

<script setup>
const commonStore = useCommonStore();
const swiper = reactive({
	init: false,
	slideLength: 3,
	loopSet: 4
});
const setSwiper = () => {
	if(commonStore.isMobile && !swiper.init){
		swiper.init = true;
	}else if(!commonStore.isMobile && swiper.init){
		swiper.init = false;
	}
};

onMounted(() => {
	setSwiper();

	window.addEventListener('resize', setSwiper);
});

onUnmounted(() => {
	window.removeEventListener('resize', setSwiper);
});
</script>

<style lang="scss" scoped>
.my-swiper	{
	--swiper-theme-color: #d33;
	.swiper	{padding:3.0rem 0;
		&-slide	{width:25.0rem;
			img	{width:100%;}
		}
	}
}
.main-img	{display:flex;justify-content:center;align-items:center;width:70.0rem;margin:0 auto;
	li	{width:22.0rem;
		& ~ li	{margin-left:2.0rem;}
		img	{width:100%;}
	}
}
</style>