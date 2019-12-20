import Vue from "vue";
import VueRouter from "vue-router";

import index from "../components/index.vue";
import sort from "../components/sort.vue";
import cart from "../components/cart.vue";
import center from "../components/center.vue";
import detailPages from "../components/detailPages.vue";

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    //首页
    {
      name: "home",
      path: "/home", //当浏览器地址为/home时，显示Home组件的内容
      component: index
    },
    {
      path: "/",
      redirect: "/home" //重定向
    },
    //分类
    {
      name: "sort",
      path: "/sort",
      component: sort
    },
    {
      name: 'detailPages',
      path: '/detailPages/:id',
      component: detailPages
    },
    //购物车
    {
      name: "cart",
      path: "/cart",
      component: cart
    },
    //个人中心
    {
      name: "center",
      path: "/center",
      component: center
    }
  ]
});

// 全局路由守卫
router.beforeEach(function (to, from, next) {
  window.console.log("index.beforeEach", to);
  // 在全局路由守卫beforeEach中进行页面权限访问控制
  // 先判断目标路由是否需要鉴权
  if (to.meta.requiresAuth) {
    //鉴权操作
  } else {
    next();
  }
});

export default router;