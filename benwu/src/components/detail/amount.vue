<template>
  <div class="sku">
    <div class="sku-h clearfix">
      <div class="close">X</div>
      <div class="fl">
        <img
          src="https://img.yzcdn.cn/upload_files/2019/10/15/Foz_RtyM0jdQKn0iR5lOrkcGUP_2.jpg"
          alt
        />
      </div>
      <div class="fl leixing">
        <p class="price">
          ￥
          <span>129.00</span>
        </p>
        <p class="shengyu">
          剩余
          <span>1288</span>件
        </p>
      </div>
    </div>
    <div class="buynum clearfix">
      <span class="fl">购买数量</span>
      <div class="num fr">
        <button>-</button>
        <input type="text" value="1" />
        <button>+</button>
      </div>
    </div>
    <div class="data">
      <span>送货日期</span>
      <div class="fr">
        <input type="date" />
      </div>
    </div>
    <div class="goubuycar">下一步</div>
  </div>
</template>

<script>
export default {
    methods:{
      close(){
      
       
      }
    }
}
</script>