import './index.less'
import '@/assets/css/normal.less'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import libs  from './libs'
const app = createApp(App)
app.use(router).use(store).use(libs)
app.mount('#app')
console.log(store.getters.logined)