export const useMenuStore = defineStore('menu', () => {
	// state
	const state = ref(false);

	// actions
	const menuToggle = () => {
		state.value = !state.value;
	};

	return {
		state,
		menuToggle
	};
});