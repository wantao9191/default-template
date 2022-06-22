import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        redirect: '/home',
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/views/index/home/index.vue')
            }
        ]
    },
    {
        path: '/doc',
        name: 'doc',
        component: () => import('@/views/index/doc/index.vue'),
        children: [
            {
                path: 'icon', name: 'icon',
                component: () => import('@/views/index/doc/demo/iconDemo.vue'),
            },
            {
                path: 'dialog', name: 'dialog',
                component: () => import('@/views/index/doc/demo/dialogDemo/index.vue'),
            },
            {
                path: 'switch', name: 'switch',
                component: () => import('@/views/index/doc/demo/switchDemo.vue'),
            },
            {
                path: 'button', name: 'button',
                component: () => import('@/views/index/doc/demo/buttonDemo.vue'),
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    }
]
const router = createRouter({
    routes,
    history: createWebHashHistory()
})
export default router