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
        redirect: '/doc/icon',
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
            },
            {
                path: 'input', name: 'input',
                component: () => import('@/views/index/doc/demo/inputDemo.vue'),
            },
            {
                path: 'radio', name: 'radio',
                component: () => import('@/views/index/doc/demo/radioDemo.vue'),
            },
            {
                path: 'checkbox', name: 'checkbox',
                component: () => import('@/views/index/doc/demo/checkboxDemo.vue'),
            },
            {
                path: 'select', name: 'select',
                component: () => import('@/views/index/doc/demo/selectDemo.vue'),
            },
            {
                path: 'datePicker', name: 'datePicker',
                component: () => import('@/views/index/doc/demo/datePickerDemo.vue'),
            },
            {
                path: 'tooltip', name: 'tooltip',
                component: () => import('@/views/index/doc/demo/tooltipDemo.vue'),
            },
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