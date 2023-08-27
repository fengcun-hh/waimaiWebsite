import { createRouter, createWebHashHistory } from "vue-router";
import { Toast } from "vant";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/Home"),
    },
    {
      path: "/home",
      component: () => import("../views/Home"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/cart",
      component: () => import("../views/Cart"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/my",
      component: () => import("../views/mine"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/order",
      component: () => import("../views/Order"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/store",
      component: () => import("../views/Store"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/createOrder",
      component: () => import("../views/CreateOrder"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/address",
      component: () => import("../views/Address"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/editAddress",
      component: () => import("../views/AddressEdit"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/editUserInfo",
      component: () => import("../views/userInfoEdit"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/login",
      component: () => import("../views/Login"),
    },
    {
      path: "/register",
      component: () => import("../views/Register"),
    },
  ],
});

router.beforeEach((to,from,next) => {
  if(to.meta.isAuth) {
    if(localStorage.isLogin === 'login') {
      next()
    } else {
      next('/login')
      Toast("请先登录")
    }
  } else {
    next()
  }
})

export default router;
