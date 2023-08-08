import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		myKey: 'daZ3W9FpHjNDOysquJxnS31f01lgRfGFP8bnZ2WP',
		loading: true,
		searchKeyword: '',
		nasaDatas: [],
		imgList: [],
		todayInfo: ''
	},
	getters: {
		getNasaData(){
			if(!this.$store.loading) this.$store.loading = true;

			fetch(`https://images-api.nasa.gov/search?q=${this.$store.searchKeyword}&page_size=10`)
			.then((res) => res.json())
			.then((data) => {
				this.$store.nasaDatas = data.collection.items;
				console.log(this.$store.nasaDatas);

				// const nasaId = data.collection.items[0].data[0].nasa_id;

				// fetch(`https://images-api.nasa.gov/asset/${nasaId}`)
				// .then((response) => response.json())
				// .then((data) => {
					// this.imgList = data.collection.items;
				// });

				this.$store.loading = false;
			})
			.catch(() => {
				alert('문제가 생겼습니다. 잠시 후 다시 시도해주세요.');
			});
		}
	},
	mutations: {},
	actions: {}
});