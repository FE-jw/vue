<template>
	<footer>
		<address>&copy;JW</address>
	</footer>
</template>

<style lang="scss" scoped>
footer	{padding:2.0rem;border-top:1px solid rgba($nuxt-green, 0.3);
	address	{font-size:1.2rem;text-align:center;color:#777;}
}

@media all and (min-width: 768px)	{
	footer	{
		address	{font-size:1.4rem;}
	}
}
</style>