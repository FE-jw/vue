<template>
	<div class="error-page">
		<div class="error">
			<h1>nuxt test project</h1><br><br>
			에러 코드: {{ error.statusCode }}<br>
			에러 메시지: {{ error.message }}<br>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError
});
</script>

<style lang="scss" scoped>
.error-page	{display:flex;justify-content:center;align-items:center;text-align:center;height:100vh;font-size:20px;font-weight:bold;color:#d33;}
</style>