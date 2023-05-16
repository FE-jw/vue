<template>
	<div class="content">
		<div>AppCmp1 컴포넌트 입니다.</div>
		<button type="button" v-on:click="sendNum">클릭하면 App의 data(num)이 증가되고, AppCmp2 에게 전달합니다.</button>
	</div>
</template>

<script>
export default {
	methods: {
		sendNum: function(){
			this.$emit('sendNumber');
		}
	}
}
</script>

<style>

</style>