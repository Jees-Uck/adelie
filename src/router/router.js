import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';
import SingleBlogPage from '../views/SingleBlogPage.vue';
import blogSlider from '../components/blogSlider.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Blog',
        name: 'Blog',
        component: Blog,
    },
    {
        path: '/blog/:id',
        name: 'SingleBlog',
        components: { default: SingleBlogPage, slider: blogSlider },
        props: true,
    },

];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});

export default router;


