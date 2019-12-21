<template>
  <div class="cart">
    <div class="cartHeader">
      <div class="h-left fl">
        <span class="el-icon-shopping-bag-2 span1"></span>
        <span class="title">本屋创品</span>
        <span>
          <i class="el-icon-arrow-right"></i>
        </span>
      </div>
      <div class="h-right fr" @click="aa">编辑</div>
    </div>
    <div class="cartgoods">
      <!-- 添加购物车的商品数据 -->
      <cartlist></cartlist>
      <cartlist></cartlist>
    </div>
    <div class="recommend-goods">
      <div class="recommend-goods__title default">更多精选商品</div>
      <div class="goods-list-wrapper">
        <!-- 推荐的商品信息 -->
        <selection></selection>
        <div class="cart-bottom van-hairline--top"></div>
      </div>
      <div class="goshopp" @click="gotoshop()">进店逛逛></div>
      <!-- 购物车底部 -->
      <cartbutton></cartbutton>
    </div>
  </div>
</template>

<script>
import "../../public/scss/cart.scss";

import cartlist from "./cart/cartlist";
import cartbutton from "./cart/cartbutton";
import selection from "./cart/selection";

export default {
  data() {
    // let obj = this.$route.query;
    // window.console.log(obj);
    return {
      checked: true,
      num: 1
      // gid: 9,
      // id: 0,
      // uid: 0,
      // price: 0,
      // kucun: 0,
      // title: "",
      // title2: "",
      // url: ""
    };
  },
  methods: {
    handleChange(value) {
      window.console.log(value);
    },
    gotoshop() {
      this.$router.push("/home");
    },

    // change() {
    //   this.$store.commit("aa", this.gid);
    // }

    aa() {
      // window.console.log(666);
      // this.$store.dispatch("aa", 10);

      window.console.log(this.$route.params);
      // let id = 9;
      // window.console.log(999);
      // let { data } = await this.$axios.get("http://localhost:1912/goods", {
      //   params: { gid: id }
      // });
      // window.console.log(data.data[0].gid);
    }

    // async aa() {
    //   // window.console.log(666);

    //   let gid = 9;
    //   window.console.log(999);
    //   let { data } = await this.$axios.get("http://localhost:1912/goods", {
    //     params: { gid: gid }
    //   });
    //   window.console.log(data);
    // }
  },
  components: {
    cartlist,
    cartbutton,
    selection
  }
  // sccue() {}
};
</script>

