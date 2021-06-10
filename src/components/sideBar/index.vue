<template>
  <a-layout-sider
    class="sider"
    width="256px"
    v-model="collapsed"
    :collapsible="true"
    :trigger="null"
  >
    <div class="logo"></div>
    <Menu :menu="menu" :collapsed="collapsed"></Menu>

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
    menu: {
      type: Array, 
      default: function() {
        return []
      }
    }
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
      this.$emit("select");
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
  z-index: 2;
}
</style>
