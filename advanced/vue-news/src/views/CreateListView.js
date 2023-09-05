import ListView from './ListView.vue';
import bus from '@/utils/bus.js';

// 하이 오더 컴포넌트(HOC)
export default function createListView(name){
	return {
		// 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
		name: name,
		/*
		created(){
			bus.$emit('start:spinner');
			this.$store.dispatch('FETCH_LIST', this.$route.name)
				.then(() => bus.$emit('end:spinner'))
				.catch(err => {
					console.log(err);
				});
			},
		*/
		mounted(){
			bus.$emit('end:spinner');
		},
		render(createElement){
			return createElement(ListView);
		}
	}
}