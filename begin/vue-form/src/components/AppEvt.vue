<template>
	<div class="wrap">
		내가 모은 티켓 수: {{ ticket }}
		<button type="button" v-on:click="addTicket">티켓 수 증가</button>
		<button type="button" id="VUEbtn" :class="{ btn_off: this.ticket < 10, btn_on: this.ticket >= 10 }" v-on:click="getReward">보상 받기</button>
	</div>
</template>

<script>
export default {
	data: function(){
		return	{
			ticket: 0
		}
	},
	methods: {
		addTicket: function(){
			this.ticket++;
		},
		getReward: function(evt){
			if(evt.target.classList.contains('btn_on')){
				console.log('보상을 받았습니다!');
				this.ticket = this.ticket - 10;
			}
		}
	}
}
</script>

<style>
.wrap	{margin-top:50px;}
#VUEbtn	{color:#000;background-color:#999;}
#VUEbtn.btn_on	{color:#fff;background-color:#d33;}
button	{cursor:pointer;}
</style>