import { h, onMounted, ref } from 'vue';

const testPlugin = {
	install(app){
		app.component('StaItem', {
			props: {
				tag: {
					type: String,
					default: 'div'
				}
			},
			setup(){
				const sta = ref();
				const staHandle = evt => {
					evt.target.classList.toggle('on');
				};

				onMounted(() => {
					const _this = sta.value;

					_this.addEventListener('click', staHandle);
					
					window.addEventListener('resize', () => {
						_this.removeEventListener('click', staHandle);
					});
				});

				return { sta };
			},
			render(){
				return h(
					this.tag,
					{ ref: 'sta' },
					this.$slots
				);
			}
		});
	}
};
  
export default testPlugin;