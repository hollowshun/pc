<template>
  <div class="content">
    <router-link to="/side1">
      <div>路由变化的菜单组件</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang="less" scoped>
.content {
  padding: 20px;
  max-width: 1200px;
  margin: 80px auto 0;
}
</style>
