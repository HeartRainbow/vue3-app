import { Cookie } from '@/utils';
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
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import(/* webpackChunkName: "about" */ '../components/Counter.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue')
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import(/* webpackChunkName: "about" */ '../views/upload/index.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return new Promise((resolve, _reject) => {
        setTimeout(() => {
          resolve(savedPosition)
        }, 500)
      })
    } else {
      return { left: 0, top: 0 }
    }
  }
});

// router.beforeEach((to, from, next) => {
//   console.log(to, from, next);

  const token = Cookie.get('token');
  console.log(token);

//   if(!token)
//     next('/login')
  
//   // next()
// })

export default router;
