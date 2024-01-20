import { RouteRecordRaw } from 'vue-router';

const Home = () => import('@/pages/Home.vue');
const Characters = () => import('@/pages/Characters.vue');
const Locations = () => import('@/pages/Locations.vue');
const Episodes = () => import('@/pages/Episodes.vue');

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/characters',
    component: Characters,
  },
  {
    path: '/locations',
    component: Locations,
  },
  {
    path: '/episodes',
    component: Episodes,
  },
];
