<template>
  <div class="footer">
    <div class="content">
      <el-col>
        <el-col :span="8">
          <div class="info">
            <h3>联系方式</h3>
            <p>400-123456</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="info">
            <h3>关于我们</h3>
            <p>XX介绍</p>
          </div>
        </el-col>
        <el-col :span="4">
          <img src="../assets/images/111.png" alt />
          <div class="info">XXX官网</div>
        </el-col>
        <el-col :span="4">
          <img src="../assets/images/111.png" alt />
          <div class="info">XXX小程序</div>
        </el-col>
      </el-col>
    </div>
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
.footer {
  min-width: 750px;
  height: 200px;
  background-color: rgb(72, 133, 112);
  color: #fff;
  .content {
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding: 20px;
    box-sizing: border-box;
    .info {
      height: 100%;
      h3 {
        margin-bottom: 10px;
      }
    }
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>
