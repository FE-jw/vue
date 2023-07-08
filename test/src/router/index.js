import { createWebHistory, createRouter } from "vue-router";
import RouteHome from '../components/RouteHome.vue';
import RouteAbout from '../components/RouteAbout.vue';
import RouteIntro from '../components/RouteIntro.vue';

const routes = [
	{
		path: '/',
		name: 'RouteHome',
		component: RouteHome
	},
	{
		path: '/about',
		name: 'RouteAbout',
		component: RouteAbout
	},
	{
		path: '/intro',
		name: 'RouteIntro',
		component: RouteIntro
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});
  
export default router;