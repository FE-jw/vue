<template>
	<div class="theme-wrap">
		<button type="button" @click="commonStore.changeTheme" :class="'theme-' + commonStore.theme">{{ commonStore.theme }}</button>
	</div>
</template>

<script setup>
const commonStore = useCommonStore();
</script>

<style lang="scss" scoped>
.theme-wrap	{display:flex;justify-content:flex-end;
	button	{width:50px;height:30px;position:relative;border-radius:50em;background-color:#ccc;
		&:before	{content:'';width:20px;height:20px;position:absolute;left:5px;top:5px;border-radius:50%;background-color:#000;opacity:0.6;}
		&.theme-dark	{
			&:before	{transform:translateX(100%);}
		}
	}
}
</style>