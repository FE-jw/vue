<template>
	<div class="user_container">
		<div class="user-head">
			User
		</div>
		<div class="user-desc">
			<slot name="username">
				<!-- 상위 컴포넌트에서 정의할 영역 -->
				<!-- <div>username: {{ info.id }}</div> -->
				<!-- <div class="time">time: {{ info.created }}</div> -->
			</slot>
			<div class="time">
				<slot class="time" name="time"></slot>
				<slot name="karma"></slot>
			</div>
		</div>
	</div>
</template>

<script>
/**
 * 해당 컴포넌트에서 store에 접근하여 data를 가져오려면 computed 참고
 * state를 노출하는 컴포넌트에서 받아서 사용하는 것이 권장 방식!
 */
export default {
	props: {
		info: Object
	}
	/* computed: {
		userInfo(){
			return this.$store.state.user;
		}
	} */
}
</script>

<style lang="scss" scoped>
.user_container	{display:flex;align-items:center;padding:2.0rem;
	.user-head	{}
	.user-desc	{padding-left:2.0rem;
		.time	{font-size:1.2rem;color:var(--main-gray);}
	}
}
</style>