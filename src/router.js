import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue';
import Categories from '@/components/Categories.vue';
import Dishes from '@/components/Dishes.vue'
import CreateCategory from '@/components/CreateCategory.vue'
const routes = [
  {
    path: '/',
    component: Dishes,
  },
  {
    path: '/category',
    component: Categories,
  },
  {
    path: '/createCategory',
    component: CreateCategory,
  },
  // {
  //   path: '/dish',
  //   component: Dishes,
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;