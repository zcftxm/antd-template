<template>
  <a-layout style="min-height: 100vh">
    <div v-if="device == 'mobile'">
      <a-drawer
        placement="left"
        wrapClassName="drawer-sider"
        :closable="false"
        :visible="collapsed"
        @close="drawerClose"
      >
        <side-bar :menu="routes" @select="menuSelect"></side-bar>
      </a-drawer>
    </div>
    <side-bar v-else-if="menuType == 'sideBar'" :menu="routes" :collapsed="collapsed" mode="inline" :collapsible="true"></side-bar>
    <a-layout>
      <page-nav @toggle="toggleSidebar" :menu="routes" :menuType="menuType" :device="device" :collapsed="collapsed" ></page-nav>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState } from "vuex";
import PageNav from "@/components/pageNav";
import SideBar from "@/components/sideBar";
export default {
  name: "home",
  data() {
    return {
      collapsed: false
    }
  },
  async mounted() {
    // 请求示例
     let data = await this.$axios.get({
      url: "web/api/news/init"
    })
    console.log(data)
  },
  computed: {
    ...mapState({
      device: state => state.system.device,
      menuType: state => state.system.menuType,
      routes: state => state.permission.addRoutes
    }),
  },
  watch: {
    device: function (val) {
      // 监听设备变化  改变菜单收缩或放开
      if (val == "tablet") {
        this.collapsed = true;
      } else {
        this.collapsed = false;
      }
    },
  },
  methods: {
    menuSelect() {
      this.drawerClose();
    },
    toggleSidebar() {
      this.collapsed = !this.collapsed;
    },
    drawerClose() {
      this.collapsed = false;
    },
  },
  components: {
    PageNav,
    SideBar,
  },
};
</script>
<style lang="less" scoped>
.ant-layout{
  min-width:300px;
}
.ant-drawer.drawer-sider {
  /deep/.ant-drawer-body {
    padding: 0;
  }
}

</style>


