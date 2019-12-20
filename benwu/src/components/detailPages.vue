<template>
  <div class="detail">
    <div class="pageheader clearfix">
      <i class="el-icon-arrow-left fl"></i>
      <h3 class="title fl">本屋创品学生专属纯棉三件套</h3>
    </div>
    <div class="swiper">
      <img
        src="https://img.yzcdn.cn/upload_files/2019/07/18/FnHZewudjyTJJ5R9zn6RdOayxGk_.jpg!large.jpg"
        alt
      />
    </div>
    <div class="module-unit">
      <div class="unitcon">
        <p class="price">
          ￥
          <span>999.00</span>
        </p>
        <div class="title">
          <h3 class="goods-title__main">学生专属60s长绒棉高级六件套</h3>
          <h3 class="goods-title__sub">60s长绒棉高级六件套 = 枕套+被套+床单+被芯+枕芯+床垫</h3>
        </div>
        <div class="share">
          <span>
            <i class="el-icon-share"></i>
          </span>
          <span>分享</span>
        </div>
      </div>
    </div>

    <div class="page-content">
      <div>
        <div class="m-promotion clearfix">
          <div class="carriage fl">
            <span>运费</span>
            <span class="yunfei">免运费</span>
          </div>
          <div class="sold-num fr">
            <span>已售30</span>|
            <span>剩余1479</span>
          </div>
        </div>
        <div class="m-group">
          <div class="stages">
            <span>
              <i class="el-icon-s-order"></i> 分期付款
            </span>
            <button>3分期</button>
          </div>
          <div class="serve clearfix">
            <div class="serve-l fl">
              <span>服务</span>
              <span>服务后结算.快递发货</span>
            </div>
            <div class="fr">
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
        <div class="m-goods-review">
          <p>
            <span>选择</span>
            <span>学生专属长绒棉高级三件套</span>
            <span class="fr">
              <i class="el-icon-arrow-right"></i>
            </span>
          </p>
          <div class="value clearfix">
            <div class="value-img fl">
              <img
                src="https://img.yzcdn.cn/upload_files/2019/07/18/FlN4cG2KOC0de-OrT1V6N-hskNlC.jpg!100x100.jpg"
                alt
              />
              <img
                src="https://img.yzcdn.cn/upload_files/2019/07/18/FhmgDdKf58kaFhvk9MB6cuUaqp4k.jpg!100x100.jpg"
                alt
              />
              <img
                src="https://img.yzcdn.cn/upload_files/2019/07/18/Fm0btMA-e4P6IfMnXKY8Qv2pTG_j.jpg!100x100.jpg"
                alt
              />
            </div>

            <div class="fl xuanzhe">
              <p>三种花型可选</p>
            </div>
          </div>
        </div>
        <div class="m-shop"></div>
        <div class="shop">
          <div class="shopcon clearfix">
            <div class="fl shoptitle">本屋创品</div>
            <div class="fr shopsh clearfix">
              <!-- <span class="guanzhu fl">关注店铺</span>
              <span class="jindian fl">进店逛逛</span>-->
              <div class="fl goshop">进店逛逛</div>
              <div class="fl guanzu">关注店铺</div>
            </div>
          </div>
        </div>
        <!-- 详情信息 -->
        <tablist></tablist>
      </div>
    </div>
    <div class="goods-buttons clearfix">
      <div class="van-icon fl">
        <span class="el-icon-service"></span>
        客服
      </div>
      <div class="van-icon fl">
        <span class="el-icon-shopping-cart-2"></span>
        购物车
      </div>
      <div class="van-goods-action fr">
        <button class="jiaru" @click="addshopp()">加入购物车</button>
        <button class="buy">立即购买</button>
      </div>
    </div>
    <!-- 加入购物车需要选择的信息 -->
    <amount v-show="isok==true"></amount>
  </div>
</template>
<script>
import "../../public/scss/detail.scss";
import "../../public/scss/cart.scss";
// import selection from "./cart/selection";
import tablist from "./detail/tablist.vue";
import amount from "./detail/amount.vue";
export default {
  data() {
    return {
      // activeName: "first",
      isok: false
    };
  },
  methods: {
    // handleClick(tab, event) {
    //   window.console.log(tab, event);
    // },
    // goBack() {
    //   //   console.log("go back");
    // },
    addshopp() {
      this.isok = true;
    }
  },
  components: {
    // selection
    tablist,
    amount
  }
};
</script>

<style >
/* #regar {
  
} */
</style>

<style lang="scss">
</style>