import './index.scss'
import '@/assets/css/normal.scss'
import './libs/tg-ui.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import install  from './libs'
import "prismjs";
import "prismjs/themes/prism-solarizedlight.css";
const app = createApp(App)
app.use(router).use(store).use(install)
app.mount('#app')
