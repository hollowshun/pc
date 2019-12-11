<template>
  <div class="content">
    <div style="margin-bottom:50px">路由变化的菜单组件</div>
    <el-row :gutter="40">
      <el-col :xs="7" :sm="7" :md="6">
        <Sidebar2 :activeIdx="1"></Sidebar2
      ></el-col>
      <el-col :xs="17" :sm="17" :md="18">
        456
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { EventBus } from "../../EventBus";
import Sidebar2 from "../../components/sidebar2";
export default {
  components: {
    Sidebar2
  },
  data() {
    return {};
  },

  methods: {},
  created() {
    EventBus.$emit("switchTab", -1);
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
