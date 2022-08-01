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
                component: () => import('@/views/index/doc/demo/iconDemo/index.vue'),
                meta: { title: 'Icon 图标' }
            },
            {
                path: 'dialog', name: 'dialog',
                component: () => import('@/views/index/doc/demo/dialogDemo/index.vue'),
                meta: { title: 'Dialog 模态框' }
            },
            {
                path: 'switch', name: 'switch',
                component: () => import('@/views/index/doc/demo/switchDemo/index.vue'),
                meta: { title: 'Switch 开关' }
            },
            {
                path: 'button', name: 'button',
                component: () => import('@/views/index/doc/demo/buttonDemo/index.vue'),
                meta: { title: 'Button 按钮' }
            },
            {
                path: 'input', name: 'input',
                component: () => import('@/views/index/doc/demo/inputDemo/index.vue'),
                meta: { title: 'Input 输入框' }
            },
            {
                path: 'radio', name: 'radio',
                component: () => import('@/views/index/doc/demo/radioDemo/index.vue'),
                meta: { title: 'Radio 单选框' }
            },
            {
                path: 'checkbox', name: 'checkbox',
                component: () => import('@/views/index/doc/demo/checkboxDemo/index.vue'),
                meta: { title: 'Checkbox 多选框' }
            },
            {
                path: 'select', name: 'select',
                component: () => import('@/views/index/doc/demo/selectDemo/index.vue'),
                meta: { title: 'Select 下拉选择器' }
            },
            {
                path: 'datePicker', name: 'datePicker',
                component: () => import('@/views/index/doc/demo/datePickerDemo/index.vue'),
                meta: { title: 'DataPicker 日期选择器' }
            },
            {
                path: 'tooltip', name: 'tooltip',
                component: () => import('@/views/index/doc/demo/tooltipDemo/index.vue'),
                meta: { title: 'Tooltip 文字提示' }
            },
            {
                path: 'messageBox', name: 'messageBox',
                component: () => import('@/views/index/doc/demo/messageboxDemo/index.vue'),
                meta: { title: 'MessageBox 提示弹框' }
            },
            {
                path: 'message', name: 'message',
                component: () => import('@/views/index/doc/demo/messageDemo/index.vue'),
                meta: { title: 'Message 消息提示' }
            },
            {
                path: 'tabs', name: 'tabs',
                component: () => import('@/views/index/doc/demo/tabsDemo/index.vue'),
                meta: { title: 'Tabs 标签页' }
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