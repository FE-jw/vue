import { defineStore } from 'pinia';

export const useStore = defineStore('store', () => {
	// state
	// const cartItems = reactive([]);

	// actions
	const createCartItem = cartItem => {
		// cartItems.push(cartItem);

		/* $fetch('http://localhost:3000/carts', {
			method: 'POST',
			body: cartItem
		}); */
	};

	return {
		// cartItems,
		createCartItem
	}
});