<template>
  <div class="content">
    <div>{{ $t("page4") }}</div>
    <div style="cursor:pointer" @click="test">测试自己封装的js</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    test() {
      this.$utils.myapi();
    }
  }
};
</script>
<style lang="less" scoped>
.content {
  padding: 20px;
  max-width: 1200px;
  margin: 80px auto 0;
}
</style>
