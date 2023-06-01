<template>
	<div>
		<form v-on:submit.prevent="loginTry" v-if="!this.loginFlag">
			<div>
				<label for="username">ID: </label>
				<input id="username" type="text" v-model="username">
			</div>
			<div>
				<label for="password">PW: </label>
				<input id="password" type="password" v-model="password">
			</div>
			<button type="submit">Login</button>
		</form>
		<div v-else>
			<div><strong>{{ username }}</strong>님, 환영합니다!</div>
			<button type="button" v-on:click="logout">로그아웃</button>
		</div>
		<app-tab></app-tab>
		<app-evt></app-evt>
	</div>
</template>

<script>
import axios from 'axios';
import AppTab from './components/AppTab.vue';
import AppEvt from './components/AppEvt.vue';

export default {
	data: function(){
		return	{
			username: '',
			password: '',
			loginFlag: false
		}
	},
	methods: {
		submitForm: function(){
			//evt.preventDefault();	// v-on:submit.prevent 로 대체 가능
			console.log(this.username, this.password);
			const url = 'https://jsonplaceholder.typicode.com/users';
			const data = {
				username: this.username,
				password: this.password
			};
			axios.post(url, data)
				.then(function(res){
					console.log(res);
				})
				.catch(function(err){
					console.log(err);
				});
		},
		loginTry: function(){
			this.loginFlag = true;
		},
		logout: function(){
			this.loginFlag = false;
			this.username = '';
			this.password = '';
		}
	},
	components: {
		'app-tab': AppTab,
		'app-evt': AppEvt
	}
}
</script>

<style>

</style>