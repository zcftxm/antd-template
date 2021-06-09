<template>
  <a-layout-sider
    class="sider"
    width="256px"
    v-model="collapsed"
    :collapsible="true"
    :trigger="null"
  >
    <div class="logo"></div>
    <span style="color:white">{{collapsed}}</span>
    <Menu :collapsed="collapsed"></Menu>
    <!-- <a-menu theme="dark" mode="inline" :default-selected-keys="['1']" @select="onSelect">
      <a-sub-menu>
        <span slot="title"><a-icon type="user" />subnav 1</span>
        <a-menu-item key="1">
          option1
        </a-menu-item>
        <a-menu-item key="2">
          option2
        </a-menu-item>
        <a-menu-item key="3">
          option3
        </a-menu-item>
        <a-menu-item key="4">
          option4
        </a-menu-item>
      </a-sub-menu>
    </!--> -->

  </a-layout-sider>
</template>

<script>
import Menu from '@/components/Menu';
export default {
  name: "SideBar",
  props: {
    collapsed: {
      type: Boolean,
      default: false,
    },
  },
  data(){
    return{
      rootSubmenuKeys: ['sub1', 'sub2', 'sub3'],
      openKeys: [],
    }
  },
  components: { Menu },
  methods: {
    onSelect() {
      // if() {
      this.$emit("select");
      // }
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.sider{
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
}
</style>
