import { RouteRecordRaw } from 'vue-router';

const HomePage = () => import('@/pages/HomePage.vue');
const CharactersPage = () => import('@/pages/CharactersPage.vue');
const LocationsPage = () => import('@/pages/LocationsPage.vue');
const EpisodesPage = () => import('@/pages/EpisodesPage.vue');
const FavoritesPage = () => import('@/pages/FavoritesPage.vue');
const NpsPage = () => import('@/pages/NpsPage.vue');
const NpsListPage = () => import('@/pages/NpsListPage.vue');

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
  {
    path: '/favorites',
    component: FavoritesPage,
  },
  {
    path: '/nps',
    component: NpsPage,
  },
  {
    path: '/nps-list',
    component: NpsListPage,
  },
];
