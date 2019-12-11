<template>
  <div :class="['view', { view2: classActive }]">
    <div class="content">
      <!-- logo -->
      <img
        @click="goHome"
        class="logo"
        src="https://vuejs.org/images/logo.png"
        alt
      />
      <div class="pages_info">
        <span
          @click="toggle(idx)"
          :class="{ active: idx == checkedIdx }"
          v-for="(item, idx) in pageList"
          :key="idx"
          >{{ $t(item.nav) }}</span
        >
      </div>
      <div class="console">
        <img src="../assets/images/timg.jpg" alt />
        <router-link to="/login">{{ $t("login") }} /</router-link>
        <router-link to="/register">{{ $t("register") }}</router-link>
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ activeLanguage }}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, idx) in languageList"
              :key="idx"
              :command="item.id"
              >{{ item.info }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/EventBus.js";
export default {
  data() {
    return {
      // 页面列表
      pageList: [
        { nav: "home" },
        { nav: "page1" },
        { nav: "page2" },
        { nav: "page3" },
        { nav: "page4" }
      ],
      // 默认页面
      checkedIdx: 0,
      // 语音列表
      languageList: [
        {
          id: "zh",
          info: this.$t("zh")
        },
        {
          id: "en",
          info: this.$t("en")
        }
      ],
      // 默认中文
      activeLanguage: this.$t("zh"),
      classActive: false
    };
  },
  methods: {
    goHome() {
      if (this.checkedIdx != 0) {
        this.$router.push("/home");
        this.checkedIdx = 0;
      }
    },
    // 切换页面
    toggle(idx) {
      switch (idx) {
        case this.checkedIdx:
          break;
        case 0:
          this.$router.push("/home");
          break;
        case 1:
          this.$router.push("/page1");
          break;
        case 2:
          this.$router.push("/page2");
          break;
        case 3:
          this.$router.push("/page3");
          break;
        case 4:
          this.$router.push("/page4");
          break;

        default:
          this.$router.push("/home");
          break;
      }
      this.checkedIdx = idx;
    },
    // 下拉框选择语言
    handleCommand(command) {
      switch (command) {
        case "zh":
          this.activeLanguage = this.$t("zh");
          break;
        case "en":
          this.activeLanguage = this.$t("en");
          break;

        default:
          this.activeLanguage = this.$t("zh");
          break;
      }
      this.$i18n.locale = command;
    }
  },
  watch: {
    checkedIdx(val) {
      console.log(val);
      if (val == 0) {
        this.classActive = false;
      } else {
        this.classActive = true;
      }
    }
  },
  created() {
    EventBus.$on("switchTab", index => {
      this.checkedIdx = index;
    });
    let key = this.$route.path;
    switch (key) {
      case "/home":
        this.checkedIdx = 0;
        break;
      case "/page1":
        this.checkedIdx = 1;
        break;
      case "/page2":
        this.checkedIdx = 2;
        break;
      case "/page3":
        this.checkedIdx = 3;
        break;
      case "/page4":
        this.checkedIdx = 4;
        break;

      default:
        this.checkedIdx = 0;
        break;
    }
  }
};
import "../assets/less/index.css";
</script>
<style lang="less" scoped>
.view {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  position: absolute;
  top: 0;
  z-index: 3;
  min-width: 750px;
}
.view2 {
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 1px 3px 0 hsla(0, 0%, 80%, 0.5);
  color: #2c3e50;
  position: absolute;
  top: 0;
  z-index: 3;
  a {
    color: #2c3e50 !important;
  }
  .el-dropdown-link {
    color: #2c3e50;
  }
}
.content {
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding: 0 20px;
  .logo {
    margin-top: 20px;
    width: 100px;
    height: 40px;
    float: left;
  }
  .pages_info {
    float: left;
    span {
      display: inline-block;
      padding: 0 10px;
      cursor: pointer;
      margin-left: 20px;
    }
    .active {
      color: rgb(63, 181, 190);
    }
  }
  .console {
    float: right;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50px;
      vertical-align: middle;
      margin-right: 10px;
    }
    a {
      color: #fff;
    }
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  margin-left: 10px;
  font-size: 15px;
}
.el-icon-arrow-down {
  font-size: 14px;
}
</style>
