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
      path: '/filterCard',
      name: 'filter',
      component: () => import('../components/FilterCard.vue')
    },
    {
      path: '/addTable',
      name: 'addTable',
      component: () => import('../components/AddTable.vue')
    }
  ]
})

export default router
