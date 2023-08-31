import Vue from 'vue';
import VueRouter from 'vue-router';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '@/views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '',
			redirect: '/news'
		},
		{
			path: '/news',
			name: 'news',
			component: createListView('NewsView')
		},
		{
			path: '/ask',
			name: 'ask',
			component: createListView('AskView')
		},
		{
			path: '/jobs',
			name: 'jobs',
			component: createListView('JobsView')
		},
		{
			path: '/user/:id',
			component: UserView
		},
		{
			path: '/item/:id',
			component: ItemView
		}
	]
});