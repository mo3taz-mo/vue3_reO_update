// import Vue from 'vue';
// import Router from 'vue-router';

import { createRouter, createWebHistory } from 'vue-router'
// import usersRoutes  from './users/users-routes';
// import AppPageNotFound from './shared/components/page-not-found/page-not-found';
import { usersRoutes } from './users';

import { AppPageNotFound } from './shared/components';

// Vue.use(Router);

// const appRoutes = [
//   {
//     path: '/',
//     redirect: '/users'
//   },
//   {
//     path: '*',
//     name: 'page-not-found',
//     component: AppPageNotFound
//   }
// ];

// const routes = [...usersRoutes, ...appRoutes];

// export default new Router({
//   mode: 'history',
//   routes
// });



const appRoutes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: "/:catchAll(.*)",
    name: 'page-not-found',
    component: AppPageNotFound
  }
];

const routes = [...usersRoutes, ...appRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router