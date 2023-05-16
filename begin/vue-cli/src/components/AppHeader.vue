<template>
	<header class="header">
		<h1>{{ propsdata }}</h1>
		<button type="button" v-on:click="sendEvent">Send</button>
	</header>
</template>

<script>
export default {
	props: ['propsdata'],
	methods: {
		sendEvent: function(){
			this.$emit('renew');
		}
	}
}
</script>

<style>

</style>