<template>
  <div class="home">
    <div class="block">
      <el-carousel trigger="click" class="home_banner">
        <el-carousel-item v-for="(item, idx) in bannerList" :key="idx">
          <img :src="item.pic" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      {{ $t("home") }}
    </div>
  </div>
</template>

<script>
let img1 = require("../assets/images/banner1.jpg");
let img2 = require("../assets/images/banner2.jpg");
export default {
  data() {
    return {
      bannerList: [
        {
          link: "www.baidu.com",
          pic: img1
        },
        {
          link: "https://cn.vuejs.org/",
          pic: img2
        }
      ]
    };
  },

  methods: {}
};
</script>
<style lang="less" scoped>
/deep/.el-carousel__container {
  height: 900px !important;
}
.home_banner img {
  width: 100%;
  height: 100%;
}
</style>
