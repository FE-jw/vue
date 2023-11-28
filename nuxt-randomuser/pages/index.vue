<template>
	<div class="wrap">
		<app-header></app-header>
		<main class="container">
			<form @submit.prevent>
				<span class="nation">국가 선택</span>
				<ul class="list-radio">
					<li v-for="(nat, index) in natArr" :key="index">
						<nat-radio name="nation" :id="`nation-${index}`" :value="nat" @changeNation="nation => updateNation(nation)">{{ nat }}</nat-radio>
					</li>
				</ul>
				<div>
					<gender-select @changeGender="gender => updateGender(gender)"></gender-select>
				</div>
				<common-btn class="btn-search" @click="onSearch">조회하기</common-btn>
				<div class="loading-state" v-if="randomInfo.loading">
					조회중...
				</div>
				<ul v-if="randomInfo.user.length > 0" class="list-user">
					<li v-for="(user, index) in randomInfo.user" :key="index">
						<!-- <nuxt-link :to="`/detail-${randomInfo.nat}-${randomInfo.gender}-${randomInfo.seed}/${index}`"> -->
						<!-- <nuxt-link @click="moveToDetail"> -->
							<div class="item">
								<div class="thumb">
									<img :src="user.picture.large" :alt="`${user.name.first} ${user.name.last}`">
								</div>
								<div class="info">
									<div>name: {{ `${user.name.first} ${user.name.last}` }}</div>
									<div>gender: {{ user.gender }}</div>
									<div>country: {{ user.location.country }}</div>
								</div>
							</div>
						<!-- </nuxt-link> -->
					</li>
				</ul>
			</form>
		</main>
	</div>
</template>

<script setup>
const natArr = ['AU', 'BR', 'CA', 'CH', 'DE', 'DK', 'ES', 'FI', 'FR', 'GB', 'IE', 'IN', 'IR', 'MX', 'NL', 'NO', 'NZ', 'RS', 'TR', 'UA', 'US'];
const randomInfo = reactive({
	nat: '',
	gender: '',
	seed: '',
	loading: false,
	user: []
});

// 국가 선택
const updateNation = nation => randomInfo.nat = nation;

// 성별 선택
const updateGender = gender => randomInfo.gender = gender;

// 조회하기
const onSearch = async () => {
	if(!randomInfo.nat){
		alert('국가를 선택하세요');
	}else if(!randomInfo.gender){
		alert('성별을 선택하세요');
	}else{
		randomInfo.user = [];
		randomInfo.loading = true;

		const { data } = await useAsyncData('randomUser',
			() => $fetch('https://randomuser.me/api/', {
				params: {
					nat: randomInfo.nat,
					gender: randomInfo.gender,
					results: 10
				}
			})
		);

		randomInfo.seed = data.value.info.seed;
		randomInfo.user = data.value.results;
		randomInfo.loading = false;
	}
};
</script>

<style lang="scss" scoped>
.wrap	{min-width:360px;}
.container	{max-width:768px;margin:0 auto;padding:2.0rem;box-sizing:border-box;
	.nation	{display:block;font-size:2.0rem;font-weight:500;}
	.list-radio	{display:flex;flex-wrap:wrap;margin-top:0.8rem;gap:1.0rem;}
	.btn-search	{margin-top:1.0rem;}
	.loading-state	{margin-top:10.0rem;font-size:5.0rem;font-weight:900;text-align:center;}
	.list-user	{display:flex;flex-wrap:wrap;margin-top:2.0rem;gap:1.0rem;
		li	{flex:1 300px;
			a	{color:inherit;text-decoration:none;
				&:hover	{text-decoration:underline;
					.item	{border:1px solid rgba($nuxt-green, 0.6);box-shadow:0.5rem 0.5rem 0.5rem rgba($nuxt-green, 0.3);}
				}
			}
			.item	{display:flex;padding:2.0rem;border:1px solid rgba($nuxt-green, 0.3);transition:border-color 0.2s, box-shadow 0.2s;
				.thumb	{flex:none;
					img	{width:10.0rem;}
				}
				.info	{flex:1;display:flex;justify-content:center;flex-direction:column;margin-left:1.0rem;font-size:1.8rem;}
			}
		}
	}
}

@media all and (min-width: 768px)	{
	
}
</style>