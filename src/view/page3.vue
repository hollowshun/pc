<template>
  <div class="content">
    <div>{{ $t("page3") }}</div>
    <div style="cursor:pointer" @click="fetchData">测试接口api异步</div>
    <div style="cursor:pointer" @click="fetchData2">测试接口api同步</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    async fetchData() {
      let params = {};
      const res = await this.$http.get("/get", params);
      if (res.status == 200) {
        this.$message.success("请求成功，我是get请求");
      }
    },
    fetchData2() {
      let params = {};
      this.$http.post("/post", params).then(res => {
        if (res.status == 200) {
          this.$message.success("请求成功，我是post请求");
        }
      });
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
