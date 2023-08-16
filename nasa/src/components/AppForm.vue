<template>
	<form @submit.prevent>
		<fieldset>
			<div class="form-wrap">
				<input type="text" placeholder="검색어를 입력해주세요." v-model="keyword">
				<button type="submit" @click="getNasa">검색</button>
			</div>
		</fieldset>
	</form>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
	setup(){
		const store = useStore();
		const keyword = ref('');

		const getNasa = () => {
			store.state.searchKeyword = keyword.value;
			store.commit('getNasaData');
		};

		return{
			keyword,
			getNasa
		};
	}
});
</script>

<style lang="scss" scoped>
form	{
	fieldset	{border:none;}
	.form-wrap	{display:flex;border:none;
		input	{flex:1;margin-right:2.0rem;padding:0 2.0rem;border:1px solid var(--border-color);border-radius:var(--radius);font-size:2.4rem;
			&::-webkit-placeholder	{font-size:2.4rem;}
			&::placeholder	{font-size:2.4rem;}
		}
		button	{width:15.0rem;height:8.0rem;border-radius:var(--radius);line-height:1.2;font-size:2.4rem;font-weight:800;color:#fff;background-color:var(--nasa-red);
			&:hover	{background-color:darken(#FC3D21, 10%);}
		}
	}
}
</style>