import { createRouter, createWebHistory } from 'vue-router'
import Inicio from './components/Inicio.vue'
import Consigna from './components/Consigna.vue'
import Respuestas from './components/Respuestas.vue'
import ConversorMoneda from './components/ConversorMoneda/index.vue'

const routes = [
  /* ---- definición de la ruta raíz ---- */
  { path: '/inicio', component: Inicio },
  { path: '/consigna', component: Consigna },
  { path: '/respuestas', component: Respuestas },
  { path: '/conversor', component: ConversorMoneda },
  { path: '/', redirect: '/inicio' },

  /* ---- definición de las rutas no existentes ---- */
  { path: '/:pathmatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
