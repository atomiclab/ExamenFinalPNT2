import { createRouter, createWebHistory } from 'vue-router'
import Inicio from './components/Inicio.vue'

const routes = [
  /* ---- definición de la ruta raíz ---- */
  { path: '/inicio', component: Inicio },
  { path: '/', redirect: '/inicio' },

  /* ---- definición de las rutas no existentes ---- */
  { path: '/:pathmatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
