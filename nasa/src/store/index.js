// import { createApp } from 'vue'
import { createStore } from 'vuex'
// import App from '../App.vue';

export const store = createStore({
	state: {
		myKey: 'daZ3W9FpHjNDOysquJxnS31f01lgRfGFP8bnZ2WP',
		loading: false,
		searchKeyword: '',
		nasaDatas: [],
		imgList: []
		// todayInfo: ''
	},
	mutations: {
		getNasaData(state){
			if(!state.loading){
				state.loading = true;
			}

			fetch(`https://images-api.nasa.gov/search?q=${state.searchKeyword}&page_size=10`)
				.then((res) => res.json())
				.then((data) => {
					state.nasaDatas = data.collection.items;
					state.loading = false;
				})
				.catch((error) => {
					console.log(error);
					alert('문제가 생겼습니다. 잠시 후 다시 시도해주세요.');
				});
		}
	}
});