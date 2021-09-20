import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./route";
import store from "../store/index.js";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next) => {
  if(to.meta.auth) {
    const status = store.getters['User/status'];
    if(status == 'loading') {
      // 加载中，无法确定是否已经登录
      next({
        name: 'Loading',
        query: {
          returnUrl: to.fullPath,
        }
      })
    }else if(status == 'login') {
      // 登录过了
      next();
    }else {
      // 未登录
      alert("该页面需要登录，你还没有登录，请先登录");
      next({
        name: 'Login',
        query: {
          returnUrl: to.fullPath,
        }
      })
    }
  }else {
    next();
  }
})

export default router;
