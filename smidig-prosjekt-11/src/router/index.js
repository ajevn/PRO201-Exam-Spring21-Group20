import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/repair',
        name: 'Repair',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/RepairPage.vue')
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('@/views/LoginPage.vue')
    },
    {
        path: '/entry-successful',
        name: 'Entry Successful',
        component: () => import('@/views/EntrySuccessful.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
