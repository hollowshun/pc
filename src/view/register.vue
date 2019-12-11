<template>
  <div class="content">
    <div>{{$t('register')}}</div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";
export default {
  data() {
    return {};
  },

  methods: {},
  created() {
    EventBus.$emit("switchTab", -1);
  }
};
</script>
<style lang='less' scoped>
.content {
  padding: 20px;
  max-width: 1200px;
  margin: 80px auto 0;
}
</style>