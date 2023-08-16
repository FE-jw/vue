<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 16 16" fill="none">
		<g fill="#000" fill-rule="evenodd" clip-rule="evenodd">
			<path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" opacity=".2"/>
			<path d="M7.25.75A.75.75 0 0 1 8 0a8 8 0 0 1 8 8 .75.75 0 0 1-1.5 0A6.5 6.5 0 0 0 8 1.5a.75.75 0 0 1-.75-.75z"/>
		</g>
	</svg>
</template>

<style lang="scss" scoped>
svg	{opacity:0.5;display:block;width:10.0rem;height:10.0rem;margin:10.0rem auto 0;animation:loading 2s linear infinite alternate;}

@keyframes loading {
	from	{transform:rotate(0);}
	to	{transform:rotate(360deg);}
}
</style>