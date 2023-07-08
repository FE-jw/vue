import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
	fetch(){
		const tempArr = [];

		if(localStorage.length){
			for (let index = 0; index < localStorage.length; index++) {
				tempArr.push(
					JSON.parse(
						localStorage.getItem(
							localStorage.key(index)
						)
					)
				);
			}
		}
		
		return tempArr;
	}
};

export const store = new Vuex.Store({
	state: {
		posts: storage.fetch()
	},
	mutations: {
		onUpload(state, payload){
			console.log(payload);
			
			// 로컬 스토리지 저장
			localStorage.setItem(
				payload.id,
				JSON.stringify(payload)
			);

			// 포스팅 배열 저장
			state.posts.push(payload);
		},
		onDelete(state, payload){
			const date = payload;
			
			// 로컬 스토리지에서 항목 삭제
			localStorage.removeItem(date);

			// 포스팅 배열 filter
			state.posts = state.posts.filter(
				post => post.id != date
			);
		}
	}
});