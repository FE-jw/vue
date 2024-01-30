<template>
	<div class="my-swiper" v-if="commonStore.isMobile && swiper.active">
		<Swiper
			:modules="[SwiperNavigation]"
			:slides-per-view="'auto'"
			:loop="true"
			:space-between="20"
			:initial-slide="swiper.set - 1"
			:centered-slides="true"
			:navigation="true"
		>
			<swiper-slide v-for="(slide, index) in (swiper.loop * swiper.set)" :key="index">
				<img src="@/assets/img/slide.svg" alt="">
			</swiper-slide>
		</Swiper>
	</div>
	<ul class="main-img" v-else>
		<li><img src="@/assets/img/slide.svg" alt=""></li>
		<li><img src="@/assets/img/slide.svg" alt=""></li>
		<li><img src="@/assets/img/slide.svg" alt=""></li>
	</ul>
</template>

<script setup>
const commonStore = useCommonStore();
const swiper = reactive({
	active: false,
	loop: 3,
	set: 4
});
const resetSwiper = () => {
	if(commonStore.isMobile && !swiper.active){
		swiper.active = true;
	}else if(!commonStore.isMobile && swiper.active){
		swiper.active = false;
	}
};

onMounted(() => {
	resetSwiper();

	window.addEventListener('resize', resetSwiper);
});

onUnmounted(() => {
	window.removeEventListener('resize', resetSwiper);
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
.main-img	{display:flex;justify-content:center;align-items:center;width:70.0rem;margin:0 auto;padding:4.0rem 0;
	li	{width:22.0rem;
		& ~ li	{margin-left:2.0rem;}
		img	{width:100%;}
	}
}
</style>