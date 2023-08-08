<template>
	<form @submit.prevent>
		<fieldset>
			<div class="form-wrap">
				<input type="text" placeholder="검색어를 입력해주세요." v-model="this.$store.searchKeyword">
				<button type="submit" @click="this.$store.getters('getNasaData')">검색</button>
			</div>
		</fieldset>
	</form>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
$nasaBlue: #0B3D91;
$nasaRed: #FC3D21;
$radius: 0.4rem;
$borderColor: #ccc;

.form-wrap	{display:flex;border:none;
	input	{flex:1;margin-right:2.0rem;padding:0 2.0rem;border:1px solid $borderColor;border-radius:$radius;font-size:2.4rem;
		&::-webkit-placeholder	{font-size:2.4rem;}
		&::placeholder	{font-size:2.4rem;}
	}
	button	{width:15.0rem;height:8.0rem;border-radius:$radius;line-height:1.2;font-size:2.4rem;font-weight:800;color:#fff;background-color:$nasaRed;
		&:hover	{background-color:darken($nasaRed, 10%);}
	}
}
</style>