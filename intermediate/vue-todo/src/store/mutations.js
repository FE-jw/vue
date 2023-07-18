const addOneItem = (state, todoItem) =>{
	const obj = {
		completed: false,
		item: todoItem
	};

	localStorage.setItem(todoItem, JSON.stringify(obj));
	state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
	state.todoItems.splice(payload.index, 1);
	localStorage.removeItem(payload.todoItem.item);
}

const toggleOneItem = (state, payload) => {
	state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;

	// 로컬 스토리지 데이터 갱신(업데이트 API가 없어서 삭제 후 추가)
	localStorage.removeItem(payload.todoItem.item);
	localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
	localStorage.clear();
	state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };