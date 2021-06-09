<template>
  <a-layout-sider
    class="sider"
    width="256px"
    v-model="collapsed"
    :trigger="null"
  >
    <div class="logo"></div>
    <a-menu
      theme="dark"
      mode="inline"
      :default-selected-keys="['1']"
      @select="onSelect"
      :open-keys="openKeys"
      @openChange="onOpenChange"
    >
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="user" /><span>subnav 1</span></span>
        <a-menu-item key="1"> option1 </a-menu-item>
        <a-menu-item key="2"> option2 </a-menu-item>
        <a-menu-item key="3"> option3 </a-menu-item>
        <a-menu-item key="4"> option4 </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="user" /><span>subnav 1</span></span>
        <a-menu-item key="5"> option1 </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item key="6">
          Option 5
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
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
