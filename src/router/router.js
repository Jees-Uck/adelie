import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Blog',
        name: 'Blog',
        component: () => import('../views/Blog.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});

export default router;


