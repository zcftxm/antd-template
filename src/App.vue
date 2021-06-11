<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>

<script>
import { AppDeviceEnquire } from "@/utils/mixins";
import { mapActions } from "vuex";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  name: "App",
  data() {
    return {
      locale: zhCN,
    };
  },
  mixins: [AppDeviceEnquire],
  methods: {
    ...mapActions(["getMenus"]),
    renderResize() {
      // 判断横竖屏
      let width = document.documentElement.clientWidth;
      let height = document.documentElement.clientHeight;
      if (width > height) {
        this.$store.commit("CHANGE_MENUTYPE", "sideBar");
      } else {
        this.$store.commit("CHANGE_MENUTYPE", "topMenu");
      }
      // 做页面适配
      // 注意：renderResize 方法执行时虚拟 dom 尚未渲染挂载，如果要操作 vue 实例，最好在this.$nextTick()里进行。
    },
  },
  mounted() {
    this.getMenus();
    window.addEventListener("resize", this.renderResize, false);
    // this.$store.commit("CHANGE_MENUTYPE", "sideBar");
  },
  beforeDestroy() {
    // 移除监听
    window.removeEventListener("resize", this.renderResize, false);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
