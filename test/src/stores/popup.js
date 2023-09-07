import { defineStore } from 'pinia';

export const usePopup = defineStore('popup', {
	// id: 'popup',
	state: () => ({
		show: false
	}),
	actions: {
		setShow(value){
			this.show = value;
		}
	}
});