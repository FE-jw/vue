<template>
	<select @change="emit('changeGender', $event.target.value)">
		<option selected disabled>성별 선택</option>
		<option value="male">male</option>
		<option value="female">female</option>
	</select>
</template>

<script setup>
const emit = defineEmits(['changeGender']);
</script>

<style lang="scss" scoped>
select	{display:block;width:20.0rem;height:4.0rem;margin-top:1.0rem;padding:0 1.0rem;border:none;border-radius:0;font-size:1.6rem;font-weight:400;color:#000;}
</style>