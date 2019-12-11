<template>
  <div class="content">
    <div style="margin-bottom:50px">路由不变化的菜单组件</div>
    <el-row :gutter="40">
      <el-col :xs="7" :sm="7" :md="6">
        <SlideBar @idx="getComponentId"></SlideBar
      ></el-col>
      <el-col :xs="17" :sm="17" :md="18">
        <keep-alive> <component :is="componentId"></component> </keep-alive
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import SlideBar from "../components/sidebar";
import Side1 from "../components/side1";
import Side2 from "../components/side2";
import Side3 from "../components/side3";
import Side4 from "../components/side4";
export default {
  components: {
    SlideBar,
    Side1,
    Side2,
    Side3,
    Side4
  },
  data() {
    return {
      componentId: "Side1"
    };
  },
  methods: {
    getComponentId(idx) {
      switch (idx) {
        case 0:
          this.componentId = "Side1";
          break;
        case 1:
          this.componentId = "Side2";
          break;
        case 2:
          this.componentId = "Side3";
          break;
        case 3:
          this.componentId = "Side4";
          break;

        default:
          this.componentId = "Side1";
          break;
      }
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
