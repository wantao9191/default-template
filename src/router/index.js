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
                meta:{title:'Icon 图标'}
            },
            {
                path: 'dialog', name: 'dialog',
                component: () => import('@/views/index/doc/demo/dialogDemo/index.vue'),
                meta:{title:'Dialog 模态框'}
            },
            {
                path: 'switch', name: 'switch',
                component: () => import('@/views/index/doc/demo/switchDemo.vue'),
                meta:{title:'Switch 开关'}
            },
            {
                path: 'button', name: 'button',
                component: () => import('@/views/index/doc/demo/buttonDemo.vue'),
                meta:{title:'Button 按钮'}
            },
            {
                path: 'input', name: 'input',
                component: () => import('@/views/index/doc/demo/inputDemo.vue'),
                meta:{title:'Input 输入框'}
            },
            {
                path: 'radio', name: 'radio',
                component: () => import('@/views/index/doc/demo/radioDemo.vue'),
                meta:{title:'Radio 单选框'}
            },
            {
                path: 'checkbox', name: 'checkbox',
                component: () => import('@/views/index/doc/demo/checkboxDemo.vue'),
                meta:{title:'Checkbox 多选框'}
            },
            {
                path: 'select', name: 'select',
                component: () => import('@/views/index/doc/demo/selectDemo.vue'),
                meta:{title:'Select 下拉选择器'}
            },
            {
                path: 'datePicker', name: 'datePicker',
                component: () => import('@/views/index/doc/demo/datePickerDemo.vue'),
                meta:{title:'DataPicker 时间选择器'}
            },
            {
                path: 'tooltip', name: 'tooltip',
                component: () => import('@/views/index/doc/demo/tooltipDemo.vue'),
                meta:{title:'Tooltip 文字提示'}
            },
            {
                path: 'messageBox', name: 'messageBox',
                component: () => import('@/views/index/doc/demo/messageBoxDemo.vue'),
                meta:{title:'MessageBox 提示弹框'}
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