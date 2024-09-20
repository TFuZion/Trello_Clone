import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CardView from '../views/CardView.vue';
import ListComponent from '@/components/ListComponents/ListComponent.vue';
import TempTableComponent from '@/views/TempTableComponent.vue';
import TagComponent from '@/components/TagsComponents/TagComponent.vue';
import TagSelectorComponent from '@/components/TagsComponents/TagComponent.vue';
import TagCreatorComponent from '@/components/TagsComponents/TagCreatorComponent.vue';
import AddTable from '@/components/TableComponents/AddTableComponent.vue';
import FilterCard from '@/components/TableComponents/FilterCard.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/card',
      component: CardView,
    },
    {
      path: '/list',
      component: ListComponent,
    },
    { path: '/table', 
      component: TempTableComponent 
    },
    {
      path: '/tags',
      component: TagComponent,
    },
    {
      path: '/tag-selector',
      component: TagSelectorComponent,
    },
    {
      path: '/tag-creator',
      component: TagCreatorComponent,
    },
    {
      path: '/tab-creator',
      component: AddTable,
    },
    {
      path: '/filter-card',
      component: FilterCard,
    },
  ],
});

export default router;
