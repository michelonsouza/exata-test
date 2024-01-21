import { RouteRecordRaw } from 'vue-router';

const HomePage = () => import('@/pages/HomePage.vue');
const CharactersPage = () => import('@/pages/CharactersPage.vue');
const LocationsPage = () => import('@/pages/LocationsPage.vue');
const EpisodesPage = () => import('@/pages/EpisodesPage.vue');

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/characters',
    component: CharactersPage,
  },
  {
    path: '/locations',
    component: LocationsPage,
  },
  {
    path: '/episodes',
    component: EpisodesPage,
  },
];
