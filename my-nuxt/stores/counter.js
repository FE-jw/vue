import { defineStore } from "pinia";

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