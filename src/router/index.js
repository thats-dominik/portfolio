import { createRouter, createWebHistory } from 'vue-router';
import navigationBar from '../views/navigationBar.vue';

const routes = [
  {
    path: '/',
    name: 'navigationBar',
    component: navigationBar,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
