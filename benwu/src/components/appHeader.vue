// 头部
<template>
  <el-header height="1.175926rem">
    <span class="el-icon-shopping-bag-2"></span>
    <h2>{{this.$route.name}}</h2>
    <span class="el-icon-chat-dot-round"></span>
  </el-header>
</template>

<script>

export default {
  name: "appHeader",
  data: function () {
    return {
    }
  },
  computed: {
    activeIndex () {
      return this.$store.state.path.currntIndex;
    }
  },
  components: {

  }
};
</script>

<style src="../../public/css/container.css"></style>