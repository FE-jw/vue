<template>
	<div class="pop-wrap" @click="evt => { evt.target.className == 'pop-wrap' ? popStore.close() : null }">
		<div class="pop-layer">
			<p class="pop-txt">{{ popStore.popTxt }}</p>
			<button type="button" class="btn-close" @click="popStore.close">닫기</button>
		</div>
	</div>
</template>

<script setup>
const popStore = usePopStore();
</script>

<style lang="scss" scoped>
.pop-wrap	{display:flex;justify-content:center;align-items:center;width:100%;height:100%;position:fixed;left:0;top:0;background-color:rgba(0, 0, 0, 0.8);overflow-y:auto;
	.pop-layer	{width:30.0rem;position:relative;background-color:#fff;
		.pop-txt	{display:flex;justify-content:center;align-items:center;text-align:center;min-height:20.0rem;font-size:1.4rem;color:#000;}
		.btn-close	{padding:1.0rem;position:absolute;right:0;top:0;font-size:1.6rem;color:#fff;background-color:#000;}
	}
}
</style>