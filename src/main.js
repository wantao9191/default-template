import './index.scss'
import '@/assets/css/normal.scss'
import './libs/tg-ui.scss'
import { createApp } from 'vue'
import App from './App.vue'
import install from './libs'
const app = createApp(App)
app.use(install)
app.mount('#app')
