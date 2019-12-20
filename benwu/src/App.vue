<template>
  <div id="app">
    <el-container>
      <app-header
        :currentIndex="currentIndex"
        :tabName="tabName"
        v-show="currentIndex != 3"
      ></app-header>

      <el-main>
        <router-view />
      </el-main>

      <app-footer
        :currentIndex="currentIndex"
        :tabName="tabName"
        @now="changeIndex"
      ></app-footer>
    </el-container>
  </div>
</template>

<script>
import appHeader from "./components/appHeader.vue";
import appFooter from "./components/appFooter.vue";

export default {
  name: "app",
  data: function() {
    return {
      tabName: ["首页", "分类", "购物车", "客服"],
      indexName: ["home", "sort", "cart", "center"],
      currentIndex: 0,
      currentComponent: "home"
    };
  },
  methods: {
    //改变当前页
    changeIndex(index) {
      if (this.currentIndex != index) {
        this.$router.push("/" + this.indexName[index]);
        this.currentIndex = index;
        this.currentComponent = this.indexName[index];
      }
    }
  },
  components: {
    appHeader,
    appFooter
  }
};
</script>

<style>
#app,
.el-container {
  height: 100%;
  flex-direction: column !important;
}
.el-main {
  width: 100%;
  flex: 1;
  padding: 0 !important;
  overflow-y: auto;
}
</style>
