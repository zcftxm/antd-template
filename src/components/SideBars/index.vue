<template>
  <a-layout-sider
    class="sider"
    width="256px"
    v-model="collapsed"
    :collapsible="true"
    :trigger="null"
  >
    <page-logo class="sideLogo"/>
    <Menu :menu="menu" :collapsed="collapsed"></Menu>
  </a-layout-sider>
</template>

<script>
import Menu from "@/components/Menu";
import PageLogo from "@/components/PageLogo";
export default {
  name: "SideBar",
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    menu: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      rootSubmenuKeys: ["sub1", "sub2", "sub3"],
      openKeys: []
    };
  },
  components: { Menu, PageLogo },
  methods: {
    onSelect() {
      this.$emit("select");
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.sideLogo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  width: auto;
}
.sider {
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  z-index: 2;
}
.ant-layout-sider.sider {
  height: 100vh;
}
</style>
