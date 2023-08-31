import { fetchNewsList, fetchAsksList, fetchJobsList, fetchUserInfo, fetchItemInfo } from '../api/index.js';

export default {
	FETCH_NEWS(context){
		fetchNewsList()
			.then(res => {
				context.commit('SET_NEWS', res.data);
			})
			.catch(err => {
				console.log(err);
			});
	},
	FETCH_ASK({ commit }){	// commit 바로 받아오는 문법
		fetchAsksList()
			.then(({ data }) => {	// data 바로 받아오는 문법
				commit('SET_ASK', data);
			})
			.catch(err => {
				console.log(err);
			});
	},
	FETCH_JOBS({ commit }){
		fetchJobsList()
			.then(({ data }) => {
				commit('SET_JOBS', data);
			})
			.catch(err => {
				console.log(err);
			});
	},
	FETCH_USER({ commit }, id){
		fetchUserInfo(id)
			.then(({ data }) => {
				commit('SET_USER', data);
			})
			.catch(err => {
				console.log(err);
			});
	},
	FETCH_ITEM({ commit }, id){
		fetchItemInfo(id)
			.then(({ data }) => {
				commit('SET_ITEM', data);
			})
			.catch(err => {
				console.log(err);
			});
	}
};