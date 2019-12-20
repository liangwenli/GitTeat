// 分类
<template>
  <h1 @click="goto(id)">sort</h1>
</template>

<script>
export default {
  components: {},
  methods: {
    goto(id) {
      this.$router.push({ path: "/detailPages/" + id });
    }
  }
};
</script>