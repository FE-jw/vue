import { fetchList, fetchUserInfo, fetchItemInfo } from '../api/index.js';

export default {
	FETCH_USER({ commit }, id){
		return fetchUserInfo(id)
			.then(({ data }) => {
				commit('SET_USER', data);
			})
			.catch(err => {
				console.log(err);
			});
	},
	FETCH_ITEM({ commit }, id){
		return fetchItemInfo(id)
			.then(({ data }) => {
				commit('SET_ITEM', data);
			})
			.catch(err => {
				console.log(err);
			});
	},
	FETCH_LIST({ commit }, pageName){
		return fetchList(pageName)
			.then(res => {
				commit('SET_LIST', res.data);
				return res;
			})
			.catch(err => {
				console.log(err);
			});
	}
};