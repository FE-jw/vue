<template>
	<div class="pop-wrap" @click.once="closePop" tabindex="0" ref="popwrap" @keyup.esc="closePop">
		<div class="pop-layer" @click.once.stop>
			<slot name="head"></slot>
			<slot name="body"></slot>
			<button type="button" class="pop-close" @click.once="closePop">X</button>
		</div>
	</div>
</template>

<script setup>
import { usePopup } from '@/stores/popup.js';
import { ref, onMounted } from 'vue';

const popup = usePopup();

const closePop = () => {
	popup.setShow(false);
};

const popwrap = ref();
onMounted(() => {
	popwrap.value.focus();
});
</script>

<style lang="scss" scoped>
.pop-wrap	{display:flex;justify-content:center;align-items:center;width:100%;height:100%;position:fixed;left:0;top:0;background-color:rgba($vue-dark, 0.1);backdrop-filter:blur(4px);outline:none;
	.pop-layer	{display:flex;justify-content:center;align-items:center;flex-direction:column;width:30.0rem;height:20.0rem;margin:auto;position:relative;font-size:2.0rem;color:#000;background-color:#fff;}
	.pop-close	{width:5.0rem;height:5.0rem;position:absolute;right:0;top:0;}
}
</style>