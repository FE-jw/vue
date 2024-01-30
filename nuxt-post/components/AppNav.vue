<template>
	<div class="nav">
		<button type="button" class="nav-btn" @click="menuStore.menuToggle"><span class="hide">메뉴</span></button>
		<div class="nav-wrap" @click="evt => {evt.target.classList.contains('nav-wrap') ? menuStore.menuToggle() : null }" v-show="menuStore.state">
			<div class="nav-frame">
				<div class="nav-item">
					<nav>
						<nav-link link="/intro">intro</nav-link>
						<nav-link link="/about">about</nav-link>
						<nav-link link="/game">game</nav-link>
					</nav>
					<change-theme class="theme-wrap" v-if="commonStore.isMobile"></change-theme>
				</div>
				<button type="button" class="nav-close" @click="menuStore.menuToggle"><span class="hide">메뉴 닫기</span></button>
			</div>
		</div>
	</div>
</template>

<script setup>
const commonStore = useCommonStore();
const menuStore = useMenuStore();
</script>

<style lang="scss" scoped>
.nav	{
	&-btn	{display:flex;justify-content:space-between;flex-direction:column;width:40px;height:40px;padding:10px 0;
		@mixin common	{content:'';display:block;width:100%;height:2px;background-color:var(--default-text);}
		&:before,
		&:after	{@include common;}
	}
	&-close	{width:40px;height:40px;position:absolute;right:10px;top:10px;
		@mixin common	{content:'';display:block;width:100%;height:2px;position:absolute;left:50%;top:50%;background-color:var(--default-text);}
		&:before	{@include common;transform:translate(-50%) rotate(45deg);}
		&:after	{@include common;transform:translate(-50%) rotate(-45deg);}
	}

	&-wrap	{display:flex;flex-direction:row-reverse;width:100%;height:100%;position:fixed;left:0;top:0;background-color:rgba(0, 0, 0, 0.8);backdrop-filter:blur(2px);z-index:1000;}
	&-frame	{width:300px;height:100%;padding:60px 0 20px;position:relative;background-color:var(--default-reverse);box-sizing:border-box;}
	&-item	{overflow-y:auto;height:100%;}
	nav	{padding:0 20px;}

	.theme-wrap	{margin-top:2.0rem;}
}
</style>