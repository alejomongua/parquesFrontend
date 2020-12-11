import { createApp } from 'vue'

import router from './routes'
import './main.css'
import App from './App.vue'
import { store } from './store'

createApp(App)
  .use(router)
  .use(store)
  .mount('#root')
