import { createWebHistory, createRouter } from 'vue-router'

import Main from './Components/Main.vue'
import Crear from './Components/Crear.vue'
import Listar from './Components/Listar.vue'
import Unirse from './Components/Unirse.vue'

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
