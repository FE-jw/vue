<template>
	<div>
		<app-header
			v-bind:propsdata="str"
			v-on:renew="renewStr"></app-header>
		<div class="data">App의 현재 data num의 값은 <span>{{ num }}</span>입니다.</div>
		<app-cmp1 v-on:sendNumber="increaseNum"></app-cmp1>
		<app-cmp2 v-bind:propsdata="num"></app-cmp2>
	</div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppCmp1 from './components/AppCmp1.vue';
import AppCmp2 from './components/AppCmp2.vue';

export default {
	data: function(){
		return	{
			str: 'Header',
			num: 0
		}
	},
	components: {
		'app-header': AppHeader,
		'app-cmp1': AppCmp1,
		'app-cmp2': AppCmp2
	},
	methods: {
		renewStr: function(){
			this.str = 'Hi';
		},
		increaseNum: function(){
			this.num += 1;
		}
	}
}
</script>

<style>
*	{margin:0;padding:0;}
.data span	{font-weight:bold;color:#d33;}
.content	{margin:20px 0;}
</style>