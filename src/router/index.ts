import { getCookie } from '@/utils';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import(/* webpackChunkName: "about" */ '../components/Counter.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach((to, from, next) => {
//   console.log(to, from, next);

  const token = getCookie('token');
  console.log(token);

//   if(!token)
//     next('/login')
  
//   // next()
// })

export default router;
