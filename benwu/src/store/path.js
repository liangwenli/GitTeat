//路径

export default {
  state: {
    route: [
      {
        name: "首页",
        path: "/home"
      },
      {
        name: "分类",
        path: "/sort"
      },
      {
        name: "购物车",
        path: "/cart"
      },
      {
        name: "客服",
        path: "/center"
      }
    ],
    currntIndex: 0,
    headerShow: ["/home", "/sort", "/cart", "/login"],
    footerShow: ["/home", "/sort", "/cart", "/center"]
  },
  mutations: {},
  actions: {}
};
