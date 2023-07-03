<template>
	<div>
		<div><common-btn v-on:click="$emit('upNum')">부모 컴포넌트에 'upNum' 이벤트 전달(부모 컴포넌트는 'upNum' 이벤트를 전달받아 data num 1 증가</common-btn></div>
		<div><common-btn v-on:click="$emit('resetNum')">부모 컴포넌트에 'resetNum' 이벤트 전달(부모 컴포넌트는 'resetNum' 이벤트를 전달받아 data num 초기화</common-btn></div>
	</div>
</template>

<script>
export default {
	
}
</script>

<style>

</style>