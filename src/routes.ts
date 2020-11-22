import { createWebHistory, createRouter } from 'vue-router'

import Main from './Pages/Main.vue'
import Crear from './Pages/Crear.vue'
import Listar from './Pages/Listar.vue'
import Unirse from './Pages/Unirse.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/crear-partida', component: Crear },
  { path: '/listar-partidas-publicas', component: Listar },
  { path: '/unirse-a-partida', component: Unirse },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
