// 底部栏
<template>
  <el-footer height="1.268519rem">
    <a
      v-for="(item,index) in tabName"
      :key="item"
      :class="{active : index== currentIndex}"
      class="footer-link"
      @click="turnTo(index)"
      href="#"
    >
      <span
        class="footer-icon"
        :class="tabsIcon[index]"
      ></span>
      {{ item }}</a>
  </el-footer>
</template>

<script>
export default {
  name: "appFooter",
  data: function () {
    return {
      tabsIcon: ['el-icon-s-home', 'el-icon-menu', 'el-icon-shopping-cart-2', 'el-icon-service']
    };
  },
  props: ['currentIndex', 'tabName'],
  components: {},
  methods: {
    turnTo (index) {
      this.$emit('now', index);
    }
  }
};
</script>

<style src="../../public/css/container.css"></style>
