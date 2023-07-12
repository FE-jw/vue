import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = () => {
	const tempArr = [];

	if(localStorage.length){
		for (let i = 0; i < localStorage.length; i++) {
			tempArr.push(
				JSON.parse(
					localStorage.getItem(
						localStorage.key(i)
					)
				)
			);
		}
	}
	
	return tempArr;
};

export const store = new Vuex.Store({
	state: {
		posts: storage()
	},
	mutations: {
		onUpload(state, payload){
			// 로컬 스토리지 저장
			localStorage.setItem(
				payload.id,
				JSON.stringify(payload)
			);

			// 포스팅 배열 저장
			state.posts.push(payload);
		},
		onDelete(state, payload){
			const id = payload;
			
			// 로컬 스토리지에서 항목 삭제
			localStorage.removeItem(id);

			// 포스팅 배열 filter
			state.posts = state.posts.filter(
				post => post.id != id
			);
		}
	}
});