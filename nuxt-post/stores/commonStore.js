export const useCommonStore = defineStore('common', () => {
	// state
	const isMobile = ref();
	const theme = ref('light');

	// actions
	const changeTheme = () => {
		if(theme.value === 'light'){
			theme.value = 'dark';
		}else{
			theme.value = 'light';
		}
	};

	return {
		isMobile,
		theme,
		changeTheme
	};
});