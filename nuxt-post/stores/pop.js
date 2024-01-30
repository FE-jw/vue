export const usePopStore = defineStore('pop', () => {
	// state
	const state = ref(false);
	const popTxt = ref('');

	// actions
	const open = txt => {
		popTxt.value = txt;
		state.value = true;
	};
	const close = () => {
		state.value = false;
		popTxt.value = '';
	};

	return {
		state,
		popTxt,
		open,
		close
	};
});