<template>
	<div class="content">
		<div>AppCmp2 컴포넌트 입니다.</div>
		<p class="data">App 컴포넌트에서 전달받은 데이터는 <span>{{ propsdata }}</span>입니다.</p>
	</div>
</template>

<script>
export default {
	props: ['propsdata']
}
</script>

<style>
</style>