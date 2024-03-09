`<template>
	<div class="select-wrap" :class="{ disabled: state.isDisabled }">
		<div class="select" @click="selectOpen">{{ state.text }}</div>
		<ul v-if="state.isOpen">
			<li v-for="(option, index) in options"
				:key="index"
				:data-value="option.value"
				@click="setValue(option)"
			>
				{{ option.text }}
			</li>
		</ul>
	</div>
	<global-btn style="margin-top:100px;" @click="state.isDisabled = !state.isDisabled">select 활성화 toggle</global-btn>
</template>

<script setup>
const state = reactive({
	isOpen: false,
	isDisabled: false,
	current: undefined,
	text: '선택해주세요'
});

// 펼치기
const selectOpen = () => {
	if(!state.isDisabled) state.isOpen = !state.isOpen;
};

// 값 설정
const setValue = options => {
	if(!state.isDisabled){
		state.isOpen = false;
		state.current = options.value;
		state.text = options.text;
	
		afterChange();
	}
};

// 값 변경 후
const afterChange = () => {
	console.log(state);
	console.log('값 변경 후 필요한 로직 여기에');
};

// select option 리스트 예시
const options = [
	{ value: 0, text: 'option 1'},
	{ value: 1, text: 'option 2'},
	{ value: 2, text: 'option 3'}
];
</script>

<style lang="scss" scoped>
.select-wrap	{width:200px;height:40px;position:relative;
	.select	{display:flex;align-items:center;width:100%;height:100%;padding:0 10px;border:1px solid #fff;box-sizing:border-box;cursor:pointer;}
	ul	{width:100%;position:absolute;left:0;top:calc(100% + 4px);border:1px solid #fff;box-sizing:border-box;
		li	{display:flex;align-items:center;height:30px;padding:0 10px;list-style:none;cursor:pointer;box-sizing:border-box;}
	}

	// disabled
	&.disabled	{opacity:0.5;pointer-events:none;}
}
</style>`