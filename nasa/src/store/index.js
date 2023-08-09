// import { createApp } from 'vue'
import { createStore, useStore } from 'vuex'
// import App from '../App.vue';

export const store = createStore({
	state(){
		return{
			myKey: 'daZ3W9FpHjNDOysquJxnS31f01lgRfGFP8bnZ2WP',
			loading: true,
			searchKeyword: '',
			nasaDatas: [],
			imgList: [],
			todayInfo: ''
		}
	},
	getters: {
		
	},
	mutations: {
		getNasaData(){
			const store = useStore();
			
			if(!store.state.loading) store.state.loading = true;
	
			fetch(`https://images-api.nasa.gov/search?q=${store.state.searchKeyword}&page_size=10`)
			.then((res) => res.json())
			.then((data) => {
				store.state.nasaDatas = data.collection.items;
				console.log(store.state.nasaDatas);
	
				// const nasaId = data.collection.items[0].data[0].nasa_id;
	
				// fetch(`https://images-api.nasa.gov/asset/${nasaId}`)
				// .then((response) => response.json())
				// .then((data) => {
					// this.imgList = data.collection.items;
				// });
	
				store.state.loading = false;
			})
			.catch(() => {
				alert('문제가 생겼습니다. 잠시 후 다시 시도해주세요.');
			});
		}
	},
	actions: {}
});