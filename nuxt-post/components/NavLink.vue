<template>
	<nuxt-link :to="props.link" @click="menuStore.menuToggle"><slot /></nuxt-link>
</template>

<script setup>
const menuStore = useMenuStore();

const props = defineProps({
	link: String,
	default: ''
});
</script>

<style lang="scss" scoped>
a	{display:flex;justify-content:flex-end;align-items:center;width:100%;height:30px;font-size:18px;color:var(--default-text);text-decoration:none;}
</style>