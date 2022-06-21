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
        component: () => import('@/views/index/doc/index.vue')
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