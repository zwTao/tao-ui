import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/button', component: () => import('../views/ButtonDemo.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router