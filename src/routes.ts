import { createWebHistory, createRouter } from 'vue-router'

import Main from './Pages/Main.vue'
import Crear from './Pages/Crear.vue'
import Listar from './Pages/Listar.vue'
import Unirse from './Pages/Unirse.vue'
import Juego from './Pages/Juego.vue'
import JuegoPruebas from './Pages/JuegoPruebas.vue'
import Error404 from './Pages/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/crear-partida',
    name: 'crear-partida',
    component: Crear
  },
  {
    path: '/listar-partidas-publicas',
    name: 'listar-partidas-publicas',
    component: Listar
  },
  {
    path: '/unirse-a-partida',
    name: 'unirse-a-partida',
    component: Unirse
  },
  {
    path: '/juego/prueba',
    name: 'juegoPrueba',
    component: JuegoPruebas
  },
  {
    path: '/juego/:juegoId',
    name: 'juego',
    component: Juego
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
