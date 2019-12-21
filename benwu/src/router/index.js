import Vue from "vue";
import VueRouter from "vue-router";

import index from "../components/index.vue";
import sort from "../components/sort.vue";
import cart from "../components/cart.vue";
import center from "../components/center.vue";
import login from "../components/login.vue";
import detailPages from "../components/detailPages.vue";

Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    //首页
    {
      name: "首页",
      path: "/home", //当浏览器地址为/home时，显示Home组件的内容
      component: index
    },
    {
      path: "/",
      redirect: "/home" //重定向
    },
    //分类
    {
      name: "分类",
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
      name: "购物车",
      path: "/cart",
      component: cart
    },
    //个人中心
    {
      name: "客服",
      path: "/center",
      component: center
    },
    //登录
    {
      name: "登录",
      path: "/login",
      component: login
    }
  ]
});

// 全局路由守卫
router.beforeEach(function (to, from, next) {
  // window.console.log("index.beforeEach", to);
  // 在全局路由守卫beforeEach中进行页面权限访问控制
  // 先判断目标路由是否需要鉴权
  if (to.meta.requiresAuth) {
    //鉴权操作
  } else {
    next();
  }
});

export default router;