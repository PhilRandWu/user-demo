import Home from '../views/Home.vue';

export default [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        auth: false,
      }
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
      meta: {
        auth: false,
      }
    },
    {
      path: '/loading',
      name: 'Loading',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Login" */ '../views/Loading.vue'),
      meta: {
        auth: false,
      }
    },
    {
      path: '/news',
      name: 'News',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Login" */ '../views/News.vue'),
      meta: {
        auth: true,
      }
    },
    {
        path: '/user',
        name: 'User',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Login" */ '../views/User.vue'),
        meta: {
          auth: true,
        }
      }
  ]
  