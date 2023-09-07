<template>
	<div class="loading-spin" v-if="loading">
		<div></div>
		<div></div>
		<div></div>
	</div>
</template>
  
<script>
export default {
	props: {
		loading: {
			type: Boolean,
			required: true
		}
	}
}
</script>
  
<style lang="scss" scoped>
.loading-spin	{display:flex;justify-content:space-between;align-items:center;position:absolute;width:64px;height:64px;top:50%;left:50%;transform:translate(-50%, -50%);
	div	{width:13px;height:40%;background-color:#42b883;animation:spinner 1s ease infinite;
		&:nth-child(2)	{animation-delay:0.1s;}
		&:nth-child(3)	{animation-delay:0.2s;}
	}
}
@keyframes spinner {
	from	{height:40%;}
	50%	{height:80%;}
	to	{height:40%;}
}
</style>