import { fetchList, fetchUserInfo, fetchItemInfo } from '../api/index.js';

export default {
	async FETCH_USER({ commit }, id){
		try {
			const res = await fetchUserInfo(id);
			commit('SET_USER', res.data);
			return res;
		} catch (err) {
			console.log(err);
		}
	},
	async FETCH_ITEM({ commit }, id){
		try {
			const res = await fetchItemInfo(id);
			commit('SET_ITEM', res.data);
			return res;
		} catch (err) {
			console.log(err);
		}
	},
	async FETCH_LIST({ commit }, pageName){
		/**
		 * trycatch는 api에서 처리한 케이스(프론트 단 코드가 더 깔끔해짐)
		 */
		const res = await fetchList(pageName);
		commit('SET_LIST', res.data);
		return res;
	}
	/*
	// Promise 버전
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
	*/
};