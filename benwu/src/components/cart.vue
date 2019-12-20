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
      <div class="h-right fr">编辑</div>
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
      <div class="goshopp">进店逛逛></div>
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
    return {
      checked: true,
      num: 1
    };
  },
  methods: {
    handleChange(value) {
      window.console.log(value);
    }
  },
  components: {
    cartlist,
    cartbutton,
    selection
  }
};
</script>

