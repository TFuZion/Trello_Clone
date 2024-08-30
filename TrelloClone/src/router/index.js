import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/addTable',
      name: 'addTable',
      component: () => import('../components/AddTable.vue')
    },
    {
      path: '/filterCard',
      name: 'filter',
      component: () => import('../components/FilterCard.vue')
    }
  ]
})

export default router
