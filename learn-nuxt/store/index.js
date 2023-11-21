import { defineStore } from 'pinia';

export const useStore = defineStore('store', () => {
	// state
	const cartItems = reactive([]);

	// actions
	const addCartItem = cartItem => {
		cartItems.push(cartItem);
	};

	return {
		cartItems,
		addCartItem
	}
});