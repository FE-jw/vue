import { fetchList, fetchUserInfo, fetchItemInfo } from '../api/index.js';

export default {
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
	},
	FETCH_LIST({ commit }, pageName){
		fetchList(pageName)
			.then(({ data }) => {
				commit('SET_LIST', data);
			})
			.catch(err => {
				console.log(err);
			});
	}
};