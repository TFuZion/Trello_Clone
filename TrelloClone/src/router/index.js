import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListComponent from '@/components/ListComponent.vue'
import TempTableComponent from '@/views/TempTableComponent.vue'
import TagComponent from '@/components/TagComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list',
      name: 'list',
      component: ListComponent
    },
    {path: '/table',
    name: 'table',
    component: TempTableComponent
    },
    {
      path: '/tags',
      name: 'tag',
      component: TagComponent
    }
  ]
})

export default router
