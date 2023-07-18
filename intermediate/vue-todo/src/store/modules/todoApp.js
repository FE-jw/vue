const storage = {
	fetch(){
		const arr = [];

		if(localStorage.length){
			for (let i = 0; i < localStorage.length; i++) {
				arr.push(
					JSON.parse(localStorage.getItem(localStorage.key(i)))
				);
			}
		}

		return arr;
	}
};

const state = {
	todoItems: storage.fetch()
};

const getters = {
	storedTodoItems(state){
		return state.todoItems;
	}
};

const mutations = {
	addOneItem(state, todoItem){
		const obj = {
			completed: false,
			item: todoItem
		};
	
		localStorage.setItem(todoItem, JSON.stringify(obj));
		state.todoItems.push(obj);
	},	
	removeOneItem(state, payload){
		state.todoItems.splice(payload.index, 1);
		localStorage.removeItem(payload.todoItem.item);
	},	
	toggleOneItem(state, payload){
		state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
	
		// 로컬 스토리지 데이터 갱신(업데이트 API가 없어서 삭제 후 추가)
		localStorage.removeItem(payload.todoItem.item);
		localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
	},	
	clearAllItems(state){
		localStorage.clear();
		state.todoItems = [];
	}
};

export default {
	state,
	getters,
	mutations
};