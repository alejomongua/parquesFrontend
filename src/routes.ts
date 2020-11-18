import { createWebHistory, createRouter } from 'vue-router'

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Baz = { template: '<div>baz</div>' }

const routes = [
  { path: '/crear-partida', component: Foo },
  { path: '/listar-partidas-publicas', component: Bar },
  { path: '/unirse-a-partida', component: Baz },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
