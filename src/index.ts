import { createApp } from 'vue'

import router from './routes'
import './main.css'
import App from './App.vue'

createApp(App).use(router).mount('#root')
