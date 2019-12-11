<template>
  <div class="sidebar">
    <div
      :class="['item', { Icon: idx == checkedIdx }]"
      v-for="(item, idx) in sideBarList"
      :key="idx"
      @click="toggle(idx)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      sideBarList: ["一", "二", "三", "四"],
      checkedIdx: 0
    };
  },

  methods: {
    toggle(idx) {
      this.checkedIdx = idx;
      this.$emit("idx", idx);
    }
  }
  //created(){}
};
</script>
<style lang="less" scoped>
.sidebar {
  box-shadow: 0 4px 12px 0 rgba(9, 13, 44, 0.06);
  border-radius: 4px 4px 0 0;
  max-width: 100%;
  min-width: 150px;
  cursor: pointer;
  .item {
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
  }
  .item:hover {
    color: #3fb5be;
  }
  .Icon {
    color: #3fb5be;
    background: url("../assets/images/jiantou.png") no-repeat 90% center;
  }
}
</style>
