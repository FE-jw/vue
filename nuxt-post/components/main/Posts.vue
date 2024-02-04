<template>
	<h2 class="sub-tit">Posting</h2>
	<ul>
		<li v-for="(list, index) in post.list.slice(0, post.length)" :key="index">
			<nuxt-link :to="`/posts/${index + 1}`">
				<div class="tit">{{ list.title }}</div>
			</nuxt-link>
			<button v-if="!commonStore.isMobile" type="button" class="btn-copy" title="url 복사하기" @click="copyUrl(`posts/${index + 1}`)">
				<span class="hide">url 복사하기</span>
				<svg-copy />
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
post.list = data.value;

const setLength = () => {
	if(commonStore.isMobile && post.length != 5){
		post.length = 5;
	}else if(!commonStore.isMobile && post.length != 10){
		post.length = 10;
	}
};

const copyUrl = url => {
	const copyValue = window.location.href + url;
	
	window.navigator.clipboard.writeText(copyValue);
	popStore.open(`${copyValue} 복사`);
};

onMounted(setLength);
useMyEvent('resize', setLength);
</script>

<style lang="scss" scoped>
.sub-tit	{width:calc(100% - 4.0rem);max-width:70.0rem;margin:4.0rem auto 0;}
ul	{width:calc(100% - 4.0rem);max-width:70.0rem;margin:2.0rem auto 0;border:1px solid #ccc;box-sizing:border-box;
	li	{display:flex;align-items:center;
		& ~ li	{border-top:1px solid #ccc;}
		a	{flex:1;min-width:0;padding:2.0rem 1.0rem;font-size:16px;color:var(--default-text);text-decoration:none;
			&:hover	{text-decoration:underline;}
		}
		.tit	{overflow:hidden;width:100%;text-overflow:ellipsis;white-space:nowrap;word-break:break-all;}
		.btn-copy	{flex:none;width:5.0rem;height:100%;padding:1.0rem;
			&:hover {opacity:0.5;}
		}
	}
}
</style>