export const useMyEvent = (eventName, fn) => {
	onMounted(() => {
		window.addEventListener(eventName, fn);
	});
	
	onUnmounted(() => {
		window.removeEventListener(eventName, fn);
	});
};