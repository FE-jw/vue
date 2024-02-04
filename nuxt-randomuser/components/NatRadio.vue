<template>
	<input type="radio" :name="props.name" :id="props.id" :value="props.value" @input="emit('changeNation', props.value)">
	<label :for="props.id"><slot /></label>
</template>

<script setup>
const props = defineProps({
	name: String,
	id: String,
	value: String
});

const emit = defineEmits(['changeNation']);
</script>

<style lang="scss" scoped>
input	{display:none;
	&:checked + label:before	{border:none;background-color:var(--nuxt-green);}
}
label	{display:inline-flex;align-items:center;font-size:2.0rem;cursor:pointer;
	&:before	{content:'';width:1.5rem;height:1.5rem;margin-right:0.5rem;border:0.2rem solid #fff;box-sizing:border-box;}
}
</style>