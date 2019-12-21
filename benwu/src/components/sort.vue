// 分类
<template>
  <h1 @click="goto()">sort</h1>
</template>

<script>
export default {
  data() {
    return {
      id: 9
    };
  },
  components: {},
  methods: {
    goto() {
      this.$router.push({ path: "/detailPages/" + this.id });
    }
  }
};
</script>