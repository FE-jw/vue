import { defineStore } from 'pinia';

// prefers-color-scheme 조회
const fetchTheme = () => {
	let theme;

	if(window.matchMedia('(prefers-color-scheme: dark)').matches){
		theme = 'dark';
	}else{
		theme = 'light';
	}

	return theme;
};

export const useStore = defineStore('app', {
	// id: 'app',
	state: () => ({
		lang: document.documentElement.lang || 'en',
		theme: fetchTheme()
	}),
	actions: {
		setTheme(){
			if(this.theme === 'dark'){
				this.theme = 'light';
			}else{
				this.theme = 'dark';
			}
		},
		setLang(lang){
			document.documentElement.lang = lang;
			this.lang = lang;
		}
	}
});