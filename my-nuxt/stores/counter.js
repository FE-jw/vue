import { defineStore } from "pinia";

/*
// Composition API
export const useCounterStore = defineStore('counter', () => {
	const count = ref(0);
	const cntPlus = () => {
		count.value++;
	};
	const cntMinus = () => {
		count.value--;
	};
	const cntDouble = computed(() => count.value * 2);

	return	{
		count,
		cntPlus,
		cntMinus,
		cntDouble
	}
});
*/

// Options API
export const useCounterStore = defineStore('counter', {
	state: () => ({
		count: 0
	}),
	getters: {
		cntDouble(state){
			return state.count * 2;
		}
	},
	actions: {
		cntPlus(){
			this.count++;
		},
		cntMinus(){
			this.count--;
		}
	}
});