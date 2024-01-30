<template>
	<ul>
		<li v-for="(list, index) in post.list.slice(0, post.length)" :key="index">
			<nuxt-link :to="`/posts/${index + 1}`">
				<div class="tit">{{ list.title }}</div>
			</nuxt-link>
			<button v-if="!commonStore.isMobile" type="button" class="btn-copy" title="url 복사하기" @click="copyUrl(`posts/${index + 1}`)">
				<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 1024 1024"><path d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"/><path d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"/></svg>
				<span class="hide">url 복사하기</span>
			</button>
		</li>
	</ul>
</template>

<script setup>
const commonStore = useCommonStore();
const popStore = usePopStore();

const post = reactive({
	apiUrl: 'https://jsonplaceholder.typicode.com/posts',
	list: [],
	length: 0
});

const { data } = await useAsyncData(
	'posts',
	() => $fetch(post.apiUrl)
);
post.list = data;

const setLength = () => {
	if(commonStore.isMobile && post.length != 5){
		post.length = 5;
	}else if(!commonStore.isMobile && post.length != 10){
		post.length = 10;
	}
};

onMounted(() => {
	setLength();

	window.addEventListener('resize', setLength);
});

onUnmounted(() => {
	window.removeEventListener('resize', setLength);
});

const copyUrl = url => {
	const copyValue = window.location.href + url;
	
	window.navigator.clipboard.writeText(copyValue);
	popStore.open(`${copyValue} 복사`);
};
</script>

<style lang="scss" scoped>
ul	{margin:2.0rem 2.0rem 0;border:1px solid #ccc;
	li	{display:flex;align-items:center;
		& ~ li	{border-top:1px solid #ccc;}
		a	{flex:1;min-width:0;padding:2.0rem 1.0rem;font-size:16px;color:var(--default-text);text-decoration:none;
			&:hover	{text-decoration:underline;}
		}
		.tit	{overflow:hidden;width:100%;text-overflow:ellipsis;white-space:nowrap;word-break:break-all;}
		.btn-copy	{flex:none;width:5.0rem;height:100%;padding:1.0rem;
			svg	{width:100%;height:auto;
				path	{fill:var(--default-text);}
			}
			&:hover {opacity:0.5;}
		}
	}
}
</style>